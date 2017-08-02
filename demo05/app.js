/**
 * Created by Yuffie on 2017/7/31.
 */

Vue.component('custom', {
    data(){
        return {
            message: "我是数据"
        }
    },
    template:
        `<div>
            <slot name="one"><div>替换1</div></slot>
            <slot name="two"><div>替换2</div></slot>
            <slot name="three"><div>替换3</div></slot>
            {{message}}
        </div>`,
});

new Vue({
    el: "#app",
});


