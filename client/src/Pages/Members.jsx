import React from 'react'
import MemberList from '../Components/Members/MemberList'
import PageLayout from '../Layouts/PageLayout'
import MembersSearch from '../Components/Members/MembersSearch'
import "../Styles/Members.css"

export default function Members() {
  return (
    <PageLayout pageType={"Members Directory"}>
        <div className="members">
            <MembersSearch/>
            <MemberList/>
        </div>
    </PageLayout>
  )
}
