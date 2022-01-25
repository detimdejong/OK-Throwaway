import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { deleteList, getShoppingLists, removeProductFromList } from '../../api/api-client';
import colors from '../../constants/colors';
import useTheme from '../../hooks/useTheme';
import { RootTabScreenProps } from '../../types';
import { Product } from '../../types/Product';
import { ShoppingList } from '../../types/ShoppingList';

interface Props extends RootTabScreenProps<'Boodschappenlijstje'> {
  reload: boolean;
}

export default function Overview({ navigation, reload }: Props) {
  const [shoppingLists, setShoppingLists] = React.useState<Array<ShoppingList> | undefined>();
  const theme = useTheme();

  const onPress = React.useCallback((id: number) => {
    navigation.navigate('ProductInListOverview', { listId: id });
  }, []);

  const getLists = React.useCallback(async () => {
    await getShoppingLists(1).then(res => setShoppingLists(res));
  }, []);

  const onDelete = React.useCallback(async (listId) => {
    await deleteList(listId);
    await getLists();
}, []);

  React.useEffect(() => {
    getLists();
  }, [navigation, reload]);

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
        data={shoppingLists}
        renderItem={({ item }) =>
          <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(item.id)}>
            <Text style={styles.text}>{item.name}</Text>
            <TouchableOpacity
                                onPress={() => onDelete(item.id)}
                            >
                                <AntDesign name="delete" size={30} color={theme.text} />
                            </TouchableOpacity>
          </TouchableOpacity>
        }
        keyExtractor={(item) => item.name}
        
      />
    </View>
  );
}