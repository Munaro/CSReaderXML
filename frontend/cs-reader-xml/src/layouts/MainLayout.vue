<template>
    <q-layout view="lHh Lpr lFf" style="height: 100%;">
        <q-header elevated>
            <q-toolbar>
                <q-toolbar-title>
                    CS Reader
                </q-toolbar-title>

                <div>Quasar v{{ $q.version }}</div>
            </q-toolbar>
        </q-header>
        <q-page-container style="height: 100%;">
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MainLayout'
});
</script>
