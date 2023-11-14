import React, { Component } from 'react';
import '../css/notes.css'; 

class Notes extends Component {
  renderNotes(notes, parent_note_id = null, indentLevel = 0) {
    return (
      <ul>
        {notes
          .filter((note) => note.parent_note_id === parent_note_id)
          .map((note) => (
            <li className="note-text" key={note.id} style={{ marginLeft: `${indentLevel * 20}px` }}>
              {note.note_text}
              <br />
              <li className="note-character">--{note.character}</li>
              <br /><br />
              {this.renderNotes(notes, note.id, indentLevel + 1)}
            </li>
          ))}
      </ul>
    );
  }

  render() {
    const { notes } = this.props;

    return (
      <div className="notes-container">
        {this.renderNotes(notes)}
      </div>
    );
  }
}

export default Notes;