import { useState } from 'react'
import Filter from './components/Filter.jsx'
import Person from './components/Person.jsx'
import PersonForm from './components/PersonForm.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setNewFilter] = useState('')

  const handleNameChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1
    }
    if ((persons.filter((person) => person.name === newName)).length !== 0) {
      alert(`${newName} is already added to the phonebook`)
      setNewName('')
      return
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange}/>
      <PersonForm handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Person persons={persons} setPersons={setPersons} filter={filter}/>
    </div>
  )
}

export default App