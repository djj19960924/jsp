if (process.env.NODE_ENV === 'development') {
    require('./todolist')
}
let postApi = (path, mock) => {
    return path + (mock ? '' : '.mock');
};

export default{
    "todolist":postApi("/todoList")
}