import Jumbo2 from '../components/Jumbo2'
import Layout from '../components/Layout'
import Navigation from '../components/NavigationBar'
import Head from 'next/head'
import Footer from '../components/Footer'
import Main from '../components/Main'

export default function Index() {
  return (
    <>
    <Head>
    <title>La Era del Villordo</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossOrigin="anonymous"
    />
    </Head>
    <Navigation />
    <Jumbo2 />
    <Main />
    <Layout>
      
    </Layout>
    <Footer />
    </>
   )
}
