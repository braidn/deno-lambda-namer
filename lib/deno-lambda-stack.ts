import * as cdk from '@aws-cdk/core';
import { Function, Runtime, Code, LayerVersion } from '@aws-cdk/aws-lambda'
import { HttpApi, LambdaProxyIntegration, HttpMethod } from '@aws-cdk/aws-apigatewayv2'
import { CfnOutput } from '@aws-cdk/core';

export class DenoLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const deno = new LayerVersion(this, 'DenoLayer', {
      code: Code.fromAsset('src/layer'),
      compatibleRuntimes: [Runtime.PROVIDED],
      license: 'Apache-2.0',
      description: 'Layer for running executing code on the Deno runtime'
    })

    const api = new HttpApi(this, 'HumiApi')

    const humiIntegration = new LambdaProxyIntegration({
      handler: new Function(this, 'DenoHumiLocator', {
        runtime: Runtime.PROVIDED,
        code: Code.fromAsset('src/hello'),
        handler: 'kamal.handler',
        layers: [deno]
      })
    })


    api.addRoutes({
      path: '/kamal',
      methods: [HttpMethod.GET],
      integration: humiIntegration
    });

    new CfnOutput(this, 'endpointUrl', { value: api.url || '' }).toString()
  }
}
