<template lang="pug">
page
  div.row
    div.col
      hr
      h2-hash About The Tutorials
      p The tutorials in the sidebar are ordered (from top to bottom) in a way that will help you understand Drash's request-resource-response lifecycle quickly. Since all tutorials have example code of setting up and starting a server, it is not required that you read the tutorials in order. However, it is greatly recommended.
  div.row
    div.col
      hr
      h2-hash Example Code
      p-all-tutorials-have-example-code
</template>

<script>
export const resource = {
  paths: [
    "/tutorials",
    "/tutorials/introduction"
  ],
  meta: {
    title: "Tutorials: Introduction"
  }
}

export default {
  data() {
    return {};
  },
}
</script>
