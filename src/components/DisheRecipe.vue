<script setup>
    import DisheIngredient from "./DisheIngredient.vue";

    const props = defineProps(["dishe"]);
</script>

<template>
    <section class="ingredients">
        <DisheIngredient :dishe="dishe" />
    </section>
</template>

<style scoped>
    .ingredients {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5em;
    }
</style>
