import React from "react";
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: auto,
  },
  menu: {
    width: auto,
  },
});

export class PostsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      password: "pa55WOrd",
      posts: [
        {
          title: "Post 1 of 3",
          sections: [
            {
              heading: 'Section 1 of 3',
              body: "My uncle, Dick went with me. There were, I'd say, a few hundred people there.There were craft and food stands littered around the grounds.In the middle, there were stands and a circle with a bunch of chairs for tribal elder seating.The emcee started the opening ceremony by recognizing all of the veterans, then people danced behind the elders as they went around in a circle."
            },
            {
              heading: "Section 2 of 3",
              body: "Sed a magna eu metus fermentum fringilla sit amet quis dui. Duis ultricies nibh eget tortor fringilla, sit amet lacinia ligula hendrerit. Etiam eros velit, fringilla et lacus sodales, ornare mollis augue. Pellentesque ornare velit massa, quis pharetra elit pharetra at. Maecenas condimentum, justo ac semper gravida, nunc nunc ullamcorper elit, id porta magna dui sodales lacus. Proin nec laoreet nisl. Sed nec quam fringilla, tempor justo vel, malesuada urna. Fusce commodo tincidunt posuere. Donec malesuada condimentum velit, ut mollis leo faucibus vel."
            },
            {
              heading: "Section 3 of 3",
              body: "Vivamus laoreet, turpis eget viverra venenatis, diam nibh commodo est, iaculis dignissim turpis mi vel felis. Nam sapien ante, ornare nec egestas id, varius et felis. Nam sit amet lacus molestie, malesuada neque vitae, placerat urna. Cras et tortor arcu. Cras quis diam libero. Praesent condimentum risus eget urna gravida, a auctor dui pulvinar. Fusce eget suscipit sapien. Nullam luctus egestas dolor, ac facilisis ex ultrices eu. Mauris id mattis purus, condimentum facilisis sapien. In sit amet lacus vel justo porta lobortis nec quis ipsum."
            }
          ]
        },
        {
          title: "Post 2 of 3",
          sections: [
            {
              heading: "Section 1 of 3",
              body: "My uncle, Dick went with me. There were, I'd say, a few hundred people there.There were craft and food stands littered around the grounds.In the middle, there were stands and a circle with a bunch of chairs for tribal elder seating.The emcee started the opening ceremony by recognizing all of the veterans, then people danced behind the elders as they went around in a circle."
            },
            {
              heading: "Section 2 of 3",
              body: "Sed a magna eu metus fermentum fringilla sit amet quis dui. Duis ultricies nibh eget tortor fringilla, sit amet lacinia ligula hendrerit. Etiam eros velit, fringilla et lacus sodales, ornare mollis augue. Pellentesque ornare velit massa, quis pharetra elit pharetra at. Maecenas condimentum, justo ac semper gravida, nunc nunc ullamcorper elit, id porta magna dui sodales lacus. Proin nec laoreet nisl. Sed nec quam fringilla, tempor justo vel, malesuada urna. Fusce commodo tincidunt posuere. Donec malesuada condimentum velit, ut mollis leo faucibus vel."
            },
            {
              heading: "Section 3 of 3",
              body: "Vivamus laoreet, turpis eget viverra venenatis, diam nibh commodo est, iaculis dignissim turpis mi vel felis. Nam sapien ante, ornare nec egestas id, varius et felis. Nam sit amet lacus molestie, malesuada neque vitae, placerat urna. Cras et tortor arcu. Cras quis diam libero. Praesent condimentum risus eget urna gravida, a auctor dui pulvinar. Fusce eget suscipit sapien. Nullam luctus egestas dolor, ac facilisis ex ultrices eu. Mauris id mattis purus, condimentum facilisis sapien. In sit amet lacus vel justo porta lobortis nec quis ipsum."
            }
          ]
        },
        {
          title: "Post 3 of 3.",
          sections: [
            {
              heading: 'Section 1 of 3',
              body: "My uncle, Dick went with me. There were, I'd say, a few hundred people there.There were craft and food stands littered around the grounds.In the middle, there were stands and a circle with a bunch of chairs for tribal elder seating.The emcee started the opening ceremony by recognizing all of the veterans, then people danced behind the elders as they went around in a circle.",
            },
            {
              heading: "Section 2 of 3",
              body: "Sed a magna eu metus fermentum fringilla sit amet quis dui. Duis ultricies nibh eget tortor fringilla, sit amet lacinia ligula hendrerit. Etiam eros velit, fringilla et lacus sodales, ornare mollis augue. Pellentesque ornare velit massa, quis pharetra elit pharetra at. Maecenas condimentum, justo ac semper gravida, nunc nunc ullamcorper elit, id porta magna dui sodales lacus. Proin nec laoreet nisl. Sed nec quam fringilla, tempor justo vel, malesuada urna. Fusce commodo tincidunt posuere. Donec malesuada condimentum velit, ut mollis leo faucibus vel.",
            },
            {
              heading: "Section 3 of 3",
              body: "Vivamus laoreet, turpis eget viverra venenatis, diam nibh commodo est, iaculis dignissim turpis mi vel felis. Nam sapien ante, ornare nec egestas id, varius et felis. Nam sit amet lacus molestie, malesuada neque vitae, placerat urna. Cras et tortor arcu. Cras quis diam libero. Praesent condimentum risus eget urna gravida, a auctor dui pulvinar. Fusce eget suscipit sapien. Nullam luctus egestas dolor, ac facilisis ex ultrices eu. Mauris id mattis purus, condimentum facilisis sapien. In sit amet lacus vel justo porta lobortis nec quis ipsum.",
            },
          ],
        }
      ]
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    function toggleAuth() {
      return (this.state.auth ? this.state.auth.setState = true : this.state.auth.setState = false);
    }
    

    listPosts = this.state.posts.map((post) => (
      <div>
        <h1>{post.title}</h1>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            name="Section 1"
            label={post.sections[0].heading}
            multiline
            value={post.sections[0].body}
            onChange={this.handleInputChange(value)}
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
  
          />
          <TextField
            name="Section 2"
            label={post.sections[1].heading}
            multiline
            value={post.sections[1].body}
            onChange={this.handleInputChange(value)}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            name="Section 3"
            label={post.sections[2].heading}
            multiline
            value={post.sections[2].body}
            onChange={this.handleInputChange(value)}
            className={classes.textField}
            margin="normal"
          />
        </form>
      </div>
    )
    )
  }
}


export default PostsPage;