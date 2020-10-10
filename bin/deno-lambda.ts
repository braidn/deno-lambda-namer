#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DenoLambdaStack } from '../lib/deno-lambda-stack';

const app = new cdk.App();
new DenoLambdaStack(app, 'DenoLambdaStack');
