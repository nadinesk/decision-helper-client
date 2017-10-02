import fetch from 'isomorphic-fetch';


export function signupUser(user) {      
  
  return function(dispatch) {        
    return fetch('https://stark-garden-80644.herokuapp.com/api/v1/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user})            
    })
      .then(res => res.json())
    
      .then((responseJson) => { 
        console.log('responseJson', responseJson)
        if (!responseJson.error)  {
          dispatch({type: 'SIGNUP_SUCCESS', redirect: true }) 
        } else {
          dispatch({type: 'SIGNUP_FAILURE', error: responseJson.error })
        }
        })
       
  }
}

export function loginUser(user) {      
  
  return function(dispatch) {        
    return fetch('https://stark-garden-80644.herokuapp.com/api/v1/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user})            
    })
      .then(res => res.json())
    
      .then((responseJson) => { 
        console.log('responseJson', responseJson)
        if (!responseJson.error)  {
          dispatch({type: 'LOGIN_SUCCESS', redirect: true }) 
        } else {
          dispatch({type: 'LOGIN_FAILURE', error: responseJson.error })
        }
        })
       
  }
}