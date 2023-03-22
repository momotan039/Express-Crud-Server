export const SIGNOUT=()=>{
    localStorage.removeItem('user')
}

export const SIGNIN=(user)=>{
    localStorage.setItem('user',JSON.stringify(user))
}

export const isSignIn=()=>{
    return localStorage.getItem('user')?true:false
}

export const getUser=()=>{
    return JSON.parse(localStorage.getItem('user'))
}


