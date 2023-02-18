import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const AddUser = () => {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const { firstName, lastName, email } = user;

  const onInputChange = e => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const onSubmit = async e => {
    e.preventDefault(); // Evita que se envíe el formulario
    await axios.post('http://localhost:8080/user', user);
    navigate('/');
    console.log(user)
  };



  return (
    <div className="grid place-items-center mt-3">
      <div className="flex flex-col justify-center items-center border border-slate-800 w-72 p-8 rounded-sm shadow-lg bg-neutral-800">
        <h1 className="pb-2 font-extrabold tracking-wide text-lg">ADD USER</h1>
        <form className="flex flex-col justify-center gap-4 items-center" onSubmit={onSubmit}>
          <input className="p-1 rounded-md text-white" type="text" placeholder="Name" onChange={onInputChange} defaultValue={''} name="firstName" />
          <input className="p-1 rounded-md text-white" type="text" placeholder="Last Name" onChange={onInputChange} defaultValue={''} name="lastName" />
          <input className="p-1 rounded-md text-white" type="text" placeholder="Email" onChange={onInputChange} defaultValue={''} name="email" />
          <div className="flex flex-row gap-4">
            <button className="pl-3 pr-3 pt-1 pb-1 border-none rounded-md bg-blue-800" type="submit">Add</button>
            <Link to="/" className="pl-2 pr-2 pt-1 pb-1 border-none rounded-md bg-red-700" type="button">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;