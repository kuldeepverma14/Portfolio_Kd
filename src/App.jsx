import { useState } from 'react'
import Profile from './components/Home/Profile'
import Footer from './components/Home/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Profile />
     <Footer />   
    </>
  )
}

export default App
