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
  @Prop() array: any[] = undefined


  //Prop for letting the component know which field to display
  //if the array contains objects
  @Prop() display_key: string = undefined

  //Helper function for creating the list which will be displayed
  //Different function for Number-String and Objects needed!
  private outputList() {
    let data = [
      "10", "20", "30", "40"
    ]

    return data.map((d) => <li key={d}>{d}</li>);
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
