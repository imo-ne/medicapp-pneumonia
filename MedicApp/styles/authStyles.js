import { StyleSheet } from "react-native";

export default StyleSheet.create({

  containerCenter: {
    flex: 1,
    backgroundColor: "#032679",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  card: {
    width: "100%",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#032679",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    height: 52,
    backgroundColor: "#F9FAFB",
    borderRadius: 14,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  primaryButton: {
    width: "100%",
    height: 55,
    backgroundColor: "#032679",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  primaryButtonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },

  link: {
    marginTop: 15,
    fontSize: 14,
    color: "#032679",
    textAlign: "center",
    fontWeight: "500",
  },

});
