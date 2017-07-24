/**
 * Created by Yuffie on 2017/7/17.
 */
var list = JSON.parse(localStorage.getItem('todoList')) || [
        { title: "吃饭", isChecked: true },
        { title: "睡觉", isChecked: false },
    ];
let data = {
    active: 'ALL', //ALL TODO HAVEDOWN
    todo: '',
    allList: 0,
    todoList: 0,
    haveDownList: 0,
    list: list,
    showList: list,
    editingItem: {},
    beforeEditTitle: "",
};
/**
 * this在事件中指向的是根实例
 * */
var vm = new Vue({
    el: "#todoList",
    data: data,
    methods: {
        addTodo(num, ev){
            if(this.todo.length == 0) return;
            this.list.push({ title: this.todo, isChecked: false});
            this.todo = '';
        },
        delTodo(index){
            this.list.splice(index, 1);
        },
        changeChecked: function (ev, item){
            console.log(ev);
            item.isChecked = ev.target.checked;
        },
        changeList: function (type){
            this.active = type;
            return this.list
        },
        saveStorage: function (){
            localStorage.setItem('todoList', JSON.stringify(this.list));
        },
        editListItem: function (item, el){
            this.editingItem = item;
            this.beforeEditTitle = item.title;
        },
        saveEdit: function (){
            this.editingItem = {};
        },
        cancelEdit: function (){
            this.editingItem.title = this.beforeEditTitle;
            this.editingItem = {};
        },
    },
    directives: {
        focus: {
            update(el, binding){
                if(binding.value){
                    el.focus();
                }
            }
        }
    },
    computed: {
        allLength: function (){
            return this.list.length;
        },
        checkedLength: function (){
            return this.list.filter(function (item){
                return item.isChecked;
            }).length
        },
        nocheckedLength: function (){
            return this.list.filter(function (item){
                return !item.isChecked;
            }).length
        },
    },
    watch: {
        list: {
            handler: function (){
                this.saveStorage();
            },
            deep: true,
        },
        active(curVal,oldVal){
            if(curVal == "ALL"){
                this.showList = this.list;
            }
            if(curVal == "TODO"){
                this.showList = this.list.filter(function (item){
                    return !item.isChecked;
                });
            }
            if(curVal == "HAVEDOWN"){
                this.showList = this.list.filter(function (item){
                    return item.isChecked;
                });
            }
        },
    }
});