import './App.css';
import { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
        if (firstName && lastName) {
            setFullName(`Full Name: ${firstName} ${lastName}`);
        }
  }

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="firstName">First Name:</label>
          <input required type='text' id='firstName' onChange={(e)=>{setFirstName(e.target.value)}}/>
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input required type='text' id='lastName' onChange={(e)=>{setLastName(e.target.value)}}/>
        </div>
        <button>Submit</button>
      </form>
      {fullName && <label>{fullName}</label>}
    </div>
  );
}

export default App;
