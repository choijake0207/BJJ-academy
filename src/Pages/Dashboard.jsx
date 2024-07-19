import React from 'react'
import PageLayout from '../Layouts/PageLayout'
import CheckList from '../Components/Checklist/CheckList'
import "../Styles/Dashboard.css"

export default function Dashboard() {
  return (
    <PageLayout pageType={"Dashboard"}>
      <div className="dashboard">
        <CheckList/>
      </div>
    </PageLayout>
    
  )
}
