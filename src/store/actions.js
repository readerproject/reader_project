
import { SAVE_USER ,SAVE_TOKEN } from './mutation_type'
import {autoLogin} from '../api'

export default{

  getUserAction({commit},{user}){
    commit(SAVE_TOKEN,{token:user.token})
    delete user.token
    commit(SAVE_USER,{user:user})
  },
  async autoLoginAction({commit}){
    let result = await autoLogin()
    if (result.code === 0) {
      commit(SAVE_USER,{user:result.data})
    }
  }

}