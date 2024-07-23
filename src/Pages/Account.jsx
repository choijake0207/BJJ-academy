import React, {useState} from 'react'
import PageLayout from "../Layouts/PageLayout"
import Profile from '../Components/Account/Profile'
import Membership from '../Components/Account/Membership'
import "../Styles/Account.css"

export default function Account () {

  const [activeComponent, setActiveComponent] = useState("profile")
  const renderProfileComponent = () => {
    switch (activeComponent) {
      case "profile":
        return <Profile/>
      case "membership":
        return <Membership/>
      default:
        return <Profile/>
    }
  }
// refactor nav bar into navLinks
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
        {renderProfileComponent()}
  
      </div>
    </PageLayout>
  )

}