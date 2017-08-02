/**
 * 动态组件
 * Created by Yuffie on 2017/8/2.
 */

var custom1 = Vue.component("custom1", {
    template: `<div @click="changeColor">我是第1个组件</div>`,
    methods: {
        changeColor: function (ev){
            ev.target.style.background = 'red';
        }
    }
});

var custom2 = Vue.component("custom2", {
    template: `<div>我是第2个组件</div>`
});

var custom3 = Vue.component("custom3", {
    template: `<div>我是第3个组件</div>`
});

new Vue({
    el: "#app",
    data: {
        current: custom1,
    },
    methods: {
        tabComponent: function (index){
            if(index === 1){
                this.current = custom1;
            }
            if(index === 2){
                this.current = custom2;
            }
            if(index === 3){
                this.current = custom3;
            }
        }
    }
});