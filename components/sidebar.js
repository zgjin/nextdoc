import { Nav } from 'react-bootstrap'
import Item from './items'

export default function SideBar({ headings }) {
  if (headings.length > 0) {
    return (
      <ul>
        {headings.map((heading) => (
          <Item heading={heading}/>
        ))}
      </ul>
    )
  } else {
    return null
  }
}