import React, { useState } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  let [isType, setType] = React.useState(false);
  function changeType() {
    setType(!isType);
  }

  return (
    <div>
      <form className="create-note">
        <input
          style={{ display: isType ? "block" : "none" }}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onClick={() => setType(true)}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isType ? "3" : "1"}
        />
        <Zoom in={isType}>
          <Fab onClick={submitNote}>
            <AddCircleOutlineIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
