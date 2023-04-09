import React from 'react';
import { SimpleLineIcons, Feather } from '@expo/vector-icons';

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

import CreatePostsScreen from './CreatePostsScreen';
import PostsScreen from './PostsScreen';
import ProfileScreen from './ProfileScreen';

export default function Home({ navigation }) {
    return (
        <Tabs.Navigator
            initialRouteName="Login"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 80,
                },
            }}
        >
            <Tabs.Screen
                name="Posts"
                component={PostsScreen}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <SimpleLineIcons
                            name="grid"
                            size={size}
                            color={color}
                        />
                    ),
                    title: 'Публикации',
                    headerTitleAlign: 'center',
                    headerRightContainerStyle: { paddingRight: 20 },
                    headerRight: () => (
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Feather name="log-out" size={24} color="gray" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tabs.Screen
                name="CreatePosts"
                component={CreatePostsScreen}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <TouchableOpacity
                            style={styles.addButton}
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('CreatePosts')}
                        >
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                    ),

                    title: 'Создать публикацию',
                    headerTitleAlign: 'center',
                }}
            />
            <Tabs.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: '#FF6C00',
        height: 40,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    addButtonText: {
        color: '#ffffff',
        fontSize: 28,
    },
});
