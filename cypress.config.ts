import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "shzzmv",
  e2e:{
    setupNodeEvents(on, config){
      // implement node event listeners here
    }
  },
  viewportWidth: 1366,
  viewportHeight: 768
});