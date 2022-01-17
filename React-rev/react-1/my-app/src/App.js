import Fragment from './components/Fragment';
import Content from './components/Header/Content';
import Header from './components/Header/Header';
import Footer from './components/Header/Footer';
import FavouriteColor from './components/FavColor';
import './App.css';

function App() {
  return (
      <Fragment>
        <Content />
        <Header />
        <FavouriteColor />
        <Footer />
      </Fragment>
  );
}

export default App;
