

export default function userReducer(state = {}, action) {
  
  switch(action.type) {
  	case 'SIGNUP_SUCCESS': 
		return {
				...state, 			
			redirect: action.redirect
			}
	case 'SIGNUP_FAILURE': 
		return {
				...state, 			
			redirect: false, 
			error: action.error
			}
	case 'LOGIN_SUCCESS': 
		return {
				...state, 			
			current_user: action.user
			}
	case 'LOGIN_FAILURE': 
		return {
				...state, 			
			current_user: '',
			redirect: false, 
			error: action.error
			}
		

    default: 
      return state;
  }
}


