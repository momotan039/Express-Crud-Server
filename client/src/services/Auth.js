export const SIGNOUT=()=>{
    localStorage.removeItem('token')
}

export const SIGNIN=(token)=>{
    localStorage.setItem('token',token)
}

export const isSignIn=()=>{
    return localStorage.getItem('token')?true:false
}