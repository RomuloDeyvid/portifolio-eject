import { defineStore } from 'pinia';
import type { Projeto } from 'types';

export const useProjectosStore = defineStore('projetos', {
    state: () => ({
        projetos: [] as Projeto[],
        loading: false,
    }),
    actions: {
        async getProjectos() {
            this.loading = true;
            const response = await fetch('https://gist.githubusercontent.com/RomuloDeyvid/c6fa27dcda0e139d78b1104a082ffd46/raw/b4966f40a41651b7a1a4c19e80198e42d4f557c9/gistfile1.txt');
            const data = await response.json();
            this.projetos = data;
            this.loading = false;
        }
    }
})
