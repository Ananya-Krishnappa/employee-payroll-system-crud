/**
 * Display
Employee Details
from JSON Object
including the
Department
 */
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [{
            _name: 'Ananya',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '50000',
            _startDate: '29 Oct 2019',
            _notes: '',
            _id: new Date().getTime(),
            _profile: '../assets/profile-images/Ellipse -1.png'
        },
        {
            _name: 'Veena',
            _gender: 'female',
            _department: [
                'Sales',
            ],
            _salary: '40000',
            _startDate: '29 Oct 2019',
            _notes: '',
            _id: new Date().getTime(),
            _profile: '../assets/profile-images/Ellipse -8.png'
        }
    ];
    return empPayrollListLocal;
}

/**
 * Display All
Employee Payroll
Details from JSON
Object
 */
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" src="${empPayrollData._profile}" alt=""></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img name="${empPayrollData._id}" onclick="remove(this)" 
                    src="../assets/icons/delete-black-18dp.svg" alt="delete">
                <img name="${empPayrollData._id}" onclick="update(this)"
                    src="../assets/icons/create-black-18dp.svg" alt="edit">
            </td> 
        </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

/**
 * 
 */
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}