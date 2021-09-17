const Manager = require("../lib/Manager");

test("Set Office Number in constructor", () => {
    const officeNB = 1;
    const employee = new Manager("ahrum", 1, "ahrum@gmail.com", officeNB);
    expect(employee.officeNB).toStrictEqual(officeNB);
});


test("Get Office Number using getOffice()", () => {
    const getOfficeNB = 1;
    const employee = new Manager("ahrum", 1, "ahrum@gmail.com", getOfficeNB);
    expect(employee.getOfficeNB()).toStrictEqual(getOfficeNB);
});


test("getRole() functions", () => {
    const getRole = "Manager";
    const employee = new Manager("ahrum", 1, "ahrum@gmail.com");
    expect(employee.getRole()).toStrictEqual(getRole);
});
