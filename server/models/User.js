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
            type: "Standard",
            start: "2021-7-12"
        },
        payment: [
            {
                id: 0,
                name: "John Doe",
                bank: "MeBank",
                number: "1234-5678-9101-1121"
            }
        ]
    },
    {
        id: 1,
        firstName: "Jane",
        lastName: "Doe",
        username: "janedoe",
        password: "janedoe",
        email: "janedoe@email.com",
        phone: "000-000-0000",
        todos: [],
        teaching: [Classes[0], Classes[1]],
        role: "Coach"
    },
    {
        id: 2,
        firstName: "Gordon",
        lastName: "Ryan",
        username: "gordonryan",
        password: "gordonryan",
        email: "gordonryan@email.com",
        phone: "222-222-2222",
        todos: [],
        teaching: [Classes[3]],
        role: "Coach"
    },
    {
        id: 3,
        firstName: "Nicky",
        lastName: "Ryan",
        username: "nickyryan",
        password: "nickyryan",
        email: "nickyryan@email.com",
        phone: "333-333-3333",
        todos: [],
        attending: [Classes[3], Classes[4]],
        role: "Student",
        membership: {
            type: "Premium",
            start: "2017-1-11"
        },
        payment: [
            {
                id: 0,
                name: "Nicky Ryan",
                bank: "MasterBank",
                number: "0123-4567-8910-1112"
            }
        ]
    }
]

