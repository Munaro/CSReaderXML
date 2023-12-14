<template>
    <q-page class="row items-center justify-evenly">
        <PathForm></PathForm>
    </q-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { electronApi } from '../api/electron-api';
import PathForm from '../components/PathForm.vue';
// import { ipcRenderer } from 'electron'

export default defineComponent({
    name: 'IndexPage',
    methods: {
        criarArquivo() {
            electronApi.openFileDialog('Test', 'folder', { name: 'images', extensions: ['jpg'] })
        }
    },
    components: {
        PathForm
    }
});
</script>
