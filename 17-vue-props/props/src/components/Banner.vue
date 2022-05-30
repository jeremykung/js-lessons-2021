<template>
    <h1>{{ mainMsg }}</h1>
    <p>How to pass data to components</p>
</template>

<script>
export default {
    props: ['mainMsg'],
}
</script>