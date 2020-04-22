import Vue from "vue";
import Vuex from "vuex";
import { db } from "../db";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [],
  },
  mutations: {
    setBlogs(state) {
      db.collection("blogs")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            let item = doc.data();
            item.id = doc.id;
            state.blogs.push(item);
          });
        });
    },
  },
  actions: {
    getBlogs(context) {
      context.commit("setBlogs");
    },
  },
  modules: {},
});

// actions:{
//   getStudents(context){
//   context.commit('setStudents');
//   },
//   addTeamMember(context,data){
//   context.commit('pushMemberToTeam',data);
//   context.commit('changeSelectedState',data.index);
//   },
//   removeFromTeam(context,data){
//   context.commit('spliceFromTeam',data)
//   }
//   },
//   mutations:{

//   setStudents(state){
//   state.students=data.getStudents();
//   },
//   pushMemberToTeam(state,data){
//   state.teamA.puch(state.students[data.index]);
//   },
//   changeSelectedState(state,data.index){
//   state.students[data.index].selected=ture;
//   },
//   spliceFromStudents(state,data){
//   state.students.splice(data.index,1);
//   }
//   }
//   }
//   }

//   im component beispiel
//   ---------------------
//   computed:{
//   students(){
//   return this.$store.state.students;
//   }
//   }
//   methods:{
//   addTeamMember(type,index){
//   this.$store.dispatch('addTeamMember',{type,index})
//   },
//   removeFromTeam(){
//   this.$store.dispatch('removeFromTeam')
//   }
//   },
//   created(){
//   this.$store.dispatch('getstudents');
//   }
