import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#032679",
    marginBottom: 10,
  },

  subtitleBox: {
    backgroundColor: "#EEF2FF",
    borderRadius: 14,
    padding: 10,
    marginBottom: 20,
  },

  subtitle: {
    color: "#334155",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },

  emptyBox: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    elevation: 3,
  },

  emptyText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#475569",
    marginBottom: 6,
  },

  emptySubText: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
  },

  scanCard: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },

  scanTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#032679",
    marginBottom: 4,
  },

  scanDate: {
    fontSize: 13,
    color: "#64748B",
  },

  scanImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginTop: 8,
  },

  scanInfo: {
    marginTop: 8,
    fontSize: 14,
    color: "#334155",
  },

  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#032679",
    borderRadius: 8,
  },

  smallButtonText: {
    color: "white",
    fontWeight: "700",
  },
});
