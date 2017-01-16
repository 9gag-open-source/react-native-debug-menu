# react-native-debug-menu

For you to access your own app debug settings quickly

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Preview
![Flat Mode](./docs/demo1.png)
![Flat Mode](./docs/demo2.png)

## Usage

```javascript
import DebugMenu from 'react-native-debug-menu'

class MyApp extends React.Component {
    constructor (props) {
        this.actions = [
            { title: 'Debug item 1', action: () => { console.log('Awesome') }, keepMenuOnAction: true },
            { title: 'Debug item 2', action: this.debugOption2 }
        ]
    }
    
    debugOption2 = () => {
        console.log('Hello Debug Item 2')
    }

    render () {
        return (
            <DebugMenu 
              actionItems={this.actions}
            />
        )
    }
}
```