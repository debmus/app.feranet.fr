import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueClipboard from "vue-clipboard2";

Vue.use(VueClipboard)
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',
    }
});