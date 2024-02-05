const Course = ({course: {name, id, parts}}) => {

    const sum = parts.reduce((accumulator, current) => accumulator + current.exercises, 0)

    return (
        <div>
        <h2>{name}</h2>
        {parts.map((part, i) => (
            <p key={i}>
            {part.name} {part.exercises}
            </p>
        ))}
        <p><b>total of {sum} exercises</b></p>
        </div>
    )
}

export default Course