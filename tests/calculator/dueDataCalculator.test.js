const calculateDueDate = require("../../src/calculator/dueDateCalculator");

test("due date for the same day", () => {
    expect(calculateDueDate(new Date('2023-11-15T13:10:00'), 3)).toEqual(new Date('2023-11-15T16:10:00'));
});

test("due date for multiple days", () => {
    expect(calculateDueDate(new Date('2023-11-15T13:10:00'), 10)).toEqual(new Date('2023-11-16T15:10:00'));
});

test("due date for non-working days", () => {
    expect(calculateDueDate(new Date('2023-11-15T13:10:00'), 24)).toEqual(new Date('2023-11-20T13:10:00'));
});

test("a problem is reported out of working hours", () => {
    expect(() => calculateDueDate(new Date('2023-11-15T17:10:00'), 24))
        .toThrow(new Error('Out of working hours'));
});

test("the turnaround can't be negative", () => {
    expect(() => calculateDueDate(new Date('2023-11-15T16:10:00'), -10))
        .toThrow(new Error('Wrong turnaround'));
});

