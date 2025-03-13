import React from "react";
import { Text, View, SafeAreaView, StatusBar } from "react-native";

export default function ProductDetail() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'blue'}}>
        <StatusBar 
        barStyle='dark-content'
        translucent={true}
        backgroundColor='transparent'
        />


    </SafeAreaView>
  );
}
