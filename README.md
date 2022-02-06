# EJS GitHub Action

This GitHub Action runs the EJS template engine on the given file. Creates a new file with the rendered output.

## Inputs

All inputs are required.

 * `input`: The template file to process.
 * `output`: The file to write the output to.
 * `parameters`: a JSON object containing the parameters to pass to the template. This parameter needs to be passed as a string which will be parsed into JSON.

## Example

This sample GitHub Actions step uses this action to render a template file.

```yaml
    - name: Create Dockerfile
      uses: startup-booster/ejs@v1
      with:
        input: Dockerfile.ejs
        output: Dockerfile
        parameters: '{"base_image": "node:16.3", "packages": ["app", "web", "dashboard"] }'
```

This can take a file such as

```ejs
FROM <%= base_image %>

WORKDIR /app/

COPY ./package.json yarn.lock /app/
<% for (const package of packages) { %>
    COPY <%= package %>/package.json /app/<%= package %>/
<% } %>
RUN yarn --frozen-lockfile

COPY . .
```

And convert it into

```Dockerfile
FROM node:16.3

WORKDIR /app/

COPY ./package.json yarn.lock /app/

   COPY app/package.json /app/app/

   COPY web/package.json /app/web/

   COPY dashboard/package.json /app/dashboard/

RUN yarn --frozen-lockfile

COPY . .
```
