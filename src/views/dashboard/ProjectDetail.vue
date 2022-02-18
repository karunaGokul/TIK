<template>
  <v-container fluid class="pa-8">
    <div>
      <router-link to="/dashboard" class="text-decoration-none">
        <v-icon large dark class="teal"> mdi-home</v-icon>
      </router-link>
      <v-icon large> mdi-chevron-right</v-icon>

      <a @click="navigateToProjects($route.params.status)" class="black--text">
        {{
          $route.params.status.replace(/([a-zA-Z])([A-Z])([a-z])/g, "$1 $2$3")
        }}
      </a>
    </div>

    <div class="text-center ma-16" v-if="loading">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>

    <div class="mt-8" v-else>
      <div class="ma-4">
        <v-row>
          <v-col cols="12" md="4">
            <v-card color="transparent" flat>
              <div class="d-flex flex-no-wrap">
                <v-avatar size="80" tile>
                  <v-img
                    :src="`data:image/png;base64,${companyResponse.logo}`"
                  ></v-img>
                </v-avatar>
                <div>
                  <v-card-title class="text-h6 pt-0">{{
                    companyResponse.companyName
                  }}</v-card-title>

                  <v-card-subtitle
                    ><v-rating
                      v-model="companyResponse.review"
                      color="warning"
                      dense
                      half-increments
                      size="18"
                      readonly
                    ></v-rating
                  ></v-card-subtitle>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="3"
            offset-md="3"
            class="text-right"
            v-if="
              response.InStages === 'No Response' && response.message !== null
            "
          >
            <span class="overline font-weight-bold text-wrap text-capitalize">
              Comments: {{ response.message }}
            </span>
          </v-col>

          <v-col
            cols="12"
            md="3"
            class="text-right"
            v-if="
              category === 'Company' &&
                (response.InStages === 'Confirmed' ||
                  response.InStages === 'Completed')
            "
          >
            <span class="overline font-weight-bold text-wrap text-capitalize">
              Bidding Time: {{ response.biddingTime }}
            </span>
          </v-col>

          <v-col
            cols="12"
            md="2"
            class="text-right"
            v-if="
              category != 'Company' &&
                response.bidList[0].status === 'Initiated'
            "
          >
            <v-btn
              class="white--text font-weight-light text-capitalize rounded"
              depressed
              color="primary"
              @click="toggleBid = 'true'"
            >
              bid this project
            </v-btn>
            <v-btn
              class="font-weight-light text-capitalize white--text mt-1 mr-7"
              color="blue-grey"
              depressed
              @click="toggleCancel = 'true'"
            >
              Cancel
            </v-btn>
          </v-col>
          <v-col
            cols="12"
            md="2"
            offset-md="3"
            class="text-right overline font-weight-bold"
            v-if="response.bidsReceived"
          >
            Bids Received : {{ response.bidsReceived }}
          </v-col>
          <v-col
            cols="12"
            md="2"
            offset-md="3"
            class="text-right"
            v-if="category === 'Company'"
          >
            <v-btn
              depressed
              class="font-weight-light text-capitalize"
              color="error"
              v-if="
                role === 'MasterAdmin' &&
                  $route.params.status === 'NoResponse' &&
                  response.message === null
              "
              @click="toggleNoResponse = 'true'"
            >
              No Response
            </v-btn>
          </v-col>
        </v-row>

        <v-row class="mt-4 text-caption text-wrap">
          <v-col cols="12" md="3">
            <p class="mb-0">
              <label class="font-weight-bold">Created By:</label>
              {{ response.CreatedBy }}
            </p>
            <p class="mb-0">
              <label class="font-weight-bold">Date & Time:</label>
              {{ response.CreatedDate }}
            </p>
          </v-col>
          <v-col
            cols="12"
            md="3"
            v-if="bitAuditResponse.selectedBy && category === 'Company'"
          >
            <p class="mb-0">
              <label class="font-weight-bold">Selected By:</label>
              {{ bitAuditResponse.selectedBy }}
            </p>
            <p class="mb-0">
              <label class="font-weight-bold">Date & Time:</label>
              {{ bitAuditResponse.selectedDate }}
            </p>
          </v-col>
          <v-col
            cols="12"
            md="3"
            v-if="bitAuditResponse.approveBy && category === 'Company'"
          >
            <p class="mb-0">
              <label class="font-weight-bold"
                >Approved & Authenticated By:</label
              >
              {{ bitAuditResponse.approveBy }}
            </p>
            <p class="mb-0">
              <label class="font-weight-bold">Date & Time:</label>
              {{ bitAuditResponse.approveDate }}
            </p>
          </v-col>
          <v-col
            cols="12"
            md="3"
            v-if="bitAuditResponse.confirmedBy && category === 'Company'"
          >
            <p class="mb-0">
              <label class="font-weight-bold">Confirmed By:</label>
              {{ bitAuditResponse.confirmedBy }}
            </p>
            <p class="mb-0">
              <label class="font-weight-bold">Date & Time:</label>
              {{ bitAuditResponse.confirmedDate }}
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="black--text table-header-teal" width="15%">
                      Project Name
                    </th>
                    <th class="black--text table-header-teal" width="15%">
                      Category
                    </th>
                    <th class="black--text table-header-teal" width="15%">
                      SubCategory
                    </th>
                    <th class="black--text table-header-teal" width="13%">
                      Requested Price
                    </th>
                    <th class="black--text table-header-teal" width="12%">
                      Requested Credit
                    </th>
                    <th class="black--text table-header-teal" width="15%">
                      Requested Delivery
                    </th>
                    <th class="black--text table-header-teal" width="10%">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ response.EnquiryName }}</td>
                    <td>{{ response.Category }}</td>
                    <td>{{ response.Subcategory }}</td>
                    <td
                      class="blue--text"
                      v-if="response.requestPrice !== 'Requested'"
                    >
                      Rs.{{ response.requestPrice }}
                    </td>
                    <td class="blue--text" v-else>
                      {{ response.requestPrice }}
                    </td>
                    <td class="red--text">{{ response.creditPeriod }} days</td>
                    <td class="green--text">
                      {{ response.deliveryDate }} days
                    </td>
                    <td>
                      <v-btn
                        class="font-weight-light text-capitalize rounded ml-n3"
                        depressed
                        color="primary"
                        @click="toggleSummaryView = true"
                      >
                        View
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <RejectProject
              :response="response"
              title="Reasons"
              v-if="toggleCancel"
              @closeModel="closeModel"
            />
            <BidProject
              :response="response"
              v-if="toggleBid"
              @closeModel="closeModel"
            />
            <ProjectSummary
              :response="response"
              v-if="toggleSummaryView"
              @closeModel="closeModel"
            />
          </v-col>
        </v-row>
        <v-row
          v-if="
            category === 'Company' &&
              (response.InStages === 'Bid Received' ||
                response.InStages === 'Awaiting Authentication' ||
                response.InStages === 'Awaiting Approval')
          "
          class="mt-8 ml-2"
        >
          <h4 class="text-h5 mr-4">Bids Received</h4>

          <FilterDialog :projectId="response.Id" @filteredBids="filteredBids" />

          <v-icon large color="green darken-4" class="ml-4" @click="reset()">
            mdi-lock-reset
          </v-icon>
        </v-row>
      </div>
      <div v-if="response.bidList" class="mt-5">
        <div v-for="(row, i) in response.bidList" :key="i">
          <v-card
            width="100%"
            tile
            flat
            v-if="
              (row.status != 'Rejected' && category === 'Company') ||
                (category != 'Company' && row.status != 'Initiated')
            "
            :class="{
              'confirmed-project':
                (row.status === 'Confirmed' || row.status === 'Completed') &&
                category === 'Company',
            }"
          >
            <v-card-title
              tag="h4"
              v-if="
                (row.status === 'Confirmed' || row.status === 'Completed') &&
                  category === 'Company'
              "
              >Confirmed Project</v-card-title
            >
            <v-card-text>
              <v-row no-gutters>
                <v-col cols="12" md="4">
                  <v-card
                    color="transparent"
                    flat
                    v-if="category === 'Company'"
                  >
                    <div class="d-flex flex-no-wrap">
                      <v-avatar size="80" tile>
                        <v-img
                          :src="`data:image/png;base64,${row.logo}`"
                        ></v-img>
                      </v-avatar>
                      <div>
                        <v-card-title class="text-h6 pt-0">{{
                          row.companyName
                        }}</v-card-title>

                        <v-card-subtitle
                          ><v-rating
                            v-model="row.review"
                            color="warning"
                            dense
                            size="14"
                            half-increments
                            readonly
                          ></v-rating
                        ></v-card-subtitle>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" md="8">
                  <div class="pl-4">
                    <v-simple-table>
                      <template v-slot:default>
                        <thead
                          :class="
                            (row.status === 'Confirmed' ||
                              row.status === 'Completed') &&
                            category === 'Company'
                              ? ' table-header-orange '
                              : ' table-header-teal '
                          "
                        >
                          <tr>
                            <th
                              class="black--text"
                              v-for="(tableHeader, index) in BitReceivedheaders"
                              :key="index"
                              width="20%"
                            >
                              {{ tableHeader }}
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          :class="
                            (row.status === 'Confirmed' ||
                              row.status === 'Completed') &&
                            category === 'Company'
                              ? 'deep-orange lighten-5 black--text'
                              : ''
                          "
                        >
                          <tr>
                            <td>
                              {{ row.submittedBy }} <br />{{
                                row.submittedDate
                              }}
                            </td>
                            <td
                              v-if="
                                (role === 'Approval Admin' ||
                                  role === 'MasterAdmin' ||
                                  approvalAdminAccess === '1') &&
                                  row.status === 'Authenticated' &&
                                  category != 'Company'
                              "
                            >
                              <v-text-field
                                outlined
                                dense
                                class="mt-4"
                                v-model="row.requestPrice"
                                :rules="priceRules"
                                onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
                              ></v-text-field>
                            </td>

                            <td
                              v-else
                              class="blue--text"
                              vertical-align:
                              middle
                            >
                              Rs.{{ row.requestPrice }}
                            </td>
                            <td
                              v-if="
                                (role === 'Approval Admin' ||
                                  role === 'MasterAdmin' ||
                                  approvalAdminAccess === '1') &&
                                  row.status === 'Authenticated' &&
                                  category != 'Company'
                              "
                            >
                              <v-text-field
                                outlined
                                dense
                                class="mt-4"
                                v-model="row.creditPeriod"
                                :rules="creditRules"
                                onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
                              ></v-text-field>
                            </td>
                            <td v-else class="red--text">
                              {{ row.creditPeriod }} days
                            </td>
                            <td
                              v-if="
                                (role === 'Approval Admin' ||
                                  role === 'MasterAdmin' ||
                                  approvalAdminAccess === '1') &&
                                  row.status === 'Authenticated' &&
                                  category != 'Company'
                              "
                            >
                              <v-text-field
                                outlined
                                dense
                                class="mt-4"
                                v-model="row.deliveryDate"
                                :rules="deliveryRules"
                                onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
                              ></v-text-field>
                            </td>
                            <td v-else class="green--text">
                              {{ row.deliveryDate }}
                              days
                            </td>
                            <td v-if="category === 'Company'">
                              <div
                                v-if="
                                  row.status === 'Approved' &&
                                    response.InStages !== 'No Response'
                                "
                              >
                                <v-btn
                                  class="
                                    font-weight-light
                                    text-capitalize
                                    rounded
                                    my-1
                                    mr-1
                                  "
                                  depressed
                                  small
                                  color="primary"
                                  @click="ApproveBid('Selected', row)"
                                  v-if="
                                    role === 'MasterAdmin' ||
                                      role === 'Quote InCharge'
                                  "
                                >
                                  Accept
                                </v-btn>
                                <div
                                  class="text-caption"
                                  v-if="role === 'MasterAdmin'"
                                >
                                  Pending for Approval
                                </div>
                              </div>
                              <div
                                class="text-caption"
                                v-else-if="
                                  row.status === 'NoResponse' ||
                                    response.InStages === 'No Response'
                                "
                              >
                                <p class="mt-2">{{ row.status }}</p>
                                <p class="mt-n3">{{ response.message }}</p>
                              </div>

                              <div
                                v-else-if="
                                  (role === 'Merchandiser' ||
                                    role === 'MasterAdmin') &&
                                    row.status === 'Selected' &&
                                    response.InStages !== 'No Response'
                                "
                              >
                                <v-select
                                  :menu-props="{ offsetY: true }"
                                  label="Select Approval Admin"
                                  :items="ApprovalAdmin"
                                  item-text="ApprovalAdmin"
                                  item-value="Id"
                                  outlined
                                  v-model="approvalRequest.approvalAdminId"
                                  dense
                                  small
                                  hide-details
                                  :rules="approvalAdminRules"
                                  class="my-1 mr-1"
                                >
                                </v-select>
                                <v-btn
                                  class="
                                    font-weight-light
                                    text-capitalize
                                    rounded
                                    my-1
                                    mr-1
                                  "
                                  depressed
                                  color="primary"
                                  small
                                  @click="ApproveBid('BidApproved', row)"
                                >
                                  Authenticate
                                </v-btn>
                              </div>
                              <v-btn
                                class="
                                  font-weight-light
                                  text-capitalize
                                  rounded
                                  my-1
                                  mr-1
                                "
                                depressed
                                small
                                color="primary"
                                v-else-if="
                                  (role === 'Approval Admin' ||
                                    (role === 'Merchandiser' &&
                                      approvalAdminAccess === '1') ||
                                    role === 'MasterAdmin') &&
                                    row.status === 'BidApproved' &&
                                    response.InStages !== 'No Response'
                                "
                                @click="ApproveBid('Confirmed', row)"
                              >
                                Confirm
                              </v-btn>

                              <div
                                v-else-if="row.status === 'Rejected'"
                                class="my-1 mr-1 text-caption"
                              >
                                {{ row.status }}
                              </div>
                              <div
                                class="text-caption"
                                v-else-if="
                                  row.status === 'NoShow' ||
                                    row.status === 'Cancelled'
                                "
                              >
                                {{ row.status }} <br />
                                {{ row.message }}
                              </div>

                              <div
                                class="text-caption"
                                v-if="
                                  (role === 'Quote InCharge' ||
                                    role === 'Approval Admin') &&
                                    row.status === 'Selected' &&
                                    response.InStages !== 'No Response'
                                "
                              >
                                Waiting for Authentication
                              </div>
                              <p
                                class="text-caption"
                                v-if="
                                  (role === 'Quote InCharge' ||
                                    role === 'Merchandiser') &&
                                    row.status === 'BidApproved'
                                "
                              >
                                Waiting for Approval
                              </p>
                              <div
                                class="text-caption"
                                v-if="
                                  row.status === 'Approved' &&
                                    (role === 'Approval Admin' ||
                                      role === 'Merchandiser')
                                "
                              >
                                Pending Approval from <br />Quote InCharge
                              </div>
                              <div
                                v-if="
                                  row.status === 'Confirmed' &&
                                    role === 'MasterAdmin' &&
                                    response.InStages !== 'No Response'
                                "
                              >
                                <div v-if="row.ratings === null">
                                  <v-btn
                                    class="
                                      white--text
                                      font-weight-light
                                      text-capitalize
                                      rounded
                                      my-1
                                      mr-1
                                    "
                                    depressed
                                    small
                                    color="red lighten-1"
                                    @click="toggleNoShow = true"
                                  >
                                    No Show
                                  </v-btn>
                                  <v-btn
                                    class="
                                      font-weight-light
                                      text-capitalize
                                      rounded
                                      my-1
                                      mr-1
                                    "
                                    depressed
                                    small
                                    color="primary"
                                    @click="toggleReview = true"
                                  >
                                    review
                                  </v-btn>
                                </div>
                              </div>

                              <div
                                class="text-caption"
                                v-if="
                                  row.status === 'Confirmed' &&
                                    row.ratings === null &&
                                    (role === 'Approval Admin' ||
                                      role === 'Quote InCharge' ||
                                      role === 'Merchandiser')
                                "
                              >
                                {{ row.status }}
                              </div>
                              <div
                                v-else-if="
                                  role === 'MasterAdmin' &&
                                    ((row.status === 'Confirmed' &&
                                      row.ratings !== null) ||
                                      row.status === 'Completed')
                                "
                                class="text-wrap"
                              >
                                <v-rating
                                  v-model="row.ratings"
                                  color="warning"
                                  dense
                                  size="20"
                                  half-increments
                                  readonly
                                ></v-rating>
                              </div>
                              <div
                                v-else-if="
                                  (row.status === 'Confirmed' &&
                                    row.ratings !== null) ||
                                    (row.status === 'Completed' &&
                                      role !== 'MasterAdmin')
                                "
                                class="text-wrap ml-n3 text-caption"
                              >
                                {{ row.status }}
                              </div>
                            </td>
                            <td v-else>
                              <div
                                class="text-caption"
                                v-if="
                                  row.status === 'NoResponse' ||
                                    response.InStages === 'No Response'
                                "
                              >
                                <p class="mt-2">{{ row.status }}</p>
                                <p class="mt-n3">{{ response.message }}</p>
                              </div>
                              <div
                                v-if="
                                  (role === 'Approval Admin' ||
                                    role === 'MasterAdmin' ||
                                    approvalAdminAccess === '1') &&
                                    row.status === 'Authenticated' &&
                                    response.InStages !== 'No Response'
                                "
                              >
                                <v-btn
                                  class="
                                    font-weight-light
                                    text-capitalize
                                    rounded
                                    my-1
                                    mr-1
                                  "
                                  depressed
                                  small
                                  color="primary"
                                  @click="Save(row)"
                                >
                                  Save
                                </v-btn>
                                <v-btn
                                  class="
                                    font-weight-light
                                    text-capitalize
                                    rounded
                                    my-1
                                    mr-1
                                  "
                                  depressed
                                  small
                                  color="primary"
                                  @click="ApproveBid('Approved', row)"
                                >
                                  Approve
                                </v-btn>
                              </div>
                              <div
                                class="text-caption"
                                v-else-if="
                                  (row.status === 'Authenticated' &&
                                    role === 'Quote InCharge') ||
                                    row.status === 'Approved' ||
                                    row.status === 'Rejected'
                                "
                              >
                                {{ row.status }}
                              </div>
                              <div
                                class="text-caption"
                                v-else-if="
                                  row.status === 'NoShow' ||
                                    row.status === 'Cancelled'
                                "
                              >
                                {{ row.status }}<br />
                                {{ row.message }}
                              </div>
                              <div
                                v-else-if="
                                  row.status === 'Confirmed' &&
                                    role === 'MasterAdmin' &&
                                    response.InStages !== 'No Response'
                                "
                              >
                                <div v-if="row.ratings === null">
                                  <v-btn
                                    class="
                                      font-weight-light
                                      text-capitalize
                                      rounded
                                      my-1
                                      mr-1
                                    "
                                    depressed
                                    small
                                    color="red lighten-1"
                                    @click="toggleNoShow = true"
                                  >
                                    No Show
                                  </v-btn>
                                  <v-btn
                                    class="
                                      font-weight-light
                                      text-capitalize
                                      rounded
                                      my-1
                                      mr-1
                                    "
                                    depressed
                                    color="primary"
                                    @click="toggleReview = true"
                                  >
                                    review
                                  </v-btn>
                                </div>
                              </div>
                              <div
                                class="text-caption"
                                v-if="
                                  row.status === 'Confirmed' &&
                                    row.ratings === null &&
                                    (role === 'Approval Admin' ||
                                      role === 'Quote InCharge')
                                "
                              >
                                {{ row.status }}
                              </div>
                              <div
                                v-else-if="
                                  role === 'MasterAdmin' &&
                                    ((row.status === 'Confirmed' &&
                                      row.ratings !== null) ||
                                      row.status === 'Completed')
                                "
                                class="text-wrap"
                              >
                                <v-rating
                                  v-model="row.ratings"
                                  color="warning"
                                  dense
                                  size="20"
                                  half-increments
                                  readonly
                                ></v-rating>
                              </div>
                              <div
                                v-else-if="
                                  (row.status === 'Confirmed' &&
                                    row.ratings !== null) ||
                                    (row.status === 'Completed' &&
                                      role !== 'MasterAdmin')
                                "
                                class="text-wrap ml-n3 text-caption"
                              >
                                {{ row.status }}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                    <div
                      class="mt-3"
                      v-if="
                        category != 'Company' &&
                          row.status === 'Rejected' &&
                          confirmedBidResponse !== ''
                      "
                      :class="{
                        'confirmed-project':
                          category != 'Company' &&
                          row.status === 'Rejected' &&
                          confirmedBidResponse !== '',
                      }"
                    >
                      <h4 class="my-3 ml-2 black--text">Confirmed Bid</h4>
                      <v-simple-table
                        :class="
                          category != 'Company' &&
                          row.status === 'Rejected' &&
                          confirmedBidResponse !== ''
                            ? ' table-header-orange '
                            : ' '
                        "
                      >
                        <thead class="teal lighten-5 text-capitalize">
                          <tr>
                            <th width="15%"></th>
                            <th class="black--text" width="16%">Price</th>
                            <th class="black--text" width="16%">
                              Credit Period
                            </th>
                            <th class="black--text" width="15%">
                              Delivery Period
                            </th>
                            <th class="black--text" width="1%">Review</th>
                          </tr>
                        </thead>
                        <tbody
                          :class="
                            category != 'Company' &&
                            row.status === 'Rejected' &&
                            confirmedBidResponse !== ''
                              ? 'deep-orange lighten-5 black--text'
                              : ''
                          "
                        >
                          <tr>
                            <td></td>
                            <td>{{ confirmedBidResponse.price }}</td>

                            <td>{{ confirmedBidResponse.creditPeriod }}</td>
                            <td>{{ confirmedBidResponse.deliveryPeriod }}</td>

                            <td>
                              <v-rating
                                v-model="confirmedBidResponse.companyReview"
                                color="warning"
                                dense
                                size="20"
                                half-increments
                                readonly
                              >
                              </v-rating>
                            </td>
                          </tr>
                        </tbody>
                      </v-simple-table>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
        <RejectedProject
          :response="response.bidList"
          :projectId="response.Id"
          v-if="category === 'Company' && isRejected === true"
        />
      </div>

      <RejectProject
        :response="response"
        title="NoResponse"
        v-if="toggleNoResponse"
        @closeModel="closeModel"
      />

      <RejectProject
        :response="response"
        title="Noshow"
        v-if="toggleNoShow"
        @closeModel="closeModel"
      />
      <Review
        :response="response"
        v-if="toggleReview"
        @closeModel="closeModel"
      />
    </div>

    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      color="green lighten-5 green--text"
      right
      top
    >
      <v-icon color="green">mdi-exclamation-thick </v-icon>
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          <v-icon> mdi-close-box</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import {
  ApproveRequestModel,
  DashboardModel,
  DashboardRequestModel,
  GetCompanyModel,
  BitReceivedModel,
  BitAuditmodel,
  BidRequestModel,
  ApprovalAdminResponseModel,
  AdminRequestModel,
  FilterRequestModel,
  ConfirmedBidModel,
  UserInfomodel,
} from "@/model";
import { IDashboardService, EmployeeService } from "@/service";
import { Component, Inject, Vue } from "vue-property-decorator";
import { validationMixin } from "vuelidate";
import BidProject from "./components/BidProject.vue";
import RejectProject from "./components/RejectProject.vue";
import Review from "./components/Review.vue";
import ProjectSummary from "./components/ProjectSummary.vue";
import RejectedProject from "./components/RejectedProject.vue";
import FilterDialog from "./components/FilterDialog.vue";

