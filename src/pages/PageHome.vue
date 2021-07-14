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

    <q-separator class="divider" color="grey-1" size="10px" />

    <q-list class="q-py-md">
      <q-item clickable>
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://avatars.githubusercontent.com/u/8575113?v=4" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>たにモン</strong>
            <span class="text-grey-7"> @tanimon_dev ・1 min ago </span>
          </q-item-label>
          <q-item-label class="tvveet-content text-body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            repellat voluptatem ratione provident, porro necessitatibus
            perferendis ullam minima exercitationem pariatur dolorem sint hic
            placeat unde! Ipsam ut possimus magnam rem.
          </q-item-label>
          <div class="tvveet-icons row justify-between">
            <q-btn flat round size="sm" color="grey" icon="far fa-comment" />
            <q-btn flat round size="sm" color="grey" icon="fas fa-retweet" />
            <q-btn flat round size="sm" color="grey" icon="far fa-heart" />
            <q-btn flat round size="sm" color="grey" icon="fas fa-trash" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator />
    </q-list>
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
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-3
.tvveet-content
  white-space: pre-line
.tvveet-icons
  margin-left: -5px
</style>
