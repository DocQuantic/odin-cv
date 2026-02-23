function EducEntry({education}){
    return(
        <>
            <div className="entry">
                <p>{education.startDate} - {education.endDate}</p>
                <h2>{education.school}</h2>
                <p></p>
                <p>{education.degree}</p>
            </div>
        </>
    )
}

export default EducEntry