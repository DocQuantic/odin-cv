import ExpCard from "./ExpCard"

function ExpForm({ exps }){
    return (
        <>
            <h1>Experiences</h1>
            {exps.map(exp => <ExpCard 
                company={exp.company} 
                position={exp.position} 
                startDate={exp.startDate} 
                endDate={exp.endDate} 
                description={exp.description}
            />)}
        </>
    )
}

export default ExpForm