# Files for PostCSS

In this folder is where files for PostCSS plugins, like `postcss-functions`, are declared.

These files must have `.cjs` extension and cannot use TypeScript because PostCSS will not find them. Probably because Astro doesn't transpile them. Hopefully, a solution will be found to convert these files to TypeScript in the future. For now, I stick to JavaScript.

Also, they cannot import any TypeScript file for now.
