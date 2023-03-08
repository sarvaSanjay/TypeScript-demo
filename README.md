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
  Functions in TypeScript are always type safe. You must always specify parameter type with `<parameter name>: <parameter type>` and return type as `: <return type>`. There are 3 ways to define a function which are defined in `functions.ts`.
### Optional parameters
  Optional parameters are those parameter whose value may or may not be present. You can denote a parameter as optional by using `<par name>?`
### Required parameters
  These parameters take a required specific value. They can be defined using `<par name>: <par type> = <def value>`.
### Rest parameters
  Equivalent to `kwargs` or `args` in python. They are used to specify rest optional parameters and are always of array type. Defined using `...<rest par name>: <item type>[]`
### Classes
  Syntax for defining classes is given in `class.ts`. To define a class use the `class` keyword.  
  ```
  class <ClassName>{
      <fieldName>: <field-type>
      ...
  }
  ```
  When defining the field attributes mention the data type.
### Constructors in TypeScript
  As in JavaScript, the default method name for creating a constructor for a class in TypeScript is `constructor` method. Important thing to note is that you can create only 1 constructor in TypeScript and hence you can create either a default constructor or a parametrised constructor.
  ```
  class <ClassName>{
      <fieldName>: <field-type>
      ...
      constructor(<parName>: <par-type>){
          this.<fieldName> = <parName>
      }
  }
  ```
  When referring to an object inside the class always use `this` keyword to accesss any functions / instance attributes.
### Creating an object
  We create a new object using the `new` keyword. The exact syntax is
  ```
  let <objName> = new <ClassName>(arguements)
  ```
### Creating a private attribute
  We mark an attribute of a class as private by prefixing it with a `#`. For example,
  ```
  #password : string
  ```
  Any private attribute cannot be accessed outside the class.
### Creating a protected attribute
  A protected attribute can be accessed by members of a class and its sub-classes but not outside in the interface. We mark an attribute as protected by using the `protected` keyword.
### Static methods
  A static method is a method that does not belong to an object but rather belongs to the class itself. We define a static method using the `static` keyword and access it outside the class using `<ClassName>.<staticmethodname>`.
### Inheritance
  Inheritance is when one class inherits or uses the functions and attributes of another class. The class that inherits the attributes is called the *subclass* while the one that provides them is called the *superclass*. We implement inheritance in TypeScript using the `extends` keyword. To call the superclass' constructor within the subclass by using the `super()` keyword. The syntax is:
  ```
  class <SubClass> extends <SuperClass>{
      constructor(parName: <par-type>){
          super(parName)
      }
  }
  ```
  A subclass can access the following properties of the superclass:
  1. The protected and public instance attributes
  2. The protected and public functions
  3. Static methods
### Getters and Setters
  We use getters to access the value of private instance attributes and setters to set the value of private instance attributes. To define a getter we use the `get` and a setter using the `set` keyword.
### Interfaces
  Interfaces are used to define your own custom data type in TypeScript. To define an interface we use the `interface` keyword. In the definition of an interface we define the field name and the field type for each object. For example,
  ```
  interface User{
      age: number,
      name: string
  }
  ```
  an interface can extend another by using the `extend` keyword. Just like classes this allows the other interface to access all attributes of the other one while adding its own.
  ```
  interface Admin extends User{
      adminId: number
  }
  ```
  Here `Admin` has attributes `age`, `name` and `adminId`.  
  An interface can also define its functions, but it cannot implement those functions. Those functions are implemented by a class that implements the said interface. We can show that a class implements an interface using the `implements` keyword.  
  If you want to use an interface in another file prefix its definition with the `export` keyword and in the file you are importing use `import {interface} from 'path-name'`.
  >NOTE: During compilation of code interfaces disappear as interfaces are not a concept in JavaScript. So if you need to use your data type in the code do not use interfaces.
### Object deconstruction
  If you only want select properties of an object stored in certain variables use the following format.
  ```
  {prop-name1: var-name1, prop-name2: var-name2} = obj
  ```
  This way you can get the required properties in your variable names from the object.
### Decorators
  Decorators change the behaviour of a class or method. They are denoted by a `@` before the class or method definition.
