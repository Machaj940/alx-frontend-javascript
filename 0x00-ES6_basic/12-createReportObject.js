export default function createReportObject(employeesList) {
  const obj = employeesList;
  for (const property in obj) {
    return {allEmployees : {property: obj[property]}, getNumberOfDepartments : function() {
      return this.allEmployees.property.length;
    }};
  } 
}
