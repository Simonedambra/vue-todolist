'use strict'

const { createApp } = Vue;

let elementObj = {
    data() {


        return {

            todoObj: [{
                text: 'Quarterly Newsletter',
                done: true,
            }, {
                text: 'Recruiting blog post',
                done: true,
            }, {
                text: 'Mobile app luaunch',
                done: true,
            }, {
                text: 'Interview John H.',
                done: false,
            }, {
                text: 'Summit update to mobiile storefronts',
                done: true,
            }, {
                text: 'Schedule meeting with Alex',
                done: false,
            }, {
                text: 'Homepage refresh',
                done: true,
            }, {
                text: 'Onboard new Sales team members',
                done: true,
            }, {
                text: 'Review editorial calendar',
                done: true,
            }],
        }

    },
    methods: {



    },


}
const app = createApp(elementObj);
app.mount('#app');