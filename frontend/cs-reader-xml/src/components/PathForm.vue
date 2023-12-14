<template>
    <div style="max-width: 400px">
        <q-form @submit="submitForm" @reset="onReset" class="q-gutter-md">
            <q-input
                filled
                v-model="$data.formData.host"
                label="Host*"
                :rules="[(val) => (val && val.length > 0) || 'Insira o host']"
            />

            <q-input
                filled
                type="number"
                v-model="$data.formData.port"
                label="Porta *"
                lazy-rules
                :rules="[
                    (val) => (val !== null && val !== '') || 'Insira a porta',
                    (val) =>
                        (val > 0 && val.length < 6) ||
                        'O valor deve ter 4 digitos',
                ]"
            />

            <q-input
                filled
                v-model="$data.formData.user"
                label="Usuário*"
                lazy-rules
                :rules="[
                    (val) => (val && val.length > 0) || 'Insira um usuário',
                ]"
            />

            <q-input
                v-model="$data.formData.password"
                filled
                label="Senha*"
                type="password"
                :rules="[
                    (val) =>
                        (val && val.length > 0 && val.length < 10) ||
                        'A senha deve conter 10 caracteres',
                ]"
            />

            <q-input
                filled
                v-model="$data.formData.databasePath"
                label="Local*"
                lazy-rules
                :rules="[
                    (val) =>
                        (val && val.length > 0) || 'Insira o caminho da pasta',
                ]"
            >
            </q-input>

            <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

            <div>
                <q-btn
                    label="Salvar"
                    :disable="!formValid"
                    type="submit"
                    color="primary"
                />
                <q-btn
                    label="Reset"
                    type="reset"
                    color="primary"
                    flat
                    class="q-ml-sm"
                />
            </div>
        </q-form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { saveFile } from '../../src/api/electron-api';
// import { saveFile } from 'src/api/electron-api';
// import { ipcRenderer } from 'electron'

export default defineComponent({
    name: 'IndexPage',

    data() {
        return {
            formData: {
                host: '127.0.0.1',
                port: 3050,
                databasePath:
                    'C:\\ControlSoft Agro\\BaseDados\\VX\\DBARMAZENS_VX30.FDB',
                user: 'SYSDBA',
                password: 'masterkey',  
            },
        };
    },
    methods: {
        async submitForm() {
            console.log(this.formData);
            await saveFile.createFile('any', JSON.stringify(this.formData));
        },

        onReset() {
            return '';
        },
    },
    computed: {
        formValid() {
            return Object.values(this.formData).every((value) => value !== '');
        },
    },
});
</script>
