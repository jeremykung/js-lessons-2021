const app = Vue.createApp({
    data() {
        return {
            score: 0,
            showStudents: true,
            students: [
                {
                    name: 'Bob',
                    age: 15,
                },
                {
                    name: 'Sally',
                    age: 15,
                },
                {
                    name: 'Jack',
                    age: 14,
                }
            ],
        }
    },
    methods: {
        logSomething(something) {
            console.log(something)
        },
        handleEvent(event) {
            console.log(event)
        },
        deleteStudent() {
            this.students.pop()
            if (this.students.length === 0) {
                showStudents = false
            }
        },
    }
})

app.mount('#app')