import { StyleSheet, Dimensions } from "react-native"
const { width, height } = Dimensions.get("window")

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  marketingContainer: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 20,
  },
  registerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 2,
    marginTop: 15,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  appTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 3,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  tagline: {
    fontSize: 18,
    color: "white",
    marginTop: 5,
    marginBottom: 20,
    fontStyle: "italic",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  badge: {
    backgroundColor: "#FD8E3E",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 10,
    transform: [{ rotate: "-5deg" }],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  badgeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  termsContainer: {
    width: 300,
    marginTop: 10,
  },
  termsText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  termsLink: {
    color: "#FD8E3E",
    fontWeight: "bold",
  },
  footerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  footerText: {
    color: "white",
    fontSize: 14,
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  signupText: {
    color: "#FD8E3E",
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  imagenPerfil1: {
    borderRadius: 100,
    borderColor: "white",
    width: 180,
    height: 169,
    marginVertical: 20,
  },
  cajaTexto: {
    paddingVertical: 20,
    backgroundColor: "#EEEEEE",
    borderRadius: 15,
    marginVertical: 10,
    width: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  containerBoton: {
    alignItems: "center",
  },
  estiloBoton: {
    backgroundColor: "#FD8E3E",
    borderRadius: 15,
    paddingVertical: 20,
    width: 150,
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  TextoBoton: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  backgroundImage: {
    width: width,
    height: height,
    flex: 1,
  },
  imageStyle: {
    opacity: 0.85,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Darkened for better text visibility
    padding: 20,
    justifyContent: "space-between",
  },
})


