import {useState} from "react";
import './App.css';

function App() {

  const[name,setName] = useState("");
  const[address,setAddress] = useState("")
  const changeName = (event) =>{
    setName(event.target.value)
  }
  const changeAddress = (event) =>{
    setAddress(event.target.value)
  }

  const userRegister = async () =>{
    console.log(name)
    console.log(address)
    const userData = {
      name,
      address:[address]
    }
    
    const options = {
      method:"POST",
      headers:{
        
        'Content-Type': 'application/json'
        
      },
      body:JSON.stringify(userData)
    }
     const response = await fetch("http://localhost:3000/register", options);
     const responseStatus = await response.json(); 
     
     
    
    }
  const submitform = (event) =>{
    event.preventDefault();
    if(name !== "" && address !== ""){
      userRegister();
      setName("")
      setAddress("")
    }

  }
  return (
    <div className="main-container">
    <div className="signup-container">
    <h2>Signup Form</h2>
    <form onSubmit={submitform}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required onChange={changeName} value={name}/>
        <br />
        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" required onChange={changeAddress} value={address}></textarea>
        <br />
        <button type="submit">Submit</button>
    </form>
  </div>
  </div>
  );
}

export default App;
