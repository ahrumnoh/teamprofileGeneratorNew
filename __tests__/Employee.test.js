const Employee = require("../lib/Employee");

test("New Employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toStrictEqual("object");
});

test("Set Employee Name using constructor", () => {
    const name = "Ahrum";
    const employee = new Employee(name);
    expect(employee.name).toStrictEqual(name);
});

test("Set ID using constructor", () => {
    const ID = 1;
    const employee = new Employee("Ahrum", ID);
    expect(employee.id).toStrictEqual(ID);
});

test("Set Email using constructor", () => {
    const Email = "ahrumnoh@gmail.com";
    const employee = new Employee("Ahrum", 1, Email);
    expect(employee.email).toStrictEqual(Email);
});

test("Get name using getName()", () => {
    const Name = "ahrum";
    const employee = new Employee(Name);
    expect(employee.getName()).toStrictEqual(Name);
});

test("Get ID using getId()", () => {
    const ID = 60;
    const employee = new Employee("Ahrum", ID);
    expect(employee.getId()).toStrictEqual(ID);
});

test("Get Email using getEmail()", () => {
    const testEmail = "ahrumnoh@gmail.com";
    const employee = new Employee("Ahrum", 1, testEmail);
    expect(employee.getEmail()).toStrictEqual(testEmail);
});

test("Using getRole() function", () => {
    const testRole = "Employee";
    const employee = new Employee("Ahrum", 1, "ahrumnoh@gmail.com");
    expect(employee.getRole()).toStrictEqual(testRole);
});