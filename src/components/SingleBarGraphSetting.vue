<template>
    <div class="container">
        <h2>{{ msg }}</h2>
        <p>
            <button @click='() => decrementBegining()'> -</button>
            Beginning value: {{ this.$store.state.barSettingsContainer[this.myIndex].startValue }}%
            <button @click='() => incrementBegining()'> +</button>
        </p>

        <p>
            <button @click='() => decrementEnding()'> -</button>
            End value: {{ this.$store.state.barSettingsContainer[this.myIndex].endValue }}%
            <button @click='() => incrementEnding()'> +</button>
        </p>

        <p>My animating value: {{ myanimatingvalue }} </p>
        <div class="barFull">
            <div ref="bar" class="barPartial" :style="{width:myValue.thePercentage+'%'}"></div>
        </div>
        <button @click="startAnimation">Animate from beginning % to end %</button>
    </div>
</template>

<script>
    import {TimelineLite} from 'gsap'
    import {Power3} from 'gsap'
    // import {_} from "lodash/core";
    import inRange from 'lodash/inRange';


    export default {
        name: "theGraph",
        props: {
            msg: String,
            myIndex: {type: Number, required: true},
        },

        data: function () {
            return {
                myValue: {
                    thePercentage: 0
                },
                tl: null
            }
        },
        methods: {
            startAnimation() {
                // const { bar } = this.$refs
                this.myValue.thePercentage = this.$store.state.barSettingsContainer[this.myIndex].startValue;
                this.tl.clear();
                this.tl.to(this.myValue, 5, {
                    delay: 1,
                    thePercentage: this.$store.state.barSettingsContainer[this.myIndex].endValue,
                    ease: Power3.easeOut
                })

            },
            incrementBegining() {
                if (inRange(this.$store.state.barSettingsContainer[this.myIndex].startValue, 0, 100)) {
                    let localnew = this.$store.state.barSettingsContainer[this.myIndex] + 1;
                    this.$store.commit('incrementBegining', {bar: this.myIndex, newValue: localnew})
                }
            },
            decrementBegining() {
                if (inRange(this.$store.state.barSettingsContainer[this.myIndex].startValue, 1, 101)) {
                    let localnew = this.$store.state.barSettingsContainer[this.myIndex] - 1;
                    this.$store.commit('decrementBegining', {bar: this.myIndex, newValue: localnew})
                }
            },
            incrementEnding() {
                if (inRange(this.$store.state.barSettingsContainer[this.myIndex].endValue, 0, 100)) {
                    let localnew = this.$store.state.barSettingsContainer[this.myIndex] + 1;
                    this.$store.commit('incrementEnding', {bar: this.myIndex, newValue: localnew})
                }
            },
            decrementEnding() {
                if (inRange(this.$store.state.barSettingsContainer[this.myIndex].endValue, 1, 101)) {
                    let localnew = this.$store.state.barSettingsContainer[this.myIndex] - 1;
                    this.$store.commit('decrementEnding', {bar: this.myIndex, newValue: localnew})
                }
            }


        },
        computed: {
            myanimatingvalue() {
                return Math.ceil(this.myValue.thePercentage) + '%';
            }
        },

        mounted() {
            this.tl = new TimelineLite()
            this.startAnimation()
        }

    }
</script>

<style scoped>
    h2 {
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    p {
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
    }

    button {
        background-color: lightslategray;
        border: none;
        color: white;
        padding: 5px 10px;
        margin: 0 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 13px;
        transition: background-color 0.25s;
    }

    button:hover {
        background-color: #6a829a;
    }

    .container {

        width: 50vw;
        margin-right: auto;
        margin-left: auto;
        padding: 1rem;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 0.5rem;
        margin-bottom: 1rem;
    }

    .barFull {
        position: relative;
        background: rgba(10, 10, 10, 0.1);
        outline: rgba(10, 10, 10, 0.15) 1px solid;
        height: 30px;
        /*padding-top: 5px;*/
        margin-bottom: 1rem;
    }

    .barPartial {
        position: absolute;
        left: 0;
        top: 5px;
        /*display: inline-block;*/
        background-color: firebrick;
        height: 20px;
        width: 0;
    }

</style>