import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});

class TextFields extends React.Component {
    state = {

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

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        console.log("TextField's State " + this.state);

        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="multiline-0-0"
                    label="Read Only"
                    multiline
                    defaultValue={this.state.posts[0].sections[0].body}
                    className={classes.textField}
                    onChange={this.handleChange('multiline')}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="multiline-0-1"
                    label="Read Only"
                    multiline
                    defaultValue={this.state.posts[0].sections[1].body}
                    className={classes.textField}
                    onChange={this.handleChange('multiline')}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="multiline-0-2"
                    label="Read Only"
                    multiline
                    defaultValue={this.state.posts[0].sections[2].body}
                    className={classes.textField}
                    onChange={this.handleChange('multiline')}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
