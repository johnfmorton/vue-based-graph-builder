<template>
        <div class="barFull">
            <div ref="bar" class="barPartial" :style="{width:myValue.thePercentage+'%'}"><span class="readout">{{ myanimatingvalue }}</span></div>
        </div>
</template>

<script>
    import {TimelineLite} from 'gsap'
    import {Power3} from 'gsap'

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



    .barFull {
        position: relative;
        /*background: rgba(10, 10, 255, 0.1);*/
        /*outline: rgba(10, 10, 255, 0.2) 1px solid;*/
        height: 30px;
        margin: 1px 0;
        /*margin-bottom: 1rem;*/
        text-align: right;
        color: white;

    }
    .readout {

        padding: 0 0.25rem;
        font-size: 0.5rem;
    }

    .barPartial {
        position: absolute;
        left: 0;
        top: 5px;
        /*display: inline-block;*/
        background-color: firebrick;
        height: 20px;
        width: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        overflow: hidden;
    }

</style>