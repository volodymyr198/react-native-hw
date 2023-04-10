import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const createComment = createAsyncThunk(
    'comments/createComment',
    async (credentials, thunkAPI) => {
        try {
            await addDoc(collection(db, 'comments'), {
                ...credentials,
            });
            const Docs = await getDocs(collection(db, 'comments'));
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

export const getAllComments = createAsyncThunk(
    'comments/getAllComments',
    async (_, thunkAPI) => {
        try {
            const Docs = await getDocs(collection(db, 'comments'));
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
