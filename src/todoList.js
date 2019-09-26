import React,{ Component } from 'react';
import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd'
import store from './store'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()
        this.changeInpoutValue = this.changeInpoutValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
    }

    changeInpoutValue(e){
        //action创建
        const action = {
            type:'changeInput',
            value:e.target.value
        }
        //action到store里面需要dispatch
        store.dispatch(action)
    }

    clickBtn(){
        const action = {
            type: 'addItem'
        }
        store.dispatch(action)
        this.setState(store.getState())
    }

    render(){
        return (
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue}
                        style={{width:'250px',marginRight:'10px'}} 
                        onChange={this.changeInpoutValue}
                    />
                    <Button 
                        type="primary"
                        onClick = {this.clickBtn}
                    >增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item=>(<List.Item onClick={this.deleteItem}>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }
}

export default TodoList;