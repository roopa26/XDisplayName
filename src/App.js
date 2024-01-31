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
          <label htmlFor="firstName">First Name:</label>
          <input required type='text' id='firstName' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input required type='text' id='lastName' value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
      {fullName && <label>{fullName}</label>}
    </div>
  );
}

export default App;
