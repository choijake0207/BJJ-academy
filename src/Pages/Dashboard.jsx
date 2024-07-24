import React, {useContext} from 'react'
import PageLayout from '../Layouts/PageLayout'
import CheckList from '../Components/Checklist/CheckList'
import AnalyticsBar from '../Components/Analytics/AnalyticsBar'
import "../Styles/Dashboard.css"
import { AuthContext } from '../Context/AuthContext'
export default function Dashboard() {

  const {authUser} = useContext(AuthContext)
  const isStudent = authUser.role === "Student"
  return (
    <PageLayout pageType={"Dashboard"}>
      <div className="dashboard">
        {!isStudent && <AnalyticsBar/>}
        <CheckList
          isStudent={isStudent}
        />
      </div>
    </PageLayout>
    
  )
}
