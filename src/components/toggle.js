import React from 'react';
class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            darkMode: false,
            msg: "Light Mode"
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.state.darkMode === true) {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            this.setState({ darkMode: false });
            this.setState({ msg: "Light Mode" });

        }
        else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            this.setState({ darkMode: true });
            this.setState({ msg: "Dark Mode" });
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.init}</h1>
                <div className="switch">
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" onClick={this.handleClick}></span>
                    </label>
                </div>
                <p>{this.state.msg}</p>
                <div>
                    <textarea defaultValue="/* code here */"></textarea>
                </div>
            </div>
        );
    }
}
export default Toggle