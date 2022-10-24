import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator,} from '@react-navigation/native-stack';
import Home from './pages/home';
import Help from './pages/help';
import { Ionicons } from '@expo/vector-icons';

const Stack= createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        title:'PIP Calculator'
        ,headerTintColor:'white', headerTitleAlign:'center', headerTitleStyle:{color:'white', fontWeight:'bold'}, headerStyle:{
          backgroundColor:'#242526'
        },navigationBarColor:'#18191a',
        gestureDirection:'vertical'
      }}>
        <Stack.Screen name="Home" component={Home} options={({navigation,route})=>({headerRight:()=>{return<TouchableOpacity>
            <Ionicons name="help-circle" size={25} color="white" />
              </TouchableOpacity>}})} />
        <Stack.Screen name="Help" component={Help} />
      

      </Stack.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
