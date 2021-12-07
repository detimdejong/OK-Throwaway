import * as React from 'react';
import { StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { getShoppingLists } from '../api/api-client';
import EditScreenInfo from '../components/EditScreenInfo';
import ProductOverview from '../components/ProductOverview';
import ShoppingListComponent from '../components/ShoppingListComponent';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import { ShoppingList } from '../types/ShoppingList';

export default function ListOverview({ navigation }: RootTabScreenProps<'Boodschappenlijstje'>) {
  const [shoppingLists, setShoppingLists] = React.useState<Array<JSX.Element> | undefined>();
  const [showProducts, setShowProducts] = React.useState<boolean>();
  const [productOverview, setProductOverview] = React.useState<JSX.Element | undefined>();


  const getLists = React.useCallback(async () => {
    await getShoppingLists(1).then(res => { 
        console.log(res);
        setShoppingLists(res.map((l) => (
          <ShoppingListComponent 
            name={l.name} 
            products={l.products ?? []} 
            setShowProducts={setShowProducts} 
            setProductOverview={setProductOverview}
          />
        )));
    });
  }, []);

  React.useEffect(() => {
    getLists();
  }, []);

  return (
    <View style={styles.container}>
        {showProducts ? productOverview : shoppingLists}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.bluegrey300
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});