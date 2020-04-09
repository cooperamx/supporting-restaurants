<template>
  <div class="__block">
    <form method>
      <div class="field">
        <label class="label">Nombre completo</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Escribe tu nombre"
            v-model="form.name"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Correo electrónico</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Coloca tu corre electronico"
            v-model="form.email"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Teléfono (Opcional)</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Dejanos tu telefono"
            v-model="form.phone"
          />
        </div>
      </div>
      <article v-show="errors.length" class="message is-danger">
        <div class="message-header">
          <p>Algo salio mal!</p>
          <button
            @click.prevent="clearErrors"
            class="delete"
            aria-label="delete"
          ></button>
        </div>
        <div class="message-body">
          <ul>
            <li v-for="error in errors">
              {{ error }}
            </li>
          </ul>
        </div>
      </article>

      <Button
        :text="'Enviar mensaje a ' + name"
        primary
        @click.prevent="handleSubmit"
      />
    </form>
  </div>
</template>

<script>
import Button from './ui/Button';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: ''
      },
      errors: []
    };
  },
  components: {
    Button
  },
  props: {
    name: String
  },
  methods: {
    clearErrors() {
      this.errors = [];
    },
    handleSubmit() {
      this.clearErrors();
      if (!this.form.name) this.errors.push('Incluye tu nombre');
      if (!this.form.email) this.errors.push('Incluye tu correo electronico');

      if (this.errors.length) return;
      this.$emit('submit', this.form);
    }
  }
};
</script>

<style scoped>
.__block {
  margin: 2rem 0;
}
</style>
