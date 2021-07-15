 <template>
  <div>
    <v-row justify="center mt-3">
      <v-col cols="12" sm="8">
        <v-card class="mx-3" color="cyan lighten-4" elevation="0">
          <v-card-title> Mills </v-card-title>
          <v-card-subtitle class="text-h5 font-weight-regular my-4"
            >1. Choose Your Content</v-card-subtitle
          >
          <v-card-text
            ><v-btn class="ma-2" outlined> Outlined Button </v-btn></v-card-text
          >
        </v-card>
      </v-col>

      <v-col cols="12" sm="4">
        <div>hellos</div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Mills",
});
</script>

