<!-- <i18n src="@/common/locales.json"></i18n> -->
<template>
  <div class="solid-login">
    <button variant="success" v-if="!session" @click="login">Login</button>
    <button variant="danger" v-else @click="logout">Logout</button>
  </div>
</template>

<script>
import auth from 'solid-auth-client';
// import loginMixin from '@/mixins/loginMixin'
// import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'LoginButton',

  computed:{
    // webId() {
    //   return this.$store.state.solid.webId
    // }
  },
  data: function () {
    return {
      session: {},
    }
  },
  methods: {
    async login(){
      console.log("login")
    //  this.popupLogin()
    this.session = await auth.popupLogin({ popupUri:popUri })
    },
    async logout(){
      await  auth.logout()
    },

  }
}
</script>
