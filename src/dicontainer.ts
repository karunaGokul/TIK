import { Vue, Provide } from 'vue-property-decorator';

import { IAuthenticationService, AuthenticationService } from '@/service';

export class DIContainer extends Vue {
    @Provide('authService') authService: IAuthenticationService = new AuthenticationService();
}