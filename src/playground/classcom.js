class Indecisionapp extends React.Component{
    render(){
        const options = ["one", "two", "three"];
        return(
            <div>
                <Header />
                <Action />
                <Options options = {options}/>
                <Addoption />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Indecision</h1>
                <h2>Subtitle</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return(
            <div>
                <button>What should I do ?</button>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                {
                   this.props.options.map((option) => {
                        return <Option key= {option} optionText ={option}></Option>
                   }) 
                }
            </div>
        )
    }
}
class Option extends React.Component{
    render(){
        return(
            <div>
                Options: {this.props.optionText}
            </div>
        )
    }
}
class Addoption extends React.Component{
    render(){
        return(
            <div>
                <p>Add Options component here</p>
            </div>
        )
    }
}
ReactDOM.render(<Indecisionapp />, document.getElementById("app"));