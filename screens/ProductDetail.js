import {
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { styleDetail } from "../styles/detailStyles";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons"; // Si no usas Expo, puedes importar de react-native-vector-icons

export default function ProductDetail({ route, navigation }) {
  const { item } = route.params; // Asumiendo que pasamos el item completo desde la pantalla anterior
  const [amount, setAmount] = useState(0);

  const [total, setTotal] = useState(0);

  const alert = () => {
    Alert.alert("Success", "The product has been added");
  };
  const descAmount = () => {
    if (amount > 0) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      setTotal(newAmount * parseFloat(item.precio));
    }
  };
  const addAmount = () => {
    setAmount(amount + 1);
    const price = item.precio + total;
    setTotal(price);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />

      {/* Imagen de fondo que cubre toda la parte superior incluyendo el status bar */}
      <View style={styleDetail.imageContainer}>
        <Image source={{ uri: item.imagen }} style={styleDetail.styleImage} />

        {/* Botón de regreso con área segura para iOS */}
        <SafeAreaView style={styleDetail.headerContainer}>
          <TouchableOpacity
            style={styleDetail.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </SafeAreaView>
      </View>

      {/* Contenido principal */}
      <ScrollView
        style={styleDetail.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styleDetail.cardContainer}>
          <Text style={styleDetail.titleStyle}>{item.nombre}</Text>

          <View style={styleDetail.containerPrice}>
            <View style={styleDetail.tagContainer}>
              <Text style={styleDetail.tagText}>{item.etiqueta}</Text>
            </View>
            <Text style={styleDetail.textPrice}>${item.precio}</Text>
          </View>

          <View style={styleDetail.quantityContainer}>
            <Text style={styleDetail.quantityLabel}>Amount</Text>
            <View style={styleDetail.containerAmount}>
              <TouchableOpacity
                style={[
                  styleDetail.quantityButton,
                  amount === 0 ? styleDetail.quantityButtonDisabled : null,
                ]}
                onPress={descAmount}
                disabled={amount === 0}
              >
                <Text style={styleDetail.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styleDetail.textAmount}>{amount}</Text>
              <TouchableOpacity
                style={styleDetail.quantityButton}
                onPress={addAmount}
              >
                <Text style={styleDetail.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styleDetail.totalContainer}>
            <View style={styleDetail.totalRow}>
              <Text style={styleDetail.totalLabel}>Total:</Text>
              <Text style={styleDetail.totalAmount}>${total.toFixed(2)}</Text>
            </View>
            <View style={styleDetail.totalLineBottom} />
          </View>
          <Text style={styleDetail.descriptionTitle}>Description</Text>
          <Text style={styleDetail.textDescription}>{item.descripcion}</Text>

          <View style={styleDetail.containerButton}>
            <TouchableOpacity style={styleDetail.cartButton} onPress={alert}>
              <Text style={styleDetail.textButton}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
