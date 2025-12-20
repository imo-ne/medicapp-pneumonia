import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFF",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#032679",
    marginBottom: 20,
  },

  searchInput: {
    backgroundColor: "white",
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontSize: 15,
    marginBottom: 20,
    elevation: 3,
  },

  patientCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    elevation: 3,
  },

  patientName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#032679",
  },

  patientInfo: {
    fontSize: 13,
    marginTop: 4,
    color: "#64748B",
  },

  emptyText: {
  fontSize: 14,
  color: "#94A3B8",
  textAlign: "center",
  marginTop: 30,
},

});
