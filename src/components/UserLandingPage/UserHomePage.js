import React, { Component } from 'react';
import './UserLanding.css';
import QRScanner from './../UserInterface/qRScanner';
import BaseMap from '../Map/BaseMap';

// Single side view of User Tab -Tiana
class UserHomePage extends Component {


  render() {

    return (
      <div className="ui-home-main">

        <QRScanner />
        <BaseMap />
      </div>
    );
  }
}
export default UserHomePage;
// end Single side view of User Tab -Tiana