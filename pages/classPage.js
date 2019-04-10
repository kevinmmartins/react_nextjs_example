import fetch from 'isomorphic-unfetch';
import { Component } from "react";
class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: props.info
        }
    }
    handleRefresh = async (e) => {
        const res = await fetch('http://www.mocky.io/v2/5cad36cf2f000027173a94db')
        const json = await res.json()
        this.setState({ info: json.info });
    }
    render() {
        return (
            <div>
                Page info: {this.state.info}
                <button onClick={this.handleRefresh}>Refresh</button>
            </div>
        )
    }
}
Page.getInitialProps = async ({ req }) => {
    const res = await fetch('http://www.mocky.io/v2/5cac8e703000002a251036e3')
    const json = await res.json()
    return { info: json.info }
}
export default Page;