export default function createReportObject(employeesList) {
  const newObj = {};
  newObj.allEmployees = employeesList;
  newObj.getNumberOfDepartments = function () {
    const numberOfKeys = Object.keys(newObj.allEmployees);
    const count = numberOfKeys.length;
    return count;
  };
  return newObj;
}
