import { Vue, Provide } from "vue-property-decorator";

import {
    IAuthenticationService,
    AuthenticationService,
    IRegistrationService,
    RegistrationService,
    IProjectService,
    ProjectService,
    IProfileService,
    ProfileService,
    IEmployeeService,
    EmployeeService
} from "@/service";
import { DashboardService, IDashboardService } from "./service/dashboard.service";

export class DIContainer extends Vue {
    @Provide("authService") authService: IAuthenticationService = new AuthenticationService();
    @Provide("registrationService") registrationService: IRegistrationService = new RegistrationService();
    @Provide("ProjectService") ProjectService: IProjectService = new ProjectService();
    @Provide("ProfileService") ProfileService: IProfileService = new ProfileService();
    @Provide("EmployeeService") EmployeeService: IEmployeeService = new EmployeeService();
    @Provide("DashboardService") DashboardService: IDashboardService = new DashboardService();
}
