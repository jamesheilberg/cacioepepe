<template>
  <div>
    <v-data-table
      class="my-table"
      disable-pagination
      disable-sort
      hide-default-footer
      :headers="generalHeader"
      :items="generalData"
    ></v-data-table>
    <v-container>
      <br />
    </v-container>
    <v-data-table
      class="my-table"
      disable-pagination
      disable-sort
      hide-default-footer
      :headers="recruitingHeader"
      :items="recruitingData"
    >
    </v-data-table>
    <v-container>
      <br />
    </v-container>
    <v-data-table
      class="my-table"
      disable-pagination
      disable-sort
      hide-default-footer
      :headers="brandingHeader"
      :items="brandingData"
    ></v-data-table>
  </div>
</template>
<script>
export default {
  name: "GeneralSponsorTable",
  data() {
    return {
      generalHeader: [
        {
          text: "General",
          value: "name",
          width: "28%"
        },
        {
          text: "$1.5k",
          value: "onePointFive",
          width: "18%"
        },
        {
          text: "$3k",
          value: "three",
          width: "18%"
        },
        {
          text: "$5k",
          value: "five",
          width: "18%"
        },
        {
          text: "$7.5k",
          value: "sevenPointFive",
          width: "18%"
        }
      ],
      recruitingHeader: [
        {
          text: "Recruit",
          value: "name",
          width: "28%"
        },
        {
          text: "$1.5k",
          value: "onePointFive",
          width: "18%"
        },
        {
          text: "$3k",
          value: "three",
          width: "18%"
        },
        {
          text: "$5k",
          value: "five",
          width: "18%"
        },
        {
          text: "$7.5k",
          value: "sevenPointFive",
          width: "18%"
        }
      ],
      brandingHeader: [
        {
          text: "Branding",
          value: "name",
          width: "28%"
        },
        {
          text: "$1.5k",
          value: "onePointFive",
          width: "18%"
        },
        {
          text: "$3k",
          value: "three",
          width: "18%"
        },
        {
          text: "$5k",
          value: "five",
          width: "18%"
        },
        {
          text: "$7.5k",
          value: "sevenPointFive",
          width: "18%"
        }
      ],
      generalData: [
        {
          name: "General email*",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Bring API",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Bring mentors",
          onePointFive: "2",
          three: "4",
          five: "∞",
          sevenPointFive: "∞"
        },
        {
          name: "Host special side challenge**",
          onePointFive: "",
          three: "",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Speak at opening ceremony (can be pre-recorded or live)",
          onePointFive: "",
          three: "2 min",
          five: "4 min",
          sevenPointFive: "8 min"
        }
      ],
      recruitingData: [
        {
          name: "Access to emails to distribute recruiting materials",
          onePointFive: "Post-event",
          three: "Post-event",
          five: "Pre-event",
          sevenPointFive: "Pre-event"
        },
        {
          name: "Access to resumes",
          onePointFive: "",
          three: "Post-event",
          five: "Pre-event",
          sevenPointFive: "Pre-event"
        },
        {
          name: "Bring recruiters",
          onePointFive: "",
          three: "1",
          five: "2",
          sevenPointFive: "4"
        },
        {
          name: "Virtual interview Rooms",
          onePointFive: "",
          three: "",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Email hackathon attendees",
          onePointFive: "",
          three: "",
          five: "✓",
          sevenPointFive: "✓"
        }
      ],
      brandingData: [
        {
          name: "Distribute swag",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Give branded/API prize",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Logo on website & T-Shirt",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Branded virtual event",
          onePointFive: "",
          three: "",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Sponsored Track (contact us!)",
          onePointFive: "",
          three: "",
          five: "",
          sevenPointFive: "✓"
        }
      ]
    };
  }
};
</script>
<style>
.my-table {
  table-layout: fixed;
}
td:nth-child(odd) {
  background-color: #ecd5cc;
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 1em !important;
}

td:nth-child(even) {
  background-color: #e6c7bb;
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 1em !important;
}

td:first-child {
  background-color: #4abb79;
  color: white !important;
  text-align: left;
  font-size: 1em !important;
}

th {
  color: black !important;
  font-size: 1.5em !important;
  font-weight: bold !important;
}
</style>
