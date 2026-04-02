import { useEffect, useState } from "react"
import axios from "axios"
import NotesList from "../components/NotesList"
import Pagination from "../components/Pagination"
import type { NoteType } from "../components/Note"

const NOTES_URL = "http://localhost:3001/notes"
const POSTS_PER_PAGE = 10

function NotesPage() {
  const [notes, setNotes] = useState<NoteType[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    axios
      .get(NOTES_URL, {
        params: {
          _page: currentPage,
          _per_page: POSTS_PER_PAGE
        }
      })
      .then((res) => {
        setNotes(res.data)

        const totalPosts = Number(res.headers["x-total-count"])
        const pages = Math.ceil(totalPosts / POSTS_PER_PAGE)
        setTotalPages(pages)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [currentPage])

  return (
    <div>
      <h1>Notes</h1>

      <NotesList notes={notes} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default NotesPage