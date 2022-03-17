
const INITIAL_STATE = {
    user:[],
    isAuth:false,
    error:null,
    loading:true,
    isid:null,

}

export default function(state=INITIAL_STATE,action){
    switch(action.type){
        case 'GET_ARTICLES':
            return {...state, posts: action.payload }

        case 'registerUsers':
            return {...state, ...action.payload }

        case 'loginUsers':
            return {...state, ...action.payload }

        case 'autoSignIn':
            return {...state, ...action.payload }

        case 'logout':
            return {  ...state,...action.payload}

        case 'UPD_USER_DATA':
            return {...state, ...action.payload }

        case 'updateEmail':
            return {...state, ...action.payload }

        case 'check':
            return {...state, ...action.payload }

        default:

            return state;
    }
}