@Component({
  mixins: [validationMixin],
  components: {
    Review,
    ProjectSummary,
    BidProject,
    RejectProject,
    RejectedProject,
    FilterDialog,
  },
})
export default class ProjectDetail extends Vue {
  @Inject("DashboardService") DashboardService: IDashboardService;
  @Inject("EmployeeService") EmployeeService: EmployeeService;

  public Rules: any = [(v: any) => !!v || "Enter the Value"];

  public request = new DashboardRequestModel();
  public companyResponse = new GetCompanyModel();
  public approvalRequest = new ApproveRequestModel();
  public response = new DashboardModel();
  public bitAuditResponse = new BitAuditmodel();
  public bidRequest = new BidRequestModel();
  public toggleBid: boolean = false;
  public toggleCancel: boolean = false;
  public toggleReview: boolean = false;
  public toggleNoShow: boolean = false;
  public toggleNoResponse: boolean = false;
  public toggleSummaryView: boolean = false;
  public showText: boolean = false;
  public snackbarText: string = "";
  public snackbar: boolean = false;
  public isRejected: boolean = false;
  public adminRequest: AdminRequestModel = new AdminRequestModel();
  public ApprovalAdmin: Array<ApprovalAdminResponseModel> = [];
  public dialog: boolean = false;
  public filterRequest = new FilterRequestModel();
  public confirmedBidResponse = new ConfirmedBidModel();
  public userResponse = new UserInfomodel();

