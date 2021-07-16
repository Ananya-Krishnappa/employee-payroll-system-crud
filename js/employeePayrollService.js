function save() {
    let name = document.forms["form"]["name"].value;
    let profile = document.forms["form"]["profile"].value;
    let gender = document.forms["form"]["gender"].value;
    const checkboxes = document.querySelectorAll(`input[name="department"]:checked`);
    let department = [];
    checkboxes.forEach((checkbox) => {
        department.push(checkbox.value);
    });
    let salary = document.forms["form"]["salary"].value;
    let day = document.forms["form"]["day"].value;
    let month = document.forms["form"]["month"].value;
    let year = document.forms["form"]["year"].value;
    let date = `${day}-${month}-${year}`;
    let notes = document.forms["form"]["notes"].value;
    let formattedDate = parseDate(date);
    try {
        let employeePayrollData = new EmployeePayrollData(
            profile, gender, department, salary, formattedDate, notes);
        console.log(employeePayrollData.toString());
    } catch (e) {
        console.error(e);
    }
}

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