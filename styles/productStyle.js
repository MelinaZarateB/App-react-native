import { StyleSheet, Dimensions } from "react-native"

const { width } = Dimensions.get("window")
const cardWidth = width - 40 // 20px padding on each side

export const productStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FD8E3E",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  ContainerTags: {
    marginTop: 15,
  },
  tagListContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  boxTag: {
    backgroundColor: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#FD8E3E",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  boxTagSelected: {
    backgroundColor: "#FD8E3E",
  },
  textTag: {
    color: "#FD8E3E",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
  },
  textTagSelected: {
    color: "white",
  },
  productListContainer: {
    flex: 1,
    marginTop: 10,
  },
  productListContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cardTouchable: {
    marginBottom: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 6,
  },
  tarjeta: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    overflow: "hidden",
  },
  imagen: {
    width: 120,
    height: 120,
    resizeMode: "cover",
  },
  contenido: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  etiquetaContainer: {
    backgroundColor: "rgba(253, 142, 62, 0.1)",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  etiqueta: {
    fontSize: 12,
    color: "#FD8E3E",
    fontWeight: "500",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  precio: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FD8E3E",
  },
  addButton: {
    backgroundColor: "#FD8E3E",
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 22,
  },
   // Nuevos estilos para el estado vacío
   emptyStateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 50,
  },
  emptyStateText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: "#FD8E3E",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  resetButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
})