  loading: boolean = false;

  created() {
    this.loading = true;

    this.GetProjectEnquiry();

    if (this.category === "Company") {
      this.userInfo();
    }

    if (this.category != "Company") {
      this.BitReceivedheaders.splice(0, 5);
      this.BitReceivedheaders.push(
        "Bit Submit & Approve",
        "Price",
        "Your Credit Period",
        "Your Delivery Period",
        ""
      );
    }
    this.GetApprovalAdmin();
    if (this.category != "Company") {
      this.GetConfirmedBidDetails();
    }
  }

  public userInfo() {
    this.DashboardService.GetUserFullName().then((response) => {
      this.userResponse = response;
    });
  }
  public GetConfirmedBidDetails() {
    this.request.id = this.$route.params.id;
    this.DashboardService.GetConfirmedBidDetails(this.request.id).then(
      (response) => {
        this.confirmedBidResponse = response;
      }
    );
  }
  public filteredBids(filterResponse: Array<BitReceivedModel>) {
    this.response.bidList = filterResponse;
  }

  public reset() {
    this.filterRequest.projectId = this.response.Id;
    this.filterRequest.price = null;
    this.filterRequest.review = null;
    this.filterRequest.creditPeriod = null;
    this.filterRequest.deliveryPeriod = null;
    this.DashboardService.FilterRejectedBids(this.filterRequest).then(
      (response) => {
        this.response.bidList = response;
      }
    );
  }
  public GetApprovalAdmin() {
    this.adminRequest.companyId = this.$store.getters.companyId;
    this.EmployeeService.GetApprovalAdmin(this.adminRequest).then(
      (response: Array<ApprovalAdminResponseModel>) => {
        this.ApprovalAdmin = response;
      }
    );
  }

