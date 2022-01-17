import Fragment from './Components/Fragment/Fragment';
import Tenant from './Components/Home/Tenant';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


import './App.css';

 function App() {
    return (
      <Fragment>
          <Tenant />
          <Header />
          <Footer />
      </Fragment>
    )
};

export default App;
