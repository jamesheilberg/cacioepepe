<template>
  <div>
    <v-card-title>
      <span class="headline">Check Invitations</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-select :items="items" label="Invitations" outlined></v-select>
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
export default {
  data: () => ({
    items: ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com"]
  })
};
</script>

<style></style>
