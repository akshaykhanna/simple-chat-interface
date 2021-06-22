import './App.css';
import ListChats from "./list-chats/list-chats";
import AddChat from './add-chat/add-chat';
import Container from './container/container';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <ListChats className="list" />
        <AddChat className="add-chat"/>
      </Container>
    </Provider>
  );
}

export default App;
