import myStore from "../Redux/Store"

const  action=(data)=>{

myStore.dispatch({
    type:"NAME",
    payload: data
})
}

export default action