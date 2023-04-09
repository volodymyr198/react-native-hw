import React from 'react';
import { useState } from 'react';
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

const initialState = {
    login: '',
    email: '',
    password: '',
};

export default function RegistrationScreen({ navigation }) {
    const [state, setState] = useState(initialState);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);

    const registration = () => {
        if (!state.login || !state.email || !state.password) {
            alert('Enter all data please!!!');
            return;
        }
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        setIsShowPassword(false);
        setState(initialState);
        navigation.navigate('Home', { screen: 'Posts' });
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
                        <View style={styles.imagePlus}>
                            <TouchableOpacity style={styles.btnAddImage}>
                                <Text style={styles.textAddImage}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.title}>Регистрация</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Логин"
                            value={state.login}
                            onFocus={() => setIsShowKeyboard(true)}
                            onChangeText={value =>
                                setState(prevState => ({
                                    ...prevState,
                                    login: value,
                                }))
                            }
                        />
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
                            onPress={registration}
                        >
                            <Text style={styles.text}>Зарегистрироваться</Text>
                        </TouchableOpacity>

                        <Text
                            style={styles.link}
                            onPress={() => navigation.navigate('Login')}
                        >
                            Уже есть аккаунт? Войти
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
        height: 549,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: 'relative',
        paddingTop: 92,
        paddingHorizontal: 16,
        alignItems: 'center',
    },

    imagePlus: {
        position: 'absolute',
        width: 132,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
        top: -50,
    },

    btnAddImage: {
        position: 'absolute',
        bottom: 14,
        right: -12,
        width: 25,
        height: 25,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#FF6C00',
        color: '#FF6C00',
        alignItems: 'center',
    },

    textAddImage: {
        fontSize: 15,
        color: '#FF6C00',
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
