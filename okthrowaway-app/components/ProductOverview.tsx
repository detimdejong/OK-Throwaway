import React from "react";
import { View, Text, StyleSheet, FlatList, ListRenderItem, ListRenderItemInfo } from "react-native";
import Colors from "../constants/Colors";
import { Product } from "../types/Product";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        marginTop: 15,
        borderStyle: "solid",
        width: '75%',
        height: '10%',
        borderWidth: 1,
        borderColor: Colors.black
    },
    text: {
        fontSize: 50
    }
  });

interface ProductComponent {
    products: Product[];
}

export default function ProductOverview(props: ProductComponent) {
    const { products } = props; 

    return (
        <FlatList<Product>
            data={products}   
            renderItem={({item}) => (
                <View style={styles.container}>
                    <Text style={styles.text}>{`${item.name} ${item.quantity ?? 0}`}</Text>
                </View>
            )} 
        />
    );
}