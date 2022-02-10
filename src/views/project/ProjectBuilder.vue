 <template>
  <div>
    <v-container fluid class="mt-4 pa-8" v-if="!toggleCategory">
      <v-row>
        <v-col cols="8" md="4">
          <h3 class="mb-2">
            Enter Enquiry Name <span class="red--text">*</span>
          </h3>
          <v-text-field outlined dense v-model="projectName"> </v-text-field>
        </v-col>
        <v-col cols="8" md="4" class="ml-10">
          <h3 class="mb-2">
            Select Merchandiser <span class="red--text">*</span>
          </h3>

          <v-select
            :menu-props="{ offsetY: true }"
            label="Select Merchandiser"
            :items="merchandiserResponse"
            item-text="Merchandiser"
            item-value="Id"
            outlined
            dense
            v-model="merchandiser"
            :loading="merchandiserLoading"
            :rules="[(v) => !!v || 'Merchandiser role is required']"
          >
          </v-select>
        </v-col>
      </v-row>

      <div>
        <h3 class="mb-2">Select Category</h3>
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
import { AdminRequestModel, MerchandiserResponseModel } from "@/model";
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
  public projectName: string = "";
  public merchandiser: string = "";
  public toggleCategory: boolean = false;
  public categoryName: string = "";
  public snackbar: boolean = false;
  public snackbarText: string = "";

  merchandiserLoading: boolean = false;

  created() {
    this.GetMerchandiser();
  }

  public GetMerchandiser() {
    this.adminRequest.companyId = this.$store.getters.companyId;

    this.merchandiserLoading = true;
    this.EmployeeService.GetMerchandiser(this.adminRequest).then(
      (response: Array<MerchandiserResponseModel>) => {
        this.merchandiserResponse = response;

        this.merchandiserLoading = false;
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
      categoryName: "Deying",
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
