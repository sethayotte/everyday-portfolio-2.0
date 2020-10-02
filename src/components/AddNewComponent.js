import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import AddNewForm from "./AddNewPositionFormComponent";
import { Tooltip } from "antd";

class AddNew extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="portfolio-header">
          <h1>Add New</h1>
          <Link to="/portfolio">
            <Tooltip placement="right" title="Return to Portfolio">
              <PlusCircleOutlined className="close-button" />
            </Tooltip>
          </Link>
        </div>
        <div>
          <AddNewForm />
        </div>
      </React.Fragment>
    );
  }
}

export default AddNew;
