import * as React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { getShoppingLists } from '../../api/api-client';
import colors from '../../constants/colors';
import useTheme from '../../hooks/useTheme';
import { RootTabScreenProps } from '../../types';
import { Product } from '../../types/Product';
import { ShoppingList } from '../../types/ShoppingList';

const previewData: ShoppingList[] = [
  {
    name: "List 1",
    id: 1,
    products: [
      {
        name: "Product 1",
        quantity: 4
      },      
      {
        name: "Product 2",
        quantity: 4
      },
      {
        name: "Product 3",
        quantity: 4
      },
      {
        name: "Product 4",
        quantity: 4
      },
      {
        name: "Product 5",
        quantity: 4
      },
      {
        name: "Product 6",
        quantity: 4
      },
      {
        name: "Product 7",
        quantity: 4
      },
      {
        name: "Product 8",
        quantity: 4
      },
      {
        name: "Product 9",
        quantity: 4
      }
    ]
  },
  {
    name: "List 2",
    id: 2
  }
]

export default function Overview({ navigation }: RootTabScreenProps<'Boodschappenlijstje'>) {
  const [shoppingLists, setShoppingLists] = React.useState<Array<ShoppingList> | undefined>();
  const theme = useTheme();

  const onPress = React.useCallback((id: number, products: Product[]) => {
    navigation.navigate('ProductInListOverview', { listId: id, products: products });
  }, []);

  const getLists = React.useCallback(async () => {
    await getShoppingLists(1).then(res => setShoppingLists(res));
  }, []);

  React.useEffect(() => {
    // getLists();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: theme.background,
      alignItems: "center"
    },
    itemContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
      width: '100%',
      height: 70,
      borderRadius: 20,
      borderWidth: 0.5,
      borderColor: colors.black
    },
    text: {
      fontSize: 25
    }
  });

  return (
    <View style={styles.container}>
      <FlatList
        style={{width: "90%"}}
        data={previewData}
        renderItem={({ item }) =>
          <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(item.id, item.products ?? [])}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        }
        keyExtractor={(item) => item.name}
        
      />
    </View>
  );
}