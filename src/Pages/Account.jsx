import React from 'react'
import PageLayout from "../Layouts/PageLayout"

export default function Account () {


  return (
    <PageLayout pageType={"Account"}>
      <div className="account">
        <nav className="account-nav-bar">
          <button>Profile</button>
          <button>Membership</button>
        </nav>
  
      </div>

    </PageLayout>
  )

}