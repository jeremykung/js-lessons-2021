const app = Vue.createApp({
    data() {
        return {
            // Variables for app
            url: "https://search.brave.com/",
            showDanger: true,
            students: [
                {
                    name: 'Bob',
                    age: 19,
                    grad: true,
                    pic: 'https://yt3.ggpht.com/ytc/AKedOLSRSl8xsTNuQU_f6sg3bHI19gZYUSqLu2I78S90MQ=s900-c-k-c0x00ffffff-no-rj',
                },
                {
                    name: 'Sally',
                    age: 15,
                    grad: false,
                    pic: 'https://images.goodsmile.info/cgm/images/product/20201202/10469/78052/large/4432cd5d9b91a4cf64bfbf33d06ce56e.jpg',
                },
                {
                    name: 'Jack',
                    age: 14,
                    grad: false,
                    pic: 'https://img.mayun.xin/upload/2018082107/caf37d26fdc7a73f428ab7e361e334a1.png',
                }
            ],
        }
    },
    methods: {
        // Functions for app
        
    }
})

app.mount('#app')