import React, {useState} from 'react'
import PageLayout from "../Layouts/PageLayout"
import "../Styles/Account.css"

export default function Account () {

  const [activeComponent, setActiveComponent] = useState("profile")

  return (
    <PageLayout pageType={"Account"}>
      <div className="account">
        <nav className="account-nav-bar">
          <button 
            onClick={() => setActiveComponent("profile")}
            className={activeComponent === "profile" ? "active" : null}>
            Profile
          </button>
          <button 
            onClick={() => setActiveComponent("membership")}
            className={activeComponent === "membership" ? "active" : null}>
            Membership
          </button>
        </nav>
  
      </div>

    </PageLayout>
  )

}