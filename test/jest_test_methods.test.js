/* Masthan Swamy */

function sum(a, b){
    return a+b;
}

test("basic compare", ()=>{
    const z = sum(2, 3);

    expect(z).toBe(5);
});

test("Object assignment", ()=>{
    const a = {id: 10};

    // use toStrictEqual for comparing objects
    expect(a).toStrictEqual({id: 10});
});

test("Contradiction", ()=>{
    const a = sum(2, 3);

    expect(a).not.toBe(!5);
});

test("zero", ()=>{
    const a = 0;

    expect(a).not.toBeNull();
    expect(a).toBeDefined();
    expect(a).toBeFalsy(); // '0' is falsy value in JS
    expect(a).not.toBeTruthy();

    // toBe and toEqual works same for numbers
    expect(a).toBe(0);
    expect(a).toEqual(0);
});

test("comparisions", ()=>{
    const a = 5;

    expect(a).toBeGreaterThan(4);
    expect(a).toBeLessThan(10);
    expect(a).toBeGreaterThanOrEqual(5);
    expect(a).not.toBeGreaterThanOrEqual(5.5);
    expect(a).toEqual(5);
});

test("operations on array", ()=>{
    const a = ['milk', 'icecream', 'butter'];

    expect(a).toContain('butter');
});