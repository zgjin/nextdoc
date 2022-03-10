import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import LayBar from './laybar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Nebula API v1.0.0</title>
      </Head>
        <Container>
          <LayBar/>
        </Container>
        <Container fluid>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </>
  )
}
