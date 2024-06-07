import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewStudent from './components/ViewStudent';
import { BrowserRouter, Route, Router } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Router>
    <Route path='/' element={<AddStudent/>}/>
    <Route path='/search' element={<SearchStudent/>}/>
    <Route path='/delete' element={<DeleteStudent/>}/>
    <Route path='/view' element={<ViewStudent/>}/>
  </Router>
  </BrowserRouter>
  );
}

export default App;
