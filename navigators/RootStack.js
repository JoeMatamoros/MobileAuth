import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//Screens
import Login from '../screens/Login';
import Signup from '../screens/Singup';
import Welcome from '../screens/Welcome';
import { Colors } from '../components/styles';
const {primary, tertiary} = Colors;
const Stack = createStackNavigator();

const RootStack = ()=>{
    return(
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
             headerStyled:{backgroundColor: 'transparent'},
             headerTintColor:tertiary,
             headerTransparent: true,
             headerTitle:'',
             headerLeftContainerStyle:{paddingLeft:20}
            }}
            initialRouteName="Login"
          >
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="Signup" component={Signup}/>
              <Stack.Screen options={{headerTintColor: primary}} name="Welcome" component={Welcome}/>
           </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;