import React,{ Component } from 'react';
import 'antd/dist/antd.css'
import store from './store'
import { addItemAction,deleteItemAction,getListAction,changeInputAction } from './store/actionsCreators'
import TodoListUI from './todoListUI'
import axios from 'axios'
import apiManager from '../mock/apiManager'
import {connect} from 'react-redux'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()
        this.changeInpoutValue = this.changeInpoutValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    componentDidMount() {
        axios.get(apiManager.todolist).then((res)=>{
            const data = res.data
            const action = getListAction(data)
            store.dispatch(action)
            this.setState(store.getState())
        })
    }
    
    changeInpoutValue(e){
        //action创建
        const action = changeInputAction(e.target.value)
        //action到store里面需要dispatch
        store.dispatch(action)
        this.setState(store.getState())
    }

    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)
        this.setState(store.getState())
    }

    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
        this.setState(store.getState())
    }

    render(){
        return (
            <TodoListUI 
                inputValue = {this.state.inputValue}
                changeInpoutValue = {this.changeInpoutValue}
                clickBtn = {this.clickBtn}
                list = {this.state.list}
                deleteItem = {this.deleteItem}
            />
        )
    }
}

export default TodoList;