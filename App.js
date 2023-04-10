import React from 'react';
import { Provider } from 'react-redux';

import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Routers } from './router';
import { store } from './redux/store';

export default function App() {
    return (
        <Provider store={{ store }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <NavigationContainer>
                    <Routers />
                </NavigationContainer>
            </TouchableWithoutFeedback>
        </Provider>
    );
}
