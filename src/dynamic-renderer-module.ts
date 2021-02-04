import Vue from "vue";
import DynamicRendererWrapper from "./dynamic-renderer-wrapper.vue";

export class DynamicRenderModule {
  public init(elementID: string): void {
    let element = document.getElementById(elementID);

    let renderFn = elemCreationHelper => {
      let result = elemCreationHelper(DynamicRendererWrapper);
      return result;
    };

    let vueControl = new Vue({
      el: element,
      render: renderFn
    });
  }
}
