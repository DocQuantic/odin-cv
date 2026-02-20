function CV({info}) {
    return (
        <>
            <div className="head">
                <h1>{info.name}</h1>
                <div className="info">
                    <div className="mail">
                        <p>{info.mail}</p>
                    </div>
                    <div className="phone">
                        <p>{info.phone}</p>
                    </div>
                    <div className="address">
                        <p>{info.address}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CV