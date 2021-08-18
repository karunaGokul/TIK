import { GetterTree, MutationTree, ActionTree } from 'vuex';

import { AuthenticationState, AuthenticationRequestModel, AuthenticationResponse } from '@/model';
import { AuthenticationService } from '@/service';

const state: AuthenticationState = {
    accessToken: localStorage.getItem('accessToken') || '',
    refreshToken: localStorage.getItem('refreshToken') || '',
    isAdmin: localStorage.getItem('isAdmin') === "false" ? false : true,
}
const getters: GetterTree<AuthenticationState, any> = {

}

const mutations: MutationTree<AuthenticationState> = {
    onAuthenticate(state, data: AuthenticationResponse) {
        state.accessToken = data.accessToken;
        state.refreshToken = data.refreshToken;
    },

}

const actions: ActionTree<AuthenticationState, any> = {
    /* login(context, request: AuthenticationRequestModel) {
         let service = new AuthenticationService();
         return service.login(request).then(response => {
             localStorage.setItem('accessToken', response.accessToken);
             localStorage.setItem('refreshToken', response.refreshToken);
             context.commit('onAuthenticate', response);
             return response;
         });
     },*/
}

export const LoginModule = {
    state,
    getters,
    mutations,
    actions
}