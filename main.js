const h = React.createElement;

const initPosts = [
    {
        id: 1,
        name: '@theWebsiteKid',
        msg: 'Hello World!'
    },
    {
        id: 2,
        name: '@nybblr',
        msg: 'Hello Landscapes!'
    },
    {
        id: 3,
        name: '@nat-sharpe',
        msg: 'Hello Nordic!'
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
        let addPost = (postToList) => {
            this.setState({
                posts: this.state.posts.map(post => post.id !== postToList.id)
            });
        };
        // render to homepage
        return h('div', {},
            h(Header),
            h(PostForm),
            h(PostList, {
                posts: this.state.posts,
                addPost: addPost,
            }),
            h(Footer),
        );
    };
};

// dumb, presentational components (pure functions, stateless)
let Header = () =>
    h('div', {},
        h('h1', {},
            '🔥SimpleSocial',
        ),
    );

let PostForm = props =>
    h('form', {},
        h('label', {},
            'Name ',
            h('input', { 
                type: 'text',
                id: 'name',
                name: 'name',
                placeholder: 'Alex Smith',
                required: 'required'
            }),
        ),
        h('label', {},
            'Message ',
            h('input', {
                type: 'text',
                id: 'msg',
                name: 'msg',
                placeholder: 'What\'s happening?',
                required: 'required'
            }),
        ),
        h('button', { 
            type: 'submit',
            onClick: () => {
                props.addPost(props.post);
            },
        },
            'Post'
        ),
    );

let PostList = () =>
    h('div', {},
        h('h2', {},
            'PostList works!'
        ),
        h(PostRow),
        h(PostRow),
        h(PostRow),
    );

let PostRow = () =>
    h('div', {}, 
        h('p', {},
            'PostRow works!'
        ),
    );

let Footer = () =>
    h('div', {},
        h('p', {},
            '© 2018 | ',
            h('a', { href: 'http://xavierduncan.com', target: '_blank' },
                'Crafted with ⚡️ by @theWebsiteKid'
            ),
        ),
    );   

ReactDOM.render(h(Homepage), document.querySelector('.react-root'));