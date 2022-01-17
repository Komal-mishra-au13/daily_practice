import React,{ useState } from 'react';
import logo from './Image/logo.jpg';

function Header(){
    const [myLang, setMyLang] = useState("SelectLanguage");

    const handleChange = (event) => {
        setMyLang(event.target.value)
   }
    return(
        <div className='heading'>
           <img src={logo} alt="logo" width="50px" height="50px" /><b> JOKESTER</b>
           <form align="right">
                <select value={myLang} onChange={handleChange}>
                    <option value="SelectLanguage">SelectLanguage</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Tamil">Tamil</option>
                </select>
            </form>
        </div>
    )
}

export default Header;