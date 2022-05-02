<template>
    <h1>Instructions for {{ theDay }}</h1>
    <p>1. Learn Vue CLI</p>
    <p>2. Learn Structure</p>
    <p>3. Learn Components</p>
</template>

<script>
export default {
    data() {
        return {
            theDay: "Yesterday",
            posts: [
                {
                    pic: '',
                }
            ]
        }
    },
    methods: {

    }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>