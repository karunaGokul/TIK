 <template>
  <div>
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
        <Category :projectName="projectName" />
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Category from "@/components/Category.vue";

@Component({
  components: { Category },
})
export default class Newproject extends Vue {
  projectName: any = "";
}
</script>


  


