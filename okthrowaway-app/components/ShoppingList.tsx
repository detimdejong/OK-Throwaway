import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

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



interface ShoppingListProps {
    name: string;
}

export default function ShoppingList(props: ShoppingListProps) {
    const { name } = props; 

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`${name}`}</Text>
        </View>
    );
}