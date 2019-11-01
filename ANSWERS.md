- [ ] Why would you use class component over function components (removing hooks from the question)?

I would choose a class component over a functional component to prepare myself for legacy code or to match legacy code in the professional world.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount - fetches initial data from API OR set up event listeners or subscriptions
componentDidUpdate - this updates our component whenever new props are added or state is changed(setState)
componentDidUnmount - cleans up DOM elements created during the Component's componentWillMount

- [ ] What is the purpose of a custom hook?

A custom hook can increase our ability to keep our code DRY and scalable. It also allows us to more easily compartmentalize in terms of folder structure

- [ ] Why is it important to test our apps?

Testing:
Makes us aware of bugs faster.
Makes us think about the problems we weren't considering when we initially wrote the code.
Points out problems when we are refactoring.
Acts as SIMPLE documentation for the code.
Encourages us to write more testable code, meaning code we are in more control of (rather than having unknown state).