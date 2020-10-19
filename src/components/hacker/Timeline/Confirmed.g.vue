<template>
  <g>
    <g transform="scale(0.0625), translate(3 3)">
      <circle cx="157.17" cy="157.17" r="153.17" stroke="none" fill="#eee" />
      <g fill="#eee" stroke-width="14px" stroke="#aaa">
        <!--  main backround circle   -->
        <circle
          class="cls-1"
          cx="157.17"
          cy="157.17"
          r="153.17"
          stroke-width="24px"
          stroke-dasharray="962.39"
          stroke-dashoffset="962.39"
          stroke-linecap="round"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;0;1"
            dur="1s"
            begin="1s; animateLock.mouseenter; animateLock.click"
            fill="freeze"
          />

          <!--         962.39 -->
          <animate
            attributeName="stroke-dashoffset"
            values="962.39;962.39;0"
            dur="1s"
            begin="1s; animateLock.mouseenter; animateLock.click"
            fill="freeze"
          />
        </circle>
        <!--  Lock body   -->
        <rect
          class="cls-2"
          fill="#aaa"
          x="100.4"
          y="115.95"
          width="113.53"
          height="113.53"
          rx="18.08"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;0;1"
            dur="1s"
            begin="1s; animateLock.mouseenter; animateLock.click"
            fill="freeze"
          />
        </rect>
        <!--  Lock clasp   -->
        <path
          d="M116,130 C116,60 198,60 198,130"
          stroke="#aaa"
          fill="none"
          stroke-linecap="round"
          stroke-width="22"
          stroke-dasharray="148.7"
          stroke-dashoffset="148.7"
          opacity="0"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="148.7;148.7;0"
            dur="1s"
            begin="1s; animateLock.mouseenter; animateLock.click"
            fill="freeze"
          />
          <animate
            attributeName="opacity"
            values="0;0;1"
            dur="1s"
            begin="1s; animateLock.mouseenter; animateLock.click"
            fill="freeze"
          />
        </path>

        <!-- Key hole      -->
        <g>
          <circle
            fill="#eee"
            class="cls-4"
            cx="157.17"
            cy="157.17"
            r="15"
            stroke="none"
          >
            <animate
              attributeName="r"
              values="0;15;15"
              dur="1s"
              begin="1s; animateLock.mouseenter; animateLock.click"
              fill="freeze"
            />
          </circle>
          <line
            x1="157"
            y1="195"
            x2="157"
            y2="157"
            stroke-width="18"
            stroke="#eee"
            stroke-linecap="round"
          >
            <animate
              attributeName="y2"
              values="195;195;157"
              dur="1s"
              begin="1s; animateLock.mouseenter; animateLock.click"
              fill="freeze"
            />
            <animate
              attributeName="opacity"
              values="0;0;1"
              dur="1s"
              begin="1s; animateLock.mouseenter; animateLock.click"
              fill="freeze"
            />
          </line>
        </g>
      </g>

      <circle
        id="animateLock"
        cx="157.17"
        cy="157.17"
        r="153.17"
        fill="red"
        opacity="0.002"
        style="cursor: pointer"
      />
    </g>
  </g>
</template>

<script>
export default {};
</script>
