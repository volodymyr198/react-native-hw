import { View, StyleSheet, ImageBackground, Text } from 'react-native';

export default function Profile({ avatar, name, email }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={avatar} style={styles.images} />
            <View style={styles.boxInfo}>
                <Text style={styles.name}>{name}</Text>
                <Text>{email}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 32,
        paddingLeft: 16,
    },

    images: {
        width: 60,
        height: 60,
        marginRight: 8,
        borderRadius: 15,
    },

    boxInfo: {
        justifyContent: 'center',
    },

    name: {
        color: '#212121',
        fontWeight: '700',
    },
});
