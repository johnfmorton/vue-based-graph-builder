<template>
    <div class="container">
        <h2>{{ msg }}</h2>
        <p><button @click='() => reduceValue("updatedBeginValue", 0)'> - </button> Beginning value: {{ updatedBeginValue}}% <button @click='() => incrementValue("updatedBeginValue", 100)'> + </button></p>

        <p><button @click='() => reduceValue("updatedEndValue", 0)'> - </button> End value: {{ updatedEndValue }}% <button @click='() => incrementValue("updatedEndValue", 100)'> + </button></p>

        <!--<p>My animating value: {{ myanimatingvalue }} </p>-->
        <div class="barFull">
            <div ref="bar" class="barPartial" :style="{width:myValue.mynumber+'%'}"></div>
        </div>
        <button @click="startAnimation">Animate from beginning % to end %</button>
    </div>
</template>

<script>
    import { TimelineLite } from 'gsap'
    import { Power3 } from 'gsap'


    export default {
        name: "theGraph",
        props: {
            msg: String,
            beginValue: Number,
            endValue: {
                type: Number,
                required: true
            }
        },

        data: function () {
            return {
                updatedBeginValue: this.beginValue,
                updatedEndValue: this.endValue,
                myValue: {
                    mynumber: 6
                },
                timeline2: null
            }
        },
        methods: {

            startAnimation() {
                // const { bar } = this.$refs
                this.myValue.mynumber = this.updatedBeginValue;
                this.timeline2.clear();
                this.timeline2.to(this.myValue, 5, {
                    delay: 1,
                    mynumber: this.updatedEndValue,
                    ease: Power3.easeOut
                })

            },
            reduceValue(changingValue, valueLimit) {
                if(this[changingValue] > valueLimit) {
                this[changingValue]--;
                }
            },
            incrementValue(changingValue, valueLimit) {
                if(this[changingValue] < valueLimit) {
                    this[changingValue]++;
                }
            }

        },
        computed: {
            myanimatingvalue() {
                return Math.ceil(this.myValue.mynumber) + '%';
            }
        },

        mounted() {
            this.timeline = new TimelineLite()
            this.timeline2 = new TimelineLite()
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
        border: 1px solid rgba(0,0,0,0.15);
        border-radius: 0.5rem;
        margin-bottom: 1rem;
    }

    .barFull {
        position: relative;
        background: rgba(10, 10, 255, 0.1);
        outline: rgba(10, 10, 255, 0.2) 1px solid;
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