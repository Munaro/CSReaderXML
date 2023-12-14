<template>
    <form method="post">
        <input type="text" v-model="$data.path" required>
        <q-btn @click="submitForm">teste</q-btn>
    </form>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { saveFile } from 'src/api/electron-api';
// import { ipcRenderer } from 'electron'

export default defineComponent({
    name: 'IndexPage',

    data() {
        return {
            formData: {
                host: '127.0.0.1',
                port: 3050,
                databasePath: 'C:\\ControlSoft Agro\\BaseDados\\VX\\DBARMAZENS_VX30.FDB',
                user: 'SYSDBA',
                password: 'masterkey'
            }
        }
    },
    methods: {
        async submitForm() {
            await saveFile.createFile('any', JSON.stringify(this.formData))
        }

    }
});
</script>
