let defaultState = {
    auth:{},
    error:[]
}

export const authReducer =(state = defaultState,action)=>{
    switch (action.type){
        case 'GET_AUTH_TOKEN_SUCCESS':
            return Object.assign({},state,{
                auth:action.payload
            })

        case 'GET_AUTH_TOKEN_FAIL':
            return Object.assign({},state,{
                error:action.payload
        })
        default:
            return state;
    }
}