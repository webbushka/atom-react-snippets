Atom React.js Snippets [![Build Status](https://travis-ci.org/webbushka/atom-react-snippets.svg?branch=master)](https://travis-ci.org/webbushka/atom-react-snippets)
====================================================================================================================================================================

An [Atom](https://atom.io/) snippet library for React. This library uses ES6 syntax, if you would prefer ES5 or Coffeescript snippets please use the [Atom React Package](https://atom.io/packages/react).

Install
-------

Go to `Packages > Settings View > Open` once in settings go to the Install tab and search for **react-snippets**

Restart Atom

Development
-----------

```sh
$ cd ~/.atom/packages
$ git clone https://github.com/webbushka/atom-react-snippets.git
$ cd atom-react-snippets
$ apm install
$ apm link
```

Snippets
--------

The **⇥** means the `TAB` key

| Trigger      | Content |
| -------:     | ------- |
| `i→`       | import empty |
| `ir→`      | import react |
| `irc→`     | import react and component |
| `irp→`     | import react and prop-types |
| `ipt→`     | import prop-types |
| `ircp→`    | import react, component and prop-types |
| `ird→`     | import react-dom |
| `irs→`     | import react and useState |
| `ire→`     | import react and useEffect |
| `irse→`    | import react, useState and useEffect |
| `ex→`      | export |
| `exd→`     | export default |
| `cdm→`     | `componentDidMount method` |
| `cwm→`     | `componentWillMount method` |
| `cwr→`     | `componentWillReceiveProps method` |
| `scu→`     | `shouldComponentUpdate method` |
| `cwup→`    | `componentWillUpdate method` |
| `cdup→`    | `componentDidUpdate method` |
| `cwun→`    | `componentWillUnmount method` |
| `cdc→`     | `componentDidCatch method` |
| `cx→`      | `cx` |
| `fup→`     | `forceUpdate` |
| `cct→`     | component contextTypes |
| `cpt→`     | component propTypes |
| `cdp→`     | component defaultProps |
| `scct→`    | static component contextTypes |
| `scpt→`    | static component propTypes |
| `scdp→`    | static component defaultProps |
| `cer→`     | class component skeleton |
| `rsc→`     | stateless component skeleton |
| `rscp→`    | stateless component skeleton with PropTypes |
| `rscr→`    | stateless component skeleton with explicit `return` |
| `rscc→`    | stateless component skeleton with `handleClick` |
| `rsf→`     | stateless function |
| `cdn→`     | component display name |
| `ren→`     | `render() method` |
| `sst→`     | `setState()` |
| `ust→`     | use state `const [x, setX] = useState()` |
| `props→`   | `this.props.` |
| `state→`   | `this.state.` |
| `rrc→`     | `React.render()` |
| `frag→`    | `<React.Fragment></React.Fragment>` |
| `cns→`     | `constructor method` |
| `clss→`    | class extends |
| `dnghtml→` | `dangerouslySetInnerHTML` |

In this version the PropTypes snippets prefix has changed to `_pt` instead of `rp`. All snippets have two versions to allow for required and not required types.

| Trigger  | Content |
| -------: | ------- |
| `pta→`   | `PropTypes.array,` |
| `ptar→`  | `PropTypes.array.isRequired,` |
| `ptb→`   | `PropTypes.bool,` |
| `ptbr→`  | `PropTypes.bool.isRequired,` |
| `ptf→`   | `PropTypes.func,` |
| `ptfr→`  | `PropTypes.func.isRequired,` |
| `ptn→`   | `PropTypes.number,` |
| `ptnr→`  | `PropTypes.number.isRequired,` |
| `pto→`   | `PropTypes.object.,` |
| `ptor→`  | `PropTypes.object.isRequired,` |
| `pts→`   | `PropTypes.string,` |
| `ptsr→`  | `PropTypes.string.isRequired,` |
| `ptnd→`  | `PropTypes.node,` |
| `ptndr→` | `PropTypes.node.isRequired,` |
| `ptel→`  | `PropTypes.element,` |
| `ptelr→` | `PropTypes.element.isRequired,` |
| `pti→`   | `PropTypes.instanceOf(ClassName),` |
| `ptir→`  | `PropTypes.instanceOf(ClassName).isRequired,` |
| `pte→`   | `PropTypes.oneOf(['News', 'Photos']),` |
| `pter→`  | `PropTypes.oneOf(['News', 'Photos']).isRequired,` |
| `ptet→`  | `PropTypes.oneOfType([PropTypes.string, PropTypes.number]),` |
| `ptetr→` | `PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,` |
| `ptao→`  | `PropTypes.arrayOf(PropTypes.number),` |
| `ptaor→` | `PropTypes.arrayOf(PropTypes.number).isRequired,` |
| `ptoo→`  | `PropTypes.objectOf(PropTypes.number),` |
| `ptoor→` | `PropTypes.objectOf(PropTypes.number).isRequired,` |
| `ptsh→`  | `PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}),` |
| `ptshr→` | `PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}).isRequired,` |

Contributing
------------

1.	Fork it!
2.	Create your feature branch: `git checkout -b my-new-feature`
3.	Commit your changes: `git commit -m 'Add some feature'`
4.	Push to the branch: `git push origin my-new-feature`
5.	Submit a pull request

License
-------

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha

Credit
------

The React.js snippets were originally created by [orktes](https://atom.io/users/orktes) in [Atom React](https://atom.io/packages/react) in ES5 syntax.
