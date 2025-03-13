import {
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import { loginStyles } from "../styles/loginStyles";

export default function Login(props) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" translucent />
      <ImageBackground
        source={require("../images/photo-1543353071-10c8ba85a904.avif")}
        style={loginStyles.backgroundImage}
        imageStyle={loginStyles.imageStyle}
      >
        <View style={loginStyles.overlay}>
          {/* Logo and Marketing Section */}
          <View style={loginStyles.marketingContainer}>
            <Image
              style={loginStyles.logo}
              // If you don't have a logo image, you can remove this Image component
            />
            <Text style={loginStyles.appTitle}>DELICIOUS</Text>
            <Text style={loginStyles.tagline}>Discover amazing flavors</Text>
            <View style={loginStyles.badge}>
              <Text style={loginStyles.badgeText}>PREMIUM RECIPES</Text>
            </View>
          </View>

          {/* Form Section */}
          <View style={loginStyles.formContainer}>
            <View style={loginStyles.cajaTexto}>
              <TextInput
                style={{ paddingHorizontal: 20 }}
                placeholder="Email"
              />
            </View>
            <View style={loginStyles.cajaTexto}>
              <TextInput
                style={{ paddingHorizontal: 20 }}
                placeholder="Password"
                secureTextEntry
              />
            </View>
            <View style={loginStyles.containerBoton}>
              <TouchableOpacity
                style={loginStyles.estiloBoton}
                onPress={() => props.navigation.navigate("Product")}
              >
                <Text style={loginStyles.TextoBoton}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer Marketing */}
          <View style={loginStyles.footerContainer}>
            <Text style={loginStyles.footerText}>
              Join thousands of food lovers today
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignUp")}
            >
              <Text style={loginStyles.signupText}>
                Don't have an account? Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
