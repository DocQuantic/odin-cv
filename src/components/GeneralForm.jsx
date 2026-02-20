import '../styles/GeneralForm.css'

function GeneralForm({info, onChange}){
    return(
        <>
            <h1>General Informations</h1>
            <form action="" method="get">
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={info.name} onChange={onChange}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="mail">Mail</label>
                    <input type="email" name="email" id="email" value={info.mail} onChange={onChange}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="phone">Phone number</label>
                    <input type="tel" name="phone" id="phone" value={info.phone} onChange={onChange}></input>
                </div>
                <div className="form-field">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" value={info.address} onChange={onChange}></input>
                </div>
            </form>
        </>
    )
}

export default GeneralForm;