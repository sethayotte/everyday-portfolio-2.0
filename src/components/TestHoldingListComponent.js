import React from 'react';
import {
    DownCircleOutlined,
  } from "@ant-design/icons";

class HoldingList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posType: '',
            symbol: '',
            numShares: ''
        }
    }

    

    async componentDidMount() {
        const response = await fetch('http://localhost:3000/user-positions');
        const listContent = await response.json();
        this.setState({ posType: listContent.posType, symbol: listContent.symbolInput, numShares: listContent.numShares });
    }

    render() {
        return (
            <div>
                {listContent.map((listContent, index) => (
                    <div key={index}>
                    <h4 className="section-title">{listContent.posType}</h4>
                    <div className="list-item">
                        <p>{listContent.symbol}</p>
                        <p>{listContent.numShares}</p>
                        <p><DownCircleOutlined /></p>
                    </div>
                     </div>
                    
                ))}
                
            </div>
        );
    }
}

export default HoldingList;