const app = Vue.createApp({
    data() {
        return {
            // Variables for app
            url: "https://search.brave.com/",
            showDanger: false,
            age: 30,
            pic: 'url to pic...',
            // color: "blue" // dynamic class
            students: [
                {
                    name:'nico',
                    pic: 'url...'
                }
            ]
        }
    },
    methods: {
        // Functions for app
        userError() {
            if (condition) {
                return false
            } else {
                return true
            }
        }
    }
})

app.mount('#app')