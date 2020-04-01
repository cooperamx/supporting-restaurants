<template>
  <div class="__block">
    <form action>
      <div class="field">
        <label class="label">Nombre completo</label>
        <div class="control">
          <input class="input" type="text" placeholder="Escribe tu nombre" v-model="form.name"/>
        </div>
      </div>
      <div class="field">
        <label class="label">Correo electrónico</label>
        <div class="control">
          <input class="input" type="text" placeholder="Coloca tu corre electronico" v-model="form.email" />
        </div>
      </div>
      <div class="field">
        <label class="label">Teléfono (Opcional)</label>
        <div class="control">
          <input class="input" type="text" placeholder="Dejanos tu telefono" v-model="form.phone" />
        </div>
      </div>

      <Button :text="'Enviar mensaje a ' + name" primary @click="handleClick" />
    </form>
  </div>
</template>

<script>
import Button from "./ui/Button"

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
      }
    }
  },
  components: {
    Button
  },
  props: {
    name: String,
  },
  methods: {
    handleClick() {
      this.$emit('click', this.form);
    }
  }
};
</script>

<style scoped>
.__block {
  margin: 2rem 0;
}
</style>
