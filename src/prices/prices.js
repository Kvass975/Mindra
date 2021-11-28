const Prices = () => {
    return(
        <div className="prices">
            <div className="prices__break"></div>
            <div className="prices__main">
                <div className="prcies__heading"><h1 className="prices__header">Cenas</h1></div>
                <div className="prices__table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>SMU dalībniekiem</th>
                                <th>Pārējiem klientiem</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Statiska lapa</td>
                                <td>15€</td>
                                <td>30€</td>
                            </tr>
                            <tr>
                                <td>Lapa ar datubāzi</td>
                                <td>20€</td>
                                <td>40€</td>
                            </tr>
                            <tr>
                                <td><p className="premium">PREMIUM lapa</p></td>
                                <td>25€</td>
                                <td>50€</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="prices__define">
                    <div className="prices__define--p">* Statiska lapa: React.js ģenerēta statiska lapa, priekš blogiem un reklāmas lapas</div>
                    <div className="prices__define--p">* Lapa ar datubāzi: React.js ģenerēta lapa izmantojot Node.js un datubāzes (MySQL/MongoDB) REST API</div>
                    <div className="prices__define--p">* PREMIUM lapa: React.js ģenerēta lapa izmantojot Node.js un datubāzes (MySQL/MongoDB) REST API + dažādas papildus maksājumu, google maps API, log in/sign up kontu u.c. iespējas</div>
                </div>
            </div>
        </div>
    )
}
export default Prices