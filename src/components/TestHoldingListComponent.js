import React from 'react';
import {
    DownCircleOutlined,
  } from "@ant-design/icons";

class HoldingList extends React.Component {
    render() {
        return (
            <div>
                <h4 className="section-title">&#123; Category Name &#125;</h4>
                <div>
                    <div className="list-item">
                        <p>&#123; symbol &#125;</p>
                        <p>&#123; #shares &#125;</p>
                        <p><DownCircleOutlined /></p>
                    </div>
                    <div className="list-item">
                        <p>&#123; symbol &#125;</p>
                        <p>&#123; #shares &#125;</p>
                        <p><DownCircleOutlined /></p>
                    </div>
                    <div className="list-item">
                        <p>&#123; symbol &#125;</p>
                        <p>&#123; #shares &#125;</p>
                        <p><DownCircleOutlined /></p>
                    </div>
                    <div className="list-item">
                        <p>&#123; symbol &#125;</p>
                        <p>&#123; #shares &#125;</p>
                        <p><DownCircleOutlined /></p>
                    </div>

                </div>
            </div>
        );
    }
}

export default HoldingList;