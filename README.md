# Commands:

## generate api feature
nx generate @nrwl/js:library --name=feature-{feature-name} --directory=api --bundler=swc --tags "scope:api"
### example:
nx generate @nrwl/js:library --name=feature-home-block --directory=api --bundler=swc --tags "scope:api"

## generate crud for api feature
nx g @nrwl/nest:resource --project={scope name}-feature-{feature-name} --directory=lib --type="graphql-code-first" --crud --name {feature-name}
### example:
nx g @nrwl/nest:resource --project=api-feature-home-block --type="graphql-code-first" --crud --name home-block

## generate web library
nx g @nrwl/js:library --name={lib name} --directory=web --bundler=swc  --tags "scope:web"
### example:
nx g @nrwl/js:library --name=utils-shared --directory=web --bundler=swc --tags "scope:web"

## create next library 
nx g @nx/next:lib --name={lib name} --directory=web --bundler=swc --tags "scope:web"

### example:
nx g @nx/next:lib --name=router --directory=web --bundler=swc --tags "scope:web"


