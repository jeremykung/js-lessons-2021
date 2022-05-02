<template>
    <h1>My Div</h1>
    <p>This is my custom module</p>
    <p>Score: {{ score }}</p>
    <button @click="score++">Add Score</button>

    <div v-for="person in people" :key="person.id">
        <h2>{{ person.name }}</h2>
    </div>
</template>

<script>
export default {
    name: 'MyDiv',
    data() {
        return {
            score: 3,
            people: [
                {
                    id: 1,
                    name: 'bob',
                },
                {
                    id: 2,
                    name: 'sally',
                },
                {
                    id: 3,
                    name: 'jack',
                }
            ]
        }
    }
}
</script>