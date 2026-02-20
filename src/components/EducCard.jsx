function EducCard({ school, degree, startDate, endDate, id }){
    return (
        <>
            <li key={id}>
                <div className="form-field">
                    <label htmlFor="school">School</label>
                    <input type="text" name="school" id="school" value={school}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="degree">Degree</label>
                    <input type="text" name="degree" id="degree" value={degree}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="start-date">Start Date</label>
                    <input type="datetime-local" name="start-date" id="start-date" value={startDate}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="end-date">End Date</label>
                    <input type="datetime-local" name="end-date" id="end-date" value={endDate}></input>
                </div>
                <div className="buttons-area">
                    <button>Delete</button>
                    <button>Save</button>
                </div>
            </li>
            <hr></hr>
        </>
    )
}

export default EducCard