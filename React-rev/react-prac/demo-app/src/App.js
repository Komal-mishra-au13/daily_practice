import FunctionComponent from './func';
import ClassComponent from './Class';
import './App.css';

function App() {
  return (
    <div>
      <ClassComponent name="Namdu" city="Patna" course="BTech" / >
      <FunctionComponent name="Komal" city="Ranchi" course="BCA" />
    </div>
    
  );
}

export default App;
