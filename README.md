# React

React Practice Code

React : React is a JS liabrary for building Dynamic & Interactic user interface.
\\ There are 2 ways to creating a React App ----->

> CRA(Creat React App)
> Vite

\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***/

1. Emmet
2. CDN(Content Delivery Network) link : The mission of a CDN is to reduce latency
3. crossorigin
4. async vs defer

\\ DOM : Document Object Model

\\ We can access ReactDOM. react-dom means WEB VERSION OF REACT

\\ React.creatElement consist with "tag" "object" "what we want to put inside tag"

\\ React Element is an Object

5. Bundlers : Vite(it's fast), Parcel, Webpack

\\ Parcel is a package of JS files

6. what is npm?
   \\npm used to manage our packages.

7. Why do we use npm?
   \\ We want to manage all our packages that is why we use npm. A react app is a huge app which doesn't run on react itself, there are many more whice we need & those things come from different packages, which packages are present by using npm

8. Caret & tilde in package json?

9. What is package-lock.json?
   To know what exact verson do we need to use on production.
   It will tell you what version of library we are using.
   \\ package-lock.json is a very important file, it locks the version. Never keep it on git ignore.

10. node_modules : whenever we install something it gets installed in node_modules. It is database of npm packages.
    \\ never put node_modules in git repositories cause package-lock.json has sufficient information to recreate node_modules.

11. Never touch & edit node_modules & package-lock.json

12. how do we use npm in my project?
    \\ npm init (package.json create)
    \\ npm install (to install our package) -D(Dev Dependency, also written as '--save-dev'. Dependency means all the packages that project need & percel is one of such dev dependency) parcel (which we want to install)

13. how do we add React to our porject ?
    \\ npm install react
    \\ npm i react-dom (i = install)

14. to ignite our app we use :
    \\ npx (npx = execute using npm) parcel index.html (entry point to our app) [We have to execute parcel with the entry point of the app]

\\ npx parcel index.html (this just creates a faster development version of our project & serves it on the server)

\\ When percel in production build : npx parcel build index.html

15. Hot Module Reloading (HMR)
16. File Watcher Algorithm

\\ We should put .parcel-cache in git

\\ Any thing which is auto generated (generates on server) will be put into the GIT

\\ Transitive Dependence

17. BrowserList: It ia a thing that make our code compatable for lot of browsers.

18. Pollyfill

19. For run a React program
    \\ npm run start || npm start
20. For Building a project
    \\ npm run build

21. Package that help us Remove 'console.log' --->
    https://babeljs.io/docs/babel-plugin-transform-remove-console/

    https://www.npmjs.com/package/babel-plugin-transform-remove-console

22. Now we need to configure it.

----------------------------42---------------------------
