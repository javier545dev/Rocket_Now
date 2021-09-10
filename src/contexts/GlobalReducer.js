export default function globalReducer(state, { type, payload }) {
  switch (type) {
    case 'SET_AUTH':
      return {
        ...state,
        isAuth: true,
        user: payload
      }
    case 'SET_LOGIN':
      return {
        ...state,
        isAuth: true
      }

    default:
      return state
  }
}
