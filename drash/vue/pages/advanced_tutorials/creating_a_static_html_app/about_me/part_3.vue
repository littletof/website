<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-static-html-app/about-me/part-3"],
    meta: {
      title: "Creating A Static HTML App",
      subtitle: "Part 3: Creating The HTML Files",
      source_code_uri: "/advanced_tutorials/creating_a_static_html_app/about_me/part_3"
    }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code' + resource.meta.source_code_uri],
      example_code_html: this.$example_code['drash/example_code' + resource.meta.source_code_uri + '/html'],
      part: 3,
      parts: 3,
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      },
      uri: this.$conf.drash.base_url + "/#/advanced-tutorials/creating-a-static-html-app/about-me"
    };
  },
}
</script>

<template lang="pug">
page-tutorial-part(
  :part="part"
  :parts="parts"
  :toc="toc"
  :uri="uri"
)
  div.row
    div.col
      hr
      h2-hash Before You Get Started
      p-view-source-code
  div.row
    div.col
      hr
      div-folder-structure-end-state(:code_block_data="example_code.folder_structure")
  div.row
    div.col
      hr
      h2-hash Steps
      ol
        li
          p Create your home HTML file.
          p
            code-block-slotted(language="html")
              template(v-slot:title) {{ example_code_html.home.filepath }}
              template(v-slot:code) {{ example_code_html.home.contents }}
        li
          p Create your contact HTML file.
          p
            code-block-slotted(language="html")
              template(v-slot:title) {{ example_code_html.contact.filepath }}
              template(v-slot:code) {{ example_code_html.contact.contents }}
        li
          p Create your about HTML file.
          p
            code-block-slotted(language="html")
              template(v-slot:title) {{ example_code_html.about.filepath }}
              template(v-slot:code) {{ example_code_html.about.contents }}
  div.row
    div.col
      hr
      h2-hash Verification
      p Stop your server (<code>ctrl + c</code>) if you still have it running from Part 2.
      ol
        li Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno run --allow-net --allow-read app.ts
        li
          p Go to <code>localhost:1447/</code> in your browser.
          p You should receive a response similar to the following:
          p
            img(:src="'/drash/assets/img/example_code/advanced_tutorials/creating_a_static_html_app/about_me/1.png'")
        li
          p Go to <code>localhost:1447/contact</code> in your browser.
          p You should receive a response similar to the following:
          p
            img(:src="'/drash/assets/img/example_code/advanced_tutorials/creating_a_static_html_app/about_me/2.png'")
        li
          p Go to <code>localhost:1447/about</code> in your browser.
          p You should receive a response similar to the following:
          p
            img(:src="'/drash/assets/img/example_code/advanced_tutorials/creating_a_static_html_app/about_me/3.png'")
</template>
