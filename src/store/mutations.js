import {
  SAVE_USER,
  SAVE_TOKEN
} from './mutation_type'

export default{
  [SAVE_USER](state,{user}){
    state.user = user
  },
  [SAVE_TOKEN](state,{token}){
    localStorage.setItem('token_key',token)
    state.token = token
  }
}