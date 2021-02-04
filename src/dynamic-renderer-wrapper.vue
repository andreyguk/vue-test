<template>
    <div>
        <div v-for="control in controls">
            <component :is="control" v-if="control" />
        </div>
    </div>
    
    
</template>

<script lang="ts" src="./dynamic-renderer-wrapper.ts"></script>