## Angular setup
1. Install the angular cli using the command `npm i -g @angular/cli`.
2. Check angular version using `ng version`.
3. Create an application using the command `ng new hotelappinventory`.
## Workspace walkthrough
1. `tsconfig.json` is the configuration file that describes general file compilation rules from TypeScript to JavaScript
2. `tsconfig.spec.json` has rules for compiling all unit test files from TypeScript to JavaScript. All test files must end with `.spec.ts`. It extends the `tsconfig.json` file.
3. `tsconfig.app.json` has rules for compiling all app related files. It extends the `tsconfig.json` file.
4. `README.md` is pretty self explanatory.
5. `package.json` describes the commands you need to run, test or build your app which is in the `script` part of the file, It also describes the dependencies required to run your app. The dependencies needed exclusively to develop and test your app are in `devdependencies` while the rest are in `dependencies`.
6. `package-lock.json` is for CI and is useful when working with big teams. For solo-projects ignore.
7. `.gitignore` tells which files should not be checked-in.
8. `.editorconfig` has guidelines regarding changing from one editor to another. Do not worry about this one.
9. `angular.json` has details about all projects in current folder. If you create more projects in same folder it will be updated.
10. `src` folder contains all source code. It is where you will write your code for the app.
11. `node_modules` contains all important packages that have been installed for your app to run.
## The src folder: where the magic happens
  As mentioned before the `src` folder is where we write all of our code. Lets explore its components.
### styles.sass
  It is your stylesheet file. You write any CSS-style configurations here.
### main.ts
  The file that is executed when you run your app.
### index.html
  The html file that is rendered when you run your app.
### favicon.ico
  Just an icon that is present on every app.
### assets
  Where you keep all your resources like images etc.
### app
  Here is where you have all your app components. This is where you write the code for your app. The `app-routing.module.ts` handles routing. The `app.component.html` file is where you write HTML code for each app component while the `app.component.sass` file is where you write CSS. `app.component.spec.ts` is where you write tests for the code you write in `app.component.ts`.
## Mono-repo
  In angular you can create and deploy multiple projects from a single workspace. This allows you to share libraries between various applications. This concept is called *mono-repo*.
## Serving your app
  To serve your app use the command
  ```
  $ ng serve -o
  ```
## Components
  Components are the views that shall be displayed in your app. They are defined as classes in Angular and are multiple reusable HTML tags. The main component in an app is the `AppComponent`. It is the one that is run when you run your app. It is defined as the `app-root`.  
  All components must be declared in the `app.module.ts` file. Every component must be defined in the `app.component.ts` file using the `@Component` decorator. The following parameters must be mentioned in the decorator.
  ```
  @Component({
    selector: <selector-name>,
    templateUrl: <path-for-html-file>,
    styleUrls: [<list-of-css-urls>]
  })
  ```
## Watch loading
  Watch loading is a concept which states that any changes made are recorded while compilation.
## Angular Language Service
  It is a VScode extension that provides intelligent features to angular.
## Creating a new component
  You can create a new component using the command
  ```
  $ ng g c <component-name>
  ```
  This creates a folder with the given component name inside app.
## Binding Syntax
  There are three ways you can connect the TypeScript code to the HTML template. They are:
  1. Interpolation
  2. Property Binding
  3. Event Binding
### Interpolation
  Interpolation is when you directly use a variable from TypeScript in your inline HTML code. Define the variable in your `component.ts` file and refer to it in an in-text format by using double curly-braces i.e. `{{<varName>}}`
### Property Binding
  Property Binding is when you connect a property of an HTML tag to a variable in TypeScript component. Define the variable in your `component.ts` file and refer to it in HTML code using the following syntax:
  ```
  <tag-name [propertyName] = 'varName'> </tag-name>
  ```
  Do not forget to place the `propertyName` within the `[]` and the variable name within `''` 
### Event Binding
  Event binding links events such as `click` to functions in TypeScript component. Define the variable in your `component.ts` file and refer to it in HTML code using the following syntax:
  ```
  <tag-name (eventName) = 'functionName()'> </tag-name>
  ```
  Do not forget to place the `eventName` within the `()` and the variable name within `''`
## Directives
  Directives are classes which can change the behavior of elements and components. There are two types of directives
  1. Structural directives: They can manipulate DOM behaviour. They are used in the `component.html` file.
  2. Attribute directives: They can only change style features aka appearance.
## Built in directives
  Angular provides certain built in directives which are very useful in changing the behavior of elements. Built in directives that are structural are marked using an asterisk (\*). Let us look at some built in directives.
### *ngIf
  `*ngIf` is a directive that is equivalent to an `if` statement in angular. The syntax for it is:
  ```
  <div *ngIf='condition'>
    Your code
  </div>
  ```
### *ngFor
  `*ngFor` is used when you want to loop over a certain array in order to obtain each object or value. Hence it is very much like a `for` statement in TypeScript. The syntax for it is:
  ```
  <div *ngFor='let loopVar of arrayVar'>
    Code that needs to be repeated
  </div>
  ```
  Hence a `div` element shall be created for each elemt in `arrayVar`. This is very useful for creating multiple blocks of HTML code at once. We can also access index of the array in the following way:
  ```
  <div *ngFor='let loopVar of arrayVar'; let i=index>
    Code that needs to be repeated
  </div>
  ```