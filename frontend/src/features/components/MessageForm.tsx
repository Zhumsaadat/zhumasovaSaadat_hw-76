import React, { useState } from 'react';
import { MessageMutation } from '../../types';
import { Button, Grid, TextField } from '@mui/material';

interface Props {
    onSubmit: (mutation: MessageMutation) => void;
}

const MessageForm: React.FC<Props> = ({onSubmit}) => {
    const [state, setState] = useState<MessageMutation>({
        message: '',
        author: '',
    });

    const submitFormHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(state);
        setState({
            message: '',
            author: '',
        })
    };

    const inputChangeHandler = (e: React.ChangeEventHandler<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return{...prevState, [name]: value};
        });
    }

    return (
        <form
            autoComplete="off"
            onSubmit={submitFormHandler}
        >
            <Grid container direction='column' spacing={2}>
                <Grid item xs>
                    <TextField
                        id='message' label="Message"
                        value={state.message}
                        onChange={inputChangeHandler}
                        name="message"
                        required
                    />
                </Grid>

                    <Grid item xs>
                        <TextField
                            id='author' label="Author"
                            value={state.author}
                            onChange={inputChangeHandler}
                            name="author"
                            required
                        />
                    </Grid>

                    <Grid item xs >
                        <Button type="submit" color="primary" variant="contained">Create</Button>
                    </Grid>
                </Grid>
        </form>
    );
};

export default MessageForm;