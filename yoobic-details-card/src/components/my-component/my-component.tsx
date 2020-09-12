import { Component, Prop, h } from '@stencil/core';
import 'yoobic-basic-grid'
@Component({
  tag: 'yoobic-details-card',
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
    console.log("yoobic-details-card loaded");
  }

  //Image prop for displaying on the card
  @Prop() image: string;

  //The name which is displayed as a layover the image
  @Prop() name: string;

  //Info which are displayed in the body
  @Prop() info: any[];

  render() {
    return <div class="box">
      {/* This will become an avatar component */}
      <div class="imgBox">
        <img alt="logo" src={this.image} />
        <p>{this.name}</p>
      </div>
      <yoobic-basic-grid array={this.info}></yoobic-basic-grid>
    </div>
  }
}
