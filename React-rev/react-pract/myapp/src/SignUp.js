const SignUp =(props)=>{
    const { onSubmit } = props;
    return(
        <div>
            <form onSubmit={onSubmit}>
            <div>Signup</div>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="enter first name"/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="enter last name" />
            </div>
            <div>
                <label>Emailid</label>
                <input type="email"name="emailid" placeholder="enter emailid"/>
            </div>
            <div>
                <label>Contact number</label>
                <input type="number" name="contactnum"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password"/>
            </div>
            <div>
                <label>Gender</label>
                <select>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
                
            </div>
            <div>
                <button type="submit">Signup</button>
            </div>
            </form>
        
        </div>

    );
}

export default SignUp;