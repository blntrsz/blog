export default function (plop) {
  plop.setHelper("toLowerCase", (txt) => txt.toLowerCase());
  plop.setHelper("toFileName", (txt) => txt.toLowerCase().replaceAll(" ", "-"));
  plop.setHelper("time", (txt) => new Date().toDateString().substring(4));

  // controller generator
  plop.setGenerator("controller", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "post name please",
      },
      {
        type: "input",
        name: "description",
        message: "description name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/content/posts/{{ toFileName name }}.md",
        templateFile: "templates/post.hbs",
      },
    ],
  });
}
