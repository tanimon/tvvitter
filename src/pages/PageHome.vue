<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
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
                <img
                  src="https://avatars.githubusercontent.com/u/8575113?v=4"
                />
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink q-mb-lg">
          <q-btn
            @click="addNewTvveet"
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

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item
            v-for="tvveet in tvveets"
            :key="tvveet.id"
            clickable
            class="q-py-md"
          >
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img
                  src="https://avatars.githubusercontent.com/u/8575113?v=4"
                />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>{{ tvveet.displayName }}</strong>
                <span class="text-grey-7">
                  @{{ tvveet.username }} &bull; {{ relativeDate(tvveet.date) }}
                </span>
              </q-item-label>
              <q-item-label class="tvveet-content text-body1">
                {{ tvveet.content }}
              </q-item-label>
              <div class="tvveet-icons row justify-between">
                <q-btn
                  flat
                  round
                  size="sm"
                  color="grey"
                  icon="far fa-comment"
                />
                <q-btn
                  flat
                  round
                  size="sm"
                  color="grey"
                  icon="fas fa-retweet"
                />
                <q-btn flat round size="sm" color="grey" icon="far fa-heart" />
                <q-btn
                  @click="deleteTvveet(tvveet)"
                  flat
                  round
                  size="sm"
                  color="grey"
                  icon="fas fa-trash"
                />
              </div>
            </q-item-section>
          </q-item>

          <q-separator />
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { formatDistanceToNow } from 'date-fns';

type Tvveet = {
  id: number;
  displayName: string;
  username: string;
  avatarImgSrc: string;
  content: string;
  date: number;
};

type Data = {
  newTvveetContent: string;
  tvveets: Tvveet[];
};

export default defineComponent({
  name: 'PageHome',
  data(): Data {
    return {
      newTvveetContent: '',
      tvveets: [
        {
          id: 0,
          displayName: 'たにモン',
          username: 'tanimon_dev',
          avatarImgSrc: 'https://avatars.githubusercontent.com/u/8575113?v=4',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat voluptatem ratione provident, porro necessitatibus perferendis ullam minima exercitationem pariatur dolorem sint hic placeat unde! Ipsam ut possimus magnam rem.',
          date: 1626247095658,
        },
        {
          id: 1,
          displayName: 'たにモン',
          username: 'tanimon_dev',
          avatarImgSrc: 'https://avatars.githubusercontent.com/u/8575113?v=4',
          content:
            ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat voluptatem ratione provident, porro necessitatibus perferendis ullam minima exercitationem pariatur dolorem sint hic placeat unde! Ipsam ut possimus magnam rem.',
          date: 1626247095758,
        },
      ],
    };
  },
  methods: {
    addNewTvveet() {
      const newTvveet: Tvveet = {
        id: Math.random(),
        displayName: 'たにモン',
        username: 'tanimon_dev',
        avatarImgSrc: 'https://avatars.githubusercontent.com/u/8575113?v=4',
        content: this.newTvveetContent,
        date: Date.now(),
      };
      this.tvveets.unshift(newTvveet);
    },

    deleteTvveet(tvveetToDelete: Tvveet): void {
      this.tvveets = this.tvveets
        .slice()
        .filter((item) => item.id !== tvveetToDelete.id);
    },

    relativeDate(time: number): string {
      return formatDistanceToNow(time);
    },
  },
});
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
