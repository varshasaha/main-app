export function fetchMedicine (problem) {
  return {
    type: 'FETCH_MEDICINE',
    problem,
  };
}
