import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, changeNote] = useState({ ttlTxt: "", body: "" });
  const { ttlTxt, body } = note;
  function inpNote(e) {
    const name = e.target.name;
    const val = e.target.value;
    changeNote(
      name === "title"
        ? { ttlTxt: val, body: body }
        : { ttlTxt: ttlTxt, body: val }
    );
  }
  const [clicked, setClicked] = useState(false);

  function extend() {
    setClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          hidden={!clicked}
          onChange={inpNote}
          name="title"
          placeholder="Title"
          value={ttlTxt}
        />
        <textarea
          onClick={extend}
          onChange={inpNote}
          name="content"
          placeholder="Take a note..."
          rows={clicked ? 3 : 1}
          value={body}
        />
        <Zoom in={clicked}>
          <Fab
            onClick={(e) => {
              props.addN(note);
              e.preventDefault();
              changeNote({ ttlTxt: "", body: "" });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