  public GetCompany(CompanyId: string) {
    this.loading = true;
    this.DashboardService.GetCompany(CompanyId).then((response) => {
      this.companyResponse = response;

      this.loading = false;
    });
  }

  public GetProjectEnquiry() {
    this.request.id = this.$route.params.id;
    this.DashboardService.GetProjectEnquiry(this.request).then((response) => {
      this.response = response;
      this.GetCompany(this.response.CompanyId);
      this.response.bidList.forEach((b) => {
        if (b.status == "Rejected") {
          this.isRejected = true;
        }
      });
      // if (this.category != "Company") {
      //   this.GetCompany(this.response.bidList[0].companyId);
      // } else {
      //   this.GetCompany(this.response.CompanyId);
      // }
      //       this.response.bidList.forEach((b) => {
      //        this.DashboardService.GetCompany(b.companyId).then((c) => {
      //          b.companyName = c.companyName;
      //          b.companyLogo = c.logo;
      //          b.review = c.review;
      //        });
      //      });
      this.GetBidAudit();
    });
  }

  public GetBidAudit() {
    this.DashboardService.GetBidAudit(this.response.Id).then((response) => {
      this.bitAuditResponse = response;
    });
  }
  public ApproveBid(status: string, bid: BitReceivedModel) {
    if (
      (this.role === "Merchandiser" || this.role === "MasterAdmin") &&
      bid.status === "Selected" &&
      this.approvalRequest.approvalAdminId === null
    ) {
      this.snackbarText = "Please select Approval Admin";
      this.snackbar = true;
    } else {
      this.approvalRequest.bidId = bid.id;
      this.approvalRequest.status = status;
      this.approvalRequest.projectId = this.response.Id;
      this.DashboardService.ApproveBid(this.approvalRequest).then(
        (response) => {
          this.snackbarText = response;
          this.snackbar = true;
          this.GetProjectEnquiry();
        }
      );
    }
  }

