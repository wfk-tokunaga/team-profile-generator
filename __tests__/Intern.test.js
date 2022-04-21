const Intern = require('../lib/Intern');

test("creates a new intern object", () => {
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const school = 'Oberlin College';
    const intern = new Intern(name, id, email, school);

    expect(intern.name).toBe('eika');
    expect(intern.email).toBe('wktokunaga@gmail.com');
    expect(intern.id).toBe(0);
    expect(intern.school).toBe('Oberlin College');
})

test("gets name of intern", () => {
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const school = 'Oberlin College';
    const intern = new Intern(name, id, email, school);

    expect(intern.getName()).toBe('eika');
})

test("gets id of intern", () => {
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const school = 'Oberlin College';
    const intern = new Intern(name, id, email, school);

    expect(intern.getId()).toBe(0);
})

test("gets email of intern", () => {
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const school = 'Oberlin College';
    const intern = new Intern(name, id, email, school);

    expect(intern.getEmail()).toBe('wktokunaga@gmail.com');
})

test("gets office of intern", () => {
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const school = 'Oberlin College';
    const intern = new Intern(name, id, email, school);

    expect(intern.getSchool()).toBe('Oberlin College');
})