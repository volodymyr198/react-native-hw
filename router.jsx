import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

import Home from './src/Screens/mainScreen/Home';
import RegistrationScreen from './src/Screens/auth/RegistrationScreen';
import LoginScreen from './src/Screens/auth/LoginScreen';

export const Routers = () => {
    return (
        <MainStack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <MainStack.Screen
                name="Registration"
                component={RegistrationScreen}
            />
            <MainStack.Screen name="Login" component={LoginScreen} />
            <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
    );
};
