export default function createEmployeesObject(departmentName, employees) {
  const newObj = {};
  newObj.departmentName = employees;
  return newObj;
  /* OR create the new obj as shown below
  return { [departmentName]: [...employees] };
  */
}
