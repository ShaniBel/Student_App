import React, { FC, useState, useEffect } from "react"
import { Link, RouteComponentProps, match } from "react-router-dom"
import { Button, Form, Container, Row, Col } from "react-bootstrap"

interface RouteParams {
  id: string
}

const StudentEditPage = ({ match }: { match: match<RouteParams> }) => {
  const studentId = Number(match.params.id)

  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [gender, setGender] = useState("")
  const [city, setCity] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    let dataFromStorage = localStorage.getItem("students")
    if (dataFromStorage !== null) {
      let parsedData = JSON.parse(dataFromStorage)
      const { first_name, last_name, gender, email, city } =
        parsedData[studentId - 1]
      setfirstName(first_name)
      setlastName(last_name)
      setGender(gender)
      setCity(city)
      setEmail(email)
    }
  }, [studentId])

  const submitHandler = () => {
    // e.preventDefault()
  }

  return (
    <Container>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>

      <h1>Edit Student</h1>

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
            type='name'
            placeholder='Enter gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          ></Form.Control>
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
