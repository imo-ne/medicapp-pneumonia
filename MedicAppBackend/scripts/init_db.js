const { db, execute, query } = require('../db');
const bcrypt = require('bcrypt');

async function initDb() {
  try {
    console.log("Initializing Database...");

    // 1. Specialties Table
    await execute(`
      CREATE TABLE IF NOT EXISTS Specialties (
        Id INTEGER PRIMARY KEY AUTOINCREMENT,
        Name TEXT NOT NULL
      )
    `);

    // 2. Doctors Table
    await execute(`
      CREATE TABLE IF NOT EXISTS Doctors (
        Id INTEGER PRIMARY KEY AUTOINCREMENT,
        FirstName TEXT NOT NULL,
        LastName TEXT NOT NULL,
        Phone TEXT NOT NULL,
        Email TEXT NOT NULL UNIQUE,
        PasswordHash TEXT NOT NULL,
        SpecialtyId INTEGER,
        FOREIGN KEY(SpecialtyId) REFERENCES Specialties(Id)
      )
    `);

    // 3. Patients Table
    await execute(`
      CREATE TABLE IF NOT EXISTS Patients (
        Id INTEGER PRIMARY KEY AUTOINCREMENT,
        DoctorId INTEGER NOT NULL,
        FirstName TEXT NOT NULL,
        LastName TEXT NOT NULL,
        Age INTEGER NOT NULL,
        Gender TEXT NOT NULL,
        Phone TEXT NOT NULL,
        FOREIGN KEY(DoctorId) REFERENCES Doctors(Id)
      )
    `);

    // 4. Scans Table
    await execute(`
      CREATE TABLE IF NOT EXISTS Scans (
        Id INTEGER PRIMARY KEY AUTOINCREMENT,
        PatientId INTEGER NOT NULL,
        DoctorId INTEGER NOT NULL,
        ImagePath TEXT,
        PdfPath TEXT,
        Prediction TEXT,
        Confidence TEXT,
        Model TEXT,
        CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(PatientId) REFERENCES Patients(Id),
        FOREIGN KEY(DoctorId) REFERENCES Doctors(Id)
      )
    `);

    console.log("Tables created.");

    // Ensure Scans table has ImageHash column (for duplicate detection)
    try {
      const cols = await query("PRAGMA table_info(Scans);");
      const hasHash = cols.some(c => c.name === 'ImageHash');
      if (!hasHash) {
        console.log('Adding ImageHash column to Scans table');
        await execute("ALTER TABLE Scans ADD COLUMN ImageHash TEXT;");
      }

      // Ensure a UNIQUE index to prevent race-condition duplicates for same patient/doctor/imageHash
      try {
        await execute("CREATE UNIQUE INDEX IF NOT EXISTS idx_scans_unique_hash ON Scans (PatientId, DoctorId, ImageHash)");
      } catch (ee) {
        console.warn('Could not create unique index on Scans:', ee.message);
      }
    } catch (e) {
      console.warn('Could not verify/add ImageHash column:', e.message);
    }

    // Seed Specialties if empty
    const specialties = await query("SELECT COUNT(*) as count FROM Specialties");
    if (specialties[0].count === 0) {
      console.log("Seeding Specialties...");
      const list = ["Cardiology", "Dermatology", "Neurology", "Pediatrics", "General Practice", "Pneumology"];
      for (const name of list) {
        await execute("INSERT INTO Specialties (Name) VALUES (?)", [name]);
      }
    }

    console.log("Database initialized successfully.");
  } catch (err) {
    console.error("Error initializing DB:", err);
  } finally {
    // If the script was executed directly (node scripts/init_db.js) then close the DB.
    // When required by the server at startup we must NOT close the shared DB connection.
    if (require.main === module) {
      db.close();
    }
  }
}

// If run directly as a script, execute. When required by server, it will also run, which
// is fine, but it will avoid closing the shared DB connection.
initDb();
