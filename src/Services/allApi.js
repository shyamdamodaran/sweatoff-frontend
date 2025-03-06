import { commonApi } from "./CommonApi";
import { serverUrl } from "./serverUrl"

export const signUpApi = async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/users`, reqBody)
  }

  export const getUsersApi = async ()=>{ 
    return await commonApi('GET', `${serverUrl}/users`, '') 
  } 