import React from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView
} from "react-native";
import { loginStyles } from "../styles/loginStyles";


export default function Registration(props) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor={"rgba(0,0,0,0.3)"} />
      
      <ImageBackground
        source={require("../images/photo-1543353071-10c8ba85a904.avif")}
        style={loginStyles.backgroundImage}
        imageStyle={loginStyles.imageStyle}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={loginStyles.overlay}>
            {/* Logo and Marketing Section */}
            <View style={loginStyles.marketingContainer}>
             
              <Text style={loginStyles.registerTitle}>CREATE ACCOUNT</Text>
            </View>
            
            {/* Form Section */}
            <View style={loginStyles.formContainer}>
              <View style={loginStyles.cajaTexto}>
                <TextInput
                  style={{ paddingHorizontal: 20 }}
                  placeholder="Full Name"
                />
              </View>
              <View style={loginStyles.cajaTexto}>
                <TextInput
                  style={{ paddingHorizontal: 20 }}
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              <View style={loginStyles.cajaTexto}>
                <TextInput
                  style={{ paddingHorizontal: 20 }}
                  placeholder="Password"
                  secureTextEntry
                />
              </View>
              <View style={loginStyles.cajaTexto}>
                <TextInput
                  style={{ paddingHorizontal: 20 }}
                  placeholder="Confirm Password"
                  secureTextEntry
                />
              </View>
              
              <View style={loginStyles.termsContainer}>
                <Text style={loginStyles.termsText}>
                  By signing up, you agree to our{" "}
                  <Text style={loginStyles.termsLink}>Terms of Service</Text> and{" "}
                  <Text style={loginStyles.termsLink}>Privacy Policy</Text>
                </Text>
              </View>
              
              <View style={loginStyles.containerBoton}>
                <TouchableOpacity style={loginStyles.estiloBoton} >
                  <Text style={loginStyles.TextoBoton}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            {/* Footer */}
            <View style={loginStyles.footerContainer}>
              <Text style={loginStyles.footerText}>Already have an account?</Text>
              <TouchableOpacity>
                <Text style={loginStyles.signupText} onPress={() => props.navigation.navigate("Login")}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
