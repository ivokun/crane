import type { SSTConfig } from "sst";
import { App, AstroSite } from "sst/constructs";

export default {
  config() {
    return {
      name: "crane",
      region: "ap-southeast-3",
    };
  },
  stacks(app: App) {
    app.stack(function Site({ stack }) {
      const site = new AstroSite(stack, "web");
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
