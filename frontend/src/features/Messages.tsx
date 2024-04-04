
import { Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectMessages } from './MessagesSlice';
import { fetchMessages, fetchMessagesFromDate } from './messagesThunk';
import MessageItem from './components/MessageItem';
import { useCallback, useEffect, useState } from 'react-dom';

const Messages = () => {
    const dispatch = useAppDispatch();
    const messages = useAppSelector(selectMessages);

    const [datetime, setDatetime] = useState<string>('');

    const run = useCallback(async () => {
        if(!messages.length) {
            await dispatch(fetchMessages());
        }
        if(messages.length && messages[0].datetime !== datetime) {
            setDatetime(messages[0].datetime);
        };

    }, [dispatch, messages, datetime])

    useEffect(() => {
        void run()
    }, [run]);

    useEffect(() => {
        if(datetime) {
            const interval = setInterval( async() => {
                await dispatch(fetchMessagesFromDate(datetime));
                if(messages.length > 0) {
                    setDatetime(messages[messages.length - 1].datetime);
                }
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [datetime, dispatch,messages]);


    return (
        <Grid container direction='column' gap={2}>
            <Grid item container>
                <Grid item>
                    <Typography variant="h4">Messages</Typography>
                </Grid>
            </Grid>

            <Grid item container gap={3}>
                {messages.map(msg => (
                    <MessageItem
                        key={msg.id}
                        author={msg.author}
                        message={msg.message}
                    />
                ))}
            </Grid>
        </Grid>


    );
};

export default Messages;