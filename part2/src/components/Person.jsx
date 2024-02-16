const Person = ({ persons, setPersons, filter }) => {
    const personsToShow = filter.length < 1 ? 
            persons : 
            persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            {personsToShow.map(person => <div key={person.id}>{person.name} {person.number}</div>)}
        </div>
    )
}

export default Person