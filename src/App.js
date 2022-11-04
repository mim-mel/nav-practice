import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './page/Main';
import Nav1 from './page/Nav1';
import Nav2 from './page/Nav2';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/nav1' element={<Nav1 />} />
      <Route path='/nav2' element={<Nav2 />} />
    </Routes>
  );
}

export default App;
