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
    case 'SET_LOGOUT':
      return {
        ...state,
        isAuth: false,
        user: {}
      }

    default:
      return state
  }
}
