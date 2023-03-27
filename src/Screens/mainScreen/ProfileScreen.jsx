import { StyleSheet, View, Text } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.headerText}>Profile Screen</Text>
            </View>
            <View style={styles.tabBarWrapper}></View>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        //   justifyContent: "flex-end",
    },
    headerWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 88,
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
    },
    headerText: {
        marginBottom: 11,
        fontSize: 17,
    },
    tabBarWrapper: {
        marginTop: 570,
        alignItems: 'center',
        height: 88,
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
    },
});
