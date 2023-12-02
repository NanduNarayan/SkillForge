import { INITIALIZE_STATE } from './actionTypes'

const initialState = {}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {

  case INITIALIZE_STATE:
    const initialState={courses:[...payload]}
    return {...initialState}

  default:
    return state
  }
}
