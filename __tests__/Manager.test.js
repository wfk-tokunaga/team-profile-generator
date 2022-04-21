const Manager = require('../lib/Manager');

test("creates a new manager object", () => {
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const officeNumber = 100;
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.name).toBe('eika');
    expect(manager.email).toBe('wktokunaga@gmail.com');
    expect(manager.id).toBe(0);
    expect(manager.officeNumber).toBe(100);
})

test("gets name of manager", () => {
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const officeNumber = 100;
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getName()).toBe('eika');
})

test("gets id of manager", () => {
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const officeNumber = 100;
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getId()).toBe(0);
})

test("gets email of manager", () => {
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const officeNumber = 100;
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getEmail()).toBe('wktokunaga@gmail.com');
})

test("gets office of manager", () => {
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const officeNumber = 100;
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getOffice()).toBe(100);
})