<template>
  <div class="__block">
    <form action>
      <div class="field">
        <label class="label">Nombre completo</label>
        <div class="control">
          <input class="input" type="text" placeholder="Escribe tu nombre" />
        </div>
      </div>
      <div class="field">
        <label class="label">Correo electrónico</label>
        <div class="control">
          <input class="input" type="text" placeholder="Coloca tu corre electronico" />
        </div>
      </div>
      <div class="field">
        <label class="label">Teléfono (Opcional)</label>
        <div class="control">
          <input class="input" type="text" placeholder="Dejanos tu telefono" />
        </div>
      </div>

      <Button text="Enviar mensaje a {company.name}" primary @click="handleClick" />
    </form>
  </div>
</template>

<script>
import Button from "./ui/Button"

export default {
  components: {
    Button
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style scoped>
.__block {
  margin: 2rem 0;
}
</style>
