/* In our application theres no way of knowing when a user
has be authenticated... this files allows us to track that
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

    //State object contains a user object which info about logged-in user
    //default value of loggedIn is false which says that user has not been auth
    //data holds the info about loggedin user
    state:{
        user:{
            loggedIn: false,
            data: null,
        }
    },
    //gettter: a way of accessing data stored in state
    getters: {
        user(state){
            return state.user
        }
    },
    //Mutations allows us to be able to make changes to our state.
    //SET_LOGGED_IN sets the loggedIn property on state.user
    //SET_USER makes changes to data property on state.user
    mutations: {
        SET_LOGGED_IN(state, value){
            state.user.loggedIn = value;
        },
        SET_USER(state,data){
            state.user.data = data;
        }
    },
    //Actions commmit Mutations
    actions:{
        fetchUser({commit}, user){
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email,
                    uid: user.uid
                });
            }else{
                commit("SET_USER", null);
            }
        }
    }
});
