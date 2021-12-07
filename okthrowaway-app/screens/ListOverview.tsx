import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import EditScreenInfo from '../components/EditScreenInfo';
import ShoppingList from '../components/ShoppingList';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ListOverview({ navigation }: RootTabScreenProps<'Boodschappenlijstje'>) {
  return (
    <View style={styles.container}>
      <ShoppingList name="Albert Heijn" />
      <ShoppingList name="Lidl" />
      <ShoppingList name="Jumbo" />
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
