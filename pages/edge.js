import Layout from '../components/layout';
import Swagger from '../components/swagger';

const fileName = './edge_result.json'

export default function Contact() {
  return (
    <section className=''>
      <Swagger fileName={fileName} />
    </section>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
