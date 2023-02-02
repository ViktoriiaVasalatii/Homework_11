 class Student {
    constructor(name, lastname, yearBithday, mark = []) {
        this.name = name;
        this.lastname = lastname;
        this.yearBithday = yearBithday;
        this.mark = mark;
    }
};
class Calculation extends Student {
    static average;
    static averageMark;
    static averageVisit;
    static totalVisit;
    static age;
    constructor(name, lastname, yearBithday, mark, arrayVisiting = []) {
        super(name, lastname, yearBithday, mark);
        this.arrayVisiting = arrayVisiting;
    }
    
    // Метод плвертає вік студента
    ageStudent() {
        this.age = new Date().getFullYear() - this.yearBithday;
        return this.age;
    };
    // Метод обчислює та повертає середній бал  
    averageStudentGrade() {
        this.average = 0;
        for (let i = 0; i < this.mark.length; i++) {
            this.average = this.mark[i] + this.average;
        }
        this.averageMark = this.average / this.mark.length;
        return this.averageMark;
    };
    // Методи записують відвідування 
    present() {
        this.arrayVisiting.push("true");
        if (this.arrayVisiting.length >= 25) { this.arrayVisiting.length = 25 }
    };
    absent() {
        this.arrayVisiting.push("false");
        if (this.arrayVisiting.length >= 25) { this.arrayVisiting.length = 25 }
    };
    // Перевіряє середню оцінку і середнє відвідування 
    summary() {
        this.totalVisit = 0;
        for (let i = 0; i <= this.arrayVisiting.length; i++) {
            if (this.arrayVisiting[i] == 'true') {
                this.totalVisit += 1;
            }
        }
        this.averageVisit = this.totalVisit / this.arrayVisiting.length;
        if (this.averageMark > 90 && this.averageVisit > 0.9) {
            return "Молодець!";
        }
        else if (this.averageMark > 90 || this.averageVisit > 0.9) {
            return "Добре, але можна краще";
        }
        else {
            return "Редиска!";
        }
    }
};

const studentAnn = new Student();
const calculateForAnn = new Calculation("Ann", "Musk", 2000, [79, 94, 89, 100, 97]);
console.log(calculateForAnn.ageStudent());
console.log(calculateForAnn.averageStudentGrade());
calculateForAnn.present();
calculateForAnn.absent();
calculateForAnn.present();
calculateForAnn.present();
console.log(calculateForAnn.summary());


const studentDen = new Student();
const calculateForDen = new Calculation("Den", "Gates", 1996, [95, 65, 78, 87, 69])
console.log(calculateForDen.averageStudentGrade());

module.exports = calculateForAnn.summary();
module.exports = calculateForAnn.ageStudent();
module.exports= calculateForDen.averageStudentGrade();



 

