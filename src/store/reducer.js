import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM } from './actionTypes'
const defaultState = {
    inputValue:'Write Something',
    list:[
        '早8点开晨会，分配今天的代码任务',
        '早9点和项目经理开需求沟通会',
        '早10点写代码'
    ]
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
    return state 
}