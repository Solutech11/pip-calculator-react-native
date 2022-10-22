import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/home';
import { Ionicons } from '@expo/vector-icons';

const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        title:'PIP Calculator'
        ,headerTintColor:'red', headerTitleAlign:'center', headerTitleStyle:{color:'white', fontWeight:'bold'}, headerStyle:{
          backgroundColor:'#242526'
        },
      }}>
        <Stack.Screen name="Home" component={Home} options={{headerRight:Button,navigationBarColor:'#18191a'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Button() {
  return ( <TouchableOpacity>
<Ionicons name="help-circle" size={28} color="white" />
  </TouchableOpacity> );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
