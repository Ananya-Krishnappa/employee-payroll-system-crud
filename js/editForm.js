window.addEventListener('DOMContentLoaded', (event) => {
    prePopulateForm();
});

const getEmpPayrollDataFromStorage = () => {
    return localStorage.getItem('EditEmployee') ? JSON.parse(localStorage.getItem('EditEmployee')) : [];
}

/**
 * Function to populate employee
 */
const prePopulateForm = () => {
    let employee = getEmpPayrollDataFromStorage();
    if (employee[0]._id == extractIdFromUrl()) {
        setForm(employee);
    }
}

/**
 * Function to set the form with employee details from local storage
 * @param {*} empPayroll 
 */
const setForm = (empPayroll) => {
    populateValue('#name', empPayroll[0]._name);
    populateSelectedValues('[name=profile]', empPayroll[0]._profile);
    populateSelectedValues('[name=gender]', empPayroll[0]._gender);
    populateSelectedValues('[name=department]', empPayroll[0]._department);
    populateValue('#salary', empPayroll[0]._salary);
    populateTextValue('#salaryOutput', empPayroll[0]._salary);
    populateValue('#notes', empPayroll[0]._notes);
    let date = empPayroll[0]._startDate.split("-");
    populateValue('#day', date[2].split("T")[0]);
    populateValue('#month', getMonth(parseInt(date[1])));
    populateValue('#year', date[0]);
}

function getMonth(month) {
    var months = {
        1: "jan",
        2: "feb",
        3: "mar",
        4: "apr",
        5: "may",
        6: "jun",
        7: "jul",
        8: "aug",
        9: "sep",
        10: "oct",
        11: "nov",
        12: "dec"
    };
    return months[month];
}

const populateSelectedValues = (propertyValue, value) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        if (Array.isArray(value)) {
            if (value.includes(item.value)) {
                item.checked = true;
            }
        } else if (item.value == value) {
            item.checked = true;
        }
    });
}

const populateTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const populateValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}