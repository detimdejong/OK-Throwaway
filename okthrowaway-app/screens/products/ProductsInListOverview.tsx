import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { RootTabScreenProps } from '../../types';

export default function ProductInListOverview({ route }: RootTabScreenProps<'ProductInListOverview'>) {
    const { products } = route.params;
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

    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: "100%" }}
                data={products}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View style={{flex: 1, flexDirection: "row"}}>
                            <Text style={{ fontSize: 20 }}>{`${item.quantity} x ${item.name}`}</Text>
                        </View>
                        <View style={{flex: 0.2}}>
                            <AntDesign name="delete" size={30} color={theme.text} />
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
}


