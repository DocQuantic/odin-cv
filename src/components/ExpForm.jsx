import ExpCard from "./ExpCard"

function ExpForm({ exps }){
    return (
        <>
            <h1>Experiences</h1>
            <ul>
                {exps.map(exp => <ExpCard {...exp}/>)}
            </ul>
            
            <button onClick={console.log("Hello, World!")}>Add New</button>
        </>
    )
}

export default ExpForm