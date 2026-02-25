import * as cdk from "aws-cdk-lib/core";
import * as amplify from "aws-cdk-lib/aws-amplify";
import codebuild from "aws-cdk-lib/aws-codebuild";

export class PortfolioInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Amplify Application
    const amplifyApp = new amplify.App(this, "PortfolioAmplifyApp", {
      appName: "portfolio-app",
      // Connect to GitHub repository
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "A-MOHAMED14",
        repository: "portfolio-site",
        oauthToken: cdk.SecretValue.secretsManager("github-token"),
      }),

      // Build specification for building and deploying the app
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: "1.0",
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'echo "Starting this build"',
                "cd portfolio",
                "npm install",
              ],
            },
            build: {
              commands: [
                'echo "Building next.js app..."',
                "npm run build-and-export", // This command builds the Next.js app and exports it as static files in the "out" directory
                'echo "Build completed ✅"',
              ],
            },
          },
          artifacts: {
            baseDirectory: "portfolio/out", // After build, this command tells Amplify to look for the static files in the "out" directory and deploy them
            files: ["**/*"],
          },
          cache: {
            paths: ["node_modules/**/*", ".next/cache/**/*"], // To speed up subsequent builds, we cache the node_modules and Next.js build cache directories
          },
        },
      }),
    });

    // Specify the branch to deploy from
    const mainBranch = amplifyApp.addBranch("main", {
      autoBuild: true, // Automatically build and deploy when changes are pushed to the "main" branch.
    });
  }
}
