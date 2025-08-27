class Employee{
    name:string;
    salary:number;
    email:string;
    phoneNumber:string;

    constructor(name:string, number:number, email:string, phoneNumber:string){
         this.name = name || "Unknown";
        this.salary = number || 0;
        this.email = email || "Unknown";
        this.phoneNumber = phoneNumber || "Unknown";
    }     
}

const emp1 = new Employee('John Doe', 50000, 'YK3v7@example.com', '1234567890');
const emp2 = new Employee('Jane Smith', 60000, 'jDcR5@example.com', '9876543210');
const emp3 = new Employee('Alice Johnson', 70000, '3M5eA@example.com', '5555555555');
emp2.salary = 70000;
console.log(emp1);
console.log(emp2);
console.log(emp3);


const msg = null;
console.log(msg ?? "No message");
console.log( msg === null ? "No massage" : msg);