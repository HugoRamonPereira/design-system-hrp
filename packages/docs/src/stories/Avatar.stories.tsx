import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@design-system/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/HugoRamonPereira.png',
    alt: 'HRP Dev',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
