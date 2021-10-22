 <template>
    <v-container>
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
    </v-container>
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


