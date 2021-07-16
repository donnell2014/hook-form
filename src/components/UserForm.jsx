import React, { useState } from  'react';

    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState(""); 
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };
    return(
        <div className="container">
            <form onSubmit={ createUser }>
                <div className="form-group">
                    <label>First Name: </label> 
                    <input type="text" className="form-control" onChange={ (e) => setFirstname(e.target.value) } />
                </div>
                <div className="form-group">
                    <label>Last Name: </label> 
                    <input type="text" className="form-control" onChange={ (e) => setLastname(e.target.value) } />
                </div>
                <div className="form-group">
                    <label>Email Address: </label> 
                    <input type="text" className="form-control" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="text" className="form-control" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input type="text" className="form-control" onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
            <input type="submit" value="Create User" />
            </form>
        <h3>{firstname}</h3>
        <h3>{lastname}</h3>
        <h3>{email}</h3>
        <h3>{password}</h3>
        <h3>{confirmpassword}</h3>
        </div>
        
    );
};
    
    
export default UserForm;
