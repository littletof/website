<script>
export const resource = {
  paths: [
    "/advanced-tutorials/creating-a-docker-container/docker-compose-setup",
    "/advanced-tutorials/creating-a-docker-container/docker-compose-setup/introduction",
  ],
  meta: {
    title: "Creating A Docker Container",
    subtitle: "Introduction",
    source_code_uri: "/advanced_tutorials/creating_a_docker_container/docker_compose_setup"
  }
}

export default {
  data() {
    return {
      uri: this.$conf.drash.base_url + "/#/advanced-tutorials/creating-a-docker-container/docker-compose-setup"
    };
  }
}
</script>

<template lang="pug">
page-tutorial-part(
  :introduction="true",
  :part="-1"
  :parts="6",
  :uri="uri"
)
  div.row
    div.col
      hr
      h2-hash Overview
      p-advanced-tutorials-introduction
      p In this tutorial series, you will learn how to create a Drash server within a Docker environment. You will use the <code>docker-compose</code> command and Nginx or Apache acting as the proxy to pass connections to the Drash server. You will learn how to set up the <code>.dockerfile</code> files and configure Nginx or Apache for your Docker environment. You will also learn how to serve static <code>.js</code> and <code>.css</code> files.
      p Although this tutorial has code blocks that you can copy and paste, it is highly recommended that you read about #[a( href="https://docs.docker.com/compose/" ) Docker Compose] so you have knowledge of how it works.
      p-view-source-code
      p.text-center(style="margin-bottom: 0")
        a.btn.btn-success(:href="$conf.drash.base_url + '/#/advanced-tutorials/creating-a-docker-container/docker-compose-setup/part-1'") Get Started
  div.row
    div.col
      hr
      h2-hash End State
      p Below are samples of what you will create.
      img(:src="'/drash/assets/img/example_code/advanced_tutorials/creating_a_docker_container/docker_compose_setup/1.png'")
      img(:src="'/drash/assets/img/example_code/advanced_tutorials/creating_a_docker_container/docker_compose_setup/2.png'")
</template>
