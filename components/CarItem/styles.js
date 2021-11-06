import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
  },
  header: {
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  batterySection: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  batteryText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
  },
  batteryImage: {
    height: 26,
    width: 70,
    resizeMode: "contain",
  },
  status: {
    justifyContent: "center",
    alignItems: "center",
  },
  statusHeading: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 180,
  },
  controlsButton: {
    borderWidth: 1,
    borderColor: "white",
    padding: 18,
    borderRadius: 50,
    marginLeft: 25,
  },
  scrollView: {
    marginBottom: 50,
  },
});

export default styles;
