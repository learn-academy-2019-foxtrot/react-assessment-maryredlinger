# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1. Correctable True/False: Mark the following TRUE or FALSE. If FALSE, correct the statement to be TRUE.

- React is a modern, efficient answer to complex UI applications (true)
- React will only render on the server using Node.js (false yarn start)
- React is a full stack framework for modern web applications (true)
- React is a flexible library that plays the role of V in an MVC framework (true/false - React isnt an MVC framework but also React is advertised as the "V" in MVC)
- You should always update a component's state directly using this.state (false - if changing the state you call on this.state but dont directly go into the variable to change it)
- React is made up of encapsulated components that manage their own state (true)
- React components render HTML (true)


2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer: Smart components are the parent components while the dumb components are the children.

  Researched answer: What Makes a Component Smart or Dumb? Smart components are app level components that perform functions and manage data while dumb components focus solely on the UI




3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer: Yarn add is adding a package to your terminal

  Researched answer: In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.





4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer: State is the original state of the variable that is in the parents class. The state is passed into the children through props. Props is a way of calling on this.sate from and extended class.

  Researched answer: Basically, the difference is that state is something like attributes in OOP : it's something local to a class (component), used to better describe it. Props are like parameters - they are passed to a component from the caller of a component (the parent) : as if you called a function with certain parameters.




5. How would you explain state to a friend who doesn't know code?

  Your answer: state is the start of a current variable and can be changed as methods are called. now lets break that down.. when you go on an empty twitter post you are changing the state of your text box from empty to whatever text you fill in it. You then are updating the state through your code to display what you changed it to.
