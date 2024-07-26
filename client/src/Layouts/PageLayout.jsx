import React from 'react'

export default function PageLayout({children, pageType}) {
  return (
    <div className="page-layout">
        <header className="page-header">
            <p>{pageType}</p>
        </header>
        {children}
    </div>
  )
}
