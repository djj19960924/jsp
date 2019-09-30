import Mock from 'mockjs'

Mock.mock(/\/todoList.mock/,{
    'list':[
        '早8点起床',
        '早9点上班',
        '中午12点吃饭'
    ],
    'message': '操作成功',
    'systemDate': new Date().getTime()
})