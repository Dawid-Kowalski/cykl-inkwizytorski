const app = document.getElementById("app")

let rows = books.map(function(book){
	return 	React.createElement("tr", {},
				React.createElement("td", {}, book.date),
				React.createElement("td", {}, book.title),
				React.createElement("td", {}, book.storys),
				React.createElement("td", {}, book.img)
			)
})

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
			),
			React.createElement("tbody", {key: books.id}, rows)
		)
	);

ReactDOM.render(element, app);