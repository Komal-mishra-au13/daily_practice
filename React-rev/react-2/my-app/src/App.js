import Fragment from './Components/Fragment/Fragment';
import Content from './Components/Home/Content';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Button from './Components/Button/Button';


import './App.css';

function App() {
  return (
      <Fragment>
        <Content />
        <Header />
        <Footer />
        <Button title="Login"/>
        <Button title="Signup"/>
        <Button title="Logout"/>
      </Fragment>
  );
}

export default App;
