 <template>
  <div v-if="request">
    <v-row>
      <v-col cols="6">
        <v-text-field
          outlined
          dense
          required
          v-model="request.name"
          label="Enquiry Name"
          :readonly="isSummary"
        ></v-text-field>
      </v-col>
      <v-col
        v-for="(control, j) in controls"
        :key="j"
        :cols="control.type == 'price' ? 12 : 6"
      >
        <v-text-field
          v-if="control.type == 'number'"
          outlined
          dense
          required
          v-model="control.value"
          :label="control.label"
          :readonly="isSummary"
          type="number"
          min=1
        ></v-text-field>
        <v-menu
          v-if="control.type == 'date'"
          v-model="control.enabled"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              :value="control.value | dateDisplay"
              readonly
              v-on="on"
              outlined
              dense
              required
              hide-details
              :label="control.label"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="control.value"
            no-title
            @input="control.enabled = false"
            v-if="!isSummary"
            :min="new Date().toISOString().substr(0, 10)"
          ></v-date-picker>
        </v-menu>
        <v-row v-if="control.type == 'price'">
          <v-col cols="6">
            <v-text-field
              outlined
              dense
              hide-details
              v-model="control.value"
              :label="control.label"
              :readonly="isSummary"
              :disabled="control.requestPrice"
              type="number"
              min=1
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <div class="text-center px-4">
              <v-chip :ripple="false" outlined class="ma-2" small> OR </v-chip>
            </div>
          </v-col>
          <v-col cols="4">
            <v-checkbox
              label="Request Price"
              color="red"
              dense
              @change="control.value = ''"
              v-model="control.requestPrice"
              :readonly="isSummary"
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CreateProjectModel } from "@/model";

@Component
export default class ProjectDetailControl extends Vue {
  @Prop() controls: Array<any>;
  @Prop() request: CreateProjectModel;
  @Prop() isSummary: boolean;
}
</script>

