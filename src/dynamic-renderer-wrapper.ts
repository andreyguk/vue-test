import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import TextBoxControl from "./text-box/text-box.vue"
import TextBoxControl2 from "./text-box-2/text-box-2.vue"


export default class DynamicRendererWrapper extends Vue {

    public controls = this.createControls();

    private getData() {

        let fields = ["text-box", "text-box2"];

        return fields;
    }

    public createControls() {

        let fields = this.getData();

        let controls = [];

        for (let field in fields) {
            controls.push(this.createVueComponent(fields[field]));
        }

        return controls;
    }


    public createVueComponent(fieldName: string) {

        let renderFn: any = null;

        let mtProps = {
            'is-test': false
        };


        switch (fieldName) {
            case 'text-box':
                renderFn = (elemCreationHelper) => {
                    let result = elemCreationHelper(TextBoxControl, { props: mtProps });
                    return result;
                };
                break;
            case 'text-box2':
                renderFn = (elemCreationHelper) => {
                    let result = elemCreationHelper(TextBoxControl2, { props: mtProps });
                    return result;
                };
                break;
        }


        return renderFn;
    }

}
