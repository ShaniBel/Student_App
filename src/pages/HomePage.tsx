import React, { FC, useEffect, useState, ChangeEvent } from "react"
import axios from "axios"
import { Container, Row, Col, Button } from "react-bootstrap"
import Student from "../components/Student"
import { StudentI } from "../interfaces/studentInterface"

const HomePage: FC = () => {
  const [data, setData] = useState<Array<StudentI>>([])

  async function getData() {
    const { data } = await axios.get(
      "https://run.mocky.io/v3/5f506902-29d7-4238-8c9a-b5c319318473"
    )
    return data
  }

  useEffect(() => {
    const dataFromStorage = localStorage.getItem("students")
    if (dataFromStorage) {
      setData(JSON.parse(dataFromStorage))
    } else {
      getData()
        .then((data) => {
          localStorage.setItem("students", JSON.stringify(data))
          setData(data)
        })
        .catch((err) => console.error(err))
    }
  }, [])

  const handleChecked = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    let dataFromStorage = [...data]
    dataFromStorage[id - 1].isChecked = e.target.checked
    localStorage.setItem("students", JSON.stringify(dataFromStorage))
    setData(dataFromStorage)
  }

  const handleDelete = () => {
    let isConfirmed: boolean = window.confirm(
      "Are you sure you want to delete checked?"
    )
    if (isConfirmed) {
      let studentsToNotDelete = [...data]
      studentsToNotDelete = studentsToNotDelete.filter(
        (student) => !student.isChecked
      )
      localStorage.setItem("students", JSON.stringify(studentsToNotDelete))
      setData(studentsToNotDelete)
    }
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
          {data.length !== 0 &&
            data.map((student: StudentI) => (
              <Col key={student.id} sm={12} md={6} lg={5} xl={5} className='my-2'>
                <Student
                  student={student}
                  handleChecked={(e) => handleChecked(e, student.id)}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  )
}

export default HomePage