  public Save(bid: BitReceivedModel) {
    this.bidRequest.projectId = this.response.Id;
    this.bidRequest.id = bid.id;
    this.bidRequest.price = bid.requestPrice;
    this.bidRequest.creditPeriod = bid.creditPeriod;
    this.bidRequest.deliveryPeriod = bid.deliveryDate;
    this.DashboardService.BidProject(this.bidRequest).then((response) => {
      this.snackbarText = response;
      this.snackbar = true;
    });
  }

  public closeModel(responseMessage: string) {
    this.toggleSummaryView = false;
    this.toggleBid = false;
    this.toggleCancel = false;
    this.toggleNoShow = false;
    this.toggleNoResponse = false;
    this.toggleReview = false;
    if (responseMessage) {
      this.snackbarText = responseMessage;
      this.snackbar = true;
    }
    this.GetProjectEnquiry();
  }

  public navigateToProjects(status: string) {
    this.$router.push(`/projectlist/${status.replaceAll(" ", "")}`);
  }

  get category(): string {
    return this.$store.getters.category;
  }

  get role(): string {
    return this.$store.getters.role;
  }

  get approvalAdminAccess(): string {
    return this.$store.getters.approvalAdminAccess;
  }

  public priceRules: any = [
    (v: any) => !!v || "Price is required",
    // (v: any) => (!isNaN(parseInt(v)) && v >= 0) || "Price must be Valid Number",
    (v: any) => (!isNaN(parseInt(v)) && v != 0) || "Price must be Valid Number",
  ];

