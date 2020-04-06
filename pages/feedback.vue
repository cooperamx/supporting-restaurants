<template>
  <div class="columns is-vcentered">
    <div class="column is-4">
      <div class="columns has-text-centered">
        <div class="column">
          <h2 class="is-size-5 has-text-weight-bold">
            ¿Lograste conseguir tu cupón?
          </h2>
        </div>
      </div>
      <div class="columns has-text-centered is-centered is-mobile">
        <div class="column is-narrow">
          <RoundButton>
            <img src="../assets/thumbs-up-solid.svg" alt="coupons" />
          </RoundButton>
        </div>
        <div class="column is-narrow">
          <RoundButton>
            <img src="../assets/thumbs-down-solid.svg" alt="coupons" />
          </RoundButton>
        </div>
      </div>
      <div class="columns has-text-centered">
        <div class="column">
          <Button text="Obtener más cupones" primary />
        </div>
      </div>
    </div>
    <div class="column is-8 is-hidden-touch">
      <img src="../assets/coupons.png" alt="coupons" />
    </div>
  </div>
</template>

<script>
import Button from '../components/ui/Button';
import RoundButton from '../components/ui/RoundButton';

export default {
  layout: 'main',
  components: {
    Button,
    RoundButton
  },
  methods: {
    handleClick(type) {
      console.log(`Button ${type}`);
    }
  }
};
</script>
