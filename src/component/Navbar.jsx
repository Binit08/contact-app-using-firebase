import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import Modal from './Modal';
import { Formik,Form,Field } from 'formik';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
const Navbar = () => {
  const addContact = async(contact)=>{
 const ContactRef = collection(db,"contacts")
 await addDoc(ContactRef,contact)
  }
  
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true); // Corrected from setOpen(True)
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <div className='h-10 bg-[#B4EBCA] rounded-md'>
      <div className='font-extrabold text-white flex justify-center items-center '>
        <h2>CONTACT APP USING FIREBASE</h2>
      </div>
     
      </div>
      <Modal open={open} onClose={onClose} ><div >
      <Formik
      initialValues={{
        name : "",
        email : "",
      }} onSubmit={(va)=> {console.log(va)
      addContact(va)}}>

         <Form><div>

        <label htmlFor="name">name</label>
        <Field name= "name"/>   
       </div>
       </Form>
        </Formik>
      </div></Modal>
    </div>
  );
};

export default Navbar;
