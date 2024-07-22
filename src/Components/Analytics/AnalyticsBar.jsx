import React from 'react'
import AnalyticsWidget from './AnalyticsWidget'
import "../../Styles/Analytics.css"

export default function AnalyticsBar() {
  return (
    <div className="analytics-bar">
      <AnalyticsWidget widgetType={"Monthly Sales"}/>
      <AnalyticsWidget widgetType={"Members"}/>
      <AnalyticsWidget widgetType={"Empty Widget"}/>
    </div>
  )
}
