import React from 'react'

export default function PageLayout({children, pageType}) {
  return (
    <div className="page-layout">
        <header className="page-header">
            <h3>{pageType}</h3>
        </header>
        {children}
    </div>
  )
}
