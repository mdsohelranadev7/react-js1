import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'
import Button from './components/button'

function App() {
  return (
    <>
      <h1 className={"bg-amber-500"}>hello sohel</h1>
      <h1 className={"bg-red-500"}>hello rana</h1>
      <Button btntexts={"login"} color={"bg-blue-500"}/>
      <Button btntexts={"submit"} color={"bg-green-500 t"}/>
      <Button btntexts={"singup"} color={"bg-blue-200"}/>
    </>

  )
}

export default App
