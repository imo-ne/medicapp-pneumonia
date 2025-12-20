import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFF",
  },

  /* 🔵 HEADER */
  header: {
    backgroundColor: "#032679",
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  greeting: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
  },

  subGreeting: {
    color: "#CBD5F5",
    fontSize: 14,
    marginBottom: 20,
  },

  searchInput: {
    backgroundColor: "white",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
  },

  /* ⚪ BODY */
  body: {
    padding: 20,
  },

  /* ✅ WELCOME CARD */
  welcomeCard: {
    backgroundColor: "#EEF2FF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  welcomeTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#032679",
  },

  welcomeText: {
    fontSize: 14,
    color: "#475569",
    marginTop: 6,
    lineHeight: 20,
  },

  /* ✅ STATS */
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  statCard: {
    width: "31%",
    backgroundColor: "white",
    borderRadius: 18,
    paddingVertical: 20,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  statNumber: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#032679",
  },

  statLabel: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 5,
  },

  /* ✅ PREVIEW TITLES */
  previewTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    marginTop: 24,
    color: "#0F172A",
  },

  /* ✅ HORIZONTAL LIST */
  previewList: {
    paddingVertical: 8,
  },

  previewCard: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 16,
    marginRight: 14,
    width: 160,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  previewName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#032679",
    marginBottom: 4,
  },

  previewInfo: {
    fontSize: 13,
    marginTop: 4,
    color: "#64748B",
  },

  /* ✅ EMPTY STATE (THIS FIXES THE UGLY LOOK 😤✅) */
  emptyBox: {
    backgroundColor: "#EEF2FF",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  emptyText: {
    fontSize: 14,
    color: "#94A3B8",
    textAlign: "center",
  },
});
