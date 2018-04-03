let defaultState = {
    list:[]
}

export const accDataReducer =(state = defaultState,action)=>{
    switch (action.type){
        case 'GET_DATA_LIST':
            return Object.assign({},state,{
                list:action.payload
            })
        default:
            return state;
    }
}