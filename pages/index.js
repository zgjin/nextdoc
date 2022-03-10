import ReactMarkdown from 'react-markdown'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import remarkParse from "remark-parse";
import remarkRehype from 'remark-rehype';
import remarkGFM from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import rehypeAddClasses from 'rehype-add-classes'
import rehypeFormat from 'rehype-format'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import Layout from '../components/layout'
import { getMDData } from '../lib/api'
import SideBar from '../components/sidebar';

export default function Index({ mdData }) {
  return (
    <Container fluid>
      <Row>
        <Col md="3" xl="2">
          <Nav>
            <SideBar headings={mdData.headings}/>
          </Nav>
        </Col>
        <Col xl="8" md="9">
          <ReactMarkdown children={mdData.content}
          remarkPlugins={[[remarkParse], [remarkGFM], [remarkRehype,  {allowDangerousHtml: true}]]}
          rehypePlugins={[rehypeRaw, 
            [rehypeSlug],
            [rehypeAutolinkHeadings, {behavior: 'wrap'}],
            [rehypeHighlight, {aliases: {'shell': 'URL', 'javascript': 'json'}}],
            [rehypeAddClasses, {table: 'table', 'h2,h3,h4,h5,h6': 'title-selector'}],
            [rehypeFormat]]}
          />
        </Col>
      </Row>
    </Container>
  )
}

export async function getStaticProps(context) {
  const mdData = await getMDData('intro');
  return {
    props: { mdData }, // will be passed to the page component as props
  }
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
