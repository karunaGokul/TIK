 <template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :items-per-page="10"
      item-key="companyId"
      v-model="request.bids"
      show-select
      class="elevation-1 py-4"
      :footer-props="{ itemsPerPageOptions: [] }"
      hide-default-footer
      :loading="loading"
      loading-text="Loading... Please wait"
    >
      <template v-slot:top>
        <v-toolbar flat dense height="auto" color="transparent">
          <v-row align="center" class="pb-4">
            <v-col> </v-col>
            <v-col>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-toolbar>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { CreateProjectModel } from "@/model";
import { IProjectService } from "@/service";
import { Component, Inject, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProjectResult extends Vue {
  @Inject("ProjectService") service: IProjectService;
  @Prop() request: CreateProjectModel;

  search: string = "";
  items: any = [];
  loading: boolean = false;

  created() {
    this.loading = true;
    this.service
      .searchProject({ controls: this.request.controls })
      .then((response) => {
        this.loading = false;
        this.items = response;
      });
  }

  headers: any = [
    {
      text: "Mill Name",
      value: "Mill Name",
    },
    {
      text: "Credit Period",
      value: "Credit Period",
      filterable: false,
    },
    {
      text: "Reviews",
      value: "review",
      filterable: false,
    },
  ];


  certificate: any = [
    "certification one",
    "certification two",
    "certification three",
    "certification four",
    "certification five",
  ];
}
</script>

