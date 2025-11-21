import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, redirect } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import {v4 as uuid} from "uuid"; 
import useCreateDate from "../components/useCreateDate";

function CreateNote({setNotes}) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title && details){
      console.log(title, details)
      const note = {id: uuid(), title, details, date};
      console.log(note);
      setNotes(prevNotes => [note, ...prevNotes]);
      navigate("/");
    }
  }
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn"><IoIosArrowBack/></Link>
        <button className="btn lg primary" onClick={handleSubmit}> Save</button>
      </header>
      <form action="" className="create-note__form" onSubmit={handleSubmit}>
        <input type="text" autoFocus placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea rows= "28" placeholder="Note details ..." name="textarea" id="" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  );
}

export default CreateNote;
