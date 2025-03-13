

import { useState } from "react"
import { Text, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity, Image } from "react-native"
import { productStyle } from "../styles/productStyle"
import { tags } from "../api/tags"
import { products } from "../api/products"

export default function Product({ navigation }) {
  const [selectedTag, setSelectedTag] = useState("1") // Assuming first tag has id "1"

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
      <SafeAreaView style={productStyle.container}>
        <View style={productStyle.header}>
          <Text style={productStyle.headerTitle}>Delicious</Text>
          <Text style={productStyle.headerSubtitle}>Find your favorite food</Text>
        </View>

        <View style={productStyle.ContainerTags}>
          <FlatList
            data={tags}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[productStyle.boxTag, selectedTag === item.id && productStyle.boxTagSelected]}
                onPress={() => setSelectedTag(item.id)}
              >
                <Text style={[productStyle.textTag, selectedTag === item.id && productStyle.textTagSelected]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={productStyle.tagListContainer}
          />
        </View>

        <View style={productStyle.productListContainer}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Detail", { item })}
                style={productStyle.cardTouchable}
                activeOpacity={0.7}
              >
                <View style={productStyle.tarjeta}>
                  <Image source={{ uri: item.imagen }} style={productStyle.imagen} />
                  <View style={productStyle.contenido}>
                    <Text style={productStyle.nombre}>{item.nombre}</Text>
                    <View style={productStyle.etiquetaContainer}>
                      <Text style={productStyle.etiqueta}>{item.etiqueta}</Text>
                    </View>
                    <View style={productStyle.priceRow}>
                      <Text style={productStyle.precio}>${item.precio}</Text>
                      <TouchableOpacity style={productStyle.addButton}>
                        <Text style={productStyle.addButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={productStyle.productListContent}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

