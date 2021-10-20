import { GetterTree, MutationTree, ActionTree } from 'vuex';
import axios from "axios";
import { AuthenticationState, AuthenticationRequestModel, AuthenticationResponse } from '@/model';
import { AuthenticationService } from '@/service';

const state: AuthenticationState = {

    accessToken: localStorage.getItem('accessToken') || '',
    refreshToken: localStorage.getItem('refreshToken') || '',
    id: localStorage.getItem('id') || '',
    role: localStorage.getItem('role') || '',
    companyId: localStorage.getItem('companyId') || '',
}
const getters: GetterTree<AuthenticationState, any> = {
    accessToken: state => {
        return state.accessToken;
    },
    isLoggedIn: state => {
        return state.accessToken;
    },
    role: state => {
        return state.role;
    },
    id: state => {
        return state.id;
    },
    companyId: state => {
        return state.companyId;
    }
}

const mutations: MutationTree<AuthenticationState> = {
    onAuthenticate(state, data: AuthenticationResponse) {
        state.accessToken = data.accessToken;
        state.refreshToken = data.refreshToken;
        state.id = data.id;
        state.role = data.role;
        state.companyId = data.companyId;
    },
    onLogout(state) {
        state.accessToken = "";
        state.refreshToken = "";
        axios.defaults.headers.common["Authorization"] = "";
    },

}

const actions: ActionTree<AuthenticationState, any> = {
    login(context, request: AuthenticationRequestModel) {
        const service = new AuthenticationService();
        return service.login(request).then(response => {
            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('companyId', response.companyId);
            localStorage.setItem('id', response.id);
            localStorage.setItem('refreshToken', response.refreshToken);            
            localStorage.setItem('role', response.role);            
            context.commit('onAuthenticate', response);
            axios.defaults.headers.common["Authorization"] = `Bearer ${response.accessToken}`;
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