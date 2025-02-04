import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign, Feather } from '@expo/vector-icons';

import { logoutUser } from '../../redux/auth/authOperations';
import { selectName } from '../../redux/auth/authSelectors.js';

export default function ProfileScreen({ navigation }) {
    const nameUser = useSelector(selectName);

    const dispatch = useDispatch();

    const logout = async () => {
        await dispatch(logoutUser()).then(response => {
            response.meta.requestStatus === 'fulfilled' &&
                navigation.navigate('Login');
        });
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <ImageBackground
                    source={require('../../../assets/images/bg.jpg')}
                >
                    <View style={styles.box}>
                        <View style={styles.container}>
                            <View style={styles.imageBox}>
                                <ImageBackground
                                    source={require('../../../assets/images/avatar.png')}
                                    style={styles.imageProfile}
                                ></ImageBackground>
                                <TouchableOpacity style={styles.btnRemoveImage}>
                                    <AntDesign
                                        name="close"
                                        size={23}
                                        color="#BDBDBD"
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.logout}
                                    activeOpacity={0.5}
                                    onPress={logout}
                                >
                                    <Feather
                                        name="log-out"
                                        size={24}
                                        color="#BDBDBD"
                                    />
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.title}>{nameUser}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        alignItems: 'center',
    },

    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        width: '100%',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        marginTop: 100,
    },

    imageBox: {
        top: -60,
        width: 132,
        height: 120,
        borderRadius: 16,
        overflow: 'visible',
    },

    imageProfile: {
        width: '100%',
        height: '100%',
    },

    btnRemoveImage: {
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
        borderColor: '#BDBDBD',
        borderWidth: 1,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        top: -40,
        left: 119,
    },

    logout: {
        top: -65,
        left: 230,
    },

    title: {
        fontWeight: '500',
        fontSize: 30,
        marginBottom: 32,
    },
});
