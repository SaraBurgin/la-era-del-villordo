import Layout from '../components/Layout'


export default function Information() {
  return (
    <>
    <Layout>
        <section>
              <div>
                  <div className="benalmadena">
                    <img className="benalmadena-pic" src="/images/benalmadena-pueblo.jpg" alt="benalmadena-pueblo"/>
                    <a href="/benalmadena.js">Benalmadena Pueblo</a>
                  </div>
                  <div className="malaga"><img className="malaga-pic" src="/images/malaga.jpg" alt="Photo of Malaga by Joel Casey on Unsplash"/><a href="/malaga">Malaga</a>
                  </div>
                  <div className="beaches"><img src="/images/beaches-pic.jpg" className="beaches-pic" alt="Photo of Benalmadena by Quino Al on Unsplash"/><a href="/beaches">Beaches</a>
                  </div>
                  <div className="local-festivities">
                    <img src="/images/fiestas-sanjuan.jpg" className="sanjuan-pic" alt="picture-of-sanjuan"/>
                    <a href="/local-festivities">Local Fetivities</a>
                  </div>
            </div>
        </section>
    </Layout>
    </ >
    )
}

