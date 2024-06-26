import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { MainView } from "./views/MainView.jsx";
import {CardView} from "./views/CardView.jsx";
import {PlanetCardView} from "./views/PlanetCardView.jsx";
import {VehicleCardView} from "./views/VehicleCardView.jsx";
import {SpeciesCardView} from "./views/SpeciesCardView.jsx";

import { PeopleComponents } from "./component/PeopleComponents.jsx";
import { PlanetComponents } from "./component/PlanetComponents.jsx";
import { VehicleComponents } from "./component/VehicleComponents.jsx";
import { SpeciesComponents } from "./component/SpeciesComponents.jsx";

import injectContext from "./store/appContext";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<MainView />} />
						<Route path="/mainView" element={<MainView />} />
						<Route path="/cardView/:uid" element={<CardView />} />
						<Route path="/planetCardView/:uid" element={<PlanetCardView />} />
						<Route path="/vehicleCardView/:uid" element={<VehicleCardView />} />
						<Route path="/speciesCardView/:uid" element={<SpeciesCardView />} />
						<Route path="/people-components" element={<PeopleComponents />} />
						<Route path="/planet-components" element={<PlanetComponents />} />
						<Route path="/vehicle-components" element={<VehicleComponents />} />
						<Route path="/species-components" element={<SpeciesComponents />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
