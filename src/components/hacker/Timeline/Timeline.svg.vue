<template>
  <div id="app">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203 105">
      <rect
        fill="none"
        x="0.5"
        y="0.5"
        width="199"
        height="99"
        stroke="#aaa"
        stroke-width="0"
      />

      <!-- <line x1="12" y1="50" x2="188" y2="50" stroke="#aaa" stroke-width="4" /> -->

      <path
        :d="this.stages[this.applicationStatus].path"
        :stroke="this.stages[this.applicationStatus].color"
        fill="none"
        stroke-width="4"
      />

      <path
        v-for="(path, index) in paths"
        :key="index"
        fill="none"
        stroke="#aaa"
        stroke-width="4"
        :d="path.d"
        :id="index"
      />
      <path
        :d="paths[this.applicationStatus].d"
        :stroke="paths[this.applicationStatus].fill"
        stroke-width="4"
        fill="none"
        :stroke-dasharray="paths[this.applicationStatus].length"
        :stroke-dashoffset="paths[this.applicationStatus].length"
      >
        <animate
          attributeName="stroke-dashoffset"
          :values="
            `${paths[this.applicationStatus].length};${
              paths[this.applicationStatus].length
            };0`
          "
          dur="1s"
          begin="1s"
          fill="freeze"
        />
      </path>
      <TextElements />
      <Started
        :applicationStatus="applicationStatus"
        transform="translate(2, 40)"
      />
      <Submitted
        :applicationStatus="applicationStatus"
        transform="translate(46,40)"
      />
      <Confirmed transform="translate(134, 40)" />
      <Declined transform="translate(134, 5)" />
      <Accepted transform="translate(90,40)" />
      <Rejected transform="translate(90,5)" />
      <CheckedIn transform="translate(178,40)" />
      <Waitlisted transform="translate(90, 75)" />
    </svg>
    <button v-on:click="getLengths()">get lengths</button>
  </div>
</template>

<script>
import Started from "./Started.svg.vue";
import Confirmed from "./Confirmed.g";
import Declined from "./Declined.g";
import TextElements from "./TextElements.g";
import Accepted from "./Accepted.g";
import Rejected from "./Rejected.g";
import CheckedIn from "./CheckedIn.g";
import Waitlisted from "./Waitlisted.g";
import Submitted from "./Submitted.g";

const allStages = {
  STARTED: 0,
  SUBMITTED: 1,
  ACCEPTED: 2,
  CONFIRMED: 3,
  CHECKED_IN: 4,
  REJECTED: 5,
  WAITLISTED: 6,
  DECLINED: 7
};

export default {
  data() {
    return {
      allStages: allStages,
      message: "Welcome, Boo!",
      currentStage: allStages.STARTED,
      stages: [
        {
          title: "Started",
          color: "lightsalmon",
          column: 0,
          path: "M12 50 L12 50 L12 50 L12 50",
          length: 0,
          component: Started
        },
        {
          title: "Submitted",
          color: "lightgreen",
          column: 1,
          path: "M12 50 L56 50 L56 50 L56 50",
          length: 44
        },
        {
          title: "Accepted",
          color: "blue",
          column: 2,
          path: "M12 50 L100 50 L100 50 L100 50",
          length: 88
        },
        {
          title: "Confirmed",
          color: "lightpink",
          column: 3
        },
        {
          title: "Checked In",
          color: "plum",
          column: 4
        },
        {
          title: "Rejected",
          color: "green",
          column: 2,
          vertical: -35
        },
        {
          title: "Waitlisted",
          color: "blue",
          column: 2,
          vertical: 35
        },
        {
          title: "Declined",
          color: "red",
          column: 3,
          vertical: -35
        }
      ],
      paths: [
        {
          //started (placeholder so array operations line up)
          d: "M12 50",
          length: 0,
          fill: "#FFF"
        },
        {
          //submitted
          d: "M12 50 L56 50",
          length: 44,
          fill: "goldenrod"
        },
        {
          //accepted
          d: "M12 50 L100 50",
          length: 88,
          fill: "#FFF"
        },
        {
          //rejected
          d: "M12 50 L56 50 L75 15 L100 15",
          length: 108.82461547851562,
          fill: "pink"
        },
        {
          //waitlisted
          d: "M12 50 L56 50 L75 85 L100 85",
          length: 108.82461547851562,
          fill: "#FFF"
        },
        {
          //confirmed
          d: "M12 50 L144 50",
          length: 132,
          fill: "#FFF"
        },
        {
          //declined
          d: "M12 50 L100 50 L122 15 L144 15",
          length: 151.3400573704688,
          fill: "#FFF"
        },
        {
          //checked in
          d: "M12 50 L188 50",
          length: 176,
          fill: "#FFF"
        }
      ]
    };
  },
  props: ["applicationStatus"],
  components: {
    TextElements,
    Started,
    Confirmed,
    Declined,
    Accepted,
    Rejected,
    CheckedIn,
    Waitlisted,
    Submitted
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background: none;
  border: solid 1px;
  border-radius: 2em;
  font: inherit;
  padding: 0.75em 2em;
}

.fancyLine {
  transition: 0.2s linear;
}
</style>
