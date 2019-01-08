const element = React.createElement("div", {}, 
		React.createElement("h1",{}, "Cykl Inkwizytorski Piekary - chrolonogicznie")
	);

const app = document.getElementById("app")

ReactDOM.render(element, app);