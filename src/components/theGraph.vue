<template>
    <div class="container">
        The message is: {{ msg }}
        <p><button @click='() => reduceValue("updatedBeginValue", 0)'> - </button>Beginning value: {{ updatedBeginValue}} <button @click='() => incrementValue("updatedBeginValue", endValue)'> + </button></p>

        <p><button @click='() => reduceValue("endValue", 0)'> - </button> End value: {{ endValue }} <button @click='() => incrementValue("endValue", beginValue)'> + </button></p>

        <p>My animating value: {{ myanimatingvalue }} </p>
        <div class="barFull">
            <div ref="bar" class="barPartial" :style="{width:startingPoint+'%'}"></div>
        </div>
        <button @click="startAnimation">Animate from beginning % to end %</button>
    </div>
</template>

<script>
    import { TimelineLite } from 'gsap'


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
                myValue: {
                    mynumber: 6
                },
                timeline: null,
                timeline2: null
            }
        },
        methods: {

            startAnimation() {
                console.log('animation begins')
                const { bar } = this.$refs

                TweenLite.set([bar], {width: this.beginValue})
                // TweenLite.set([this.myValue.mynumber], {width: this.beginValue})
                this.myValue.mynumber = this.beginValue;
                this.timeline.clear();
                this.timeline2.clear();

                this.timeline.to(bar, 5, {
                    // delay: 1,
                    width: this.endValue +'%',
                    ease: Power3.easeOut
                })

                this.timeline2.to(this.myValue, 5, {
                    // delay: 1,
                    mynumber: this.endValue,
                    ease: Power3.easeOut
                })

            },
            reduceValue(changingValue, valueLimit) {
                console.log(changingValue);
                this['changingValue']--;
                // if(changingValue < valueLimit) {
                //     console.log('reduceValue')
                //     changingValue--;
                // }

            },
            incrementValue(changingValue, valueLimit) {

                if(changingValue > valueLimit) {
                    console.log('incrementValue')
                    this['changingValue']++;
                }
            }

        },
        computed: {
            startingPoint() {
                return this.beginValue;
            },

            myanimatingvalue() {
                return Math.ceil(this.myValue.mynumber);
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
    .container {
        width: 50vw;
        margin-right: auto;
        margin-left: auto;
        padding: 1rem;
        border: 1px solid green;
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