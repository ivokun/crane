import type { SSTConfig } from "sst";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
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
      const site = new AstroSite(stack, "web", {
        customDomain: {
          domainName: "crane.ivokun.com",
          isExternalDomain: true,
          cdk: {
            certificate: Certificate.fromCertificateArn(
              stack,
              "CraneCert",
              process.env.CERT_ARN ?? ""
            ),
          },
        },
      });
      stack.addOutputs({
        prodUrl: site.customDomainUrl,
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
