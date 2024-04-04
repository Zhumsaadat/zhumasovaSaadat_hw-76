import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import Messages from './features/Messages';
import { Container } from '@mui/material';
import NewMessage from './features/NewMessage';

function App() {

  return (
    <>
      <header>
          <AppToolbar />
      </header>
        <main>
            <Container maxWidth="xl">
                <Messages />
                <NewMessage />
            </Container>

        </main>
    </>
  )
}

export default App
