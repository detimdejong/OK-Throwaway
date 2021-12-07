import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getShoppingLists } from '../api/api-client';
import EditScreenInfo from '../components/EditScreenInfo';
import ShoppingListComponent from '../components/ShoppingListComponent';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { ShoppingList } from '../types/ShoppingList';

export default function ListOverview({ navigation }: RootTabScreenProps<'Boodschappenlijstje'>) {
  const [shoppingLists, setShoppingLists] = React.useState<Array<JSX.Element> | undefined>();

  const getProducts = React.useCallback(async () => {
    await getShoppingLists(1).then(res => { 
       setShoppingLists(res.map((l) => (
        <ShoppingListComponent name={l.name} />
       )))
    });
  }, []);

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      {shoppingLists}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
