class Employee{
    // Defining fields with and without default values
    #id: number;
    protected name: string;
    address: string;
    partTime: boolean = false;
    // only 1 constructor can be defined
    constructor(id: number, name: string, address: string){
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
}

let emp = new Employee(10, 'John', '221B Baker Street');
console.log(emp.empId)
emp.empId = 20
console.log(emp.empId)

// cretaing a subclass

class Manager extends Employee{
    constructor(id: number, name: string, address: string){
        // Use the super keyword to run the superclass' method
        super(id, name, address)
    }

    getNameWithAddress(): string{
        return `${this.name} is a manager who stays at ${this.address}`
    }
}
