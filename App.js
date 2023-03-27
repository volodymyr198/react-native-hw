import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { createContext, useState } from 'react';

import useRoute from './router';

export const isAuthContext = createContext(false);

export default function App() {
    const [isAuth, setIsAuth] = useState(false);

    const toggleIsAuth = () => {
        setIsAuth(prevAuth => (prevAuth === false ? true : false));
    };

    const routing = useRoute(isAuth);

    return (
        <>
            <isAuthContext.Provider value={{ isAuth, toggleIsAuth }}>
                <StatusBar style="auto" />
                <NavigationContainer>{routing}</NavigationContainer>
            </isAuthContext.Provider>
        </>
    );
}
