const h = React.createElement;


let generateID = () =>
    Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

const initPosts = [
    {
        id: 1,
        user: 'theWebsiteKid',
        body: '⚡️ nobody cares'
    },
    {
        id: 2,
        user: 'nybblr',
        body: 'Landscapes!'
    },
    {
        id: 3,
        user: 'nat-sharpe',
        body: 'Hello Nordic!'
    },
    {
        id: 4,
        user: 'JamesBlake223',
        body: 'Musiq Souls change lives.'
    },
    {
        id: 5,
        user: 'ghostBusta99',
        body: 'who you gonna call?'
    },
];

// smart components (class, methods, stateful)
class Homepage extends React.Component {
    // es6 constructor
    constructor(props) {
        // super(props) gives us this.props = props
        super(props);
        // init app state
        this.state = {
            posts: initPosts
        };
    };
    
    render() {
        // actions
        let addPost = (newUser, newPost) => {
            this.setState({
                posts: this.state.posts.concat([
                    {
                        id: generateID(),
                        user: newUser,
                        body: newPost,
                    }
                ])
            });
        };
        // render to homepage
        return h('div', {},
            h(Header),
            h(PostForm, {addPost: addPost} ),
            h(PostList, { posts: this.state.posts }),
            h(Footer),
        );
    };
};

class PostForm extends React.Component {
    // es6 constructor
    constructor(props) {
        // super(props) gives us this.props = props
        super(props);
        // init app state
        this.state = {
            newUser: '',
            newPost: '',
        };
    };

    render() { 
        return h('div', { className: 'post-form' },
            h('form', {
                onSubmit: (event) => {
                    event.preventDefault();
                    this.props.addPost(this.state.newUser, this.state.newPost);
                    console.log('submit!');
                },
            },
                h('label', {},
                    'Name ',
                    h('input', { 
                        type: 'text',
                        value: this.state.newUser,
                        id: 'name',
                        name: 'name',
                        placeholder: 'Alex Smith',
                        required: 'required',
                        onChange: (event) => {
                            let value = event.target.value;
                            console.log(value);
                            this.setState({ newUser: value });
                        }
                    }),
                ),
                h('label', {},
                    'Message ',
                    h('input', {
                        type: 'text',
                        value: this.state.newPost,
                        id: 'msg',
                        name: 'msg',
                        placeholder: 'What\'s happening?',
                        required: 'required',
                        onChange: (event) => {
                            let value = event.target.value;
                            console.log(value);
                            this.setState({ newPost: value });
                        }
                    }),
                ),
                h('input', { 
                    type: 'submit',
                    value: 'Post',
                }),
            )
        );
    };
};

// dumb, presentational components (pure functions, stateless)
let Header = () =>
    h('div', { className: 'header' },
        h('h1', {},
            '🔥SimpleSocial',
        ),
    );
    
let PostList = props =>
    h('ul', { className: 'post-list' },
        props.posts.map(post => h(PostRow, {
            post,
            addPost: props.addPost,
        })).reverse(),
    );

let PostRow = props =>
    h('li', { className: 'post-list-item' },
        h('h3', {}, '@' + props.post.user + ': '),
        h('p', {}, props.post.body),
    );

let Footer = () =>
    h('div', { className: 'footer' },
        h('p', {},
            '© 2018 | ',
            h('a', { href: 'http://xavierduncan.com', target: '_blank' },
                'Crafted with ⚡️ by @theWebsiteKid'
            ),
        ),
    );   

ReactDOM.render(h(Homepage), document.querySelector('.react-root'));