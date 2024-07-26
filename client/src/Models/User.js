import {Classes} from "../Models/Class"

export const Users = [

    {
        id: 0,
        firstName: "John",
        lastName: "Doe",
        membership: {
            type: "Standard",
            start: "2022-07-12"
        },
        phone: "000-000-0000",
        email: "johndoe@email.com",
        payment: {
            id: 0,
            bank: "MeBank",
            number: "0001-0002-0003-0004",
            name: "John Doe",
        },
        emergency: "911",
        role: "Student",
        classes: [Classes[0], Classes[2]]
    },
    {
        id: 1,
        firstName: "Jane",
        lastName: "Doe",
        phone: "111-111-1111",
        email: "janedoe@bjj.com",
        emergency: "911",
        role: "Coach",
        classes: [Classes[0], Classes[1], Classes[2]]
    }
]