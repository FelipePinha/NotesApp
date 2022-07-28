import React from "react"
import { FormArea } from "./components/FormArea/FormArea"
import { Header } from "./components/Header/Header"
import { Notes } from "./components/Notes/Notes"
import { NotesWrapper } from "./components/NotesWrapper/NotesWrapper"

function App() {
  return (
    <div>
      <Header />
      <NotesWrapper>
        <Notes />
        <FormArea />
      </NotesWrapper>
    </div>
  )
}

export default App
