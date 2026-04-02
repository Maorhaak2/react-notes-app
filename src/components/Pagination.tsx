type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function getPageNumbers(currentPage: number, totalPages: number): number[] {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  if (currentPage < 3) {
    return [1, 2, 3, 4, 5]
  }

  if (currentPage >= 3 && currentPage <= totalPages - 2) {
    return [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2
    ]
  }

  return [
    totalPages - 4,
    totalPages - 3,
    totalPages - 2,
    totalPages - 1,
    totalPages
  ]
}

function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const pages = getPageNumbers(currentPage, totalPages)

  return (
    <div>
      {/* First */}
      <button
        name="first"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        First
      </button>

      {/* Prev */}
      <button
        name="previous"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* Page numbers */}
      {pages.map((page) => (
        <button
          key={page}
          name={`page-${page}`}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
          style={{
            fontWeight: page === currentPage ? "bold" : "normal"
          }}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        name="next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

      {/* Last */}
      <button
        name="last"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  )
}

export default Pagination