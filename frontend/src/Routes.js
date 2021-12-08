import { Auth } from 'aws-amplify'
import Login from './containers/Login'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from './containers/NotFound'
import Home from './containers/Home'

export default function RoutesFiles() {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/login">
				<Login />
			</Route>
			{/* Finally, catch all unmatched routes */}
			<Route>
				<NotFound />
			</Route>
		</Switch>
	)
}
