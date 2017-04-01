import React, { PropTypes } from 'react';
import { Component } from 'react';
let ReactRouter = React.Router;
let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;
let SignIn = require('../containers/loginContainer.jsx');
let Dashboard = require('../containers/dashboardContainer.jsx');
let Tasks = require('../containers/tasksContainer.jsx');
let App = require('../App.jsx')

import {connect } from 'react-redux'
// import actions here and then add the to mapStateToProps
import { isHomeless } from './actions'


let routes = (
  <Router>
    <Route path="/" component={Dashboard}>
      <Route path="/signIn" component={SignIn} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/test" component={App} />
    </Route>
  </Router>
  )

module.exports = routes;


// main react app component
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Ahhhhh anhhhhh</h1>
//         <div>
//           {this.props.homelessReducer[this.props.homelessReducer.length - 1]}
//         </div>
//         <button onClick={()=>{
//           console.log('this.props: ', this.props);
//           this.props.isHomeless('Kyle')
//           }}>click</button>
//       </div>
//     )
//   }
// }

// App.propTypes = {
//   //define destructured proptypes here
// }

// const mapStateToProps = state => ({
//   homelessReducer: state.homelessReducer
// })

// const mapDispatchToProps = dispatch => ({
//   // someKey: (someArg) => {dispatch(someFunc(someArg))}
// })

// export default connect(
//   mapStateToProps,
//   {
//     isHomeless
//   }
// )(App)
// export default App;
