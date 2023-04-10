import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function Comment({ text, date, time }) {
    console.log(date);
    return (
        <View style={styles.item}>
            <Image
                style={styles.image}
                source={require('../assets/images/profile3.png')}
            />

            <View style={styles.commentBox}>
                <Text style={styles.comment}>{text}</Text>
                <Text style={styles.commentData}>
                    {date} | {time}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        gap: 16,
        width: '100%',
        marginTop: 24,
    },

    image: {
        width: 28,
        height: 28,
        resizeMode: 'cover',
        borderRadius: 50,
        backgroundColor: '#F6F6F6',
    },

    commentBox: {
        width: '100%',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        borderRadius: 6,
    },

    comment: {
        fontSize: 13,
        lineHeight: 18,
        color: '#212121',
        textAlign: 'left',
    },

    commentData: {
        color: '#BDBDBD',
        marginTop: 8,
        fontSize: 10,
        lineHeight: 12,
    },
});
