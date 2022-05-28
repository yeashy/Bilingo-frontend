import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './css/App.css';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import RepeatPage from './pages/RepeatPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/learn' element={<LearnPage/>}/>
          <Route path='/repeat' element={<RepeatPage/>}/>
          <Route path='/signIn' element={<SignInPage/>}/>
          <Route path='/signUp' element={<SignUpPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
    </div>
  );
}

export default App;
