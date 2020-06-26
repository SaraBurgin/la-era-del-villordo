import Layout from '../components/Layout'
import Container from 'react-bootstrap/Container'
import Navigation from '../components/NavigationBar'
import Footer from '../components/Footer'

export default function Information() {
  return (
    <>
    <Navigation />
    <Layout>
      <Container>
        <p>Good to know info for your trip!</p>
      </Container>
    </Layout>
    <Footer />
    </>
  )
}