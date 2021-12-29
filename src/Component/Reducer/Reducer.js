import users from '../InitialData'



const myReducer =(state=users, action)=>{
switch (action.type) {
    case "NAME":
        state={
            ...state,
            name: action.payload
        }
        
        break;
        case "CITY":
            state={
                ...state,
                city:action.payload
            }
            break;
}
return state
}

export default myReducer