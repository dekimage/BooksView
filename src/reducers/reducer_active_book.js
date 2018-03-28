// logic in reducer that decides what to do with action and state=null is to avoid undefined redux error
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;

      break;
    default:
      return state;
  }
}
