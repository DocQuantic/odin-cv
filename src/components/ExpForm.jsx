import ExpCard from "./ExpCard"

function ExpForm({ exps, onChange, onAddExp, onDelExp }){
    return (
        <>
            <h1>Experiences</h1>
            <ul>
                {exps.map(exp => <ExpCard experience={exp} onChange={onChange} onDel={onDelExp}/>)}
            </ul>
            
            <button onClick={onAddExp}>Add New</button>
        </>
    )
}

export default ExpForm