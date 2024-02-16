const PersonForm = ({handleNameChange, handlePhoneChange, addPerson}) => {
  return (
    <form onSubmit={addPerson}>
      <h2>add a new</h2>
      <div>name: <input onChange={handleNameChange}/></div>
      <div>number: <input onChange={handlePhoneChange}/></div>
      <div><button type="submit">add</button></div>
    </form>
  )
}

export default PersonForm