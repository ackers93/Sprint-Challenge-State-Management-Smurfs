1. What problem does the context API help solve?

Simplifying State Management.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: a function that creates an action.
reducers: A function that takes in a accumulation and returns a new one.
store: An object that holds the Apps state.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application State is Global, while component state is local.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It is whats called Middleware. It allows action creators to return functions instead of just objects.

1. What is your \favorite state management system you've learned and this sprint? Please explain why!

Redux made the most sense to me and while it's more suited to large scale projects, it's still capable of being used on smaller ones, once you get past all the boilerplate code.
