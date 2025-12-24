import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#032679",
    marginBottom: 10,
  },

  infoText: {
    fontSize: 15,
    color: "#334155",
    marginBottom: 6,
  },

  scanItem: {
    backgroundColor: "#EEF2FF",
    borderRadius: 12,
    padding: 12,
  },

  scanText: {
    textAlign: "center",
    color: "#64748B",
  },

  actions: {
    marginTop: 10,
    marginBottom: 40,
    gap: 14,
  },

  primaryButton: {
    backgroundColor: "#0A84FF",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },

  primaryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },

  secondaryButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#0A84FF",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },

  secondaryButtonText: {
    color: "#0A84FF",
    fontSize: 16,
    fontWeight: "700",
  },

  pdfButton: {
    backgroundColor: "#032679",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },

  pdfText: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },

  scanPreview: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginTop: 12,
  },

  emptyScanText: {
    textAlign: "center",
    color: "#94A3B8",
    marginTop: 10,
  },
    input: {
    backgroundColor: "#F1F5F9",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#0F172A",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  centerContent: {
  flexGrow: 1,
  justifyContent: "center",
},


});
