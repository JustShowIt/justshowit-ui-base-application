export default {
    props: {
        unit: {
            type: Object,
            required: true
        }
    },
    methods: {
        getComponentType () {
            const prefix = 'justshowme'
            return this.unit.type ? `${prefix}-${this.unit.type.toLowerCase()}` : `${prefix}-debug`
        },
        getOptions () {
            return this.unit.options ? this.unit.options : {}
        },
        hasUnits () {
          return (this.unit.hasUnits)
        }
    }
}