 <template>
  <div>
    <v-container fluid class="mt-4 pa-8" v-if="!toggleCategory">
      <v-row>
        <v-col cols="12" md="4">
          <div class="mb-2 text-h6">
            Enter Enquiry Name <span class="red--text">*</span>
          </div>
          <v-text-field outlined dense v-model="projectName"> </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <div class="mb-2 text-h6">
            Select Merchandiser <span class="red--text">*</span>
          </div>

          <v-select
            :menu-props="{ offsetY: true }"
            label="Select Merchandiser"
            :items="merchandiserResponse"
            item-text="Merchandiser"
            item-value="Id"
            outlined
            dense
            v-model="merchandiser"
            :loading="loading"
            :rules="[(v) => !!v || 'Merchandiser role is required']"
          >
          </v-select>
        </v-col>
        <v-col>
          <div class="mb-2 text-h6">
            Choose Employees <span class="red--text">*</span>
          </div>
          <v-select
            :menu-props="{ offsetY: true }"
            label="Choose Employees"
            :items="response.FirstName"
            item-text="FirstName"
            item-value="FirstName"
            outlined
            dense
            :loading="loading"
            :rules="[(v) => !!v || 'Employee is required']"
          >
          </v-select>
        </v-col>
      </v-row>

      <div>
        <div class="mb-2 text-h6">Select Category</div>
        <v-row no-gutters>
          <v-col
            cols="4"
            md="2"
            v-for="category in categories"
            :key="category.categoryName"
            class="ma-3"
            align="center"
          >
            <a class="ma-2" @click="openCategory(category.categoryName)">
              <v-hover v-slot:default="{ hover }">
                <v-avatar
                  size="140"
                  :color="hover ? 'primary' : ''"
                  class="elevation-2"
                >
                  <img
                    :src="category.categoryImage"
                    :alt="category.categoryName"
                    style="max-width: 50px; max-height: 50px; border-radius: 0"
                  />
                </v-avatar>
              </v-hover>
              <div class="mt-4 black--text">{{ category.categoryName }}</div>
            </a>
          </v-col>
        </v-row>
      </div>
      <v-snackbar
        v-model="snackbar"
        :timeout="2000"
        color="deep-orange lighten-5 pink--text"
        absolute
        right
        top
      >
        <v-icon color="pink">mdi-exclamation-thick </v-icon>
        {{ snackbarText }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
            <v-icon> mdi-close-box</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>

    <ProjectForm
      :categoryName="categoryName"
      :projectName="projectName"
      :merchandiser="merchandiser"
      v-else
    />
  </div>
</template>

<script lang="ts">
import { AdminRequestModel, MerchandiserResponseModel, EmployeeRequestModel, EmployeeModel } from "@/model";
import { IEmployeeService } from "@/service";
import { Component, Inject, Vue } from "vue-property-decorator";
import ProjectForm from "./components/ProjectForm.vue";

@Component({
  components: { ProjectForm },
})
export default class ProjectBuilder extends Vue {
  @Inject("EmployeeService") EmployeeService: IEmployeeService;

  public merchandiserResponse: Array<MerchandiserResponseModel> = [];
  public adminRequest: AdminRequestModel = new AdminRequestModel();
  public request: EmployeeRequestModel = new EmployeeRequestModel();
  public response: Array<EmployeeModel> = [];
  public projectName: string = "";
  public merchandiser: string = "";
  public toggleCategory: boolean = false;
  public categoryName: string = "";
  public snackbar: boolean = false;
  public snackbarText: string = "";

  public loading: boolean = false;

  created() {
    this.GetMerchandiser();
    this.getEmployees();
    // this.filter();
  }

  public filter() {

  }

  public getEmployees() {
    this.request.id = this.$store.getters.id;
    this.loading = true;
    this.EmployeeService.GetEmployees(this.request).then((response) => {
      this.loading = false;
      this.response = response;
    });
  }

  public GetMerchandiser() {
    this.adminRequest.companyId = this.$store.getters.companyId;

    this.loading = true;
    this.EmployeeService.GetMerchandiser(this.adminRequest).then(
      (response: Array<MerchandiserResponseModel>) => {
        this.merchandiserResponse = response;

        this.loading = false;
      }
    );
  }

  public openCategory(categoryName: any) {
    if (this.projectName === "") {
      this.snackbarText = "Please Enter Project Name";
      this.snackbar = true;
    } else if (this.merchandiser === "") {
      this.snackbarText = "Please Select Merchandiser";
      this.snackbar = true;
    } else {
      this.toggleCategory = true;
      this.categoryName = categoryName;
    }
  }

  categories: any = [
    {
      categoryName: "Mills",
      categoryImage: require("@/assets/mills.png"),
    },
    {
      categoryName: "Knitting",
      categoryImage: require("@/assets/knitting.png"),
    },
    {
      categoryName: "Dyeing",
      categoryImage: require("@/assets/dyeing.png"),
    },
    {
      categoryName: "Printing",
      categoryImage: require("@/assets/printing.png"),
    },
    {
      categoryName: "Processing",
      categoryImage: require("@/assets/engineering.png"),
    },
    {
      categoryName: "Job Work Unit",
      categoryImage: require("@/assets/sewing-machine.png"),
    },
    {
      categoryName: "Finishing Fabric",
      categoryImage: require("@/assets/stack.png"),
    },
    {
      categoryName: "Second Fabric",
      categoryImage: require("@/assets/textiles.png"),
    },
    {
      categoryName: "Second Pieces",
      categoryImage: require("@/assets/second-pieces.png"),
    },
    {
      categoryName: "Accessories",
      categoryImage: require("@/assets/accessories.png"),
    },
  ];
}
</script>
