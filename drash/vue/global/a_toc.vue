<template lang="pug">
a(:href="'/#' + $route.path + '#' + anchor")
    slot
</template>

<script>
import Vue from "vue";

let component = {
    props: [
        "anchor",
    ]
};

Vue.component("a-toc", component);

export default component;
</script>


