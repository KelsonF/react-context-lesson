import './App.css'
import { List } from './components/List'
import { ListItem } from './components/ListItem'

function App() {

  return (
    <>
      <List level={1} color='blue'>
        <ListItem>Ola mundo</ListItem>
        <ListItem>Ola professor</ListItem>
        <ListItem>Ola Igor Julliano</ListItem>
        <ListItem>Ola Kelson Eduardo</ListItem>
        <ListItem>Ola Micherlane</ListItem>
      </List>
      <hr />
      <List level={2} color='purple'>
        <ListItem>Ola Micherlane</ListItem>
        <ListItem>Ola Micherlane</ListItem>
      </List>
    </>
  )
}

export default App
