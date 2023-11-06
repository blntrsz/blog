import type { SSTConfig } from "sst";
import { StaticSite } from "sst/constructs";
import {
  Function as CfFunction,
  FunctionCode as CfFunctionCode,
  FunctionEventType as CfFunctionEventType,
} from "aws-cdk-lib/aws-cloudfront";

export default {
  config(_input) {
    return {
      name: "blog",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const customDomainConfig: {
        customDomain?: { domainName: string; domainAlias: string };
      } = {};

      if (stack.stage === "prod") {
        customDomainConfig["customDomain"] = {
          domainName: "blntrsz.com",
          domainAlias: "www.blntrsz.com",
        };
      }
      const site = new StaticSite(stack, "site", {
        cdk: {
          distribution: {
            defaultBehavior: {
              functionAssociations: [
                {
                  function: new CfFunction(this, "CloudFrontFunction", {
                    code: CfFunctionCode.fromInline(`
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Check whether the URI is missing a file name.
  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  }
  // Check whether the URI is missing a file extension.
  else if (!uri.includes('.')) {
    request.uri += '/index.html';
  }

  return request;
}
          `),
                  }),
                  eventType: CfFunctionEventType.VIEWER_REQUEST,
                },
              ],
            },
          },
        },
        indexPage: "index.html",
        errorPage: "404.html",
        buildOutput: "dist",
        buildCommand: "pnpm run build",
        ...customDomainConfig,
      });
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
