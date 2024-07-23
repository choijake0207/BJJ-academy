import React, {useContext, useState} from 'react'
import {AuthContext} from "../../Context/AuthContext"
import { Memberships } from '../../Assets/Users'

export default function MembershipPlans() {
    const {authUser} = useContext(AuthContext)
  return (
    <section className="membership-plans">
        <h3>Available Plans</h3>
        <div className="plans-container">
            {Memberships.map(plan => {
                return (
                    <div className="plan" key={plan.id}>
                        <header>
                            <h3>{plan.type}</h3>
                            <h3>${plan.month}/month</h3>
                        </header>
                        <button>Cancel</button> 
                    </div>
                )
            })}
        </div>
    </section>
  )
}
