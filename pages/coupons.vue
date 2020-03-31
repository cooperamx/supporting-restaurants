<template>
  <div class="columns __container">
    <div class="column is-three-fifths is-offset-one-fifth">
      <h2>¡Estás a un paso de obtener tu cupón! 🤩</h2>
      <div class="columns">
        <div class="column is-half __topspace">
          <Coupon
            title="Llévate 2 por el precio de una y media"
            body="In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telesc."
            @click="handleClick"
          />

          <form action class="__topspace">
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

            <Buttom text="Enviar mensaje a {company.name}" primary />
          </form>
        </div>
        <div class="column is-half">
          <img src="../assets/coupons.png" alt="coupons" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Buttom from "../components/ui/Buttom";
import Coupon from "../components/ui/Coupon";

export default {
  components: {
    Buttom,
    Coupon
  },
  methods: {
    handleClick() {
      console.warn("bu!");
    }
  }
};
</script>

<style>
.__container h2 {
  font-weight: 600;
  font-size: 1.5rem;
}

.__topspace {
  margin: 2rem 0;
}
</style>
