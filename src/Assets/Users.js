const Classes = [
    {
        id: 101,
        name: "NoGi Fundamentals",
        teacher: "Jane Doe",
        students: [],
        start: "04:00pm",
        end: "06:00pm",
        day: "Monday"
    },
    {
        id: 102,
        name: "Gi Fundamentals",
        teacher: "Jane Doe",
        students: [],
        start: "04:00pm",
        end: "06:00pm",
        day: "Wednesday"
    },
    {
        id: 103,
        name: "NoGi Advanced",
        teacher: "Gordon Ryan",
        students: [],
        start: "7:00pm",
        end: "9:00pn",
        day: "Tuesday"
    }, 
    {
        id: 104,
        name: "Open Mat",
        teacher: "",
        students: [],
        start: "11:00am",
        end: "1:00pm",
        day: "Sunday"
    }
]

const Memberships = {
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
        todos: [],
        attending: [Classes[0], Classes[1]],
        role: "member",
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
        todos: [],
        teaching: [Classes[0], Classes[1]],
        role: "admin"
    },
    {
        id: 2,
        firstName: "Gordon",
        lastName: "Ryan",
        teaching: [Classes[3]],
        role: "admin"
    },
    {
        id: 3,
        firstName: "Nicky",
        lastName: "Ryan",
        attending: [Classes[3], Classes[4]],
        role: "member",
        membership: {
            type: "premium",
            start: "2017-1-11"
        }
    }
]

