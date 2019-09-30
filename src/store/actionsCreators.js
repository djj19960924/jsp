import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM } from './actionTypes'

//箭头函数返回的是一个对象，()=>({})
export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM,
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})