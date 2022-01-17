import Fragment from './Components/Fragment/Fragment';
import Content from './Components/Home/Content';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Button from './Components/Button/Button';


import './App.css';
 function App() {
    const  login =(e) =>{
      console.log('[login]',e);
    }
    const  signup =(e) =>{
      console.log('[signup]',e);
    }
    const  logout =(e) =>{
      console.log('[logout]',e);
    }
    return (
      <Fragment>
          <Content />
          <Header />
          <Footer />
          <Button title="Login" type="success" link="/login" clickevent = {login}/>
          <Button title="Signup" type="warning" link="/Signup" clickevent = {signup} />
          <Button title="Logout" type="error" link="Logout" clickevent = {logout} />
      </Fragment>
    )
};

export default App;
