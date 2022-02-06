# EJS GitHub Action

This GitHub Action runs the EJS template engine on the given file. Creates a new file with the rendered output.

## Inputs

    * input: The template file to process.
    * output: The file to write the output to.
    * parameters: a JSON object containing the parameters to pass to the template. This parameter needs to be passed as a string which will be parsed into JSON.

## Example

This sample GitHub Actions step uses this action to render a template file.

    - name: Create Dockerfile
      uses: startup-booster/actions@v1
      with:
        input: Dockerfile.ejs
        output: Dockerfile
        parameters: '{"base_image": "${{ env.base_image }}", "packages": ["app", "web", "dashboard"] }'
