import React, { FC } from "react"
import { Pagination } from "react-bootstrap"
import { Link } from "react-router-dom"

interface Props {
  studentsPerPage: number
  totalStudents: number
  currentPage: number
  something: (number: number) => void
}

const Paginate: FC<Props> = ({
  studentsPerPage,
  totalStudents,
  currentPage,
  something,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalStudents / studentsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Pagination>
      {pageNumbers.map((number) => (
        <Link
          onClick={() => something(number)}
          key={number}
          to={`/page/${number}`}
        >
          <Pagination.Item active={currentPage === number}>
            {number}
          </Pagination.Item>
        </Link>
      ))}
    </Pagination>
  )
}

export default Paginate
