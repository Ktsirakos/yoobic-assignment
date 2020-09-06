import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
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
    
  }

  render() {
    return (
      <div>
        {this.outputList}
      </div>
    );
  }
}
