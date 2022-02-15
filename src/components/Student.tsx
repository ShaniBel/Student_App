import React, { FC, useState, useEffect, ChangeEvent } from "react"
import { StudentI } from "../interfaces/studentInterface"
import { Link } from "react-router-dom"
import { Card, Form } from "react-bootstrap"

interface Props {
  student: StudentI
  handleChecked: (e: ChangeEvent<HTMLInputElement>) => void
}

const Student: FC<Props> = ({ student, handleChecked }) => {
  return (
    <Card className='my-3 p-3 rounded student-card'>
      {/* <Link to={`/student/${student._id}`}>
        <Card.Img src={student.image} variant='top' />
      </Link> */}

      <Card.Body>
        <Link to={`/student/${student.id}`}>
          <Card.Title as='div'>
            <strong>
              {student.first_name} {student.last_name}
            </strong>
          </Card.Title>
        </Link>

        <Card.Text as='p'>{student.gender}</Card.Text>
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
      </Card.Body>
    </Card>
  )
}

export default Student
