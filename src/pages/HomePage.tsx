import React, { useEffect, useState } from "react"
import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"
import Student from "../components/Student"

interface StudentInterface {
  id: number
  first_name: string
  last_name: string
  gender: string
  email: string
  city: string
}

const HomePage: React.FC = () => {
  const [data, setData] = useState<Array<StudentInterface>>([])

  async function getData() {
    const res = await axios.get(
      "https://run.mocky.io/v3/a4319818-f52c-41cc-bed2-124746b0e56c"
    )

    return res
  }

  useEffect(() => {
    getData()
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <Container>
        <Row>
          {data.map((student: StudentInterface) => (
            <Col key={student.id} sm={12} md={6} lg={4} xl={4}>
              <Student student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default HomePage
