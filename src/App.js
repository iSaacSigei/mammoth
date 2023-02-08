import './App.css';
import { Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin'
import CardInfo from './components/CardInfo';
export default function App() {
  return (
   <Routes>
    <Route path="/" element={<Signup/>} />
    <Route path="/login" element={<Signin/>} />
    <Route path="/cardinfo" element={<CardInfo/>} />
   </Routes>
  );
}


