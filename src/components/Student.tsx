import React, { ChangeEvent } from "react"
import { StudentI } from "../interfaces/studentInterface"
import { Link } from "react-router-dom"
import { Card, Form, Button } from "react-bootstrap"

interface Props {
  student: StudentI
  handleChecked: (e: ChangeEvent<HTMLInputElement>) => void
}

const Student = ({ student, handleChecked }: Props): JSX.Element => {
  return (
    <Card className='my-3 p-2 rounded student-card h-100'>
      <Card.Body>
        <Card.Title as='div'>
          <span>
            {student.first_name} {student.last_name}
          </span>
        </Card.Title>
        <Card.Text as='p'>
          <span>ID number:</span> {student.id}
        </Card.Text>
        <Card.Text as='p'>
          <span>Gender:</span> {student.gender}
        </Card.Text>
        <Card.Text as='p'>
          <span>City: </span>
          {student.city}
        </Card.Text>
        <Card.Text as='p'>
          <span>Email: </span>
          {student.email}
        </Card.Text>

        <Form>
          <Form.Group className='mb-3' controlId='DeleteCheckbox'>
            <Form.Check
              type='checkbox'
              label='Delete Me'
              checked={student.isChecked}
              onChange={handleChecked}
            />
          </Form.Group>
        </Form>

        <Card.Text as='div'>
          <Link to={`/student/${student.id}/edit`}>
            <Button variant='dark' className='btn-sm'>
              <i className='fas fa-edit'></i> Edit
            </Button>
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Student
