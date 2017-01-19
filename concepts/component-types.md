# Container vs Presentational Components

#### Container Components
* Container Components are ones which either owns a State varible (In React JS) or receives the data from the Provider (In Redux). 
* Container Component are the ones which also holds some amount of UI logic and contains/calls other child components.

> Container Components are also called as Smart Components (or) Functional Components

#### Presentational Components
* Presentational Components are ones which has plain HTML Markup and accepts data from parent component through {this.props}
* Presentational Components are ones which also dosen't perform any UI logic and stays more generic implementation

> Presentational Components are also called as Dumb Components (or) Stateless Functional Components
