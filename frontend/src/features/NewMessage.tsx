import { useAppDispatch } from '../app/hooks';
import { Typography } from '@mui/material';
import MessageForm from './components/MessageForm';
import {createMessage} from './messagesThunk';
import { MessageMutation } from '../types';

const NewMessage = () => {
    const dispatch = useAppDispatch();

    const onFormSubmit = async (messageMutation: MessageMutation) => {
        await dispatch(createMessage(messageMutation));
    }

    return(
        <>
            <Typography variant='h4'>New message</Typography>
            <MessageForm onSubmit={onFormSubmit} />
        </>
    )
}

export default NewMessage;