function ExpCard({ company, position, startDate, endDate, description }){
    return (
        <>
            <form action="" method="get">
                <div className="form-field">
                    <label htmlFor="company">Company name</label>
                    <input type="text" name="company" id="company" value={company}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="position">Position</label>
                    <input type="text" name="position" id="position" value={position}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="start-date">Start Date</label>
                    <input type="datetime-local" name="start-date" id="start-date" value={startDate}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="end-date">End Date</label>
                    <input type="datetime-local" name="end-date" id="end-date" value={endDate}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" rows={5} value={description}></textarea>
                </div>
                <div className="buttons-area">
                    <button>Delete</button>
                    <button>Save</button>
                </div>
            </form>
        </>
    )
}

export default ExpCard