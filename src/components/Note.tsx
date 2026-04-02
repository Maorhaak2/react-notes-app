
export type NoteType = {
    id : string
    title : string
    content : string
    author : string
    author_email : string
}

function Note( {id, title, content, author, author_email} : NoteType) {
    return (
        <div className="note" id={id}>
            <h2> {title}</h2>
            <p>
                {content}
            </p>
            <small> By {author + author_email}</small>
        </div>
    )
}

export default Note;