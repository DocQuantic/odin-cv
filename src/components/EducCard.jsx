function EducCard({ education, onChange, onDel }){
    return (
        <>
            <li key={education.id} id={education.id}>
                <label htmlFor="school">School</label>
                <input type="text" name="school" id="school" value={education.school} onChange={onChange}></input>
            
                <label htmlFor="degree">Degree</label>
                <input type="text" name="degree" id="degree" value={education.degree} onChange={onChange}></input>
            
                <label htmlFor="start-date">Start Date</label>
                <input type="text" name="start-date" id="start-date" value={education.startDate} onChange={onChange}></input>
            
                <label htmlFor="end-date">End Date</label>
                <input type="text" name="end-date" id="end-date" value={education.endDate} onChange={onChange}></input>
            
                <button onClick={onDel}>Delete</button>
            </li>
            <hr></hr>
        </>
    )
}

export default EducCard