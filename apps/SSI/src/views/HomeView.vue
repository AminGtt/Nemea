<script setup>

import Skybox from '@/components/Skybox.vue'

import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'



</script>

<template>

  <main>
    <TresCanvas 
    id="scene" 
    window-size
    clear-color="#82DBC5"
    >
      <TresPerspectiveCamera :position="[-10, 10, 10]" />
      <OrbitControls :enable-pan="false" :max-distance="900" />
      <TresAmbientLight :position="1" :intensity="0.2" />
    
      <Suspense>
        <Skybox />
      </Suspense>

      <TresMesh :position="[0, 0, 0]">
        <TresBoxGeometry :args="[1, 1, 2]" />
        <TresMeshStandardMaterial color="orange" />
      </TresMesh>

      <TresMesh :position="[0, 0, 2]">
        <TresBoxGeometry :args="[1, 1, 1]" />
        <TresMeshStandardMaterial color="red" />
      </TresMesh>
  
    </TresCanvas>
    
    <section id="ui">
      <h1>Welcome to Solar System Interactive</h1>
    </section>
  </main>

</template>

<style lang="sass" scoped>
  #ui
    z-index: 999
    position: relative

    h1
      color: purple
      text-align: center
      top: 80vh
      position: relative

</style>