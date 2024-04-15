<script setup>

import { useTexture } from '@tresjs/core'
import { BackSide, DoubleSide } from "three";

const texture = await useTexture(['/src/assets/starmap_4k.jpg'])

</script>

<template>
    <TresMesh>
        <TresSphereGeometry :args="[1000, 50, 50]" :position="[0]"/>
        <TresMeshStandardMaterial :map="texture" :side="DoubleSide" />
    </TresMesh>
</template>

<style lang="sass" scoped>



</style>