import { Vue, Provide } from 'vue-property-decorator';

import { IAuthenticationService, AuthenticationService } from '@/service';
import { IRegistrationService, RegistrationService } from '@/service';
import { IProjectService, ProjectService } from '@/service';

export class DIContainer extends Vue {
    @Provide('authService') authService: IAuthenticationService = new AuthenticationService();
    @Provide('registrationService') registrationService: IRegistrationService = new RegistrationService();
    @Provide('ProjectService') ProjectService: IProjectService = new ProjectService();
}