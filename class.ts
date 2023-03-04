import {Login, User}  from './interfaces'

// Defining an interface

interface Address{
    street: string,
    city: string,
    state: string,
    pin: string
}

// Defining your class

class Employee implements Login{
    // Defining fields with and without default values
    #id: number;
    protected name: string;
    address: Address;
    partTime: boolean = false;
    // only 1 constructor can be defined
    constructor(id: number, name: string, address: Address){
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    // defining methods
    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`
    }

    // static methods
    static numEmployees(): number{
        return 50
    }

    // getters and setters
    get empId(): number{
        return this.#id
    }

    set empId(num: number){
        this.#id = num
    } 

    // implementing methods from Login
    login(): User{
        return {name: this.name, id: this.#id, age: 27, }
    }
}

let emp = new Employee(10, 'John', {
    street: '221B Baker Street', 
    city: 'London', state: 'Idk', 
    pin: 'HOLMES'});
console.log(emp.empId)
emp.empId = 20
console.log(emp.empId)

// cretaing a subclass

class Manager extends Employee{
    constructor(id: number, name: string, address: Address){
        // Use the super keyword to run the superclass' method
        super(id, name, address)
    }

    getNameWithAddress(): string{
        return `${this.name} is a manager who stays at ${this.address}`
    }
}
