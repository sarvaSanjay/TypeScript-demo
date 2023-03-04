"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
class Employee {
    // only 1 constructor can be defined
    constructor(id, name, address) {
        // Defining fields with and without default values
        _Employee_id.set(this, void 0);
        this.partTime = false;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    // defining methods
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
    // static methods
    static numEmployees() {
        return 50;
    }
    // getters and setters
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(num) {
        __classPrivateFieldSet(this, _Employee_id, num, "f");
    }
}
_Employee_id = new WeakMap();
let emp = new Employee(10, 'John', '221B Baker Street');
console.log(emp.empId);
emp.empId = 20;
console.log(emp.empId);
// cretaing a subclass
class Manager extends Employee {
    constructor(id, name, address) {
        // Use the super keyword to run the superclass' method
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager who stays at ${this.address}`;
    }
}
