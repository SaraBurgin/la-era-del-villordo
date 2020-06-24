import Head from 'next/head'
import Navigation from './Navigation'
import Container from 'react-bootstrap/Container'

const Layout = (props) => (
    <>
    <div className="general-wrapper">
     <Head>
        <title>La Era del Villordo</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>
      <Navigation />
      <Container>
        {props.children}
      </Container>
    </div>
  </>
  );

  export default Layout;