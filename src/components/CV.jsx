import EducEntry from './EducEntry'
import ExpEntry from './ExpEntry'

function CV({info, educations, experiences}) {
    return (
        <>
            <div className="head">
                <h1>{info.name}</h1>
                <div className="info">
                    <div className="mail">
                        <p>{info.mail}</p>
                    </div>
                    <div className="phone">
                        <p>{info.phone}</p>
                    </div>
                    <div className="address">
                        <p>{info.address}</p>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="educ">
                    <h1>Education</h1>
                    {educations.map(educ => <EducEntry education={educ}/>)}
                </div>
                <div className="exp">
                    <h1>Experiences</h1>
                    {experiences.map(exp => <ExpEntry experience={exp}/>)}
                </div>
            </div>
        </>
    )
}

export default CV