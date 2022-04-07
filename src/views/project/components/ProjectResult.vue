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
            <v-col>
              <v-select
                multiple
                label="Certificate"
                v-model="selectedCertificate"
                :items="certification"
                item-text="certificateName"
                item-value="certificateName"
                :loading="loading"
                required
                class="mt-5"
                @change="filterCertificate"
              >
              </v-select>
            </v-col>
            <v-col>
              <v-select
                multiple
                label="Review"
                v-model="selectedReview"
                :items="review"
                item-text="value"
                item-value="value"
                :loading="loading"
                required
                class="mt-5"
                @change="filterReview"
              >
                <template v-slot:[`item`]="{ item }">
                  <v-rating
                    v-model="item.value"
                    color="warning"
                    dense
                    size="20"
                    half-increments
                    readonly
                  ></v-rating>
                </template>
              </v-select>
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
      <template v-slot:[`item.review`]="{ item }">
        <div class="ml-n6">
          <v-rating
            v-model="item.review"
            color="warning"
            dense
            size="20"
            half-increments
            readonly
          >
          </v-rating>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { CreateProjectModel, CertificationResponseModel } from "@/model";
import { IProjectService, IRegistrationService } from "@/service";
import { Component, Inject, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProjectResult extends Vue {
  @Inject("ProjectService") service: IProjectService;
  @Inject("registrationService") registrationService: IRegistrationService;
  @Prop() request: CreateProjectModel;

  public search: string = "";
  public items: any = [];
  public dataResource: any = [];
  public loading: boolean = false;
  public certification: Array<CertificationResponseModel> = [];
  public selectedCertificate: any;
  public selectedReview: any;
  public filter: any;

  created() {
    this.loading = true;
    this.service
      .searchProject({ controls: this.request.controls })
      .then((response) => {
        this.loading = false;
        this.items = response;

        this.dataResource = response;
      });

    this.getCertification();
  }

  private getCertification() {
    this.loading = true;
    this.registrationService
      .getCertification()
      .then((response: Array<CertificationResponseModel>) => {
        this.certification = response;
        this.loading = false;
      });
  }

  // public filterReview() {
  //   if (this.selectedReview.length !== 0) {
  //     this.items = this.dataResource.filter(
  //       (item: any) =>
  //         item.review &&
  //         this.selectedReview.some((data: number) => item.review >= data)
  //     );
  //   } else {
  //     this.items = this.dataResource;
  //   }
  // }
  public filterReview() {
    if (this.selectedReview.length !== 0) {
        this.items = this.filter.filter(
          (item: any) =>
            item.review &&
            this.selectedReview.some((data: number) => item.review >= data)
        );
      
    } else {
      this.items = this.dataResource;
    }
  }
  public filterCertificate() {
    if (this.selectedCertificate.length !== 0) {
      this.items = this.dataResource.filter(
        (item: any) =>
          item.certification &&
          this.selectedCertificate.some((data: any) =>
            item.certification.includes(data)
          )
      );
      this.filter = this.items;
      console.log(this.filter);
    } else {
      this.items = this.dataResource;
    }
  }

  public headers: any = [
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
      // filterable: false,
    },
    {
      text: "Certificates",
      value: "certification",
      // filterable: false,
    },
  ];

  public review: any = [
    {
      text: "Review 1",
      value: 1,
    },
    {
      text: "Review 2",
      value: 2,
    },
    {
      text: "Review 3",
      value: 3,
    },
    {
      text: "Review 4",
      value: 4,
    },
    {
      text: "Review 5",
      value: 5,
    },
  ];
}
</script>
