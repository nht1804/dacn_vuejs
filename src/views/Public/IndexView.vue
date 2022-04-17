<template>
  <banner />
  <n-divider />
  <tutorial />
  <n-divider />
  <carSect />
  <ownerSect />
</template>

<script>
import banner from '@/components/Home/IndexBanner.vue'
import ownerSect from '@/components/Home/IndexOwner.vue'
import tutorial from '@/components/Home/IndexTutorial.vue'
import carSect from '@/components/Home/IndexRateCar.vue'
export default {
  components: {
    banner,
    ownerSect,
    tutorial,
    carSect
  }
}
</script>

<style>
.section {
  width: 75%;
  margin: auto;
  padding: 70px 0;
}

.section-container {
  width: 100%;
  justify-items: center;
}

.n-divinde {
  width: 80%;
}
</style>