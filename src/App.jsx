import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Notes from "./pages/Notes.jsx";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote.jsx";
// import dummyNotes from "./dummy_notes.js";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route
            path="/create-note"
            element={<CreateNote setNotes={setNotes} />}
          />
          <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes}/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
