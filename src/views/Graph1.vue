<template>
    <div>
        <h1>Graph 1</h1>
        <FirstGraph msg="Welcome to Your Vue.js App" :beginValue=8 :endValue=97 />
    </div>
</template>

<script>
    // @ is an alias to /src
    import FirstGraph from '@/components/theGraph.vue'

    export default {
        name: 'graphviewer',
        components: {
            FirstGraph
        }
    }
</script>

<style scoped>


</style>