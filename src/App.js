import { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/log/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/log/AddLogModal';
import EditLogModal from './components/log/EditLogModal';
import AddTechModal from './components/tech/AddTechModal';
import TechListModal from './components/tech/TechListModal';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
useEffect(() => {
  M.AutoInit();
});

  return (
    <Provider store={store}>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Provider>
  );
}

export default App;
