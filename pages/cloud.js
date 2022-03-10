import Layout from '../components/layout';
import Swagger from '../components/swagger';

const fileName = './cloud_result.json'

export default function Contact() {
  return (
    <section>
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
