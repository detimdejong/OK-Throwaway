import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, View, Text, FlatList, Pressable, TextInput } from 'react-native';
import { getAllProducts } from '../../api/api-client';
import useTheme from '../../hooks/useTheme';
import { RootTabScreenProps } from '../../types';
import { Product } from '../../types/Product';

export default function ProductInListOverview({ route, navigation }: RootTabScreenProps<'ProductInListOverview'>) {
    const [products, setProducts] = React.useState<Array<Product> | undefined>();
    const [input, setInput] = React.useState<string | undefined>();
    const theme = useTheme();


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: "100%",
            alignItems: 'center',
            justifyContent: 'center',
        },
        item: {
            flex: 1,
            flexDirection: "row",
            height: 50,
            width: "100%",
            borderColor: theme.border,
            borderBottomWidth: 0.5,
            marginTop: 10,
            paddingTop: 5,
            paddingLeft: 15,
            alignItems: "flex-start",
            justifyContent: "flex-start"
        },

        inputField: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
            padding: 10,
            borderWidth: 0.5,
            borderColor: theme.border,
            borderRadius: 10,
        }
    });

    const get = React.useCallback(async () => {
        await getAllProducts().then(p => setProducts(p));
    }, []);

    React.useEffect(() => {
        get();
    }, []);

    React.useEffect(() => console.log(products), [products]);

    React.useEffect(() => {
        if (input && products)
            setProducts(products
                .filter((p) => p.name.toLowerCase().includes(input.toLowerCase()))
                .sort((a, b) => a.name > b.name ? 1 : -1)
            );
        else
            setProducts(undefined);
    }, [input]);
    return (
        <View style={styles.container}>
            <TextInput onChangeText={setInput} placeholder='Product' style = {styles.inputField }/>
            <FlatList
                style={{ width: "100%" }}
                data={products}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View style={{flex: 1, flexDirection: "row"}}>
                            <Text style={{ fontSize: 20 }}>{`${item.name}`}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
}


