import React, { FC, useState, useEffect, ChangeEvent } from "react"
import { StudentI } from "../interfaces/studentInterface"
import { Link } from "react-router-dom"
import { Card, Form, Button } from "react-bootstrap"

interface Props {
  student: StudentI
  handleChecked: (e: ChangeEvent<HTMLInputElement>) => void
}

const Student: FC<Props> = ({ student, handleChecked }) => {
  return (
    <Card className='my-3 p-2 rounded student-card h-100'>
      {/* <Link to={`/student/${student._id}`}>
        <Card.Img src={student.image} variant='top' />
      </Link> */}

      <Card.Body>
        <Card.Title as='div'>
          <strong>
            {student.first_name} {student.last_name}
          </strong>
        </Card.Title>

        <Card.Text as='p'>Email: {student.email}</Card.Text>
        <Card.Text as='p'>Gender: {student.gender}</Card.Text>
        <Card.Text as='p'>City: {student.city}</Card.Text>

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
