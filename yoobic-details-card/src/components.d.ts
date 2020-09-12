/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface YoobicDetailsCard {
        "image": string;
        "info": any[];
        "name": string;
    }
}
declare global {
    interface HTMLYoobicDetailsCardElement extends Components.YoobicDetailsCard, HTMLStencilElement {
    }
    var HTMLYoobicDetailsCardElement: {
        prototype: HTMLYoobicDetailsCardElement;
        new (): HTMLYoobicDetailsCardElement;
    };
    interface HTMLElementTagNameMap {
        "yoobic-details-card": HTMLYoobicDetailsCardElement;
    }
}
declare namespace LocalJSX {
    interface YoobicDetailsCard {
        "image"?: string;
        "info"?: any[];
        "name"?: string;
    }
    interface IntrinsicElements {
        "yoobic-details-card": YoobicDetailsCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "yoobic-details-card": LocalJSX.YoobicDetailsCard & JSXBase.HTMLAttributes<HTMLYoobicDetailsCardElement>;
        }
    }
}