import { useState, useEffect } from "react"
import { Text, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity, Image } from "react-native"
import { productStyle } from "../styles/productStyle"
import { tags } from "../api/tags"
import { products } from "../api/products"

export default function Product(props) {
  const [selectedTag, setSelectedTag] = useState(1) // Assuming first tag has id "1"
  const [filteredProducts, setFilteredProducts] = useState(products)

  // Función para filtrar productos cuando cambia el tag seleccionado
  useEffect(() => {
    filterProductsByTag(selectedTag)
  }, [selectedTag])

  // Función para filtrar productos según el tag seleccionado
  const filterProductsByTag = (tagId) => {
    // Si el tag es "All" (id: 1), mostrar todos los productos
    if (tagId === 1) {
      setFilteredProducts(products)
      return
    }

    // Obtener el título del tag seleccionado
    const selectedTagTitle = tags.find((tag) => tag.id === tagId)?.title

    // Filtrar productos que coincidan con el tag seleccionado
    const filtered = products.filter((product) => {
      // Compara con etiqueta o categoría del producto
      // Ajusta esta lógica según la estructura de tus datos
      return product.categoria === selectedTagTitle 
    })

    setFilteredProducts(filtered)
  }

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
          {filteredProducts.length > 0 ? (
            <FlatList
              data={filteredProducts}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Detail", { item })}
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
                        <TouchableOpacity
                          style={productStyle.addButton}
                          onPress={() => {
                            // Aquí podrías implementar la lógica para añadir al carrito
                            props.navigation.navigate("Detail", { item })
                          }}
                        >
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
          ) : (
            <View style={productStyle.emptyStateContainer}>
              <Text style={productStyle.emptyStateText}>No products found for this category</Text>
              <TouchableOpacity style={productStyle.resetButton} onPress={() => setSelectedTag(1)}>
                <Text style={productStyle.resetButtonText}>Show all products</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  )
}

