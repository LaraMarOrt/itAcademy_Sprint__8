<template>
    <div  class="justify-content-center p-3 mb-2 w-75">
        <div class="card align-items-start flex-column p-3 mb-2" v-for="(nave, index) in naves" :key="index">
            <router-link :to="{ name: 'Nave', params: { name: nave.name }, query: { index } }">
                <div class="card-body">
                    <h5 class="card-title">{{ nave.name }}</h5>
                    <p class="card-text">{{ nave.model }}</p>
                </div>
            </router-link>
        </div>
        <Paginacion :page="page"  ></Paginacion>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import Paginacion from '@/components/Paginacion.vue'

export default {
    name: "Card",
    components: {
        Paginacion
    },
    // props: ['naveEspacial', 'index']
    setup() {
        const store = useStore();
        onMounted(() => {
            store.dispatch("fetchData",1);
        });
        const naves = computed(() => store.state.naves); 
        const page = computed(() => store.state.page);
        return { naves, page };
    },
};
</script>

<style scoped>
.card-mg {
    margin: auto;
    width: 75%;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #25252cc8;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    margin-bottom: 2rem;
}

.card-body {
    padding: 1rem 1rem;
}

.card-title {
    margin-bottom: 0.5rem;
}

.card-text {
    margin-bottom: 0.5rem;
}

a {
    color: rgb(212, 213, 221);
    text-decoration: none;
}
</style>
