import React from "react"
import { Pagination } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

interface Props {
  studentsPerPage: number
  totalStudents: number
  currentPage: number
  whatPageIsIt: (number: number) => void
}

const Paginate = ({
  studentsPerPage,
  totalStudents,
  currentPage,
  whatPageIsIt,
}: Props): JSX.Element => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalStudents / studentsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Pagination>
      {pageNumbers.map((number) => (
        <LinkContainer key={number} to={`/page/${number}`}>
          <Pagination.Item
            onClick={() => whatPageIsIt(number)}
            active={currentPage === number}
          >
            {number}
          </Pagination.Item>
        </LinkContainer>
      ))}
    </Pagination>
  )
}

export default Paginate