  public creditRules: any = [
    (v: any) => !!v || "Credit Period is required",
    (v: any) => (v && v.length <= 4) || "Credit Period must be a Valid Date",
    (v: any) =>
      (!isNaN(parseInt(v)) && v != 0) || "Credit Period must be Valid Number",
  ];

  public deliveryRules: any = [
    (v: any) => !!v || "Delivery Period is required",
    (v: any) => (v && v.length <= 4) || "Delivery Period must be a Valid Date",
    (v: any) =>
      (!isNaN(parseInt(v)) && v != 0) || "Delivery Period must be Valid Number",
  ];

  public approvalAdminRules: any = [
    (v: any) => !!v || "Approval Admin role is required",
  ];

  BitReceivedheaders: any = [
    // { text: 'Auth Approve', width: '20%'},
    // { text: 'Requested Price', width: '20%'},
    // { text: 'Requested Credit', width: '20%'},
    // { text: 'Requested Delivery', width: '20%'},
    // { text: '', width: '20%'},
    "Auth Approve",
    "Requested Price",
    "Requested Credit",
    "Requested Delivery",
    "",
  ];
}
</script>
<style scoped>
.confirmed-project {
  border: solid 4px #ff6500;
  background-color: #ffe7d5;
}

.table-header-teal,
.table-header-teal th {
  background-color: #dbeeee;
  border-bottom: 0 !important;
}

.table-header-orange,
.table-header-orange th {
  background-color: #ffc6a1;
  border-bottom: 0 !important;
}
</style>
