<script setup>
    import { getImage } from "../Controller/ServerController";
    const props = defineProps(["dishe", "title"]);

    const baseUrl = "http://192.168.1.14:8000/";
    const recipeImagesUrl = baseUrl + "images/";
</script>

<template>
    <section class="description">
        <img
            :src="getImage(recipeImagesUrl, dishe.name, title)"
            :alt="dishe.name"
            width="125"
            height="125" />
        <div class="description-text">
            <h4>{{ dishe.name }}</h4>
            <p>{{ dishe.description }}</p>
        </div>
    </section>
</template>

<style scoped>
    .description {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        height: auto;
        padding-right: 0.5em;
    }

    .description-text {
        display: flex;
        flex-basis: 70%;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .description-text > p {
        font-size: 0.75rem;
        font-style: italic;
        margin-bottom: 0.5em;
    }
    @media (max-width: 1000px) {
        .description {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
