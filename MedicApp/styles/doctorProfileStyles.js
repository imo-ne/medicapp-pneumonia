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

  card: {
    backgroundColor: "white",
    borderRadius: 22,
    padding: 20,
    elevation: 4,
    gap: 14,
  },

  input: {
    backgroundColor: "#F1F5F9",
    borderRadius: 14,
    padding: 14,
    fontSize: 15,
  },

  primaryButton: {
    backgroundColor: "#0A84FF",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },

  primaryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
