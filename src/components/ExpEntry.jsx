function ExpEntry({experience}){
    return(
        <>
            <h2>{experience.position}</h2>
            <h3>{experience.company}</h3>
            <p>{experience.startDate} - {experience.endDate}</p>
            <p>{experience.description}</p>
        </>
    )
}

export default ExpEntry