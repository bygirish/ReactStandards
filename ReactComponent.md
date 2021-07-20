

1. Break screen into components and components into sub-components
2. For Each component:
	 index.jsx - js code
	 styles.scss - localized css
3. Class component
	- Props & states: https://www.freecodecamp.org/news/react-js-for-beginners-props-state-explained/
	- PropTypes 
		- https://reactjs.org/docs/typechecking-with-proptypes.html
		- https://flow.org/en/docs/types/aliases/
	- DefaultProps (optional)
	- constructor()
	- componentDidMount()
	- componentDidUpdate()
	- componentWillUnmount()
	- render()
		- subrendermethods()
	
4. Task:
 - React component
 - React Component Lifecycle and methods
 - Flow integration in the project
 - Component with Props type and State types
 



**Component Lifecycle**
Phase-1:
- initialize - instance created - constructor
- WillMount - about to render on screen - componentWillMount
- Rendering - rendering on screen - render()
- Mounted - rendering is complete  - ComponentDidMount()
 
 Phase-2:
 - WillUpdate - ComponentWillUpdate
- render - Render()
- Updated - ComponentDidUpdate

Last Phase:
- Unmounting - removing from screen - ComponentWillUnmount