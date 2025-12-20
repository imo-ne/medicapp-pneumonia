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
    marginBottom: 20,
  },

  resultCard: {
    backgroundColor: "white",
    borderRadius: 22,
    padding: 24,
    marginBottom: 30,
    elevation: 4,
    alignItems: "center",
  },

  emptyText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#475569",
    marginBottom: 10,
    textAlign: "center",
  },

  emptySubText: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 20,
  },

  primaryButton: {
    backgroundColor: "#CBD5E1",
    padding: 18,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 14,
  },

  primaryButtonText: {
    color: "#475569",
    fontSize: 16,
    fontWeight: "700",
  },

  secondaryButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#0A84FF",
    padding: 18,
    borderRadius: 30,
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#0A84FF",
    fontSize: 16,
    fontWeight: "700",
  },
});
