 <template>
  <div>
    <div v-if="!toggleCategory">
      <v-row>
        <v-col cols="8" class="ml-5" md="3">
          <h3 class="my-4">Enter Project Name</h3>
          <v-text-field
            label="Enter Project Name"
            outlined
            v-model="projectName"
          ></v-text-field>
        </v-col>
      </v-row>

      <div class="ml-5">
        <h3 class="my-4">Select Category</h3>
        <div class="my-7 pb-5">
          <v-container>
            <v-row no-gutters>
              <v-col
                cols="4"
                md="2"
                v-for="category in categories"
                :key="category.categoryName"
                class="ma-3"
                align="center"
                ><v-hover v-slot:default="{ hover }">
                  <v-btn
                    class="ma-2"
                    x-large
                    fab
                    elevation="4"
                    :color="hover ? '#ff6500' : ''"
                    @click="openCategory(category.categoryName)"
                  >
                    <v-icon color="green darken-4">{{
                      category.categoryImage
                    }}</v-icon>
                  </v-btn>
                </v-hover>

                <div>{{ category.categoryName }}</div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
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
    <ProjectForm
      :categoryName="categoryName"
      :projectName="projectName"
      v-if="toggleCategory"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProjectForm from "./components/ProjectForm.vue";

@Component({
  components: { ProjectForm },
})
export default class ProjectBuilder extends Vue {
  projectName: any = "";
  toggleCategory: any = false;
  categoryName: any = "";
  snackbar: any = false;
  snackbarText: string = "";

  openCategory(categoryName: any) {
    if (this.projectName == "") {
      this.snackbarText = "Please Enter Project Name";
      this.snackbar = true;
    } else {
      this.toggleCategory = true;
      this.categoryName = categoryName;
    }
  }

  categories: any = [
    {
      categoryName: "Mills",
      categoryImage: "mdi-account-reactivate-outline",
    },
    {
      categoryName: "Knitting",
      categoryImage: "mdi-account-reactivate-outline",
    },
    {
      categoryName: "Deying",
      categoryImage: "mdi-account-reactivate-outline",
    },
    {
      categoryName: "Printing",
      categoryImage: "mdi-account-reactivate-outline",
    },
    {
      categoryName: "Processing",
      categoryImage: "mdi-account-reactivate-outline",
    },
    {
      categoryName: "Job Work Unit",
      categoryImage: "mdi-account-reactivate-outline",
    },
    {
      categoryName: "Finishing Fabric",
      categoryImage: "mdi-account-reactivate-outline",
    },
    {
      categoryName: "Second Fabric",
      categoryImage: "mdi-account-reactivate-outline",
    },
    {
      categoryName: "Second Pieces",
      categoryImage: "mdi-account-reactivate-outline",
    },
    {
      categoryName: "Accessories",
      categoryImage: "mdi-account-reactivate-outline",
    },
  ];  
}
</script>


  


