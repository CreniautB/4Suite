import logo from './logo.svg';
import './App.css';
import './component/homePage/homePage.css'


import HomePage from './component/homePage/homePage';

function App() {
  return (
    <div className="homePage">
        <img src='img/logo.png' alt='logo' width='120px' ></img>
        <HomePage />
    </div>
  );
}

export default App;
