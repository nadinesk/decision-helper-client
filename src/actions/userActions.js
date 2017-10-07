import fetch from 'isomorphic-fetch';

const receivedDecisions = decisions => {
  
  return {
    type: 'RECEIVED_DECISIONS',
    decisions
  }
}


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
        console.log('responseJson', responseJson.user)
        if (!responseJson.error)  {
          dispatch({type: 'LOGIN_SUCCESS', user: responseJson.user }) 
          if (typeof localStorage === 'object') {
          debugger
          try {         
          localStorage.setItem('current_user', JSON.stringify(responseJson.user))
          } catch (e) {
            Storage.prototype._setItem = Storage.prototype.setItem;
        Storage.prototype.setItem = function() {};
        alert('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.');
          }
        }
        } else {
          dispatch({type: 'LOGIN_FAILURE', error: responseJson.error })
        }
        })
       
  }
}


