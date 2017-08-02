/**
 * Created by Yuffie on 2017/7/28.
 */

/**
 * 作为组件中data中局部数据初始值使用
 */
/*Vue.component('custom-component', {
    data(){
        return {
            incrementCount: this.count,
        }
    },
    props: ['count'],
    template: `<div>
        <h2 v-text="incrementCount"></h2>
        <h2>我是一个自定义组件</h2>
        <input type="button" value="改变count的值" @click="changeCount">
        </div>`,
    methods: {
        changeCount: function (){
            this.incrementCount++;
        }
    }
});*/

/**
 * 作为组件中computed树属性
 */
/*Vue.component('custom-component', {
    data(){
        return {
            index: 0
        }
    },
    computed: {
        incrementCount(){
            return this.count + this.index
        },
    },
    props: ['count'],
    template: `<div>
        <h2 v-text="incrementCount"></h2>
        <h2>我是一个自定义组件</h2>
        <input type="button" value="改变count的值" @click="changeCount">
        </div>`,
    methods: {
        changeCount: function () {
            this.index++;
        }
    }
});*/

/**
 * 同时修改父组件的值
 */
Vue.component('custom-component', {
    data(){
        return {
            incrementCount: this.count,
        }
    },
    props: {
        count: {
/*            type: Number, //数字类型 [Number, String]
            default: 10, //默认值
            required: true, //为true时 必传*/
            visibility: function (value){
                return value > 10;
            },
        }
    },
    template: `<div>
        <h2 v-text="incrementCount"></h2>
        <h2>我是一个自定义组件</h2>
        <input type="button" value="改变count的值" @click="changeCount">
        </div>`,
    methods: {
        changeCount: function (){
            this.incrementCount++;
            this.$emit('increment-click');
        }
    }
});

new Vue({
    el: '#app',
    data: {
        count: 0,
    },
    methods: {
        changeCount: function (){
            this.count++;
        }
    }
});