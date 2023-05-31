Commands:
## generate feature
nx g @nrwl/nest:resource --project=api-feature-{feature-name} --directory=lib --type="graphql-code-first" --crud --name {feature-name}

## Generate resolver:
 nx g @nrwl/nest:resource --project=api-feature-{feature-name} --type="graphql-code-first" --crud --name {feature-name}



## generate lib
nx generate @nrwl/js:library --name={lib name} --directory={scope name} --compiler=swc --buildable --tags "scope:{scope name}"
