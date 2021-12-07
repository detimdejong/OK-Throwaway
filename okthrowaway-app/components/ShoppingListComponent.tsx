import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { Product } from "../types/Product";
import ProductOverview from '../components/ProductOverview';

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

interface ShoppingListComponent {
    name: string;
    products: Product[];
    setShowProducts: (v: boolean) => void;
    setProductOverview: (v: JSX.Element) => void;
}

export default function ShoppingList(props: ShoppingListComponent) {
    const { name, products, setShowProducts, setProductOverview } = props; 
    
    const onPress = React.useCallback(() => {
        setShowProducts(true);
        setProductOverview(
            <ProductOverview products={products} />
        );
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>{`${name}`}</Text>
            </TouchableOpacity>
        </View>
    );
}