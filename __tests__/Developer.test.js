const Developer = require('../lib/Developer');

test("creates a new developer object", () => {
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const github = 'wfk-tokunaga';
    const developer = new Developer(name, id, email, github);

    expect(developer.name).toBe('eika');
    expect(developer.email).toBe('wktokunaga@gmail.com');
    expect(developer.id).toBe(0);
    expect(developer.github).toBe('wfk-tokunaga');
})

test("gets name of developer", () => {
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const github = 'wfk-tokunaga';
    const developer = new Developer(name, id, email, github);

    expect(developer.getName()).toBe('eika');
})

test("gets id of developer", () => {
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const github = 'wfk-tokunaga';
    const developer = new Developer(name, id, email, github);

    expect(developer.getId()).toBe(0);
})

test("gets email of developer", () => {
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const github = 'wfk-tokunaga';
    const developer = new Developer(name, id, email, github);

    expect(developer.getEmail()).toBe('wktokunaga@gmail.com');
})

test("gets office of developer", () => {
    const name = 'eika';
    const id = 0;
    const email = 'wktokunaga@gmail.com';
    const github = 'wfk-tokunaga';
    const developer = new Developer(name, id, email, github);

    expect(developer.getGithub()).toBe('wfk-tokunaga');
})