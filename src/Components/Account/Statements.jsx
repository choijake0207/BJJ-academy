import React, {useState, useEffect, useContext} from 'react'
import { BillingsUtil } from '../../Utility/Billings'
import { AuthContext } from '../../Context/AuthContext'


export default function Statements() {
    const [statements, setStatements] = useState([])
    const {authUser} = useContext(AuthContext)
    const profileUser = authUser
    useEffect(() => {
        const billings = BillingsUtil(profileUser)
        setStatements(billings)
    }, [])

    console.log(statements)


  return (
    <section className="statements">
        <h3>Statements</h3>
        <div className="statements-container">
            {statements.slice().reverse().map((statement, index) => {
                return (
                    <div className="statement" key={index}>
                        <p>{statement.period}</p>
                        <p>{statement.details}</p>
                        <p>{statement.cost}</p>
                    </div>
                )
            })}

        </div>
    </section>
  )
}
