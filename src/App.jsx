import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './css/App.css';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import RepeatPage from './pages/RepeatPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePageContainer from './pages/ProfilePage';
import LearnPageContainer from './pages/LearnPage';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/learn' element={<LearnPageContainer/>}/>
          <Route path='/repeat' element={<RepeatPage/>}/>
          <Route path='/signIn' element={<SignInPage/>}/>
          <Route path='/signUp' element={<SignUpPage/>}/>
          <Route path='/profile' element={<ProfilePageContainer/>}/>
        </Routes>
    </div>
  );
}

export default App;
