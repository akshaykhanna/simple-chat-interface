import ListChats from './list-chats/list-chats';
import AddChat from './add-chat/add-chat';
import Container from './container/container';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <ListChats />
        <AddChat />
      </Container>
    </Provider>
  );
}

export default App;
