import { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    ImageBackground,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, currentUser } from '../../redux/auth/authOperations';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

const initialState = {
    email: '',
    password: '',
};

export default function LoginScreen({ navigation }) {
    const [state, setState] = useState(initialState);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();

    const login = async () => {
        if (!state.email || !state.password) {
            alert('Enter all data please!!!');
            return;
        }
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        setIsShowPassword(false);
        await dispatch(loginUser(state)).then(response => {
            response.meta.requestStatus === 'fulfilled' &&
                navigation.navigate('Home', { screen: 'Posts' });
            response.meta.requestStatus !== 'fulfilled' &&
                alert('Your data is wrong');
        });
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/bg.jpg')}
                style={styles.image}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : ''}
                >
                    <View style={styles.form}>
                        <Text style={styles.title}>Войти</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Адрес электронной почты"
                            value={state.email}
                            onFocus={() => setIsShowKeyboard(true)}
                            onChangeText={value =>
                                setState(prevState => ({
                                    ...prevState,
                                    email: value,
                                }))
                            }
                        />

                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.input}
                                placeholder="Пароль"
                                value={state.password}
                                secureTextEntry={isShowPassword ? false : true}
                                onFocus={() => setIsShowKeyboard(true)}
                                onChangeText={value =>
                                    setState(prevState => ({
                                        ...prevState,
                                        password: value,
                                    }))
                                }
                            />
                            <TouchableOpacity
                                style={styles.btnShowPassword}
                                onPress={() => setIsShowPassword(true)}
                            >
                                <Text style={styles.textShowPassword}>
                                    Показать
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.button}
                            onPress={login}
                        >
                            <Text style={styles.text}>Войти</Text>
                        </TouchableOpacity>

                        <Text
                            style={styles.link}
                            onPress={() => navigation.navigate('Registration')}
                        >
                            Нет аккаунта? Зарегистрироваться
                        </Text>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    image: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
    },

    form: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: 'relative',
        paddingTop: 32,
        paddingBottom: 100,
        paddingHorizontal: 16,
        alignItems: 'center',
    },

    title: {
        marginBottom: 32,
        fontSize: 30,
        fontWeight: 500,
        color: '#212121',
    },

    input: {
        width: '100%',
        height: 50,
        marginBottom: 16,
        padding: 16,
        color: '#BDBDBD',
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
    },

    inputBox: {
        width: '100%',
        position: 'relative',
    },

    btnShowPassword: {
        position: 'absolute',
        right: 10,
        top: 14,
    },

    textShowPassword: {
        color: '#1B4371',
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

    text: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    link: {
        color: '#1B4371',
    },
});
