const Intern = require("../lib/Intern");

test("Set University in constuctor", () => {
    const University = "USYD";
    const employee = new Intern("Ahrum", 1, "ahrum@gmail.com", University);
    expect(employee.university).toBe(University);
});

test("Set Graduation Year in constuctor", () => {
    const GradYear = "2020";
    const employee = new Intern("Ahrum", 1, "ahrum@gmail.com", "USYD", GradYear);
    expect(employee.graduationyear).toBe(GradYear);
});


test("Get University using getUniversity() function", () => {
    const getUniversity = "USYD";
    const employee = new Intern("ahrum", 1, "ahrum@gmail.com", getUniversity);
    expect(employee.getUniversity()).toBe(getUniversity);
});


test("Get Graduation Year using getGraduationYear() function", () => {
    const getGradYear = "2020";
    const employee = new Intern("ahrum", 1, "ahrum@gmail.com", "USYD", getGradYear);
    expect(employee.getGraduationYear()).toBe(getGradYear);
});


test("getRole() functions", () => {
    const getRole = "Intern";
    const employee = new Intern("ahrum", 1, "ahrum@gmail.com", "USYD");
    expect(employee.getRole()).toBe(getRole);
});

