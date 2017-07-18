/**
 * Created by Yuffie on 2017/7/17.
 */
let data = {
    todo: '',
    allList: 0,
    todoList: 0,
    haveDownList: 0,
    list: []
};
/**
 * this在事件中指向的是根实例
 * */
var vm = new Vue({
    el: "#todoList",
    data: data,
    methods: {
        addTodo(num, ev){
            console.log(num, ev, this);
            this.list.push({ title: this.todo });
            this.todo = '';
        },
        delTodo(ev){

        }
    }
});