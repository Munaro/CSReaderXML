<template>
    <q-form class="q-pa-md" @submit="handleSubmit" @reset="resetForm">
        <q-card>
            <q-card-section>
                <div class="text-subtitle2">Configuração do Banco de Dados</div>
            </q-card-section>
            <q-card-section>
                <div class="row">
                    <div class="col-6 q-pa-md">
                        <q-input outlined v-model="$data.formData.host" label="Host*"
                            :rules="[formValidations.fieldRequired]" />
                    </div>
                    <div class="col-6 q-pa-md">
                        <q-input outlined type="text" v-model="$data.formData.port" label="Porta *" lazy-rules
                            :rules="[formValidations.fieldRequired, v => formValidations.minLength(v, 4), v => formValidations.maxLength(v, 4)]" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 q-pa-md">
                        <q-input outlined v-model="$data.formData.user" label="Usuário*" lazy-rules
                            :rules="[formValidations.fieldRequired]" />
                    </div>
                    <div class="col-6 q-pa-md">

                        <q-input v-model="$data.formData.password" outlined label="Senha*" type="password"
                            :rules="[formValidations.fieldRequired]" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 q-pa-md">
                        <div class="text-subtitle2">Banco de dados</div>
                        <!--<q-file label="Arquivo*" outlined v-model="$data.formData.databasePath" @update:model-value="formData.databasePath = formData.databasePath.path">
                            <template v-slot:append>
                                <q-icon name="attach_file" />
                            </template>
                        </q-file>-->
                        <q-input disable class="q-mt-sm" :disabled="true" v-model="$data.formData.databasePath" outlined
                            label="Caminho" />
                    </div>
                </div>
            </q-card-section>
            <q-card-actions :align="'center'">
                <q-btn label="Salvar" type="submit" color="primary" />
                <q-btn label="Limpar" type="reset" color="negative" />
            </q-card-actions>
        </q-card>
    </q-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { saveFile } from '../../src/api/electron-api';
import { formValidations } from '../../src/validations/formsValidations'
// import { saveFile } from 'src/api/electron-api';
// import { ipcRenderer } from 'electron'

export default defineComponent({
    name: 'IndexPage',

    data() {
        return {
            formData: {
                host: '127.0.0.1',
                port: 3050,
                databasePath: null,
                user: 'SYSDBA',
                password: 'masterkey',
            }
        };
    },
    methods: {
        async handleSubmit() {
            console.log(this.formData);
            await saveFile.createFile('any', JSON.stringify(this.formData));
        },
        resetForm() {
            console.log('reset')
        }
    },
    computed: {
        formValid() {
            return Object.values(this.formData).every((value) => value !== '');
        },
    },
    setup() {
        return {
            formValidations
        }
    }
});
</script>
