#!/usr/bin/env node
import * as cdk from "aws-cdk-lib/core";
import { PortfolioInfrastructureStack } from "../lib/portfolio-infrastructure-stack";

const app = new cdk.App();
new PortfolioInfrastructureStack(app, "PortfolioInfrastructureStack", {});

app.synth();
