import React, { Component } from "react";
import PromptCard from "./PromptCard"
import { TextField } from "@material-ui/core";

class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    title: "Integer sit amet massa lobortis nulla rutrum.",
                    entries:
                        [
                            {
                                heading: 'Who was at the event?',
                                body: "My uncle, Dick went with me. There were, I'd say, a few hundred people there.There were craft and food stands littered around the grounds.In the middle, there were stands and a circle with a bunch of chairs for tribal elder seating.The emcee started the opening ceremony by recognizing all of the veterans, then people danced behind the elders as they went around in a circle.",
                                edit: false
                            },
                            {
                                heading: "Nunc quis iaculis nisl. Quisque ut tellus eleifend.",
                                body: "Sed a magna eu metus fermentum fringilla sit amet quis dui. Duis ultricies nibh eget tortor fringilla, sit amet lacinia ligula hendrerit. Etiam eros velit, fringilla et lacus sodales, ornare mollis augue. Pellentesque ornare velit massa, quis pharetra elit pharetra at. Maecenas condimentum, justo ac semper gravida, nunc nunc ullamcorper elit, id porta magna dui sodales lacus. Proin nec laoreet nisl. Sed nec quam fringilla, tempor justo vel, malesuada urna. Fusce commodo tincidunt posuere. Donec malesuada condimentum velit, ut mollis leo faucibus vel.",
                                edit: false
                            },
                            {
                                heading: "Nullam placerat consectetur vestibulum. Mauris tincidunt ligula nec.",
                                body: "Vivamus laoreet, turpis eget viverra venenatis, diam nibh commodo est, iaculis dignissim turpis mi vel felis. Nam sapien ante, ornare nec egestas id, varius et felis. Nam sit amet lacus molestie, malesuada neque vitae, placerat urna. Cras et tortor arcu. Cras quis diam libero. Praesent condimentum risus eget urna gravida, a auctor dui pulvinar. Fusce eget suscipit sapien. Nullam luctus egestas dolor, ac facilisis ex ultrices eu. Mauris id mattis purus, condimentum facilisis sapien. In sit amet lacus vel justo porta lobortis nec quis ipsum.",
                                edit: false
                            },
                            {
                            }

                        ],
                    active: false
                },
                {
                    title: "Lorem ipsum dolor sit amet.",
                    entries:
                        [
                            {
                                heading: 'Who was at the event?',
                                body: "My uncle, Dick went with me. There were, I'd say, a few hundred people there.There were craft and food stands littered around the grounds.In the middle, there were stands and a circle with a bunch of chairs for tribal elder seating.The emcee started the opening ceremony by recognizing all of the veterans, then people danced behind the elders as they went around in a circle.",
                                edit: false
                            },
                            {
                                heading: "Nunc quis iaculis nisl. Quisque ut tellus eleifend.",
                                body: "Sed a magna eu metus fermentum fringilla sit amet quis dui. Duis ultricies nibh eget tortor fringilla, sit amet lacinia ligula hendrerit. Etiam eros velit, fringilla et lacus sodales, ornare mollis augue. Pellentesque ornare velit massa, quis pharetra elit pharetra at. Maecenas condimentum, justo ac semper gravida, nunc nunc ullamcorper elit, id porta magna dui sodales lacus. Proin nec laoreet nisl. Sed nec quam fringilla, tempor justo vel, malesuada urna. Fusce commodo tincidunt posuere. Donec malesuada condimentum velit, ut mollis leo faucibus vel.",
                                edit: false
                            },
                            {
                                heading: "Nullam placerat consectetur vestibulum. Mauris tincidunt ligula nec.",
                                body: "Vivamus laoreet, turpis eget viverra venenatis, diam nibh commodo est, iaculis dignissim turpis mi vel felis. Nam sapien ante, ornare nec egestas id, varius et felis. Nam sit amet lacus molestie, malesuada neque vitae, placerat urna. Cras et tortor arcu. Cras quis diam libero. Praesent condimentum risus eget urna gravida, a auctor dui pulvinar. Fusce eget suscipit sapien. Nullam luctus egestas dolor, ac facilisis ex ultrices eu. Mauris id mattis purus, condimentum facilisis sapien. In sit amet lacus vel justo porta lobortis nec quis ipsum.",
                                edit: false
                            },
                        ],
                    active: false
                },
                {
                    title: "Integer porta massa nec urna tincidunt mollis. Fusce ultricies.",
                    entries:
                        [
                            {
                                heading: 'Who was at the event?',
                                body: "My uncle, Dick went with me. There were, I'd say, a few hundred people there.There were craft and food stands littered around the grounds.In the middle, there were stands and a circle with a bunch of chairs for tribal elder seating.The emcee started the opening ceremony by recognizing all of the veterans, then people danced behind the elders as they went around in a circle.",
                                edit: false
                            },
                            {
                                heading: "Nunc quis iaculis nisl. Quisque ut tellus eleifend.",
                                body: "Sed a magna eu metus fermentum fringilla sit amet quis dui. Duis ultricies nibh eget tortor fringilla, sit amet lacinia ligula hendrerit. Etiam eros velit, fringilla et lacus sodales, ornare mollis augue. Pellentesque ornare velit massa, quis pharetra elit pharetra at. Maecenas condimentum, justo ac semper gravida, nunc nunc ullamcorper elit, id porta magna dui sodales lacus. Proin nec laoreet nisl. Sed nec quam fringilla, tempor justo vel, malesuada urna. Fusce commodo tincidunt posuere. Donec malesuada condimentum velit, ut mollis leo faucibus vel.",
                                edit: false
                            },
                            {
                                heading: "Nullam placerat consectetur vestibulum. Mauris tincidunt ligula nec.",
                                body: "Vivamus laoreet, turpis eget viverra venenatis, diam nibh commodo est, iaculis dignissim turpis mi vel felis. Nam sapien ante, ornare nec egestas id, varius et felis. Nam sit amet lacus molestie, malesuada neque vitae, placerat urna. Cras et tortor arcu. Cras quis diam libero. Praesent condimentum risus eget urna gravida, a auctor dui pulvinar. Fusce eget suscipit sapien. Nullam luctus egestas dolor, ac facilisis ex ultrices eu. Mauris id mattis purus, condimentum facilisis sapien. In sit amet lacus vel justo porta lobortis nec quis ipsum.",
                                edit: false
                            },

                        ],
                    active: false
                }
            ]
        };
    }

    // Define function to be used when someone opens a post.
    toggleActive = (active) => active = !active;

    render() {
        return (
            this.state.posts.forEach(element => {


                // Checks to see if the journal entry is open. If not, it displays the list of entries.
                if (element.active === false) {
                    return (
                        <ul>
                            {this.state.posts.map((post) => (<li>{post.title}</li>))}
                        </ul>

                    )
                } else {
                    <PromptCard />
                }

            })
        )

    }
}



export default PostsPage;