import { Message } from '../types';
import { createSlice } from '@reduxjs/toolkit';
import { createMessage, fetchMessages, fetchMessagesFromDate } from './messagesThunk';
import messages from '../../../backend/routes/messages';
import { RootState } from '../app/store';
import { create } from '@mui/material/styles/createTransitions';


interface MessageState {
    items: Message[];
    fetchLoading: boolean;
    createLoading: boolean
}

const initialState: MessageState = {
    items: [],
    fetchLoading: false,
    createLoading: false,
}


export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchMessages.fulfilled, (state, {payload: messages}) => {
            state.fetchLoading = false;
            state.items = messages;
        });
        builder.addCase(fetchMessages.rejected, (state) => {
            state.fetchLoading = false;
        });

        builder.addCase(fetchMessagesFromDate.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchMessagesFromDate.fulfilled, (state, {payload: messages}) => {
            state.fetchLoading = false;
            state.items = [...messages, ...state.items];
        });
        builder.addCase(fetchMessagesFromDate.rejected, (state) => {
            state.fetchLoading = false;
        });


        builder.addCase(createMessage.pending, (state) => {
            state.createLoading = true;
        });
        builder.addCase(createMessage.fulfilled, (state, {payload: messages}) => {
            state.createLoading = false;
            state.items = messages;
        });
        builder.addCase(createMessage.rejected, (state) => {
            state.createLoading = false;
        });
    }
});

export const messagesReducer = messageSlice.reducer;

export const selectMessages = (state: RootState) => state.messages.items;
export const selectFetchLoading = (state: RootState) => state.messages.fetchLoading;