function EducCard({ education, onChange }){
    return (
        <>
            <li key={education.id} id={education.id}>
                <div className="form-field">
                    <label htmlFor="school">School</label>
                    <input type="text" name="school" id="school" value={education.school} onChange={onChange}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="degree">Degree</label>
                    <input type="text" name="degree" id="degree" value={education.degree} onChange={onChange}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" name="start-date" id="start-date" value={education.startDate} onChange={onChange}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="end-date">End Date</label>
                    <input type="date" name="end-date" id="end-date" value={education.endDate} onChange={onChange}></input>
                </div>
                <div className="buttons-area">
                    <button>Delete</button>
                </div>
            </li>
            <hr></hr>
        </>
    )
}

export default EducCard