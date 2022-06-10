import { Routes, Route } from 'react-router-dom';
import NavbarContainer from './components/Navbar';
import './css/App.css';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import ProfilePageContainer from './pages/ProfilePage';
import LearnPageContainer from './pages/LearnPage';
import RepeatPageContainer from './pages/RepeatPage';

function App() {
  return (
    <div className="App">
        <NavbarContainer/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/learn' element={<LearnPageContainer/>}/>
          <Route path='/repeat' element={<RepeatPageContainer/>}/>
          <Route path='/signIn' element={<SignInPage/>}/>
          <Route path='/signUp' element={<SignUpPage/>}/>
          <Route path='/profile' element={<ProfilePageContainer/>}/>
        </Routes>
    </div>
  );
}

export default App;
