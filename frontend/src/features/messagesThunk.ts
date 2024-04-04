import { createAsyncThunk } from '@reduxjs/toolkit';
import { Message } from '@mui/icons-material';
import axiosApi from '../axiosApi';
import { MessageMutation } from '../types';

export const fetchMessages = createAsyncThunk<Message[]>(
    'fetchMessages',
    async () => {
        const messagesResponse = await  axiosApi.get<Message[]>('/messages');
        return messagesResponse.data;
    }
);

export const fetchMessagesFromDate = createAsyncThunk<Message[], string>(
    'fetchMessages',
    async (date) => {
        const messagesResponse = await  axiosApi.get<Message[]>(`/messages?datetime=${date}`);
        return messagesResponse.data;
    }
);

export const createMessage = createAsyncThunk<void, MessageMutation>(
    "createMessage",
    async (messageMutation) => {
        await axiosApi.post('/messages', messageMutation);
    }
);