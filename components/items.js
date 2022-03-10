import SideBar from "./sidebar"

export default function Item({ heading }) {
  return (
    <li key={heading.id}>
      <a href={`#${heading.id}`}>{heading.name}</a>
      <SideBar headings={heading.children}></SideBar>
    </li>
  )
}