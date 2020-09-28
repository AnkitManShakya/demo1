import React, {Component} from 'react';
import './App.css';
import {SearchBox} from './component/search_box/search_box';
import {CardList} from "./component/card_list/card_list_component"


class App extends Component {

    constructor() {
        super();
        this.state={
            monsters:[],
            searchField:""
        };
        this.handleChange=this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").
            then(response=>response.json()).
            then(users=>this.setState({monsters:users}))
    }

    handleChange=(e)=>{
        this.setState({searchField: e.target.value});
    }

    render() {
        const {monsters,searchField}=this.state;
        const filtered = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <SearchBox placeholder={"monster name"} handle={this.handleChange}/>
                <CardList monsters={filtered}/>
            </div>
        )
    }
}


export default App;
