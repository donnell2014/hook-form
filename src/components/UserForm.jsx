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
    const NameValid = input => {
        if(input.length < 2){
            return false;
        }
        return true;
    }
    const EmailValid = input => {
        if(input.length < 5){
            return false;
        }
        return true;
    }
    const PasswordValid = (input, input2) => {
        if(input == input2){
            return true;
        }
        return false;
    }
    return(
        <div className="container">
            <form onSubmit={ createUser }>
                <div className="form-group">
                    <label>First Name: </label> 
                    <input type="text" className="form-control" onChange={ (e) => setFirstname(e.target.value) } />
                    {NameValid(firstname) ? "" : <p className="text-danger">Name must be longer than 2 characters!</p>}
                </div>
                <div className="form-group">
                    <label>Last Name: </label> 
                    <input type="text" className="form-control" onChange={ (e) => setLastname(e.target.value) } />
                    {NameValid(firstname) ? "" : <p className="text-danger">Name must be longer than 2 characters!</p>}
                </div>
    <form onSubmit={ (e) => e.preventDefault() }></form>
                <div className="form-group">
                    <label>Email Address: </label> 
                    <input type="text" className="form-control" onChange={ (e) => setEmail(e.target.value) } />
                    {EmailValid(email) ? "" : <p className="text-danger">Email must be longer than 5 characters!</p>}
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="text" className="form-control" onChange={ (e) => setPassword(e.target.value) } />
                    {PasswordValid(password, confirmpassword) ? "" : <p className="text-danger">Password and Conf Password must match!</p>}
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
