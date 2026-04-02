import Note, { type NoteType } from "./Note"

type NotesProps = {
  notes: NoteType[]
}

function NotesList({ notes }: NotesProps) {
  return (
    <div className="notesList">
      {notes.map((note) => (
        <Note key={note.id} 
            id={note.id}
            title={note.title}
            content={note.content}
            author={note.author}
            author_email={note.author_email}

        />
      ))}
    </div>
  )
}

export default NotesList