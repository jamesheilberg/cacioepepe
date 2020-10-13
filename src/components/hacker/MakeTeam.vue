<template>
  <div>
    <v-card-title>
      <span class="headline">Make a Team</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Team Name" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Team Desciption" required></v-text-field>
          </v-col>
          <v-btn color="primary">
            Submit
          </v-btn>
        </v-row>
      </v-container>
    </v-card-text>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
