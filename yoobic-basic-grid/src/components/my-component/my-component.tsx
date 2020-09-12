import { Component, Prop, h } from '@stencil/core';
@Component({
  tag: 'yoobic-basic-grid',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  container: HTMLElement;
  window: Window | any;
  document: Document | any;
  root: Element | any;
  _element: any;


  async componentWillLoad() {
    this.window = window;
  }
  componentDidLoad() {
    console.log("yoobic-basic-grid loaded");
  }

  //Declaring main prop as array
  //Type any because the goal is to print
  //Numbers - Strings - Objects - mixed Arrays
  @Prop() array: any[]


  //Prop for letting the component know which field to display
  //if the array contains objects
  @Prop() display_key: string

  //   Helper function for creating the list which will be displayed
  // Different function for Number - String and Objects needed!
  private outputList() {
    return this.array.map((d) => {
      return this.format(d)
    });
  }

  format(d: any): HTMLElement {
    let returnValue: any;
    if (typeof d == 'number' || typeof d == 'string') {
      returnValue = d;
    } else {
      if (this.display_key) {
        returnValue = d[this.display_key];
      } else {
        returnValue = (
          <ul>
            {Object.keys(d).map(elem => <li>{elem} : {d[elem]}</li>)}
          </ul>
        )
      }
    }

    return returnValue
  }

  render() {
    return (
      <div class="yoobic-basic-grid-container">
        {this.outputList()}
      </div>
    );
  }
}
