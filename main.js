const h = React.createElement;

let Homepage = () =>
    h('h1', {}, [
        'Homepage works!'
    ]);

ReactDOM.render(h(Homepage), document.querySelector('.react-root'));