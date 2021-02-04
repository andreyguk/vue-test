export default {
    name: 'TextBoxControl',
    props: ['data', 'type', 'isTest'],
    data() {
        return {
            component: null,
        }
    },
    computed: {
        loader() {
            this.type = $("#pageType").val();
            let a = this.isTest;
            if (!this.type) {
                return null
            }
            return () => import(`./templates/${this.type}/text-box.vue`)
        },
    },
    mounted() {
        this.loader()
            .then(() => {
                this.component = () => this.loader()
            })
            .catch(() => {
                this.component = () => import(`./templates/default/text-box.vue`)
            })
    },
    methods: {
        testMethod() {

        }
    }

    
}

