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
]

// smart components (class, methods, stateful)
class Homepage extends React.Component {
    // es6 constructor
    constructor(props) {
        // super(props) gives us this.props = props
        super(props);
        // init app state
        this.state = [
            
        ]
    }
    // render to homepage
    render() {
        return h('div', {}, [
            h(Header),
            h(PostForm),
            h(PostList),
            h(Footer),
        ]);
    };
};

// dumb, presentational components (pure functions, stateless)
let Header = () =>
    h('div', {}, [
        h('h1', {}, [
            '🔥SimpleSocial'
        ]),
    ]);

let PostForm = () =>
    h('form', {}, [
        h('label', { for: 'name' }, [
            'Name ',
            h('input', { 
                type: 'text',
                id: 'name',
                name: 'name',
                placeholder: 'Alex Smith' 
            }),
        ]),
        h('label', { for: 'msg' }, [
            'Message ',
            h('input', {
                type: 'text',
                id: 'msg',
                name: 'msg',
                placeholder: 'What\'s happening?'
            }),
        ]),
        h('button', { type: 'submit' }, [
            'Post'
        ]),
    ]);

let PostList = () =>
    h('div', {}, [
        h('h2', {}, [
            'PostList works!'
        ]),
        h(PostRow),
        h(PostRow),
        h(PostRow),
    ]);

let PostRow = () =>
    h('div', {}, [
        h('p', {}, [
            'PostRow works!'
        ]),
    ]);

let Footer = () =>
    h('div', {}, [
        h('p', {}, [
            '© 2018 | ',
            h('a', { href: 'http://xavierduncan.com', target: '_blank' }, [
                'Crafted with ⚡️ by @theWebsiteKid'
            ]),
        ]),
    ]);   

ReactDOM.render(h(Homepage), document.querySelector('.react-root'));