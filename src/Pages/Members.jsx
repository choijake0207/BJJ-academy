import React from 'react'
import MemberList from '../Components/Members/MemberList'
import PageLayout from '../Layouts/PageLayout'
import "../Styles/Members.css"

export default function Members() {
  return (
    <PageLayout pageType={"Members Directory"}>
        <div className="members">
            <MemberList/>
        </div>
    </PageLayout>
  )
}
