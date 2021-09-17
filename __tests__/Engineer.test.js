const Engineer = require("../lib/Engineer");

test("Set GitHub in constructor", () => {
    const Github = "ahrumnoh";
    const employee = new Engineer("ahrum", 1, "ahrum@gmail.com", Github);
    expect(employee.github).toStrictEqual(Github);
});


test("Set City in constructor", () => {
    const City = "sydney";
    const employee = new Engineer("ahrum", 1, "ahrum@gmail.com", "ahrumnoh", City);
    expect(employee.city).toStrictEqual(City);
});

test("getGitHub() function", () => {
    const getGitHub = "ahrumnoh";
    const employee = new Engineer("ahrum", 1, "ahrum@gmail.com", getGitHub);
    expect(employee.getGithub()).toStrictEqual(getGitHub);
});


test("getCity() function", () => {
    const getCity = "sydney";
    const employee = new Engineer("ahrum", 1, "ahrum@gmail.com", "ahrumnoh", getCity);
    expect(employee.getCity()).toStrictEqual(getCity);
});




test("getRole() function", () => {
    const getRole = "Engineer";
    const employee = new Engineer("ahrum", 1, "ahrum@gmail.com", "ahrumnoh");
    expect(employee.getRole()).toStrictEqual(getRole);
});