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
    if(action.type === 'changeInput'){
        //深度拷贝
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state 
}