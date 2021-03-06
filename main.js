const h = React.createElement;

// generate random ID number to string
let generateID = () =>
    Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

// list of initial posts
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

// smart components (classes, methods, stateful)
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
        // render to homepage component
        return (
            <div>
                <Header/>
                <PostForm addPost={addPost}/>
                <PostList posts={this.state.posts}/>
                <Footer/>
            </div>
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
        // render to post form component
        return h('div', {},
            h('form', {
                onSubmit: (event) => {
                    event.preventDefault();
                    this.props.addPost(this.state.newUser, this.state.newPost);
                    this.state.newUser = '';
                    this.state.newPost = '';
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
    <div className='header'>
        <h1>🔥SimpleSocial</h1>
    </div>;
    
let PostList = props =>
    <ul className='post-list'>
        { props.posts.map(post => h(PostRow, {
            post,
            addPost: props.addPost,
            key: post.id
        })).reverse() }
    </ul>;

let PostRow = props =>
    <li className='post-list-item'>
        <h3>{'@' + props.post.user + ': '}</h3>
        <p>{props.post.body}</p>
    </li>;

let Footer = () =>
    <div className='footer'>
        <p>
            © 2018 | &nbsp;
            <a href='http://xavierduncan.com' target='_blank'>
                Crafted with ⚡️ by @theWebsiteKid
            </a>
        </p>
    </div>;   

// render entire Homepage to root div in index.html
ReactDOM.render(<Homepage/>, document.querySelector('.react-root'));