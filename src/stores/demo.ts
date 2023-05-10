import { defineStore, acceptHMRUpdate } from 'pinia';

export const useDemoStore = defineStore({
    id: 'user',
    state: () => ({
        name: 'sxw',
        age: 23,
    }),
    actions: {
        reset() {
            this.$patch({
                name: '',
                age: 0,
            })
        },
        edit(name: string, age: number) {
            this.$patch({
                name,
                age,
            })
        },
    }
})