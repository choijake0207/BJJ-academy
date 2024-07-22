import React, {useContext} from 'react'
import PageLayout from '../Layouts/PageLayout'
import CheckList from '../Components/Checklist/CheckList'
import AnalyticsWidget from '../Components/Analytics/AnalyticsWidget'
import "../Styles/Dashboard.css"
import { AuthContext } from '../Context/AuthContext'
export default function Dashboard() {

  const {authUser} = useContext(AuthContext)
  const isStudent = authUser.role === "member"
  return (
    <PageLayout pageType={"Dashboard"}>
      <div className={isStudent ? "student dashboard" : "admin dashboard"}>
        {!isStudent && <AnalyticsWidget/>}
        <CheckList
          isStudent={isStudent}
        />
      </div>
    </PageLayout>
    
  )
}
