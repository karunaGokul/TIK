 <template>
  <div class="my-7 pb-5">
    <v-container>
      <v-row no-gutters>
        <v-col
          cols="5"
          md="2"
          v-for="category in categories"
          :key="category.categoryName"
          class="ma-3"
          align="center"
        >
          <router-link :to="category.categoryName" tag="button">
            <v-btn class="ma-2" outlined x-large fab color="orange">
              <v-icon>{{ category.categoryImage }}</v-icon>
            </v-btn>
          </router-link>
          <div>{{ category.categoryName }}</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Category extends Vue {
  @Prop() projectName: any;
  linkCategory: any = false;
  categoryName: any = "";
  openCategory(categoryName: any) {
    if (!(this.projectName == "")) this.linkCategory = true;
    this.categoryName = categoryName;
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


