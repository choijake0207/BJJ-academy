import React, {useContext, useEffect, useState} from 'react'
import {User, Pencil} from "phosphor-react"
import {AuthContext} from "../../Context/AuthContext"


export default function Profile() {
    const {authUser, handlePropertyChange} = useContext(AuthContext)
    const profileUser = authUser //make seperate const for profile User for viewing other accounts
    const [isEdit, setIsEdit] = useState(false)
    const [editData, setEditData] = useState({
        firstName: profileUser.personal.firstName,
        lastName: profileUser.personal.lastName,
        email: profileUser.personal.email,
        phone: profileUser.personal.phone,
        emergency: profileUser.personal.emergency
    })
    const handleEditChange  = (e) => {
        const {name, value} = e.target
        setEditData(prev => ({...prev, [name]: value}))
    }
    const toggleEdit = () => {
        if (isEdit) {
            for (const property in editData) {
                handlePropertyChange(`personal.${property}`, editData[property])
            }
        }
        setIsEdit(!isEdit)
    }
   
  return (
    <div className="profile">
        <section className="public-info">
            <h3>Profile</h3>
            <User size={"70px"}/>
            <div className="public-details">
                <h4>{profileUser.personal.firstName} {profileUser.personal.lastName}</h4>
                <p>{profileUser.role}</p>
            </div>
        </section>
        <section className="personal-info">
            <h3>Personal Information</h3>
            <div className="personal-details">
                <label>First Name:</label>
                {isEdit ? 
                    <input
                        type="text"
                        name="firstName"
                        value={editData.firstName}
                        onChange={(e) => handleEditChange(e)}
                    /> : <p>{profileUser.personal.firstName}</p>
                }
                <label>Last Name:</label>
                {isEdit ? 
                    <input
                        type="text"
                        name="lastName"
                        value={editData.lastName}
                        onChange={(e) => handleEditChange(e)}
                    /> : <p>{profileUser.personal.lastName}</p>
                }
                <label>Email:</label>
                {isEdit ? 
                    <input
                        type="text"
                        name="email"
                        value={editData.email}
                        onChange={(e) => handleEditChange(e)}
                    /> : <p>{profileUser.personal.email}</p>
                }
                <label>Phone:</label>
                {isEdit ? 
                    <input
                        type="text"
                        name="phone"
                        value={editData.phone}
                        onChange={(e) => handleEditChange(e)}
                    /> : <p>{profileUser.personal.phone}</p>
                }
                <label>Emergency Contact:</label>
                {isEdit ? 
                    <input
                        type="phone"
                        name="emergency"
                        value={editData.emergency}
                        onChange={(e) => handleEditChange(e)}
                    /> : <p>{profileUser.personal.emergency}</p>
                }
            </div>
            <button onClick={toggleEdit}>
                {isEdit ? "Save" : <><Pencil/>Edit</>}
            </button>
        </section>
    </div>

  )
}
