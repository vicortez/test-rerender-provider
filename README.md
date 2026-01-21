This project showcases how parent rerenders and React context affect the render of components down the tree

A value provided by context is considered different than a value provided by state or props. The “value” of a provided context is another, separate thing that can trigger a component to re-render if they consume the context.

Context providers in react are the same as regular components. If their state changes, their children WOULD re-render. But in practice, we are always passing children to them instead of declaring the children inside of them. Because of that, internal state changes never trigger a re-render on the children. Their state can still update, and if a provider’s value changes, their consumers update. Even then, components who are not consumers will not be affected at all.

Even tough their consumers won’t care that the provider re-rendered, if a providers re-renders and happens to re-calculate the value it provides on every execution, like for example when declaring the value as an anonymous object, then the value is changing on every re-render, which will cause all subscribers to re-render. That’s why its important to wrap provided values in `useMemo()`. So that it only changes when the relevant states we care about change.

This pattern allows us to even do things like bundle multiple context providers in one provider component. If our provider component is very simple, and only updates when the provided values change, then we could forego the usage of `useMemo()`.
