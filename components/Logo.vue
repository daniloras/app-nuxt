<template>
  <div class="row justify-content-center text-left">
    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
      <h1>{{name}}</h1>
      <hr />
      <label>Nome Completo</label>
      <input
        @input="updateName"
        :value="name"
        type="text"
        class="form-control form-control-lg"
        placeholder="Nome Completo"
      />
      <hr />
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    name() {
      return this.$store.state.seller.name;
    }
  },
  methods: {
    updateName(e) {
      this.$store.commit("seller/setName", e.target.value);
    }
  }
};
</script>
<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
