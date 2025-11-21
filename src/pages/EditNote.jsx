import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCreateDate from "../components/useCreateDate";
import { useNavigate } from "react-router-dom";

function EditNote({notes, setNotes}) {
  const {id} = useParams();
  const note = notes.find(note => note.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();
  console.log(note);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the note in the notes array
    if(title && details){
      const updatedNote = { ...note, title, details, date};
      const updatedNotes = notes.map(n => n.id === id ? updatedNote : n);
      setNotes(updatedNotes);
      navigate("/");
    }
  }

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn"><IoIosArrowBack/></Link>
        <button className="btn lg primary" onClick={handleSubmit}> Save</button>
        <button className="btn danger"> <RiDeleteBin6Line/></button>
      </header>
      <form className="create-note__form">
        <input type="text" autoFocus placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea rows= "28" placeholder="Note details ..." name="textarea" id="" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  );
}

export default EditNote;
