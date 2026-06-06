import './App.css'
 const coursesTitleArray:string[] = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];


const App= ()=> {

  return (
  <>
      <ul>
          {
              coursesTitleArray.map((value, index) => <li key={index}>{value}</li>)
          }
      </ul>

  </>
  )
}

export default App
