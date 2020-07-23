class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && <p>These are now things that are visible</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false; // Starts off hiding components

// const toggleVisibility = () => {
//     visibility = !visibility; // toggles the state of visibility (true -> false) or (false -> true)
//     render();
// };

// const render = () => {
//     const JSX = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && <p>These are some things that are now visible</p>}
//         </div>
//     );
    
//     ReactDOM.render(JSX, document.getElementById('app'));
// };

// render();


