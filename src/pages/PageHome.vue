<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-gutter-md">
      <div class="col">
        <q-input
          v-model="newTvveetContent"
          class="new-tvveet"
          placeholder="What's happening?"
          maxlength="280"
          bottom-slots
          counter
          autogrow
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://avatars.githubusercontent.com/u/8575113?v=4" />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink q-mb-lg">
        <q-btn
          :disable="!newTvveetContent"
          unelevated
          rounded
          no-caps
          color="primary"
          label="Tvveet"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
export default {
  name: 'PageHome',
  data() {
    return {
      newTvveetContent: '',
    };
  },
};
</script>

<style lang="sass">
.new-tvveet
  textarea
    font-size: 19px
    line-height: 1.4 !important
</style>
