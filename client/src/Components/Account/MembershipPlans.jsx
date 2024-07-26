import React, {useContext, useState} from 'react'
import {AuthContext} from "../../Context/AuthContext"
import { Memberships } from '../../Models/Membership'

export default function MembershipPlans() {
    const {authUser} = useContext(AuthContext)
    const profileUser = authUser // need to refactor to accept navig params for admins
  return (
    <section className="membership-plans">
        <h3>Available Plans</h3>
        <div className="plans-container">
            {Memberships.map(plan => {
                return (
                    <div className={profileUser.membership.type === plan.type ? "active plan": "plan"} id={plan.type}key={plan.id}>
                        <header>
                            <h4>{plan.type}</h4>
                            <h4>${plan.month} <span>/ month</span></h4>
                        </header>
                        <p><i>Annual Sum: ${plan.year}</i></p>
                        <button>{profileUser.membership.type === plan.type ? "Cancel" : "Switch"}</button> 
                    </div>
                )
            })}
        </div>
    </section>
  )
}
