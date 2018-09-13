const h = React.createElement;

const initPosts = [
    {
        id: 1,
        name: 'theWebsiteKid',
        msg: '⚡️ nobody cares'
    },
    {
        id: 2,
        name: 'nybblr',
        msg: 'Landscapes!'
    },
    {
        id: 3,
        name: 'nat-sharpe',
        msg: 'Hello Nordic!'
    },
    {
        id: 4,
        name: 'JamesBlake223',
        msg: 'Musiq Souls change lives.'
    },
    {
        id: 5,
        name: 'ghostBusta99',
        msg: 'who you gonna call?'
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
    h('form', {
        onSubmit: (event) => {
            event.preventDefault();
            console.log('submit!');
        },
    },
        h('label', {},
            'Name ',
            h('input', { 
                type: 'text',
                id: 'name',
                name: 'name',
                placeholder: 'Alex Smith',
                required: 'required',
                onChange: (event) => {
                    let value = event.target.value;
                    console.log(value);
                }
            }),
        ),
        h('label', {},
            'Message ',
            h('input', {
                type: 'text',
                id: 'msg',
                name: 'msg',
                placeholder: 'What\'s happening?',
                required: 'required',
                onChange: (event) => {
                    let value = event.target.value;
                    console.log(value);
                }
            }),
        ),
        h('input', { 
            type: 'submit',
            value: 'Post',
        }),
    );

let PostList = props =>
    h('ul', { className: 'post-list' },
        props.posts.map(post => h(PostRow, {
            post,
            addPost: props.addPost,
        })),
    );

let PostRow = props =>
    h('li', { className: 'post-list-item' },
        h('h3', {}, '@' + props.post.name + ': '),
        h('p', {}, props.post.msg),
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