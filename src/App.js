import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AddBus from './components/AddBus';
import ViewBus from './components/ViewBus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchBus from './components/SearchBus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddBus/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/SigniN' element={<SignIn/>}/>
        <Route path='/ViewBus' element={<ViewBus/>}/>
        <Route path='/SearchBus' element={<SearchBus/>}/>
          </Routes></BrowserRouter>
    </div>
  );
}

export default App;
