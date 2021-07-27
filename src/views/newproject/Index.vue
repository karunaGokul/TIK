 <template>
  <div>
    <div v-if="!linkCategory">
      <template>
        <v-row justify="Left mt-3">
          <v-col cols="12 ml-5" sm="6" md="3">
            <h3 class="my-4">Enter Project Name</h3>
            <v-text-field
              label="Enter Project Name"
              outlined
              v-model="projectName"
            ></v-text-field>
          </v-col>
        </v-row>
      </template>

      <template>
        <div class="ml-5">
          <h3 class="my-4">Select Catagory</h3>
          <div class="mb-16 pb-16">
            <v-container>
              <v-row :align="align" no-gutters style="height: 150px">
                <v-col
                  cols="12"
                  md="2"
                  v-for="category in categories"
                  :key="category.categoryName"
                  class="ma-3"
                  align="center"
                >
                  <v-btn
                    class="ma-2"
                    outlined
                    x-large
                    fab
                    color="orange"
                    @click="openCategory(category.categoryName)"
                  >
                    <v-icon>{{ category.categoryImage }}</v-icon>
                  </v-btn>
                  <div>{{ category.categoryName }}</div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </template>
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
    <div v-if="linkCategory">
      <mills :categoryName="categoryName" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Mills from "./Mills.vue";

@Component({
  components: { Mills },
})
export default class Newproject extends Vue {
  projectName: any = "";
  linkCategory: any = false;
  categoryName: any = "";
  snackbar: any = false;
  snackbarText: any;
  openCategory(categoryName: any) {
    if (this.projectName == "") {
      this.snackbarText = "Please Enter Project Name";
      this.snackbar = true;
    } else {
      this.linkCategory = true;
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


  


