export default function createIteratorObject(report) {
  for (const key in report.allEmployees) {
    if (report.allEmployees.hasOwnProperty(key)) {
      const value = report.allEmployees[key];
      return value;
    }
  }
  /* Object.entries(report.allEmployees).forEach(([key, value]) => {
    return value;
  }); */
}
