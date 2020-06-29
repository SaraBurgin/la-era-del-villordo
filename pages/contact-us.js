import Layout from '../components/Layout'
import Navigation from '../components/NavigationBar'
import Footer from '../components/Footer'
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

const Image = styled.img`
.contactUs {
 
}
.paperPlane{
 
}
`

export default function ContactUs() {
    
  return (
    <>
    <Navigation />
    <Layout>
      <br/>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">CONTACT US</p>
              <div className="grey-text">
                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                  success="right" />
                <MDBInput label="Your surname" icon="user" group type="text" validate error="wrong"
                  success="right" />
                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                  success="right" />
                <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                <MDBInput type="textarea" rows="4" label="Your message" icon="pencil-alt" />
              </div>
              <div className="text-center">
                <Button variant="outline-info" size="l">
                  Send 
                </Button>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="6">
            <Image className="contactUs" src="/images/contact.png" alt="picture of us"/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </ Layout>
    <Footer />
    </>
  )
}