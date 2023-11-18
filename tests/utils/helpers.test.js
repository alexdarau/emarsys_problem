import { helpers } from "../../src/utils/helpers";

test("is working hour", () => {
    expect(helpers.isWorkingHour(new Date('2023-11-15T13:10:00'))).toBe(true);;
});

test("is not working hour because is 17:10", () => {
    expect(helpers.isWorkingHour(new Date('2023-11-15T17:10:00'))).toBe(false);;
});

test("is not working hour because is weekend", () => {
    expect(helpers.isWorkingHour(new Date('2023-11-18T13:10:00'))).toBe(false);;
});

test("is turnaround valid", () => {
    expect(helpers.isTurnaroundValid(10)).toBe(true);
});

test("is turnaround invalid", () => {
    expect(helpers.isTurnaroundValid(-10)).toBe(false);
});

test("is calculate hours working fine", () => {
    expect(helpers.calculateHoursToComplete(10, 5)).toEqual(5);
});

test("is calculate days working fine", () => {
    expect(helpers.calculateDaysToComplete(10, 5)).toEqual(1);
});

test("is weekend function working for weekends", () => {
    expect(helpers.isWeekend(new Date('2023-11-18T17:10:00'))).toBe(true);
});

test("is weekend function working for week days", () => {
    expect(helpers.isWeekend(new Date('2023-11-15T17:10:00'))).toBe(false);
});