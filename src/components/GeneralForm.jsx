import '../styles/GeneralForm.css'

function GeneralForm(){
    return(
        <>
            <h1>General Informations</h1>
            <form action="" method="get">
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"></input>
                </div>
                <div className="form-field">
                    <label htmlFor="mail">Mail</label>
                    <input type="email" name="email" id="email"></input>
                </div>
                <div className="form-field">
                    <label htmlFor="phone">Phone number</label>
                    <input type="tel" name="phone" id="phone"></input>
                </div>
                <div className="form-field">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address"></input>
                </div>
            </form>
        </>
    )
}

export default GeneralForm;