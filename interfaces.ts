export interface User{
    name: string,
    age: number,
    id: number,
    // Optional parameter
    email?: string
}

interface Employees extends User{
    salary: number
}

let employee: Employees = {name: 'John', age: 30, id: 20, salary: 30000}

export interface Login{
    login(): User
}