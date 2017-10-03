import fetch from 'isomorphic-fetch';

const receivedDecisions = decisions => {
  
  return {
    type: 'RECEIVED_DECISIONS',
    decisions
  }
}


export function signupUser(user) {      
  
  return function(dispatch) {        
    return fetch('http://localhost:3200/api/v1/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user})            
    })
      .then(res => res.json())
    
      .then((responseJson) => { 
        
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
    return fetch('http://localhost:3200/api/v1/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user})            
    })
      .then(res => res.json())
    
      .then((responseJson) => { 
        console.log('responseJson', responseJson.user)
        if (!responseJson.error)  {
          dispatch({type: 'LOGIN_SUCCESS', user: responseJson.user }) 
          localStorage.setItem('current_user', JSON.stringify(responseJson.user))
          
        } else {
          dispatch({type: 'LOGIN_FAILURE', error: responseJson.error })
        }
        })
       
  }
}


