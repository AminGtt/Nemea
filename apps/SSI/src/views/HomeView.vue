<script setup>

import { TresCanvas } from '@tresjs/core'
import { Sphere, OrbitControls } from '@tresjs/cientos'

</script>

<template>

  <main>
    <TresCanvas 
      id="scene" 
      window-size
      clear-color="#82DBC5"
      >

      <OrbitControls />
      
      <Sphere :args="[2, 50, 50]" color="pink" />

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