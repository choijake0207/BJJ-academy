import {Classes} from "../Models/Class"

export const Users = [
    {
        id: 0,
        username: "johndoe",
        password: "johndoe",
        role: "Student",
        personal: {
            firstName: "John",
            lastName: "Doe",
            phone: "000-000-0000",
            email: "johndoe@email.com",
            emergency: "911"
        },
        membership: {
            type: "Standard",
            start: "2022-08-25",
            payment: [
                {
                    id: 0,
                    bank: "MeBank",
                    number: "0001-0002-0003-0004",
                    status: "active"
                }
            ]
        },
        activity: {
            todos: [],
            classes: [Classes[0], Classes[2]]
        }, 
    },
    {
        id: 1,
        username: "janedoe",
        password: "janedoe",
        role: "Coach",
        personal: {
            firstName: "Jane",
            lastName: "Doe",
            phone: "111-111-1111",
            email: "janedoe@bjj.com",
            emergency: "911"
        },
        activity: {
            todos: [],
            classes: [Classes[0], Classes[1], Classes[2]]
        },
    }
]