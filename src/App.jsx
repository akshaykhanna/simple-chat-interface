import './App.css';
import ListChats from "./list-chats/list-chats";
import AddChat from './add-chat/add-chat';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ListChats className="list" />
        <AddChat className="add-chat"/>
      </div>
    </Provider>
  );
}

export default App;
