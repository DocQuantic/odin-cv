function ExpCard({ experience, onChange, onDel }){
    return (
        <>
            <li key={experience.id} id={experience.id}>

                <label htmlFor="position">Position</label>
                <input type="text" name="position" id="position" value={experience.position} onChange={onChange}></input>
                
                <label htmlFor="company">Company name</label>
                <input type="text" name="company" id="company" value={experience.company} onChange={onChange}></input>
            
                <label htmlFor="start-date">Start Date</label>
                <input type="text" name="start-date" id="start-date" value={experience.startDate} onChange={onChange}></input>
            
                <label htmlFor="end-date">End Date</label>
                <input type="text" name="end-date" id="end-date" value={experience.endDate} onChange={onChange}></input>
            
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" rows={5} value={experience.description} onChange={onChange}></textarea>
            
                <button onClick={onDel}>Delete</button>
            </li>
            <hr></hr>
        </>
    )
}

export default ExpCard