function GeneralForm({info, onChange}){
    return(
        <>
            <h1>General Informations</h1>
            <form>
                <div className="ul">
                    <li>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={info.name} onChange={onChange}></input>
                    
                        <label htmlFor="mail">Mail</label>
                        <input type="email" name="email" id="email" value={info.mail} onChange={onChange}></input>
                    
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" value={info.phone} onChange={onChange}></input>
                    
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="address" value={info.address} onChange={onChange}></input>
                    </li>
                </div>
            </form>
        </>
    )
}

export default GeneralForm;