import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

interface StudentInterface {
  id: number
  first_name: string
  last_name: string
  gender: string
  email: string
  city: string
}

interface LayoutProps {
  student: StudentInterface
}

const Student: React.FC<LayoutProps> = ({ student }) => {
  return (
    <Card className='my-3 p-3 rounded student-card'>
      {/* <Link to={`/student/${student._id}`}>
        <Card.Img src={student.image} variant='top' />
      </Link> */}

      <Card.Body>
        <Link to={`/student/${student.id}`}>
          <Card.Title as='div'>
            <strong>{student.first_name}</strong>
          </Card.Title>
        </Link>

        {/* <Card.Text as='div'></Card.Text>

        <Card.Text as='h3'>${student.price}</Card.Text> */}
      </Card.Body>
    </Card>
  )
}

export default Student
