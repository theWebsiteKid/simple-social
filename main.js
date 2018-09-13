const h = React.createElement;

// dumb, presentational components (pure functions, stateless)
let Header = () =>
    h('div', {}, [
        h('h1', {}, [
            '🔥 SimpleSocial'
        ])
    ]);

let Homepage = () =>
    h('div', {}, [
        h(Header)
    ]);

ReactDOM.render(h(Homepage), document.querySelector('.react-root'));