import Navigation from '../components/NavigationBar'
import Layout from '../components/Layout'
import Container from 'react-bootstrap/Container'
import Footer from '../components/Footer'

export default function Location() {
  return (
    <>
    <Navigation />
    <Layout>
      <Container>
        <p>Map of our location</p>
      </Container>
    </Layout>
    <Footer />
    </>
  )
}