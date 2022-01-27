import { GetterTree, MutationTree, ActionTree } from 'vuex';
import axios from "axios";
import { AuthenticationState, AuthenticationRequestModel, AuthenticationResponse } from '@/model';
import { AuthenticationService } from '@/service';

const state: AuthenticationState = {

    accessToken: sessionStorage.getItem('accessToken') || '',
    refreshToken: sessionStorage.getItem('refreshToken') || '',
    id: sessionStorage.getItem('id') || '',
    role: sessionStorage.getItem('role') || '',
    companyId: sessionStorage.getItem('companyId') || '',
    category: sessionStorage.getItem('category') || '',
    approvalAdminAccess: sessionStorage.getItem('approvalAdminAccess') || ''
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
    },
    category: state => {
        return state.category;
    },
    approvalAdminAccess: state => {
        return state.approvalAdminAccess;
    },
    // stages: state => {
    //     return state.stages;
    // }
}

const mutations: MutationTree<AuthenticationState> = {
    onAuthenticate(state, data: AuthenticationResponse) {
        state.accessToken = data.accessToken;
        state.refreshToken = data.refreshToken;
        state.id = data.id;
        state.role = data.role;
        state.companyId = data.companyId;
        state.category = data.category;
        state.approvalAdminAccess = data.approvalAdminAccess;

    },
    onLogout(state) {
        state.accessToken = "";
        state.refreshToken = "";
        state.id = "";
        state.role = "";
        state.companyId = "";
        state.category = "";
        state.approvalAdminAccess = "";
        axios.defaults.headers.common["Authorization"] = "";
    },

}

const actions: ActionTree<AuthenticationState, any> = {
    login(context, request: AuthenticationRequestModel) {
        const service = new AuthenticationService();
        return service.login(request).then(response => {
            sessionStorage.setItem('accessToken', response.accessToken);
            sessionStorage.setItem('category', response.category);
            sessionStorage.setItem('companyId', response.companyId);
            sessionStorage.setItem('id', response.id);
            sessionStorage.setItem('refreshToken', response.refreshToken);
            sessionStorage.setItem('role', response.role);
            sessionStorage.setItem('approvalAdminAccess', response.approvalAdminAccess);
            context.commit('onAuthenticate', response);
            axios.defaults.headers.common["Authorization"] = `Bearer ${response.accessToken}`;
            return response;
        });
    },

    refreshToken(context) {
        return new Promise((resolve, reject) => {
            resolve({ "success": false });
        });
    },

    logout(context) {

        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');
        sessionStorage.removeItem('category');
        sessionStorage.removeItem('companyId');
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('approvalAdminAccess');
        context.commit('onLogout');
    },
}

export const LoginModule = {
    state,
    getters,
    mutations,
    actions
}