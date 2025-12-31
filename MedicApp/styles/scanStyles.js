import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#032679",
    marginBottom: 20,
  },

  // ✅ PREVIEW
  preview: {
    width: "100%",
    height: 220,
    borderRadius: 24,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  previewPlaceholder: {
    width: "100%",
    height: 220,
    borderRadius: 24,
    backgroundColor: "#EAF1FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#D6E4FF",
  },

  previewText: {
    color: "#475569",
    fontSize: 15,
    fontWeight: "600",
  },

  // ✅ CAMERA + GALLERY
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  actionCard: {
    width: "47%",
    backgroundColor: "white",
    borderRadius: 22,
    paddingVertical: 22,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },

  actionIcon: {
    fontSize: 28,
    marginBottom: 6,
  },

  actionText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#032679",
  },

  // ✅ UPLOAD BUTTON
  primaryButton: {
    backgroundColor: "#0A84FF",
    borderRadius: 26,
    paddingVertical: 18,
    alignItems: "center",
    elevation: 6,
    marginTop: 14,
    shadowColor: "#0A84FF",
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },

  primaryText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  // ✅ PDF
  pdfLink: {
    textAlign: "center",
    marginTop: 20,
    color: "#0A84FF", // use primary blue so it's visible
    fontSize: 14,
    fontWeight: "600",
  },
  inputBox: {
  marginBottom: 18,
},

inputLabel: {
  fontSize: 14,
  color: "#475569",
  marginBottom: 6,
},

input: {
  backgroundColor: "white",
  borderRadius: 14,
  paddingHorizontal: 16,
  paddingVertical: 14,
  fontSize: 15,
  borderWidth: 1,
  borderColor: "#E2E8F0",
},

  secondaryButton: {
    backgroundColor: '#E6EEF8',
    borderRadius: 22,
    paddingVertical: 12,
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: '#032679',
    fontWeight: '700',
  },
});
