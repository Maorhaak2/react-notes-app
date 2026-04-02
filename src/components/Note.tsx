
export type NoteType = {
    id : string
    title : string
    content : string
    author : string
    author_email : string
}

function Note({ id, title, content, author }: NoteType) {
    return (
        <div className="note" id={id}>
            <h2>{title}</h2>
            <small>By {author}</small>
            <br />
            {content}
        </div>
    )
}

export default Note;