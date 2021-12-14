const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "hashicorp/tfe@~> 0.26.1",
  cdktfVersion: '^0.8',
  constructsVersion: "^10.0.0",
  minNodeVersion: "14.17.0",
  jsiiVersion: "^1.46.0",
});

project.synth();
