import { ToyReact, Component } from "./ToyReact.js"

class MyComponent extends Component{
    render() {
        return <div>
            <span>hello</span>
            <span>world</span>
            <div>
                {this.children}
            </div>
        </div>
    }
}

let a = <MyComponent name="a" id="sleepdevil">
    <div>123</div>asdasd
    <span></span>
</MyComponent>

ToyReact.render(a, document.body)