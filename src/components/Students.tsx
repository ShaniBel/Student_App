import React, { FC, ChangeEvent } from "react"
import { StudentI } from "../interfaces/studentInterface"
import { Col } from "react-bootstrap"
import Student from "../components/Student"

interface Props {
  currentStudents: StudentI[]
  handleChecked: (e: ChangeEvent<HTMLInputElement>, studentId: number) => void
}

const Students: FC<Props> = ({ currentStudents, handleChecked }) => {
  return (
    <>
      {currentStudents.map((student: StudentI) => (
        <Col key={student.id} sm={12} md={6} lg={4} xl={4} className='my-2'>
          <Student student={student} handleChecked={(e) => handleChecked(e, student.id)} />
        </Col>
      ))}
    </>
  )
}

export default Students
