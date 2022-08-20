import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import MenuPage from '@/views/MenuPage.vue'

Vue.use(VueRouter)

const routes = [
  {  
    path: "/",
  component: HomePage,
  meta: [
    
    {
      title: `Home Page`
    },
    {
      name: `description`,
      content: `welcome to the home page`
    },
    {
      name: `author`,
      content: `Tyler`
  },
]
},

{
  path: "/menu",
  component: MenuPage,
  meta: [
    
    {
      title: `menu page`
    },
    {
      name: `description`,
      content: `welcome to the menu`
    },
    {
      name: `author`,
      content: `Tyler`
  },
]
}
]

const router = new VueRouter({
  routes
})



router.beforeEach(
  (to, from, next) => {

 let currnet_meta_tag = document.querySelectorAll(`meta`);
 for (let i = 0; i<currnet_meta_tag.length; i++) {
  currnet_meta_tag[i].remove();
 }

   let new_meta_tags = to[`meta`];
  document.querySelector(`title`)[`innerText`] = new_meta_tags[0][`title`];

  for (let i = 1; i<new_meta_tags.length; i++){
    document.querySelector(`head`).insertAdjacentHTML(`beforeend`, 
    `<meta name="${new_meta_tags[i][`name`]}"
    content="${new_meta_tags[i][`content`]}">`)
    }

    document.querySelector(`head`).insertAdjacentHTML(`afterbegin`,
`<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0">`);
from;
next();
  
  }
  )

export default router
