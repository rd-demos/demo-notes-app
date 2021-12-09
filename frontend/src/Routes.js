<<<<<<< Updated upstream
=======
import Login from './containers/Login'
>>>>>>> Stashed changes
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
			{/* Finally, catch all unmatched routes */}
			<Route>
				<NotFound />
			</Route>
		</Switch>
	)
}
