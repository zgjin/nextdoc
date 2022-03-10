import fs from 'fs';
import { join } from 'path'
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw'
import rehypeFormat from 'rehype-format'
import rehypeAddClasses from 'rehype-add-classes'
import { parse as htmlParser} from 'node-html-parser'

// rehype-slug

const mdDirectory = join(process.cwd(), '_mds')

function helementPriority(tagName) {
  if (tagName === '') {
    return 0;
  }
  return parseInt(tagName.slice(1))
}

function findHeadings(elements, headings, parentHeading, index) {
  let i = index;
  while (i < elements.length) {
    const element = elements[i];
    const nextElement = ((i + 1) < elements.length && elements[i+1]) || null;
    const nextPriority = helementPriority((nextElement && nextElement.tagName) || '');
    
    const heading = {
      name: element.id,
      id: element.id,
      priority: helementPriority(element.tagName),
      children: [],
    };

    if (parentHeading && heading.priority <= parentHeading.priority) {
      return i
    }
    
    headings.push(heading);

    if (nextPriority && heading.priority < nextPriority) {
      // 下一个是子元素
      i = findHeadings(elements, heading.children, heading, i+1)
      continue;
    } else if (nextPriority && heading.priority > nextPriority) {
      // 下一个是父级
      return i+1;
    }
    // 下一个是同级元素
    i++;
  }

  return i + 1;
}

export async function getMDData(fileName) {
  const fullpath = join(mdDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(fullpath, 'utf8');

  // 解析 markdown 中的 headings
  const mdHTML = await unified()
        .use(remarkParse)
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeRaw)
        .use(rehypeSlug)
        .use(rehypeFormat)
        .use(rehypeAddClasses, {'h2,h3,h4,h5,h6': 'title-selector'})
        .use(rehypeStringify)
        .process(fileContents);

  const root = htmlParser(mdHTML);
  const eles = root.querySelectorAll('.title-selector');

  const headings = [];

  const res = findHeadings(eles, headings, null, 0);

  return { content: fileContents, headings: headings }
}