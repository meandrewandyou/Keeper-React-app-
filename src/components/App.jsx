import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes([...notes, newNote]);
  }

  function del(id) {
    setNotes(
      notes.filter((note, i) => {
        return i !== id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea addN={addNote} />
      {notes.map((item, i) => (
        <Note
          del={del}
          key={i}
          id={i}
          title={item.ttlTxt}
          content={item.body}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
