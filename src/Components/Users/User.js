import React, { Component } from 'react'
import './User.css'

class User extends Component {
  componentDidMount(){
    this.props.getUser(this.props.match.params.login)
  }
  render() {
    const{login,avatar_url,html_url,gists_url,location,blog,company,bio,hireable,followers,following,public_gists,public_repos,name}=this.props.user
    const{loading}=this.props;
    return (
      <div>
        {name}
      </div>
    )
  }
}


export default  User


