
import Layout from '../components/Layout';
import Jumbo2 from '../components/Jumbo2'
import Head from 'next/head'
import Main from '../components/Main'
import ControlledCarousel from '../components/ControlledCarousel'

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
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=IM+Fell+English&display=swap" rel="stylesheet"/>
    </Head>
    <Layout>
    <Jumbo2 />
    <Main />
    <ControlledCarousel />
    </Layout>
    </>
   )
}
