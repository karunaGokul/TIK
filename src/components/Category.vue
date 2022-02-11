<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="3"
        v-for="category in categories"
        :key="category.categoryName"
        align="center"
      >
        <v-dialog max-width="800">
          <template v-slot:activator="{ on, attrs }">
            <v-sheet v-bind="attrs" v-on="on">
              <v-hover v-slot:default="{ hover }">
                <v-avatar size="140" :color="hover ? 'primary' : 'white'" flat>
                  <v-img
                    :src="category.categoryImage"
                    :alt="category.categoryName"
                    max-height="50"
                    max-width="50"
                    style="border-radius: 0"
                  />
                </v-avatar>
              </v-hover>
              <div class="mb-6 text-button black--text">
                {{ category.categoryName }}
              </div>
            </v-sheet>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="teal" dark class="text-h5"
                >{{ category.categoryName }}</v-toolbar
              >
              <v-card-text>
                <div class="text-body-1 pa-12 text-justify black--text">{{ category.text }}</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
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
      text: "TIK acts as that middle man who would connect mills to its potential customers as well as suppliers. One platform which will help you source the best of your raw material required for your textile mill as well as bring to you buyers for your goods.",
    },
    {
      categoryName: "Knitting",
      categoryImage: require("@/assets/knitting.png"),
      text: "The knitting industry has several industries as their clients. There are clothing companies, hosiery manufacturers to medical companies which buy their raw material from the knitting industry. With TIK App all you need to do is post about your requirement or your finished product range and you will find yourself connected to authentic buyers and sellers. The TIK app eliminates the middlemen and brokers who can be deceptive about what they bring to you.",
    },
    {
      categoryName: "Dyeing",
      categoryImage: require("@/assets/dyeing.png"),
      text: "To project your business outside your location if you are in this niche sector of the dyeing industry will be very difficult. The process of getting orders, finding the right buyers etc is tricky as you may be engaged with wrong people and  can end up doing faulty business and incurring losses too. The TIK App here becomes a very useful and seamless platform to interact directly with your customers. The platform offers transparent communication means and also offers services like managing your delivery and transportation to ensure a healthy business environment.",
    },
    {
      categoryName: "Printing",
      categoryImage: require("@/assets/printing.png"),
      text: "The textile printing industry is more or less like  a cottage industry. Every little home in small towns will set up small units where they take up block printing, roller or screen printing jobs. TIK App will create a revolution here by enabling even such small job workers to gain orders from bigger companies and assist them in gaining and operating their businesses smoothly.",
    },
    {
      categoryName: "Job Work Unit",
      categoryImage: require("@/assets/sewing-machine.png"),
      text: "There are innumerable small scale job work units in the textile industry which support the mainstream manufacturers. Connecting these job workers to the bigger companies is not an easy task. This is where middlemen or brokers gain advantage and charge huge commissions and take away a major portion of the income which is due to these job workers. TIK App makes the business connect for these job workers with manufacturing facilities really easy. It eliminates the middlemen and brings transparency in the business dealings.",
    },
    {
      categoryName: "Finishing Fabric",
      categoryImage: require("@/assets/stack.png"),
      text: "Fabric finishing as a process may or may not be an individual unit in the textile industry, it can be part of a knitting unit or a large manufacturing set up which contains almost all processes leading to the end product. Any company which only involves itself in fabric finishing as a process might find it a huge challenge to find the right clients to give them steady business. The relationship that you build on TIK App with your vendors and buyers is very strong and will be a lasting one as it is built on trust, transparency and quality of service.",
    },
    {
      categoryName: "Second Fabric",
      categoryImage: require("@/assets/textiles.png"),
      text: "Generally seconds fabric from all manufacturing facilities reach the local markets to be sold at heavily discounted prices which may not even cover the costs incurred at production. This sales can be carried out in an organised fashion through our TIK app. ",
    },
    {
      categoryName: "Accessories",
      categoryImage: require("@/assets/accessories.png"),
      text: "There are several items that are classified as accessories in the textile industry which is used in the packaging and presenting of the finished product. Poly bag, Tag pin, Collar stand, Butterfly, Tissue paper, Back board, Scotch tape etc are few items that classify as accessories in the textile industry. TIK App once again gives easy access for the manufacturers of such products to the mainstream textile industry and benefits them mainly with the robust way in which the app offers a healthy business environment.",
    },
  ];
}
</script>
