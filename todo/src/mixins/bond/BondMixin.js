// const auth = solid.auth
import auth from 'solid-auth-client';
const fc = new SolidFileClient(auth)
const popUri = 'https://solidcommunity.net/common/popup.html'
// import auth from 'solid-auth-client';
//  import FC from 'solid-file-client'
// const fc = new FC( auth )

export default {
  name: "BondMixin",
  async created(){
    console.warn("hello, i'm the BondMixin")
    console.log(auth)
    console.log(fc)
    await this.checkSession()
    this.url = 'https://cdr.solidcommunity.net/public/vuejs/todo/' //window.location
    console.log(this.url)
    await this.readFolder()
    console.log(window.location)
    this.url = window.location.href
    console.log(this.url)
    await this.readFolder()
    console.log("CREATED TERMINE")
  },
  methods:{
    async readFolder(){
      this.folder = await fc.readFolder( this.url, {links:"include_possible"} )
      console.warn("Folder: ",this.folder)
    },
    async checkSession(){
      this.session = await auth.currentSession()
      if (!this.session) {
        this.session = await auth.popupLogin({ popupUri:popUri })
      }
      console.log(`Logged in as ${this.session.webId}.`)
    }
  }
}
