import React, { FC, useEffect, useState, MouseEvent, ChangeEvent } from "react"
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
      console.log(dataFromStorage)
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
    console.log(e.target.checked, id)
    let dataFromStorage = [...data]
    dataFromStorage[id - 1].isChecked = e.target.checked
    localStorage.setItem("students", JSON.stringify(dataFromStorage))
    setData(dataFromStorage)
  }

  const handleDelete = (e: MouseEvent<HTMLInputElement>) => {
    //e.target.value
  }

  return (
    <>
      <Container>
        <Row>
          <h2>Student List</h2>
        </Row>
        <Row>
          <Button
            type='submit'
            variant='danger'
            className='p-2 search-btn'
            onClick={handleDelete}
          >
            Delete Selected
          </Button>
        </Row>
        <Row>
          {data.map((student: StudentI) => (
            <Col key={student.id} sm={12} md={6} lg={4} xl={4}>
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
