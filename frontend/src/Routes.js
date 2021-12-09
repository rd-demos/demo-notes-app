import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AuthenticatedRoute from './components/AuthenticatedRoute'
import UnauthenticatedRoute from './components/UnauthenticatedRoute'
import Home from './containers/Home'
import Signup from './containers/Signup'
import Login from './containers/Login'
import NewNote from './containers/NewNote'
import Notes from './containers/Notes'
import Settings from './containers/Settings'
import NotFound from './containers/NotFound'

export default function RoutesFiles() {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<UnauthenticatedRoute exact path="/login">
				<Login />
			</UnauthenticatedRoute>
			<UnauthenticatedRoute exact path="/signup">
				<Signup />
			</UnauthenticatedRoute>
			<AuthenticatedRoute exact path="/settings">
				<Settings />
			</AuthenticatedRoute>
			<AuthenticatedRoute exact path="/notes/new">
				<NewNote />
			</AuthenticatedRoute>
			<AuthenticatedRoute exact path="/notes/:id">
				<Notes />
			</AuthenticatedRoute>
			{/* Finally, catch all unmatched routes */}
			<Route>
				<NotFound />
			</Route>
		</Switch>
	)
}
