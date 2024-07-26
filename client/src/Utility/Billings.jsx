import { Users } from "../Models/User";
import { Memberships } from "../Models/Membership";

// get membership monthly cost
function getMonthlyCharge(type) {
    const membershipType = Memberships.find(membership => membership.type === type)
    return membershipType.month
}
 

// get time elapsed in months
function getMonthsElapsed(end, start) {
    const startDate = new Date(start)
    const endDate = new Date(end)
    // turn year diff into months => add month diff
    let monthsElapsed = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth())
    // subtract 1 month if current date day is before start date day
    if (endDate.getDate() < startDate.getDate()) {
        monthsElapsed--
    }
    return monthsElapsed
}


// calculate charges (quantity & sum)
export function BillingsUtil (user) {
    const currentDate = new Date()
    if (user.role !== "Student") return 0
    const {type, start} = user.membership
    const monthCost  = getMonthlyCharge(type)
    const monthsElapsed = getMonthsElapsed(currentDate, start)
    const chargesList = []
    const startMonth = new Date(start).getMonth()
    const startYear = new Date(start).getFullYear()
    let currentMonth  = startMonth
    let currentYear = startYear

    for (let m = 0; m < monthsElapsed; m++) {
        const charge = {
            period: `${String(currentMonth + 1).padStart(2, "0")}/${currentYear}`,
            cost: monthCost,
            details: type
        }
        chargesList.push(charge)
        currentMonth++
        if (currentMonth > 11) {
            currentMonth=0
            currentYear++
        }
    }
    return chargesList
}