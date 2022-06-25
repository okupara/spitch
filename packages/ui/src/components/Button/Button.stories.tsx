import React from "react"
import { Button } from "./Button"
import { ComponentStory } from "@storybook/react"

export default {
  title: "SpitchButton",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
export const Primary = Template.bind({})

Primary.args = {
  children: "hogehogefugafuga",
}
