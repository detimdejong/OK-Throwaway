import * as React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { colors } from 'react-native-elements';
import { getShoppingLists } from '../../api/api-client';
import useTheme from '../../hooks/useTheme';
import { RootTabScreenProps } from '../../types';
import { Product } from '../../types/Product';
import { ShoppingList } from '../../types/ShoppingList';

const previewData: ShoppingList[] = [
  {
    name: "List 1",
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
    name: "List 2"
  }
]

export default function Overview({ navigation }: RootTabScreenProps<'Boodschappenlijstje'>) {
  const [shoppingLists, setShoppingLists] = React.useState<Array<ShoppingList> | undefined>();
  const [showProducts, setShowProducts] = React.useState<boolean>();
  const [productOverview, setProductOverview] = React.useState<JSX.Element | undefined>();
  const theme = useTheme();

  const onPress = React.useCallback((id: number, products: Product[]) => {
    navigation.navigate('ProductOverview', { listId: id, products: products});
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
      backgroundColor: theme.background
    },
    itemContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
      width: '100%',
      height: 100,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.black,
      backgroundColor: theme.card
    },
    text: {
      fontSize: 25
    }
  });

  return (
    <View style={styles.container}>
      <FlatList
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