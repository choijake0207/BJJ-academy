import React, {useState} from 'react'

export default function MembersSearch() {
    const [sortSelection, setSortSelection] = useState("")
    const [filterSelection, setFilterSelection] = useState("")
  return (
    <div className="member-search-bar">
        <select className="filter-by" value={filterSelection} onChange={(e) => setFilterSelection(e.target.value)}>
            <option value="">Filter By</option>
            <option value="students">Students</option>
            <option value="coaches">Coaches</option>
        </select>
        <select className="sort-by" value={sortSelection} onChange={(e) => setSortSelection(e.target.value)}>
            <option value="">Sort By</option>
            <option value="alphabetical">A-Z</option>
            <option value="joindate">Join Date</option>
        </select>
    </div>
  )
}
