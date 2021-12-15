import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { RootTabScreenProps } from '../../types';
import { Product } from '../../types/Product';

export default function Overview({ route }: RootTabScreenProps<'ProductOverview'>) {
    const { products } = route.params;
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: "100%",
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        item: {
            height: 100,
            width: "100%",
            backgroundColor: theme.card,
            borderColor: theme.border,
            borderWidth: 1,
            borderRadius: 20,
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center"
        }
    });

    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: "100%" }}
                data={products}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
}


