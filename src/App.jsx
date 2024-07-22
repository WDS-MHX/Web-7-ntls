import Banner_logo from './components/banner_logo'
import Carousel from './components/carousel'
import Jump_page from './components/jump_page'
import './App.css'
import Copyright from './components/copyright'

function App() {
  return (
    <>
      <header><Banner_logo/></header>
      <Carousel/>
      <Jump_page/>
      <footer><Copyright/></footer>
    </>
  )
}

export default App
