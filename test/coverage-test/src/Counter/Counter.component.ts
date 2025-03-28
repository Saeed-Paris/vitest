import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Counter',

  setup() {
    const count = ref(0)
    return { count }
  },

  methods: {
    uncoveredMethod() {
      return 'This line should not be covered'
    },

    coveredMethod() {
      return 'This line should be covered'
    },
  },
})

