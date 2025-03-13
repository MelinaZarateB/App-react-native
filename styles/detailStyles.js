import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");
const STATUSBAR_HEIGHT =
  Platform.OS === "ios" ? 44 : StatusBar.currentHeight || 0;

export const styleDetail = StyleSheet.create({
  imageContainer: {
    height: height * 0.45, // 45% de la altura de la pantalla
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  styleImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
  },
  contentContainer: {
    flex: 1,
    marginTop: height * 0.4, // Ajusta esto para controlar dónde comienza el contenido
  },
  cardContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    paddingTop: 30,
    minHeight: height * 0.7, // Asegura que la tarjeta sea lo suficientemente alta
  },
  titleStyle: {
    color: "#333",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
  },
  containerPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  tagContainer: {
    backgroundColor: "rgba(253, 142, 62, 0.1)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  tagText: {
    color: "#FD8E3E",
    fontSize: 14,
    fontWeight: "500",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: "#F8F8F8",
    padding: 16,
    borderRadius: 12,
  },
  quantityLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  containerAmount: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FD8E3E",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  textAmount: {
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: "600",
  },
  textPrice: {
    color: "#FD8E3E",
    fontSize: 22,
    fontWeight: "700",
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  textDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: "#666",
  },
  containerButton: {
    alignItems: "center",
    marginTop: 24,
  },
  cartButton: {
    backgroundColor: "#FD8E3E",
    borderRadius: 15,
    paddingVertical: 16,
    width: width * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  textButton: {
    textAlign: "center",
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  totalContainer: {
    marginBottom: 20,
  },
  totalLineTop: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginBottom: 10,
  },
  totalLineBottom:{
    height: 1,
    backgroundColor: "#EEEEEE",
    marginTop: 10,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FD8E3E",
  },
  quantityButtonDisabled: {
    backgroundColor: "#FDB78E", // Versión más clara del color principal
  },
});
