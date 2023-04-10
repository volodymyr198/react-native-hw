import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Moment from 'moment';

import Comment from '../../../Components/Comment';
import {
    createComment,
    getAllComments,
} from '../../redux/comments/commentsOperations';
import { selectAllComments } from '../../redux/comments/commentsSelectors';

export default function CommentsScreen({
    route: {
        params: { image, postId },
    },
}) {
    const [comments, setComments] = useState([]);
    const [textComment, setTextComment] = useState('');
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments());
        setComments(commentsByPost);
    }, [getAllComments]);

    const commentsAll = useSelector(selectAllComments);
    const commentsByPost = commentsAll.filter(
        comment => comment.postId === postId
    );

    const createComments = async () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        if (!textComment) {
            return alert('Please enter your comment');
        }
        const date = Moment().format('DD.MM.YYYY');
        const time = Moment().format('HH:mm');
        await dispatch(createComment({ textComment, date, time, postId }));
        await dispatch(getAllComments());
        setTextComment('');
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS == 'ios' && 'padding'}
        >
            <View style={styles.imageBox}>
                <Image style={styles.image} source={image} />
            </View>

            <FlatList
                data={comments}
                renderItem={({ item }) => (
                    <Comment
                        text={item.textComment}
                        date={item.date}
                        time={item.time}
                    />
                )}
                keyExtractor={item => item.id}
            />

            <View style={styles.inputBox}>
                <TextInput
                    style={styles.input}
                    onChangeText={value => setTextComment(value)}
                    placeholder="Комментировать..."
                    value={textComment}
                />
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={createComments}
                >
                    <Feather name="arrow-up" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
    },

    imageBox: {
        width: '100%',
        height: 240,
        backgroundColor: 'black',
    },

    inputBox: {
        position: 'relative',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        width: '100%',
        height: 59,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        paddingVertical: 16,
        paddingLeft: 16,
        paddingRight: 50,
        borderRadius: 100,
        color: '#212121',
        fontSize: 16,
    },

    button: {
        position: 'absolute',
        width: 34,
        height: 34,
        right: 8,
        backgroundColor: '#FF6C00',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
