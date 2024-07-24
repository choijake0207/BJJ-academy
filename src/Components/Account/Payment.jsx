import React, {useContext} from 'react'
import { AuthContext } from '../../Context/AuthContext'
import {PlusCircle} from "phosphor-react"

export function PayCard({bank, number, name }) {
    return (<div className="pay-card">
        <p className="card-bank">{bank}</p>
        <p className="card-number">{number}</p>
        <p className="card-name">{name}</p>
    </div>)
}


export default function Payment() {
    const {authUser} = useContext(AuthContext)
    const profileUser = authUser
    const paymentMethods = profileUser.payment
  return (
    <section className="payment">
        <h3>Payment Methods</h3>
        <div className="card-container">
            {paymentMethods.map(card => {
                return (
                    <PayCard
                        key={card.id}
                        bank={card.bank}
                        number={card.number}
                        name={card.name}
                    />
                )
            })}
            <div className="add-payment">
                <PlusCircle size={"50px"}/>
                <p>Add Card</p>
            </div>
        </div>
        
    </section>
  )
}
