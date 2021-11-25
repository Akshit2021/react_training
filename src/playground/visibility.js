class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visibile: false,
        }
        this.handlevisibile = this.handlevisibile.bind(this);
    }
    handlevisibile(){
        this.setState((prevState) => {
            return{
                visibile: !prevState.visibile
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick ={this.handlevisibile}>{this.state.visibile ? "Hide Details" : "Show Details"}</button>
                {this.state.visibile && <p>Some details here</p>}
            </div>
        )
    }
}
ReactDOM.render(<Visibility />, document.getElementById("app"));