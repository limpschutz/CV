import React, { Component } from 'react';
import moment from 'moment';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio.replace('[age]', moment.duration((moment()).diff(new moment(this.props.data.birthday))).years()
      );
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Linus Petersson Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
