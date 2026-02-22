function ExpCard({ experience, onChange }){
    return (
        <>
            <li key={experience.id} id={experience.id}>
                <div className="form-field">
                    <label htmlFor="company">Company name</label>
                    <input type="text" name="company" id="company" value={experience.company} onChange={onChange}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="position">Position</label>
                    <input type="text" name="position" id="position" value={experience.position} onChange={onChange}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" name="start-date" id="start-date" value={experience.startDate} onChange={onChange}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="end-date">End Date</label>
                    <input type="date" name="end-date" id="end-date" value={experience.endDate} onChange={onChange}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" rows={5} value={experience.description} onChange={onChange}></textarea>
                </div>
                <div className="buttons-area">
                    <button>Delete</button>
                </div>
            </li>
            <hr></hr>
        </>
    )
}

export default ExpCard