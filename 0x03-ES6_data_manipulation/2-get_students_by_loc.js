export default function getStudentsByLocation(arr, city) {
  const result = arr.filter((s) => s.location === city);
  return result;
}
