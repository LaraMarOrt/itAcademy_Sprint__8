<template>
    <div class="d-flex justify-content-center">
        <div class="nave-body w-75 p-4">
            <h3 class="nave-title">{{ name.toUpperCase() }}</h3>
            <div class="d-flex justify-content-center m-5">
                <img onerror="this.src='https://starwars-visualguide.com/assets/img/big-placeholder.jpg'"
                    :src="`https://starwars-visualguide.com/assets/img/starships/${naves[index].id}.jpg`">
            </div>
            <div class="text-align">
                <p class="nave-text">MODEL: </p>
                <p class="nave-resp">{{ naves[index].model }}</p>
            </div>
            <div class="text-align">
                <p class="nave-text">STARSHIP CLASS: </p>
                <p class="nave-resp">{{ naves[index].starship_class }}</p>
            </div>
            <div class="text-align">
                <p class="nave-text">MANUFACTURER: </p>
                <p class="nave-resp">{{ naves[index].manufacturer }}</p>
            </div>
            <div class="text-align">
                <p class="nave-text">COST: </p>
                <p class="nave-resp">{{ naves[index].cost_in_credits }}</p>
            </div>
            <div class="d-flex">
                <div class="container w-75">
                    <div class="row">
                        <div class="d-flex col">
                            <p class="nave-text">COST: </p>
                            <p class="nave-resp">{{ naves[index].cost_in_credits }}</p>
                        </div>
                        <div class="d-flex col ms-4">
                            <p class="nave-text">COST: </p>
                            <p class="nave-resp">{{ naves[index].cost_in_credits }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
    name: "Nave",
    props: ['name'],
    computed: {
        index() {
            return this.$route.query.index;
        }
    },
    setup() {
        const store = useStore();
        onMounted(() => {
            store.dispatch("fetchData");
        });
        const naves = computed(() => store.state.naves);
        return { naves };
    }
}
</script>

<style scoped>
.nave-body {
background-color: rgba(18, 18, 18, 0.266);
}

.nave-title {
    color: rgb(203, 211, 228);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    font-size: 30px;
    display: flex;
    justify-content: center;
}

img {
    border-bottom: 5px solid #2447c4;
}

.text-align {
    display: flex;
    justify-content: center;
    font-size: 16px;
    margin: -1rem;
}

.nave-text {
    color: white
}

.nave-resp {
    color: rgb(144, 146, 158);
    margin-left: 1rem;
}

.row-cols-2 {
    /* flex: 0 0 auto; */
    width: 50%;
    display: flex;
}
</style>