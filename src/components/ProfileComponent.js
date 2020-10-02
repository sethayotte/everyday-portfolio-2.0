import React from "react";
import profile from "../shared/profile.png";
import { Button} from 'antd';

class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Profile</h1>

        <div className="profile-header">
          <img src={profile} alt="profile" height="100" />
          <div>
            <h1>Seth Mitchell</h1>
            <h4>seth@email.com</h4>
          </div>
        </div>
        <div className="general">
        <h4>General</h4>
        <div className="general-sections">
            <div>
                <h3>Name</h3>
                <h3>Email</h3>
            </div>
            <div>
                <h3>Notifications</h3>
                <h3>Light/Dark Mode</h3>
            </div>
        </div>
        </div>
        <div className="security">
        <h4>Security</h4> 
        <div>
                <h3>Last Login</h3>
                <h3>Password</h3>
            </div>
        </div>
        <Button className="form-button" type="primary">Logout</Button>
      </React.Fragment>
    );
  }
}

export default Profile;
