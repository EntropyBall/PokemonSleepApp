<script setup>
    import { ref } from "vue";
    import DisheCard from "./components/DisheCard.vue";

    const baseUrl = "http://192.168.1.14:8000/";
    const recipes = ref(null);
    const test = ref(0);
    const fetchRecipes = async () => {
        const data = await fetch(baseUrl);
        recipes.value = await data.json();
    };
    fetchRecipes();

    const getImage = (url, fileName, folder = "") => {
        const subDirectory = folder ? folder.toLowerCase() + "/" : "";
        const finalUrl = url + subDirectory + fileName.replaceAll(` `, `-`).toLowerCase() + ".png";
        return finalUrl;
    };
</script>

<template>
    <article
        class="dishes"
        v-for="recipe in recipes"
        :key="recipe.title">
        <h3>{{ recipe.title }}</h3>
        <ul>
            <DisheCard :recipe="recipe" />
        </ul>
    </article>
</template>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .dishes {
        margin: 1em;
        padding: 1em;
        min-width: 350px;
    }

    .dishes > ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-auto-rows: auto;
        gap: 1em;
    }
    @media (min-width: 2000px) {
        .dishes > ul {
            grid-template-columns: repeat(6, 1fr);
        }
    }
    @media (max-width: 1600px) {
        .dishes > ul {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    @media (max-width: 1400px) {
        .dishes > ul {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media (max-width: 1200px) {
        .dishes > ul {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 750px) {
        .dishes > ul {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
