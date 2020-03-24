<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-grey-8 text-gray">
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->

        <q-toolbar-title class="title absolute-center">
          Music-Store-App
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>
    <q-footer class="text-center bg-grey-8">
      <q-tabs>
        <q-route-tab to="/" icon="home" label="Home"/>
        <q-route-tab to="/Product" icon="store" label="Product"/>
        <q-route-tab to="/About" icon="assignment" label="About us"/>
        <q-route-tab to="/Contact" icon="assignment" label="Contact us"/>
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="768"
      width="270"
      show-if-above
      bordered
      content-class="bg-grey-9 text-gray"
    >
      <q-list dark>
        <q-item-label
          header
          class="text-grey-4"
        >
          Music Store Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          class="link text-grey-4"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Home',
          caption: 'Products',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Products',
          caption: 'Our Product',
          icon: 'store',
          link: '/#/Product'
        },
        {
          title: 'About us',
          caption: 'About founder',
          icon: 'assignment',
          link: '/#/About'
        },
        {
          title: 'Contact us',
          caption: 'Contact here',
          icon: 'assignment',
          link: '/#/Contact'
        }
        // {
        //   title: 'Buy here',
        //   caption: 'Buy Our Product here',
        //   icon: 'check_circle',
        //   link: '/#/Buy'
        // }
      ]
    }
  }
}
</script>

<style>
  .title {
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .link {
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
</style>
