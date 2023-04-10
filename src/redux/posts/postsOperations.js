import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const storage = getStorage();

export const uploadPhoto = createAsyncThunk(
    'posts/uploadPhoto',
    async (credentials, thunkAPI) => {
        try {
            const response = await fetch(credentials);
            const file = await response.blob();
            const uniquePostId = Date.now().toString();
            const data = ref(storage, `postImage/${uniquePostId}`);
            await uploadBytes(data, file);
            const storeLink = await getDownloadURL(data);
            return storeLink;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const createPost = createAsyncThunk(
    'posts/createPost',
    async (credentials, thunkAPI) => {
        try {
            await addDoc(collection(db, 'posts'), {
                ...credentials,
            });

            const Docs = await getDocs(collection(db, 'posts'));
            const response = [];
            Docs.forEach(doc => {
                response.push({ id: doc.id, ...doc.data() });
            });
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getAllPosts = createAsyncThunk(
    'posts/getAllPosts',
    async (_, thunkAPI) => {
        try {
            const Docs = await getDocs(collection(db, 'posts'));
            const response = [];
            Docs.forEach(doc => {
                response.push({ id: doc.id, ...doc.data() });
            });
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
