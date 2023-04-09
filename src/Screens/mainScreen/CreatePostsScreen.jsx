import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
} from 'react-native';

import { MaterialIcons, Feather } from '@expo/vector-icons';

import { Camera } from 'expo-camera';
import * as Location from 'expo-location';

export default function CreatePostsScreen({ navigation }) {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [title, setTitle] = useState('');
    const [inputLocation, setInputLocation] = useState('');
    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            const coords = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };
            setLocation(coords);
        })();
    }, []);

    const takePhoto = async () => {
        const photo = await camera.takePictureAsync();
        const locationPhoto = Location.reverseGeocodeAsync(location);
        setInputLocation(locationPhoto);
        setPhoto(photo.uri);
    };

    const createPosts = () => {
        if (!title || !inputLocation || !photo) {
            alert('Enter all data please!!!');
            return;
        }
        navigation.navigate('DefaultScreen', { photo, title, inputLocation });
    };

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
            >
                <View style={styles.cameraBox}>
                    <Camera style={styles.camera} ref={setCamera}>
                        {photo && (
                            <View style={styles.imageBox}>
                                <Image
                                    source={{ uri: photo }}
                                    style={{ height: '100%', width: '100%' }}
                                />
                            </View>
                        )}
                    </Camera>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.cameraButton}
                        onPress={takePhoto}
                    >
                        <MaterialIcons
                            name="photo-camera"
                            size={24}
                            color="#BDBDBD"
                        />
                    </TouchableOpacity>
                    <Text style={styles.text}>Загрузите фото</Text>
                </View>

                <TextInput
                    placeholder="Название..."
                    value={title}
                    onChangeText={value => setTitle(value)}
                    style={styles.input}
                    onFocus={() => setIsShowKeyboard(true)}
                />

                <View style={styles.inputBox}>
                    <Feather
                        name="map-pin"
                        size={24}
                        color="#BDBDBD"
                        style={styles.imageLocation}
                    />
                    <TextInput
                        placeholder="Местность..."
                        value={inputLocation}
                        onChangeText={value => setInputLocation(value)}
                        onFocus={() => setIsShowKeyboard(true)}
                    />
                </View>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={createPosts}
                >
                    <Text style={styles.buttonText}>Опубликовать</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 20,
        backgroundColor: '#FFFFFF',
    },

    cameraBox: {
        marginBottom: 20,
    },

    camera: {
        height: 240,
    },

    imageBox: {
        height: '100%',
        width: '100%',
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderStyle: 'solid',
        borderRadius: 8,
        overflow: 'hidden',
    },

    cameraButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        top: 85,
        left: 155,
    },

    text: {
        marginTop: 8,
        fontSize: 16,
        color: '#BDBDBD',
    },

    input: {
        paddingBottom: 15,
        marginBottom: 16,
        color: '#BDBDBD',
        borderBottomWidth: 1,
        borderColor: '#E8E8E8',
    },

    inputBox: {
        position: 'relative',
        paddingBottom: 15,
        marginBottom: 32,
        paddingLeft: 28,
        width: '100%',
        color: '#BDBDBD',
        borderBottomWidth: 1,
        borderColor: '#E8E8E8',
    },

    imageLocation: {
        position: 'absolute',
    },

    button: {
        width: '100%',
        paddingVertical: 16,
        marginTop: 20,
        marginBottom: 16,
        alignItems: 'center',
        backgroundColor: '#FF6C00',
        borderRadius: 100,
    },

    buttonText: {
        color: '#FFFFFF',
    },
});
