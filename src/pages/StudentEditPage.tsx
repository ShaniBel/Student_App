import React, { useState, useEffect, FormEvent } from "react"
import { Link, RouteComponentProps, match } from "react-router-dom"
import { Button, Form, Container, Row, Col } from "react-bootstrap"
import { StudentI } from "../interfaces/studentInterface"

interface RouteParams {
  id: string
}

const StudentEditPage = ({ match }: { match: match<RouteParams> }) => {
  const studentId = Number(match.params.id)

  const [data, setData] = useState<Array<StudentI>>([])
  const [studentLocationInList, setStudentLocationInList] = useState(0)
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [gender, setGender] = useState("")
  const [city, setCity] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    let dataFromStorage = localStorage.getItem("students")
    if (dataFromStorage !== null) {
      let parsedData = JSON.parse(dataFromStorage)
      setData(parsedData)

      for (let i = 0; i < parsedData.length; i++) {
        if (parsedData[i].id === studentId) {
          setfirstName(parsedData[i].first_name)
          setlastName(parsedData[i].last_name)
          setGender(parsedData[i].gender)
          setCity(parsedData[i].city)
          setEmail(parsedData[i].email)
          setStudentLocationInList(i)
        }
      }
    }
  }, [studentId])

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let dataToSave = [...data]
    dataToSave[studentLocationInList] = {
      id: studentId,
      first_name: firstName,
      last_name: lastName,
      gender,
      city,
      email,
      isChecked: false,
    }
    localStorage.setItem("students", JSON.stringify(dataToSave))

    alert("student information updated successfully!")
  }

  return (
    <Container>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>

      <h1>Edit Student Information</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='firstname'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter first name'
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='lastname'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter last name'
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='lastname'>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as='select'
            placeholder='Enter gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Other'>Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='lastname'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Update
        </Button>
      </Form>
    </Container>
  )
}

export default StudentEditPage
