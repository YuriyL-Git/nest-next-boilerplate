Commands:
## generate user cruds
nx g @nrwl/nest:resource --project=api-feature-user --directory=lib --type="graphql-code-first" --crud --name user


## generate db-types
nx generate @nrwl/js:library --name=generated-db-types --directory=api --compiler=swc --buildable --tags "scope:api"
