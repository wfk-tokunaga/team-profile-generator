// const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test("creates a new employee object", () => {
    const position = 'Manager';
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const employee = new Employee(position, name, id, email);

    expect(employee.name).toBe('eika');
    expect(employee.email).toBe('wktokunaga@gmail.com');
    expect(employee.id).toBe(0);
})

test("gets name of employee", () => {
    const position = 'Manager';
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const employee = new Employee(position, name, id, email);

    expect(employee.getName()).toBe('eika');
})

test("gets email of employee", () => {
    const position = 'Manager';
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const employee = new Employee(position, name, id, email);

    expect(employee.getEmail()).toBe('wktokunaga@gmail.com');
})

test("gets email of employee", () => {
    const position = 'Manager';
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const employee = new Employee(position, name, id, email);

    expect(employee.getId()).toBe(0);
})