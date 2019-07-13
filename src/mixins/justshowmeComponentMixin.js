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
            return this.unit && this.unit.type ? `${prefix}-${this.unit.type.toLowerCase()}` : `${prefix}-debug`
        },
        getOptions () {
            return this.unit.options ? this.unit.options : {}
        },
        hasOptions () {
            return this.getOptions().length ? true : false
        },
        hasUnits () {
          return (this.unit.hasUnits)
        }
    }
}