import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
import * as gateway from '@aws-cdk/aws-apigatewayv2'
import { CfnOutput } from '@aws-cdk/core';

export class DenoLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const deno = new lambda.LayerVersion(this, 'DenoLayer', {
      code: lambda.Code.fromAsset('src/layer'),
      compatibleRuntimes: [lambda.Runtime.PROVIDED],
      license: 'Apache-2.0',
      description: 'Layer for running executing code on the Deno runtime'
    })

    const humi = new lambda.Function(this, 'DenoHumiLocator', {
      runtime: lambda.Runtime.PROVIDED,
      code: lambda.Code.fromAsset('src/hello'),
      handler: 'kamal.handler',
      layers: [deno]
    })

    const humiIntegration = new gateway.LambdaProxyIntegration({
      handler: humi
    })

    const api = new gateway.HttpApi(this, 'HumiApi')

    api.addRoutes({
      path: '/kamal',
      methods: [gateway.HttpMethod.GET],
      integration: humiIntegration
    });

    new CfnOutput(this, 'endpointUrl', { value: api.url }).toString()
  }
}