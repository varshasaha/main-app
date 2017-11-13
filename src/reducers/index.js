export default function medicineStore (state = {
  medicine: 'No medicine as of now',
}, action) {
  switch (action.type) {
    case 'FETCH_MEDICINE': {
      if (action.problem === 'sneeze') {
        return Object.assign({}, state, { medicine: 'Sneezol' });
      }
      if (action.problem === 'burp') {
        return Object.assign({}, state, { medicine: 'Lomotil' });
      }
      return state;
    }
    default:
      return state;
  }
}
