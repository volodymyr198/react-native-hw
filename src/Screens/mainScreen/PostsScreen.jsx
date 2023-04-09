import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const NestedScreen = createStackNavigator();
import DefaultScreenPosts from '../PostsScreens/DefaultScreenPosts';
import CommentsScreen from '../PostsScreens/CommentsScreen';
import MapScreen from '../PostsScreens/MapScreen';

export default function PostsScreen() {
    return (
        <NestedScreen.Navigator
            initialRouteName="DefaultScreen"
            screenOptions={{ headerShown: false }}
        >
            <NestedScreen.Screen
                name="DefaultScreen"
                component={DefaultScreenPosts}
            />
            <NestedScreen.Screen name="Comments" component={CommentsScreen} />
            <NestedScreen.Screen name="Map" component={MapScreen} />
        </NestedScreen.Navigator>
    );
}
