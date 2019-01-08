const app = document.getElementById("app")

const element = React.createElement("div", {}, 
		React.createElement("h1",{}, "Cykl Inkwizytorski Piekary - chrolonogicznie"),
		React.createElement("p",{}, bookDescription),
		React.createElement("table", {},
			React.createElement("thead",{},
				React.createElement("tr", {},
					React.createElement("td", {}, "data"),
					React.createElement("td", {}, "tytuł"),
					React.createElement("td", {}, "tytuły opowiadań"),
					React.createElement("td", {}, "okładka")
				)
			)
		)
	);

ReactDOM.render(element, app);