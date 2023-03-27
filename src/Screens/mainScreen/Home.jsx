import { StyleSheet, View, Text, Image } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <View style={styles.imgBox}>
                    <Image
                        style={styles.avatar}
                        source={require('../../../assets/images/avatar.png')}
                    />
                </View>
                <View>
                    <Text style={styles.name}>Natali Romanova</Text>
                    <Text style={styles.email}>email@example.com</Text>
                </View>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
    },
    userInfo: {
        flexDirection: 'row',
        marginTop: 32,
        height: 60,
        alignItems: 'center',
    },
    imgBox: {
        width: 60,
        height: 60,
        backgroundColor: '#E8E8E8',
        marginRight: 8,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 16,
    },
});
