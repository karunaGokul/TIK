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
      <v-col v-for="(control, j) in controls" :key="j" cols="6">
        <v-text-field
          v-if="control.type == 'number'"
          outlined
          dense
          required
          v-model="control.value"
          :label="control.label"
          :readonly="isSummary"
          type="number"
          min="1"
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
        <div v-if="control.type == 'price'">
          <v-card color="transparent" flat class="pa-8" style="border:solid 1px rgba(0, 0, 0, 0.38) !important">
            <v-text-field
              dense
              hide-details
              v-model="control.value.price"
              :label="control.label"
              :readonly="isSummary"
              :disabled="control.value.requestPrice"
              type="number"
              min="1"
            ></v-text-field>
            <div class="pa-2">
              <v-chip :ripple="false" outlined class="ma-2" small> OR </v-chip>
            </div>
            <v-checkbox
              label="Request Price"
              color="red"
              dense
              @change="updatePrice(control, j)"
              v-model="control.value.requestPrice"
              :readonly="isSummary"
            ></v-checkbox>
          </v-card>
        </div>
        <div v-if="control.type == 'dia'">
          <v-card color="transparent" class="pb-2" flat  style="border:solid 1px rgba(0, 0, 0, 0.38) !important">
            <v-simple-table style="background: transparent">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>DIA</th>
                    <th>Enter your required Kgs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(d, k) in control.value.items" :key="k">
                    <td>{{ d.dia }}</td>
                    <td>
                      <v-text-field
                        dense
                        hide-details
                        v-model="d.kgs"
                        :readonly="isSummary"
                        type="number"
                        min="1"
                        @change="getDIATotal(control, j)"
                      ></v-text-field>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Total</td>
                    <td>
                      {{ control.value.total }}
                    </td>
                  </tr>
                </tfoot>
              </template>
            </v-simple-table>
          </v-card>
        </div>
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

  created() {
    this.controls.forEach((c: any) => {
      if (!c.value) {
        if (c.type == "price") {
          c.value = {};
        } else if (c.type == "dia") {
          c.value = {};
          c.value.items = [];
          const dia = this.request.controls.find((c) => c.id == "drpDIA");
          if (dia && dia.value) {
            dia.value.forEach((v: any) => {
              c.value.items.push({ dia: v });
            });
          }
        }
      }
    });
  }

  updatePrice(control: any, index: number) {
    control.value.price = "";

    this.$set(this.controls, index, control);
  }

  getDIATotal(control: any, index: number) {
    control.value.total = control.value.items
      .map((a: any) => parseInt(a.kgs ? a.kgs : 0))
      .reduce((a: number, b: number) => {
        return a + b;
      });

    this.$set(this.controls, index, control);
  }
}
</script>

