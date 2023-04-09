import React from 'react';

import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { Routers } from './router';

export default function App() {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <NavigationContainer>
                <Routers />
            </NavigationContainer>
        </TouchableWithoutFeedback>
    );
}
