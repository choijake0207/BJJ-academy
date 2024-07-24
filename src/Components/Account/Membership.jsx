import React from 'react'
import MembershipPlans from './MembershipPlans'
import Payment from './Payment'
import Statements from './Statements'
export default function Membership() {
  return (
    <div className="membership">
      <MembershipPlans/>
      <Payment/> 
      <Statements/>
    </div>
  )
} 
