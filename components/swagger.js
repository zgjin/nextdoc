import { RedocStandalone } from 'redoc';

export default function Swagger({ fileName }) {
  return (
    <RedocStandalone specUrl={fileName}/>
  )
}