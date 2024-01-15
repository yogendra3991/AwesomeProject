import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './Screens/Dashboard';
import Saction from './Screens/Saction'
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator  initialRouteName='Dashboard'>
      <Stack.Screen name="Dashboard" component={Dashboard}  />
      <Stack.Screen name="Saction" component={Saction}  />

    </Stack.Navigator>
    </NavigationContainer>

  );
}