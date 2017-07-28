/**
 * 下拉选择组件
 * Created by Yuffie on 2017/7/24.
 */
Vue.component('custom-list', {
    template: `<ul class="list">
                <li>html+css</li>
                <li>html5+css3</li>
                <li>javascript</li>
                <li>react</li>
                <li>angular</li>
                <li>vue</li>
            </ul>`
});

Vue.component('custom-select1', {
    data: function (){
        return {
            selectShow: false,
        };
    },
    props:["btnValue"],
    template: `<section class="wrap">
        <div class="content">
            <div class="searchIpt">
                <input type="text" class="keyWord" value="" @click="selectShow = !selectShow">
                <input type="button" class="search" :value="btnValue">
                <span></span>
            </div>
            <custom-list v-show="selectShow"></custom-list>
        </div>
    </section>`
});


var vm = new Vue({
    el: "#app",
    components: {
        'custom-select2': {
            data: function (){
                return {
                    selectShow: false,
                };
            },
            props:["btnValue"],
            template: `<section class="wrap">
                <div class="content">
                    <div class="searchIpt">
                        <input type="text" class="keyWord" value="" @click="selectShow = !selectShow">
                        <input type="button" class="search" :value="btnValue">
                        <span></span>
                    </div>
                    <custom-list v-show="selectShow"></custom-list>
                </div>
            </section>`
        }
    },
});

