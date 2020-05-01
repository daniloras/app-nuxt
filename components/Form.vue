<template>
  <div class="container">
    <div class="row justify-content-center text-left">
      <div class="col-xl-6 col-lg-6 col-md-10 col-12">
        <label>Nome Completo</label>
        <input
          @input="updateName"
          :value="name"
          type="text"
          class="form-control form-control-lg"
          placeholder="Nome Completo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.state.sellerForm1Register.name;
    }
  },
  methods: {
    updateName(e) {
      this.$store.commit("sellerForm1Register", {
        name: e.target.value
      });
    }
  }
};
</script>

<style></style>
