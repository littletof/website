<script>
export const resource = {
  paths: ["/tutorials/requests/handling-multipart-form-data-bodies"],
  meta: {
    title: "Handling Multipart Bodies",
    source_code_uri: "/tutorials/requests/handling_multipart_form_data_bodies"
  }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/tutorials/requests/handling_multipart_form_data_bodies'],
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      }
    };
  },
}
</script>

<template lang="pug">
page-tutorial(
  :toc="toc"
)
  div.row
    div.col
      hr
      h2-hash Before You Get Started
      p Drash's <code>multipart/form-data</code> parser uses Deno Standard Modules' <code><a href="https://github.com/denoland/deno/blob/master/std/mime/multipart.ts#L254" target="_BLANK">MultipartReader</a></code>.
      p Getting a value from a <code>multipart/form-data</code> request's body can be done using the following call:
      p
        code-block-slotted(:header="false" language="typescript")
          template(v-slot:title)
          template(v-slot:code)
            | const file = this.request.getBodyFile("file_name");
      p-view-source-code(:source_code_uri="$route.meta.source_code_uri")
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
          p Create your resource file. Your resource file will check for the <code>my_file</code> file in the request's body. If it exists, then it will write its contents to <code>outputFile</code>. If it does not exist, then it will throw a <code>400 Bad Request</code> response.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) {{ example_code.files_resource.filepath }}
              template(v-slot:code) {{ example_code.files_resource.contents }}
        li
          p Create your <code>my_file.txt</code> file so it can be passed in the request body.
          p
            code-block-slotted(language="text")
              template(v-slot:title) {{ example_code.my_file.filepath }}
              template(v-slot:code) {{ example_code.my_file.contents }}
        li
          p Create your app file. The <code>memory_allocation.multipart_form_data</code> config is how much memory in megabytes you want to allow the <code>multipart/form-data</code> reader to allocate to reading files. If you do not specify this config, Drash will default to <code>10</code> megabytes.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) {{ example_code.app.filepath }}
              template(v-slot:code) {{ example_code.app.contents }}
  div.row
    div.col
      hr
      h2-hash Verification
      ol
        li Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno run --allow-net --allow-write app.ts
        li
          p Create your <code>uploads</code> folder in your project's directory. This is where the output file will be stored. If you skip this step, you will get the following error: <code>"No such file or directory (os error 2)"</code>.
        li
          p Using <code>curl</code> (or similar command), make a <code>POST</code> request to <code>localhost:1447/files</code> and pass in <code>my_file.txt</code> in the request body. The name of the file is before <code>=@</code>. This is the name your resource will check for when trying to get the file.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl -F "my_file=@my_file.txt" localhost:1447/files
          p You should receive the following response:
            code-block-slotted(:header="false")
              template(v-slot:title) Terminal
              template(v-slot:code)
                | You uploaded the following to ./uploads/my_uploaded_file.txt:
                | Hello, world!
                |
                | I am a simple text file.
        li
          p Check your <code>uploads</code> directory. You should see <code>my_uploaded_file.txt</code> with the following contents:
          p
            code-block-slotted
              template(v-slot:title) /path/to/your/project/uploads/my_uploaded_file.txt
              template(v-slot:code)
                | Hello, world!
                |
                | I am a simple text file.
        li
          p Make the same request, but change the file's name to hello.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl -F "hello=@my_file.txt" localhost:1447/files
          p You should receive the following response:
            code-block-slotted(:header="false")
              template(v-slot:title) Terminal
              template(v-slot:code)
                | This resource requires files to be uploaded via the request body.
</template>
