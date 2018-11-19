<template>
    <div>
        <h1>Graph Display</h1>
        <!--<AnimatedGraph msg="First Graph" :beginValue=8 :endValue=97 />-->
        <!--<AnimatedGraph msg="Second Graph" :beginValue=50 :endValue=25 />-->
        <div class="container">
            <p v-if="globalTotal === 0">You need at least one bar in the graph for it to display.</p>
            <AnimatedGraph v-for="(graph, index) in globalTotal" :msg="graphName(graph)" :myIndex="index"/>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import AnimatedGraph from '@/components/SingleBarGraphDisplay.vue'

    export default {
        name: 'graphviewer',
        components: {
            AnimatedGraph
        },
        computed: {
            globalTotal() {
                return this.$store.state.bars
            },
        },
        methods: {
            graphName(thegraphnumber) {
                return "Bar graph " + thegraphnumber;
            },
        }
    }
</script>

<style scoped>

    .container {

        width: 50vw;
        margin-right: auto;
        margin-left: auto;
        padding: 1rem;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 0.5rem;
        margin-bottom: 1rem;
    }
</style>