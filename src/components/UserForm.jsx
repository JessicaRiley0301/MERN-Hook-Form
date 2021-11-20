import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  



    const [nameError, setNameError] = useState(""); //error
    const [emailError, setEmailError] = useState(""); //error
    const [passwordError, setPasswordError] = useState(""); //error
    const [confirmpasswordError, setConfirmPasswordError] = useState(""); //error

    // const [user, setUser] = useState({});

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };

    // props.addNewUser(newUser);

    const checkLength = (aString) => {
        console.log(aString);

        // set to state to save the string
        setFirstname(aString);
        setLastname(aString);

        // check errors
        if (aString.length < 2) {
            setNameError("must be longer than 3 chars")
        }
        else if (aString === "" ){
            setNameError("at least put something here 🙃");
        }
        else {
            // else clear the input 
            setNameError("")
        }
    }
    const checkLength2 = (aString) => {
        console.log(aString);

        // set to state to save the string
        setEmail(aString);

        // check errors
        if (aString.length < 5) {
            setEmailError("must be longer than 5 chars")
        }
        else if (aString === "" ){
            setEmailError("at least put something here 🙃");
        }
        else {
            // else clear the input 
            setEmailError("")
        }
    }

    const checkPasswordLength = (aString) => {
        
        setPassword(aString);
        setConfirmPassword(aString);
        // console.log(aString.target.value)

        // set to state to save the string

        // check errors
        if (aString.length < 8) {
                setPasswordError("must be longer than 8 chars")
            }
            else if (aString === "" ){
                setPasswordError("at least put something here 🙃");
            }
            else {
                // else clear the input 
                setPasswordError("")
            }
        }

    const checkPasswordMatch = (aString) => {
        console.log(aString);

        // set to state to save the string
        setPassword(aString);
        setConfirmPassword(aString);

        // check errors
        if (aString !== confirmpassword) {
            setConfirmPasswordError("password must match")
            console.log(aString);
        }
        else if (aString === "" ){
            setConfirmPasswordError("at least put something here 🙃");
        }
        else {
            // else clear the input 
            setConfirmPasswordError("")
        }
    }
    

    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First name: </label> 
                <input type="text" onChange={ (e) => checkLength(e.target.value) } />
                {nameError ? <span style={{ color: "red" }}>{nameError}</span> : <span>&nbsp;</span>}
            </div>
            <div>
                <label>Last name: </label> 
                <input type="text" onChange={ (e) => checkLength(e.target.value) } />
                {nameError ? <span style={{ color: "red" }}>{nameError}</span> : <span>&nbsp;</span>}
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => checkLength2(e.target.value) } />
                {emailError ? <span style={{ color: "red" }}>{emailError}</span> : <span>&nbsp;</span>}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => checkPasswordLength(e.target.value) } />
                {passwordError ? <span style={{ color: "red" }}>{passwordError}</span> : <span>&nbsp;</span>}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => checkPasswordMatch(e.target.value)  } />
                {passwordError ? <span style={{ color: "red" }}>{passwordError}</span> : <span>&nbsp;</span>}
                {confirmpasswordError ? <span style={{ color: "red" }}>{confirmpasswordError}</span> : <span>&nbsp;</span>}
            </div>
            <input type="submit" value="Create User" />
        </form>

        <p>Your Form Data</p>
        <p>{JSON.stringify(firstname)}</p>
        <p>{JSON.stringify(lastname)}</p>
        <p>{JSON.stringify(email)}</p>
        <p>{JSON.stringify(password)}</p>
        <p>{JSON.stringify(confirmpassword)}</p>
        </div>
    );
};
    
export default UserForm;