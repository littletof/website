<template lang="pug">
page-api-reference(:data="data" link="/src/loggers/file_logger.ts")
</template>

<script>
export const resource = {
    paths: ["/api-reference/loggers/file-logger"],
    meta: {
        title: "FileLogger",
    }
}

export default {
    data() {
        return {
            data: {
              class_name: "Drash.Loggers.FileLogger",
              class: this.$api_reference.Loggers.FileLogger
            }
        };
    }
}
</script>
