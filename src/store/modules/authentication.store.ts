import { GetterTree, MutationTree, ActionTree } from 'vuex';
import axios from "axios";
import { AuthenticationState, AuthenticationRequestModel, AuthenticationResponse } from '@/model';
import { AuthenticationService } from '@/service';

const state: AuthenticationState = {
    accessToken: localStorage.getItem('accessToken') || '',
    refreshToken: localStorage.getItem('refreshToken') || '',
    id: localStorage.getItem('id') || '',
    isAdmin: localStorage.getItem('isAdmin') === "false" ? false : true,
    sucess: false
}
const getters: GetterTree<AuthenticationState, any> = {
    isLoggedIn: state => {
        return state.sucess;
    },
    accessToken: state => {
        return state.accessToken;
    },
    id: state => {
        return state.id;
    }
}

const mutations: MutationTree<AuthenticationState> = {
    onAuthenticate(state, data: AuthenticationResponse) {
        state.accessToken = data.accessToken;
        state.refreshToken = data.refreshToken;
        state.id = data.id;
        state.sucess = true;
    },
    onLogout(state) {
        state.accessToken = "";
        state.refreshToken = "";
        state.sucess = false;
        axios.defaults.headers.common["Authorization"] = "";
    },

}

const actions: ActionTree<AuthenticationState, any> = {
    login(context, request: AuthenticationRequestModel) {
        const service = new AuthenticationService();
        return service.login(request).then(response => {
            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('refreshToken', response.refreshToken);
            localStorage.setItem('id', response.id);
            context.commit('onAuthenticate', response);
            return response;
        });
    },
    logout(context) {

        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        context.commit('onLogout');
        return 'logout Successfully';

    },
}

export const LoginModule = {
    state,
    getters,
    mutations,
    actions
}