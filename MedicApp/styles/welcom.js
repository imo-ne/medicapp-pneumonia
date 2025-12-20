import { StyleSheet } from "react-native";

export default StyleSheet.create({

  // =========================
  // FULL BLUE BACKGROUND
  // =========================

  welcomeContainer: {
    flex: 1,
    backgroundColor: "#032679",
    alignItems: "center",
    paddingTop: 180,   // ✅ perfect top spacing
    paddingBottom: 40,
  },

  // =========================
  // BIG WHITE ICON (BALANCED SIZE)
  // =========================

  welcomeIconBig: {
    width: 200,       // ✅ balanced size
    height: 200,      // ✅ balanced size
    tintColor: "white",
    marginVertical: 25,
    resizeMode: "contain",
  },

  // =========================
  // BIG WELCOME TEXT
  // =========================

  welcomeTitle: {
    fontSize: 48,     // ✅ premium size for mobile
    fontWeight: "bold",
    color: "#E7F1FF",
    marginBottom: 10,
  },

  welcomeSubtitle: {
    fontSize: 22,
    color: "#DCE9FF",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 30,
  },

  // =========================
  // BOTTOM BUTTON AREA
  // =========================

  bottomButtons: {
    position: "absolute",
    bottom: 60,     // ✅ perfect bottom spacing
    width: "100%",
    alignItems: "center",
    gap: 16,
  },

  welcomeButton: {
    width: "85%",
    height: 55,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },

  welcomeButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#032679",
  },

});
