# TypeScript Without Webpack 

This project aims to showcase that [Deno][dn] can truly be run inside a Lambda 
and deployed by the [AWS CDK](https://aws.amazon.com/cdk/).
All without touching any Webpack.
Not even Webpack configs.
For, this isn't a web browser and
therefore Webpack isn't a dependency that is 'required.'

So what does this __mean__?
Glad you asked:

At its' core, anyone can write TypeScript and completely omit the compilation step.
This also means that Lambda authors can alter their running code in the AWS console.
Leading to easier debugging
and quicker fixes, should issues arise.
This is miles easier than squinting at minified and uglified code.
Although, please optimize your code for Production settings.

## Installation

1. All dependencies can be installed using a recent version of Node + NPM:

        npm i

1. We highly recommend that a [Deno][dn] version is installed locally.

## Usage

To see about the viability of running Deno in a Lambda environment.

#### Other Useful commands
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template


## History

2020-10-09T16:55:20: Kamal and the author are shit talking Webpack  
2020-10-11T14:30:20: First inception and deploy

## Credits

[Kamal-A-Saurus](https://github.com/kamalasaurus) for pushing the boundaries with the term: 'why'  
[Deno Lambda](https://github.com/hayd/deno-lambda) for the Lambda Runtime

[dn]: https://deno.land/
