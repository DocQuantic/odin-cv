import ExpCard from "./ExpCard"

function ExpForm({ exps, onChange }){
    return (
        <>
            <h1>Experiences</h1>
            <ul>
                {exps.map(exp => <ExpCard experience={exp} onChange={onChange}/>)}
            </ul>
            
            <button>Add New</button>
        </>
    )
}

export default ExpForm