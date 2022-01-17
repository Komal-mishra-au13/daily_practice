
import './App.css';
import SignUp from './SignUp';

function App() {

  const signupHandler= (e)=>{
    e.preventdefault();
      console.log('[signupHandler', e);
  }
  return (
    <>
     Hello please do the signup
     <SignUp onSubmit={signupHandler}/>
    </>

  
  
  
    )
    
 
}

export default App;
