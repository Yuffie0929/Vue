/**
 * 下拉选择组件
 * Created by Yuffie on 2017/7/28.
 */

Vue.component('custom-select1', {
    data: function (){
        return {
            selectShow: false,
            val: '',
        };
    },
    props:["btnValue", "list"],
    template: `<section class="wrap">
            <div class="content">
                <div class="searchIpt">
                    <input type="text" class="keyWord" :value="val" @click="selectShow = !selectShow">
                    <input type="button" class="search" :value="btnValue">
                    <span></span>
                </div>
                <custom-list v-show="selectShow" :list="list" @receive="changeValueHandle"></custom-list>
            </div>
        </section>`,
    methods: {
        changeValueHandle: function (item){
            this.val = item;
            this.selectShow = false;
        },
    }
});

Vue.component('custom-list', {
    props: ['list'],
    template: `<ul class="list">
                <li v-for="item of list" v-text="item" @click="selectValueHandle(item)"></li>
            </ul>`,
    methods: {
        selectValueHandle: function (item){
            //子组件向父组件传值
            this.$emit('receive', item);
        },
    }
});

new Vue({
    el: "#app",
    data: {
        list1: ['北京', '上海', '深圳', '广州'],
        list2: ['2017-01', '2017-02', '2017-04']
    },
    components: {
        'custom-select2': {
            data: function (){
                return {
                    selectShow: false,
                    val: '',
                };
            },
            props:["btnValue", "list"],
            template: `<section class="wrap">
            <div class="content">
                <div class="searchIpt">
                    <input type="text" class="keyWord" :value="val" @click="selectShow = !selectShow">
                    <input type="button" class="search" :value="btnValue">
                    <span></span>
                </div>
                <custom-list v-show="selectShow" :list="list" @receive="changeValueHandle"></custom-list>
            </div>
        </section>`,
            methods: {
                changeValueHandle: function (item){
                    this.val = item;
                    this.selectShow = false;
                },
            }
        }
    }
});



