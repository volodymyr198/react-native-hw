import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Fontisto, SimpleLineIcons, Feather } from '@expo/vector-icons';

export default function Post({
    image,
    text,
    comments = '0',
    likes = '0',
    location,
    navigation,
}) {
    const [countLikes, setCountLikes] = useState(likes);
    const addLikes = () => {
        setCountLikes(prevState => Number(prevState) + 1);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image} />
            <Text style={styles.title}>{text}</Text>
            <View style={styles.boxInfo}>
                <View style={styles.boxLikes}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Comments')}
                    >
                        <Fontisto name="comment" size={24} color="#FF6C00" />
                        <Text style={styles.text}>{comments}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={addLikes}>
                        <SimpleLineIcons
                            name="like"
                            size={24}
                            color="#FF6C00"
                        />
                        <Text style={styles.text}>{countLikes}</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Map')}
                >
                    <Feather name="map-pin" size={24} color="#BDBDBD" />
                    <Text style={styles.textLocation}>{location}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#FFFFFF',
        paddingBottom: 32,
    },

    image: {
        width: '100%',
        height: 240,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 8,
        backgroundColor: '#212121',
    },

    title: {
        color: '#212121',
        marginBottom: 8,
        fontWeight: 500,
        fontSize: 16,
    },

    boxInfo: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },

    boxLikes: {
        flexDirection: 'row',
        flex: 1,
        gap: 24,
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 6,
    },

    text: {
        fontSize: 16,
    },

    textLocation: {
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});
