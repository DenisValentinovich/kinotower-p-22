import {api} from "~/api";

export const useGenderStore = defineStore('genders', () => {
    const genders = ref([]);
    async function fetchGenders() {
        const res = await api('/genders');
        genders.value = res.data.genders;
    }
    fetchGenders();
    return {
        genders,
    }
});