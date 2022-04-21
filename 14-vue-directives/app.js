const app = Vue.createApp({

    // Data for our application
    data() {
        return {
            // Variables for your app
            score: 88,
            showSecret: true,
            songs: [
                {
                    name: "Meiyouhuitoulu",
                    artist: "Lijieming",
                },
                {
                    name: "Shake it off",
                    artist: "Taylor Swift",
                },
                {
                    name: "Tipsy",
                    artist: "Wanuka",
                },
                {
                    name: "Spring Day",
                    artist: "BTS",
                }
            ]
        }
    },

    methods: {
        // Functions for your app
        handleEvent(event) {
            console.log(event)
        },
        toggleSecret() {
            // You can change variables (data) using this)
            this.showSecret = !this.showSecret
        }
    }

})

app.mount("#app") // it will attach our app to the div in HTML