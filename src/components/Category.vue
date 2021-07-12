 <template>
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
          <v-btn class="ma-2" outlined x-large fab color="orange">
            <v-icon>{{ category.categoryImage }}</v-icon>
          </v-btn>
          <div>{{ category.categoryName }}</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      categories: [
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
      ],
    };
  },
});
</script>

