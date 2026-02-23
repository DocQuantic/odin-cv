function ExpEntry({experience}){
    return(
        <>
            <div className="entry">
                <p>{experience.startDate} - {experience.endDate}</p>
                <h2>{experience.position}</h2>
                <p></p>
                <h3>{experience.company}</h3>
                <p></p>
                <p>{experience.description}</p>
            </div>
        </>
    )
}

export default ExpEntry