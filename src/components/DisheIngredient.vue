<script setup>
    import { getImage } from "../Controller/ServerController";

    const props = defineProps(["dishe"]);
    const baseUrl = "http://192.168.1.14:8000/";
    const ingredientImagesUrl = baseUrl + "images/ingredient/";
</script>

<template>
    <article
        class="ingredient"
        v-for="ingredient in dishe.ingredients">
        <img
            :src="getImage(ingredientImagesUrl, ingredient.name)"
            :alt="ingredient.name" />
        <div class="ingredient-text">
            <p>&times;&nbsp;{{ ingredient.quantity }}</p>
            <p>{{ ingredient.name }}</p>
        </div>
    </article>
</template>

<style scoped>
    .ingredient {
        position: relative;
        border: 1px solid var(--color-border);
        background-color: var(--color-background-mute);
        border-radius: 50px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        gap: 0.5em;
        padding-left: 0.75em;
    }
    /* .ingredient:last-child {
        margin-bottom: 0.75em;
    } */
    .ingredient > img {
        width: 50px;
        height: 50px;
    }
    .ingredient-text {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1em;
        font-weight: bold;
        text-align: center;
        gap: 1em;
    }
    /* .ingredient-text > p:nth-child(1) {
    position: absolute;
    top: -5px;
    right: -10px;
    background-color: var(--color-background-mute);
    width: 36%;
    font-weight: bold;
    font-size: 0.8em;
    z-index: 1;
    border: 2px solid rgb(126, 56, 56);
    border-radius: 50px;
    text-align: center;
} */
</style>
