<script setup>
    import DisheDescription from "./DisheDescription.vue";
    import DisheRecipe from "./DisheRecipe.vue";

    const props = defineProps(["recipe"]);
</script>

<template>
    <li
        class="dishe"
        v-for="dishe in recipe.recipes"
        :key="dishe.name">
        <DisheDescription
            :dishe="dishe"
            :title="recipe.title" />
        <DisheRecipe :dishe="dishe" />
    </li>
</template>

<style scoped>
    .dishe {
        display: flex;
        flex-direction: column;
        background-color: var(--color-background-soft);
        border: 1px solid var(--color-border);
        border-radius: 5px;
        padding: 0 0.5em 1em 0.5em;
        min-width: 320px;
    }
</style>
