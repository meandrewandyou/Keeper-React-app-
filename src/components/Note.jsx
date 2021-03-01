import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Zoom from "@material-ui/core/Zoom";

function Note(props) {
  const [mouseStatus, setMouseStatus] = useState(false);
  function mouseOver() {
    setMouseStatus(true);
  }
  function mouseOut() {
    setMouseStatus(false);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}>
        <button
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          style={{ color: mouseStatus && "red" }}
          className="delbtn"
          onClick={() => {
            props.del(props.id);
          }}
        >
          <DeleteIcon />
        </button>
      </Zoom>
    </div>
  );
}

export default Note;
