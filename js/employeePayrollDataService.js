let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmpPayrollDataFromstorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
});

const getEmpPayrollDataFromstorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

/**
 * Display
Employee Details from
Local Storage
 */
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = getEmpPayrollDataFromstorage();
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
 * function to get the department html
 */
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}

const remove=(node)=> {
    let empPayrollData=empPayrollList.find(empData=>empData._id==node.name);
    if(!empPayrollData) {
        return;
    }
    const index=empPayrollList.map(empData=>empData._id).indexOf(empPayrollData._id);
    empPayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
    document.querySelector('.emp-count').textContent=empPayrollList.length;
    createInnerHtml();
}