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
    console.log("--- שולח בקשה עבור דף", currentPage, "---");

    axios
      .get(NOTES_URL, {
        params: {
          _page: currentPage,
          _per_page: POSTS_PER_PAGE, // בגרסה 1.0 זה הפרמטר הנכון
        },
      })
      .then((res) => {
        // 1. חילוץ הפתקים מהשדה data
        const fetchedNotes = res.data.data;
        console.log("הפתקים שחולצו מהשרת:", fetchedNotes);
        setNotes(Array.isArray(fetchedNotes) ? fetchedNotes : []);

        // 2. חילוץ כמות הפריטים האמיתית מהשדה items
        const totalItems = res.data.items;
        console.log("כמות פריטים כוללת בשרת:", totalItems);

        if (totalItems) {
          // כאן החישוב האמיתי: 100 חלקי 10 ייתן לנו 10 דפים
          const pages = Math.ceil(totalItems / POSTS_PER_PAGE);
          setTotalPages(pages);
        }
      })
      .catch((err) => {
        console.error("שגיאה:", err.message);
      });
  }, [currentPage]);

  return (
  <div>
    <h1>Notes</h1>
    
    <NotesList notes={notes} />

    {}
    <div className="pagination-container">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  </div>
)
}

export default NotesPage