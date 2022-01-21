import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, View, Text, FlatList, Pressable, TouchableOpacity } from 'react-native';
import { post } from '../../api/make-request';
import useTheme from '../../hooks/useTheme';
import { RootTabScreenProps } from '../../types';
import { Product } from '../../types/Product';
import { getProducts, removeProductFromList } from '../../api/api-client';
import { useFocusEffect } from '@react-navigation/native';

export default function ProductInListOverview({ route, navigation }: RootTabScreenProps<'ProductInListOverview'>) {
    const [products, setProducts] = React.useState<Array<Product>>([]);
    const { listId } = route.params;
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
        }
    });

    const get = React.useCallback(async () => await getProducts(listId).then(p => setProducts(p)), [listId]);

    const addProduct = React.useCallback(() => {
        navigation.navigate("AddProductToList", { listId: listId });
    }, [navigation, listId]);

    const onDelete = React.useCallback(async (itemId) => {
        await removeProductFromList(listId, itemId, true);
        await get();
    }, [listId]);

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () =>
                <Pressable onPress={addProduct}>
                    <Ionicons name="add" size={24} color="black" />
                </Pressable>
        });
    }, [navigation]);

    React.useEffect(() => { get() }, []);

    useFocusEffect(
        React.useCallback(() => {
            get();
        }, [])
    )

    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: "100%" }}
                data={products}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <Text style={{ fontSize: 20 }}>{`${item.quantity} x ${item.name}`}</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <TouchableOpacity
                                onPress={() => onDelete(item.id)}
                            >
                                <AntDesign name="delete" size={30} color={theme.text} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
}


