import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from './TextField';

export class PostsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      password: "pa55WOrd",
    }
  }

  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     body: value
  //   });
  // }

  render() {
    const { classes } = this.props;
          // Should be in return statement. Couldn't figure out another way to comment this out. <form className={classes.container} noValidate autoComplete="off">

    return (
      // TextField.state.posts.map((post) => (
      //   <div>
      //     <h1>{post.title}</h1>
      //     <form noValidate autoComplete="off">
            <TextField />
      //     </form>
      //   </div>
      // )

    )
  }
}


export default PostsPage;