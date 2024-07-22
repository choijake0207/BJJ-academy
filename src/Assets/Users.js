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
    }
]

