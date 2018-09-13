const h = React.createElement;

// dumb, presentational components (pure functions, stateless)
let Header = () =>
    h('div', {}, [
        h('h1', {}, [
            '🔥SimpleSocial'
        ]),
    ]);

let PostForm = () =>
    h('div', {}, [
        h('form', {}, [
            h('div', {}, [
                h('label', { for: 'name' }, [
                    'Name '
                ]),
                h('input', { 
                    type: 'text',
                    id: 'name',
                    name: 'name',
                    placeholder: 'Alex Smith' 
                }),
            ]),
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
                'Crafter with ⚡️ by @theWebsiteKid'
            ]),
        ]),
    ]);

let Homepage = () =>
    h('div', {}, [
        h(Header),
        h(PostForm),
        h(PostList),
        h(Footer),
    ]);

ReactDOM.render(h(Homepage), document.querySelector('.react-root'));