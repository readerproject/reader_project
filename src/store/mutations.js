import {
  SAVE_USER,
  SAVE_TOKEN,
  LOGOUT
} from './mutation_type'

export default{
  [SAVE_USER](state,{user}){
    state.user = user
  },
  [SAVE_TOKEN](state,{token}){
    localStorage.setItem('token_key',token)
    state.token = token
  },
  [LOGOUT](state){
    state.user = {}
    state.token = ''
    localStorage.removeItem('token_key')
  }
}