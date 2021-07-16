class EmployeePayrollData {

    constructor(...params) {
        this.profile = params[0];
        this.gender = params[1];
        this.department = params[2];
        this.salary = params[3];
        this.startDate = params[4];
        this.notes = params[5];
    }

    //getter and setter method
    get profile() {
        return this._profile;
    }
    set profile(profile) {
        this._profile = profile;
    }

    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }
    get notes() {
        return this._notes;
    }
    set notes(notes) {
        this._notes = notes;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        let idRegex = RegExp("^[1-9]{1}[0-9]*$");
        if (idRegex.test(id)) {
            this._id = id;
        } else {
            throw "Invalid id";
        }
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        let sRegex = RegExp("^[1-9]{1}[0-9]*$");
        if (sRegex.test(salary)) {
            this._salary = salary;
        } else {
            throw "Invalid salary";
        }
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        let gRegex = RegExp("^[MF]$");
        if (gRegex.test(gender)) {
            this._gender = gender;
        } else {
            throw "Invalid gender";
        }
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        let date = new Date();
        if (startDate <= date) {
            this._startDate = startDate;
        } else {
            throw "Invalid Date";
        }
    }

    toString() {
        return (
            ", profile=" + this.profile +
            ", salary=" + this.salary +
            ", department=" + this.department +
            ", notes=" + this.notes +
            ", gender: " + this.gender +
            ", startDate: " + this.startDate
        );
    }
}