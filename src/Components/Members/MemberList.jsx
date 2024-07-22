import React from 'react'
import {Users} from "../../Assets/Users"
import {User} from "phosphor-react"

export default function MemberList() {
  return (
    <ul className="member-list">
        {Users.map(user => {
            return (
                <li>
                    <User size={"1em"}/>
                    <h4>{user.firstName}{user.lastName}</h4>
                    {user.role === "Student" && 
                        <p>Joined {user.membership.start}</p>
                    }
                    <p><i>{user.role}</i></p>

                </li>
            )
        })}
    </ul>
  )
}
