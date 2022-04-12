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
                @change="filter"
              >
              </v-select>
            </v-col>
            <v-col>
              <v-select
                multiple
                label="Review"
                v-model="selectedReview"
                :items="review"
                :loading="loading"
                required
                class="mt-5"
                @change="filter"
              >
                <template v-slot:[`item`]="{ item }">
                  <v-rating
                    color="warning"
                    dense
                    size="16"
                    :length="item"
                    :value="item"
                    readonly
                  ></v-rating> 
                  <span class="ml-1">&Up</span> 
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
  public selectedCertificate: any = [];
  public selectedReview: any = [];

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

  public filter() {
    this.items = this.dataResource.filter(
      (item: any) =>
        (this.selectedCertificate.length == 0 ||
          (item.certification &&
            this.selectedCertificate.some((data: any) =>
              item.certification.includes(data)
            ))) &&
        (this.selectedReview.length == 0 ||
          (item.review &&
            this.selectedReview.some((data: number) => item.review >= data)))
    );
  }
  public review: any = [4,3,2,1] 

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
      filterable: false,
    },
    {
      text: "Certificates",
      value: "certification",
      filterable: false,
    },
  ];
  
}
</script>
