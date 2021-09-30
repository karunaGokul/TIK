 <template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :items-per-page="10"
      item-key="SNo"
      v-model="selected"
      show-select
      class="elevation-1 py-4"
    >
      <template v-slot:top>
        <v-toolbar flat dense height="auto" color="transparent">
          <v-row align="center" class="pb-4">
            <v-col>
              
            </v-col>
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
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProjectResult extends Vue {
  search: string = "";
  selected: Array<any> = [];

  headers: any = [
    {
      text: "S.No",
      value: "SNo",
      align: "start",
      filterable: false
    },
    {
      text: "Mill Name",
      value: "MillName",
    },
    {
      text: "Content",
      value: "Content",
      filterable: false
    },
    {
      text: "Quality",
      value: "Type",
      filterable: false
    },
    {
      text: "Count",
      value: "Count",
      filterable: false
    },
    {
      text: "Credit Period",
      value: "CreditPeriod",
      filterable: false
    },
    {
      text: "Reviews",
      value: "Reviews",
      filterable: false
    },
  ];

  items: any = [
    {
      SNo: "1",
      MillName: "apple mast",
      Content: "100%cotton",
      Type: "combined",
      Count: "30",
      CreditPeriod: "10-15 days",
      Reviews: "",
    },
    {
      SNo: "2",
      MillName: "apple 2",
      Content: "100%cotton",
      Type: "combined",
      Count: "40",
      CreditPeriod: "10-15 days",
      Reviews: "",
    },
    {
      SNo: "3",
      MillName: "apple 3",
      Content: "100%cotton",
      Type: "combined",
      Count: "20",
      CreditPeriod: "10-15 days",
      Reviews: "",
    },
    {
      SNo: "4",
      MillName: "apple 4",
      Content: "100%cotton",
      Type: "combined",
      Count: "30",
      CreditPeriod: "10-15 days",
      Reviews: "",
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

