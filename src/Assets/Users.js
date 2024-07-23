export const Classes = [
    {
        id: 101,
        name: "NoGi Fundamentals",
        teacher: "Jane Doe",
        students: [{id: 0}],
        start: "04:00pm",
        end: "06:00pm",
        day: "Monday"
    },
    {
        id: 102,
        name: "Gi Fundamentals",
        teacher: "Jane Doe",
        students: [{id: 0}],
        start: "04:00pm",
        end: "06:00pm",
        day: "Wednesday"
    },
    {
        id: 103,
        name: "NoGi Advanced",
        teacher: "Gordon Ryan",
        students: [{id: 3}],
        start: "7:00pm",
        end: "9:00pn",
        day: "Tuesday"
    }, 
    {
        id: 104,
        name: "Open Mat",
        teacher: "",
        students: [{id: 3}],
        start: "11:00am",
        end: "1:00pm",
        day: "Sunday"
    }
]

export const Memberships = {
    standard: {
        month: 100,
        year: 1200
    },
    premium: {
        month: 150,
        year: 1800
    }
}

export const Users = [
    {
        id: 0,
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        password: "johndoe",
        email: "johndoe@email.com",
        phone: "000-000-0000",
        emergency: "111-111-1111",
        todos: [],
        attending: [Classes[0], Classes[1]],
        role: "Student",
        membership: {
            type: "standard",
            start: "2021-7-12"
        }
    },
    {
        id: 1,
        firstName: "Jane",
        lastName: "Doe",
        username: "janedoe",
        password: "janedoe",
        email: "janedoe@email.com",
        phone: "000-000-0000",
        emergency: "111-111-1111",
        todos: [],
        teaching: [Classes[0], Classes[1]],
        role: "Coach"
    },
    {
        id: 2,
        firstName: "Gordon",
        lastName: "Ryan",
        teaching: [Classes[3]],
        role: "Coach"
    },
    {
        id: 3,
        firstName: "Nicky",
        lastName: "Ryan",
        attending: [Classes[3], Classes[4]],
        role: "Student",
        membership: {
            type: "premium",
            start: "2017-1-11"
        }
    }
]

