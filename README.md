# React Learning Flow

1. **Creating React Elements**
   - Learned how to create React elements in JavaScript.

2. **Creating Multiple Elements**
   - Explored creating multiple elements using an array.

3. **React Elements**
   - Understood that React elements are JavaScript objects that get converted into HTML through the render function.

4. **JSX for Visualization**
   - Recognized that JSX makes it easier to visualize and work with React components.

5. **Initializing npm**
   - Initialized npm to create a `package.json` file containing dependencies, scripts, and configurations.
   - Command: `npm init`

6. **Using Parcel as a Bundler**
   - Utilized Parcel as a bundler for React projects.
   - Explored the `node_modules` folder containing transitive dependencies.
   - Learned why `node_modules` should be added to `.gitignore`.
   - Understood the advantages of getting React from npm rather than using CDN links.

      **Adding Modules in Script Tags (HTML)**
        - In HTML, when using modules (e.g., JavaScript modules), you need to specify the `type` attribute in the script tag as `type="module"`. This tells the browser that the script file should be treated as an ES6 module, allowing you to use the `import` and `export` syntax.

        - This is necessary when you're working with modern JavaScript code that relies on module imports and exports to organize and share code between files.

   - Introduced to the `import` statement which is used to import modules in JavaScript files.


7. **Parcel Features**
   - Learned about Parcel's features, including:
     - HMR (Hot Module Replacement)
     - File-watching algorithm
     - Development build
     - Local server
     - Faster build via caching
     - Image optimization
     - Bundling
     - Error handling and diagnostics
     - Consistent hashing
     - Code splitting
     - Creating different builds for production and development.
   - Discovered why running `npx parcel build index.html` might fail and how to resolve it by removing the main entry point from `package.json`.

8. **Browserlist**
   - Learned about configuring browsers in `browserlist` for compatibility.
   - Command for installing Parcel as a dev dependency: `npm install -D parcel`.

9. **Scripts**
    - In the context of `package.json`, "scripts" refer to custom commands or tasks that can be executed using npm or yarn. These scripts are defined in the "scripts" section of the `package.json` file.
    - Common scripts include "start" for launching the development server, "build" for creating a production build, and user-defined scripts for specific project tasks.

10. **JSX**
    -  JSX allows you to write HTML-like tags in JavaScript code, primarily used in React for creating user interface elements.

11. **Babel**
    -Babel is a JavaScript compiler that transforms modern JavaScript code (ES6+ syntax) into older versions (ES5) to ensure compatibility with older browsers.
    - 

12. **React Component**
    - In React, a component is a reusable and self-contained building block for user interfaces. It can be a class component or a functional component.
    - Component Composition is the practice of combining smaller components to build more complex user interfaces

## Trivia

1. **Package Versioning (`^` and `~`)**
   - The `^` (caret) symbol in package versions indicates that minor updates are allowed. For example, if a package is `^2.1.0`, it can automatically update to `2.2.0` when available, but not to `3.0.0`.

   - The `~` (tilde) symbol in package versions indicates that only patch updates are allowed. For example, if a package is `~2.1.0`, it can update to `2.1.1`, but not to `2.2.0`.

   
2. **Package.json vs. Package-lock.json**
   - Understood the difference between `package.json` and `package-lock.json`, with `package-lock.json` containing precise dependency versions and hashes for deployment.
3. **CrossOrigin Attcks**
    -