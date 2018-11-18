<template>
    <div>
        <h1>Graph Display</h1>
        <AnimatedGraph msg="First Graph" :beginValue=8 :endValue=97 />
        <AnimatedGraph msg="Second Graph" :beginValue=50 :endValue=25 />
    </div>
</template>

<script>
    // @ is an alias to /src
    import AnimatedGraph from '@/components/theGraph.vue'

    export default {
        name: 'graphviewer',
        components: {
            AnimatedGraph
        }
    }
</script>

<style scoped>


</style>