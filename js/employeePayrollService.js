/**
 * Function to save the employee details
 */
function save() {
    try {
        let employeePayrollData = new EmployeePayrollData();
        employeePayrollData.name = document.forms["form"]["name"].value;
        employeePayrollData.profile = document.forms["form"]["profile"].value;
        employeePayrollData.gender = document.forms["form"]["gender"].value;
        const checkboxes = document.querySelectorAll(`input[name="department"]:checked`);
        let department = [];
        checkboxes.forEach((checkbox) => {
            department.push(checkbox.value);
        });
        employeePayrollData.department = department;
        employeePayrollData.salary = document.forms["form"]["salary"].value;
        let day = document.forms["form"]["day"].value;
        let month = document.forms["form"]["month"].value;
        let year = document.forms["form"]["year"].value;
        let date = `${day}-${month}-${year}`;
        let notes = document.forms["form"]["notes"].value;
        employeePayrollData.startDate = parseDate(date);
        console.log(employeePayrollData.toString());
    } catch (e) {
        console.error(e);
    }
}

/**
 * Function to convert date type
 * @param {*} s 
 * @returns 
 */
function parseDate(s) {
    var months = {
        jan: 0,
        feb: 1,
        mar: 2,
        apr: 3,
        may: 4,
        jun: 5,
        jul: 6,
        aug: 7,
        sep: 8,
        oct: 9,
        nov: 10,
        dec: 11
    };
    var p = s.split('-');
    return new Date(p[2], months[p[1].toLowerCase()], p[0]);
}

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output-text');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
})