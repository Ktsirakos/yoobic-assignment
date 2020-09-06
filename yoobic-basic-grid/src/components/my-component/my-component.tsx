import { Component, Prop, h } from '@stencil/core';
@Component({
  tag: 'yoobic-basic-grid',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  //Declaring main prop as array
  //Type any because the goal is to print
  //Numbers - Strings - Objects - mixed Arrays
  @Prop() array: any[]


  //Prop for letting the component know which field to display
  //if the array contains objects
  @Prop() display_key: string

  //Helper function for creating the list which will be displayed
  //Different function for Number-String and Objects needed!
  private outputList() {
    return this.array.map((d) => {
      return this.format(d)
    });
  }

  format(d: any): HTMLElement {
    let returnValue: any;
    if (typeof d ==  'number') {
      returnValue = "number";
      console.log("is Number");
    } else if (typeof d == 'string') {
      returnValue = "string";
      console.log("is String");
    } else {
      returnValue = "object";
      console.log("is Object");
    }

    return <li>{returnValue}</li>
  }

  render() {
    return (
      <div>
        <ul>
          {this.outputList()}
        </ul>
      </div>
    );
  }
}
