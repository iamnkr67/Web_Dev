/*

Create a react app  (CRA -package which is used to create a react application )

Requirements :

Internet Connection 
-----------------------------------------------------------------------------
How to create : 

1. Use npm (node package manager)
2. Use npx (node package execute)

npm install create-react-app -g
npx create-react-app my-app
------------------------------------------------------------------------------
What is React ?
-> Open source, component based, front-end library responsible only for the application's view layer.

 React was created by Jordan Walke, a software engineer at Facebook.React was first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012. 

React is used to create interactive user-interface for web and mobile applications.
------------------------------------------------------------------------------
Main Advantages

1. It is very simple to use

2. Native approach (means that it can be used to create mobile application as well as web application)

3. Data Binding (flux architecture is used for data binding)

4. The interfaces created by reactjs are much more faster. (response time is less) because it uses the concept of **virtual DOM**

5. Reusable components : Components are the building blocks of any React application, and a single app usually consists of multiple components. These components have their logic and controls, and they can be reused throughout the application, which in turn dramatically reduces the application's development time.

------------------------------------------------------------------------------
  
Virtual DOM is the light-weight representation of actual DOM

React is component based library .

Q. How many components ? 
-> There are two types of components :
                              1. Functional component
                              2. Class component
                              
React uses a special syntax called JSX which allows you to mix HTML with JavaScript.

Q. Why JSX?

-> React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

npm install vite@latest vite-app

   to proceed press 'y'
   select React as framework
   select Javascript as variant

After completing installation
   cd vite-app
   npm install
   npm run-dev
After completion click on the load server path created by vite   

-------------Lecture 2----------------

Components are the building blocks of any React app and a typical React app will have many of these Simply put,

A component is a Js class or function that optionally accepts i.e. properties(props) and returns React element (JSX) that describes how a section of the UI (User Interface) should appear.

types of components : 
1. Functional Comp. 
2. Class comp.

Different type  of components:
1. HOC 
2.Pure 
3.Container 
4.Dump 
5.Smart

----------Lecture 03------------------

We can pass the data from parent component to the child component using props.

-----------
02/11/2023 Task :
-----------
  Do module no. 9 & 10 on CodeQuotient



  Date : 09-11-2023 Thr.
  -------------------------

  Create a Employee Data in object having 
     empId, compName, empName, empSalary, empDesignation
   and show it on webpage...



   # ReactJs


# ReactJs


----------------
👉 Class Component
----------------

# Creating a class Component and using the state variable and updating the state variable.

## States : 
1) Each classComponents has it's own state, states are used for holding the dynamic data that need to be memorizied by the class.
2) setState() -> used for updating the state.
3) When the state is updating the component is re-rendered.


*/
