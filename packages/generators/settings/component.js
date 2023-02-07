import path from "path";
import { cwd } from "process";
import glob from "glob";

const getComponentDirs = async () => {
  return await glob.sync("**/components", {
    root: path.resolve(cwd(), "../../../"),
    ignore: "node_modules/**",
  });
};

const Component = async (plop) => {
  plop.setGenerator("component", {
    description: "Generator for adding a component template",
    prompts: [
      {
        name: "componentLocation",
        message: "Which location should this component be added to?",
        type: "list",
        choices: await getComponentDirs(),
      },
      {
        name: "name",
        type: "input",
        message: "What is the name of your component?",
      },
    ],
    actions: (data) => {
      return [
        {
          type: "add",
          path: "{{componentLocation}}/{{dashCase name}}/{{pascalCase name}}.tsx",
          templateFile:
            "packages/generators/templates/plop_components/component.template.hbs",
        },
        {
          type: "add",
          path: "{{componentLocation}}/{{dashCase name}}/{{pascalCase name}}.styles.ts",
          templateFile:
            "packages/generators/templates/plop_components/component.styles.hbs",
        },
        {
          type: "add",
          path: "{{componentLocation}}/{{dashCase name}}/{{pascalCase name}}.types.ts",
          templateFile:
            "packages/generators/templates/plop_components/component.types.hbs",
        },
      ];
    },
  });
};

export default Component;
