<template>
    <div>
        <h2>How many widgets should there be?</h2>
        <p :data-details="globalTotal">{{ showStatus }}</p>
        <div>

            <button class="buttonSetter" @click="decrementGlobalTotal">-</button>
            {{ globalTotal }}
            <button class="buttonSetter" @click="incrementGlobalTotal">+</button>


            <AnimatedGraph v-for="(graph, index) in globalTotal" :msg="graphName(graph)" :beginValue=0 :endValue=100 />

        </div>

    </div>
</template>

<script>
    import AnimatedGraph from '@/components/SingleBarGraphSetting.vue'
    export default {
        name: "SettingsWidget",
        components: {
            AnimatedGraph
        },
        props: {
        },
        data: function () {
            return {
            }
        },
        computed: {
            showStatus() {
                return this.$store.getters.status
            },
            globalTotal() {
                return this.$store.state.bars
            },
            showLocalStatus() {
                return `The local total is ${this.total}.`
            }
            // actions() {
            //     return this.$store.getters.actions;
            // }
        },
        methods: {
            graphName(thegraphnumber) {
                return "Bar graph " + thegraphnumber;
            },
            incrementGlobalTotal: function () {
                console.log('incrementGlobalTotal')
                this.$store.commit('addBar')
            },
            decrementGlobalTotal: function () {
                console.log('incrementGlobalTotal')
                this.$store.commit('minusBar')

            }
        }

    }
</script>

<style scoped>

    .buttonSetter {
        padding: 5px;
    }

</style>