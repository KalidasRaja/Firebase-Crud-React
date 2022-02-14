import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import firebaseDb from "../API_Data/firebase";
// import * as firebase from 'firebase/app';
import { toast } from 'react-toastify';

const initialState = {
  name: "",
  email: "",
  phone: ""

}


const Create = () => {

  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const { name, email, phone } = state;
  const history = useHistory();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast.error("Pls enter the each input fields!!")
    } else {
      // firebaseDb.child("Location").push(state, (err))
      // firebase.initializeApp(firebaseDb);

      // firebasesetup = {
      //   app: firebase,
      //   database: firebase.database(),
      // }
      console.log('firebaseDb()');
      firebaseDb.child("Location").push(state, (err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Details Created Successfully..")
        }
      });
      setTimeout(() => history.push("/"), 500);
    }
  }
  return (
    <div className=' container w-full mx-auto'>
      <form className=" text-black text-lg"
        onSubmit={handleSubmit}
      >

        <label htmlFor='name'>Name</label>
        <input
          name="name"
          id="name"
          class="w-full mx-auto"
          type="text"
          value={name}
          placeholder="Enter your Name here"
          onChange={handleInputChange}
        />

        <label htmlFor='email'>Email</label>
        <input
          name="email"
          id="email"
          class="w-full mx-auto"
          type="email"
          value={email}
          placeholder="Enter your email here"
          onChange={handleInputChange}
        />

        <label htmlFor='phone'>Phone</label>
        <input
          name="phone"
          id="phone"
          class="w-full mx-auto"
          type="number"
          value={phone}
          placeholder="Enter your phone here"
          onChange={handleInputChange}
        />

        <input type="submit" value="Submit" />
      </form>

    </div>
  )
}




export default Create