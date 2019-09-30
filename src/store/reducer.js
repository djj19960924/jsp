import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST } from './actionTypes'
const defaultState = {
    inputValue:'Write Something',
    list:[]
}

export default (state = defaultState,action)=>{
    //Reducer里只能接收state,不能改变state
    if(action.type === CHANGE_INPUT){
        //深度拷贝
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        //必须是纯函数(只能参数影响结果)
        //注意:不能在这调用ajax
        return newState
    }
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        console.log('action:',action)
        newState.list = action.data.list
        return newState
    }
    return state 
}