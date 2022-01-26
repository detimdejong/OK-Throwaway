import * as React from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName, Pressable } from 'react-native';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import useTheme from '../hooks/useTheme';
import ProductOverview from "../screens/products/ProductsInListOverview";
import ListOverview from '../screens/shoppinglists/Overview';
import AddAlert from '../screens/shoppinglists/AddAlert';
import { Provider } from "react-native-paper";
import { colorScheme } from '../constants/colors';
import AddProductToList from '../screens/products/AddProductToList';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="ProductInListOverview" component={ProductOverview} />
        <Stack.Screen name="AddProductToList" component={AddProductToList} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const [visible, setVisible] = React.useState<boolean>(false);
  const theme = useTheme();

  return (
    <Provider>
      <BottomTab.Navigator
        initialRouteName="Boodschappenlijstje"
        screenOptions={{
          tabBarActiveTintColor: theme.iconFocused,
        }}>
        <BottomTab.Screen
          name="Boodschappenlijstje"
          component={(props) => <ListOverview {...props} reload={visible} />}
          options={({ navigation }: RootTabScreenProps<'Boodschappenlijstje'>) => ({
            title: 'Boodschappenlijstjes',
            tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
            headerRight: () => (
              <Pressable
                onPress={() => setVisible(true)}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}>
                <FontAwesome
                  name="cart-plus"
                  size={25}
                  color={theme.text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
          })}
        />
      </BottomTab.Navigator>

      <AddAlert visible={visible} setVisible={setVisible} />
        
    </Provider>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
}) {
  return <Feather size={30} style={{ marginBottom: -3 }} {...props} />;
}
