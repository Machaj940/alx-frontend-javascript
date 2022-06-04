export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const result = arr.map((x) => x.id);
    return result;
  }
  return [];
}
