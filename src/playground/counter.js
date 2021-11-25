class Counter extends React.Component{
    constructor(props){
        super(props);
        this.incremeentone = this.incremeentone.bind(this);
        this.decrementone = this.decrementone.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: props.count
        }
    }
    incremeentone(){
        this.setState((prevState) => {
            return{
                count: prevState.count + 1
            }
        })
    }
    decrementone(){
        this.setState((prevState) => {
            return{
                count: prevState.count - 1
            }
        })
    }
    reset(){
        this.setState(() => {
            return{
                count: 0
            }
        })
    }
    render(){
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incremeentone}>+1</button>
                <button onClick={this.decrementone}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById("app"))