import React from 'react';
import {
    DownCircleOutlined,
  } from "@ant-design/icons";

  

class HoldingList extends React.Component {
    

    render() {
        return (
            <React.Fragment>
            <div>
                {/* {listContent.map((listContent, index) => (
                    <div key={index}>
                    <h4 className="section-title">{listContent.posType}</h4>
                    <div className="list-item">
                        <p>{listContent.symbol}</p>
                        <p>{listContent.numShares}</p>
                        <p><DownCircleOutlined /></p>
                    </div>
                     </div>
                    
                ))} */}
                
            </div>
            </React.Fragment>
        );
    }
}

export default HoldingList;