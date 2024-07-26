import React from 'react'
import {Users} from "../../Models/User"
import {User} from "phosphor-react"
 
export default function MemberList() {
  return (
    <ul className="member-list">
        {Users.map(user => {
            return (
                <li className="member-list-item"key={user.id}>
                    <User size={"4em"}/>
                    <h4>{user.personal.firstName} {user.personal.lastName}</h4>
                    <p><i>{user.role}</i></p>
                    {user.role === "Student" && 
                        <p style={{color: "grey"}}>Joined {user.membership.start}</p>
                    }

                </li>
            )
        })}
    </ul>
  )
}
