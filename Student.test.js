const summary = require('./Student')
test('Успіхі в навчанні: ', () => {
    expect(summary).toBeDefined();
    expect(summary).toBeTruthy();
});

const averageStudentGrade = require("./Student")
test('Середня оцінка студента: ', () => {
    expect(averageStudentGrade).toEqual(78.8);
})

const ageStudent = require('./Student')
test('Вік студента: ', () => {
    expect(ageStudent).toBeGreaterThan(18);
});

