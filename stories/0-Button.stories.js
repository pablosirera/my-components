import TheButton from '../src/components/TheButton.vue'

export default {
  title: 'Button',
  component: TheButton
}

export const primaryTheme = () => ({
  components: { TheButton },
  template: '<TheButton>with text</TheButton>'
})

export const secondaryTheme = () => ({
  components: { TheButton },
  template: '<TheButton theme="secondary">with text</TheButton>'
})

export const withText = () => ({
  components: { TheButton },
  template: '<TheButton>with text</TheButton>'
})

export const withEmoji = () => ({
  components: { TheButton },
  template: '<TheButton>😀 😎 👍 💯</TheButton>'
})
