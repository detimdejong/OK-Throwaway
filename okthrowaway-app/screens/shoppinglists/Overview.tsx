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
  edit: boolean;
}

export default function Overview({ navigation, reload, edit }: Props) {
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
      borderColor: theme.border
    },
    text: {
      fontSize: 25,
      textAlign: 'center',
      flex: 0.9,
    }
  });

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "90%" }}
        data={shoppingLists}
        renderItem={({ item }) =>
          <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(item.id)}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>{item.name}</Text>
              {edit &&
                <TouchableOpacity
                  onPress={() => onDelete(item.id)}
                >
                  <AntDesign name="delete" size={30} color={theme.text} />
                </TouchableOpacity>
              }
            </View>
          </TouchableOpacity>
        }
        keyExtractor={(item, index) => `${item.name}_${index}`}

      />
    </View>
  );
}