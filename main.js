const h = React.createElement;

// dumb, presentational components (pure functions, stateless)
let Header = () =>
    h('div', {}, [
        h('h1', {}, [
            '🔥 SimpleSocial'
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

let Homepage = () =>
    h('div', {}, [
        h(Header),
        h(PostList),
    ]);

ReactDOM.render(h(Homepage), document.querySelector('.react-root'));