<template>
    <div>
    <h1>Settings page</h1>
        <SettingsWidget></SettingsWidget>
    </div>
</template>

<script>
    import SettingsWidget from '@/components/SettingsWidget.vue'
    export default {
        name: "Settings",
        components: {SettingsWidget}
    }
</script>

<style scoped>

</style>