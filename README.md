# TypeScript and Angular
## Setup and initialisation
1. `install node`  
2. use `npm init`  
3. use `npm i typescript`  
4. use `tsc --init` to configure TypeScript with JavaScript  
## Converting from TypeScript to JavaScript
  Just run `tsc`
## What is an SPA?
  An SPA is a single page application where all webpages required for rendering a web-app are sent over in one shot and routing is done by the browser not an external server.
## How does Angular handle routing?
  Angular has routing functionality to handle routing. It also has a server-side routing (SSR) option which has SPA functionality (but not complete re-routing). SSR is better for SEO.
## TypeScript Basics
### Type Inference
  TypeScript can infer the type of a variable without you mentioning it. So just use `let <var name> = <var value>` and it should be fine. However, avoid using this solution as this often leads to errors as code gets complex. Instead use `let <var name>: <data type>;` and then `<var name> = <var value>`
### Data types
  TypeScript has the following data types:
  1. `string`: same as python.
  2. `number`: float and int are indistinguishable in TypeScript
  3. `boolean`: `true` or `false` no default value for boolean. It will for all practical purposes be treated as `undefined`.
  4. `array`: use `[]` for array of type `any` and `<item type>[]` for array of specific type.
  5. `enum`
  6. `tuple`: stores exactly two values of any data types. Defined as `[<type 1>, <type 2>]`
  7. `any`: avoid. Always use specific data types.
  8. `void`: use in functions as return type when you aren't returning a value.
  9. `never`
### Functions
  Functions in TypeScript are always type safe. You must always specify parameter type with `<parameter name>: <parameter type>` and return type as `: <return type>`