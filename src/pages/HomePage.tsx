import React, { useEffect, useState } from "react"
import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"

const HomePage = () => {
  const [data, setData] = useState([])

  async function getData() {
    const res = await axios.get(
      "https://run.mocky.io/v3/9d135bc2-10bd-426c-92d3-5218072faea5"
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

  return <></>
}

export default HomePage
