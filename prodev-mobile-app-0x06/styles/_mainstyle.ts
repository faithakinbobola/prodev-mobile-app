import { StyleSheet } from "react-native";

// const COLORS = {
//     white: "#fff",
// // };

// const SPACING = {
//     small: 10,
//     medium: 20,
//     large: 40,
// };

// const FONT_SIZE = {
//     small: 18,
//     medium: 24,
//     large: 40,
// };

// const BORDER_RADIUS = {
//     large: 36,
// };

// const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  searchGroup: {
    padding: 16,
    backgroundColor: "white",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 8,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: "#333",
  },
  searchControl: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: "#000",
    borderRadius: 8,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  filterWrapper: {
    height: 72,
    backgroundColor: "white",
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  filterContainer: {
    alignItems: "center",
    marginRight: 16,
  },
  filterImage: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  showMoreButton: {
    backgroundColor: "#000",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };