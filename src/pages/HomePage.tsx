import React, { useEffect, useState, ChangeEvent } from "react"
import axios from "axios"
import { Container, Row, Col, Button } from "react-bootstrap"
import { StudentI } from "../interfaces/studentInterface"
import Student from "../components/Student"
import Paginate from "../components/Paginate"

const HomePage = (): JSX.Element => {
  const [students, setStudents] = useState<Array<StudentI>>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [studentsPerPage] = useState(6)

  async function getData() {
    const { data } = await axios.get(
      "https://run.mocky.io/v3/8cd08002-c86e-4d81-90b3-61639b175b23"
    )
    return data
  }

  useEffect(() => {
    const dataFromStorage = localStorage.getItem("students")
    if (dataFromStorage) {
      setStudents(JSON.parse(dataFromStorage))
    } else {
      getData()
        .then((data: StudentI[]) => {
          localStorage.setItem("students", JSON.stringify(data))
          setStudents(data)
        })
        .catch((err) => console.error(err))
    }
  }, [])

  const handleChecked = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    let dataFromStorage = [...students]
    for (let i = 0; i < dataFromStorage.length; i++) {
      if (dataFromStorage[i].id === id) {
        dataFromStorage[i].isChecked = e.target.checked
      }
    }
    localStorage.setItem("students", JSON.stringify(dataFromStorage))
    setStudents(dataFromStorage)
  }

  const handleDelete = () => {
    let isConfirmed: boolean = window.confirm("Are you sure you want to delete checked?")
    if (isConfirmed) {
      let studentsToNotDelete = [...students]
      studentsToNotDelete = studentsToNotDelete.filter((student) => !student.isChecked)
      localStorage.setItem("students", JSON.stringify(studentsToNotDelete))
      setStudents(studentsToNotDelete)
    }
  }

  //get current students
  const indexOfLastStudent = currentPage * studentsPerPage
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent)

  //change page
  const whatPageIsIt = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <Container className='my-3'>
        <Row>
          <Col>
            <h2>Student List</h2>
          </Col>
          <Col sm={12} md={4} lg={4} xl={4}>
            <Button
              type='submit'
              variant='danger'
              className='p-2 search-btn'
              onClick={handleDelete}
            >
              Delete Selected
            </Button>
          </Col>
        </Row>

        <Row>
          {students.length !== 0 &&
            currentStudents.map((student: StudentI) => (
              <Col key={student.id} sm={12} md={6} lg={4} xl={4} className='my-2'>
                <Student
                  student={student}
                  handleChecked={(e) => handleChecked(e, student.id)}
                />
              </Col>
            ))}
        </Row>

        <Row className='my-3'>
          <Paginate
            studentsPerPage={studentsPerPage}
            totalStudents={students.length}
            currentPage={currentPage}
            whatPageIsIt={whatPageIsIt}
          />
        </Row>
      </Container>
    </>
  )
}

export default HomePage
