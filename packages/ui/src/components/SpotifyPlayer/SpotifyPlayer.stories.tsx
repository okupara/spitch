import React from "react"
import { SpotifyPlayer } from "./SpotifyPlayer"
import { ComponentStory } from "@storybook/react"

export default {
  title: "SpotifyPlayer",
  component: SpotifyPlayer,
  argTypes: {
    albumId: { control: "text" },
  },
}

const Template: ComponentStory<typeof SpotifyPlayer> = (args) => (
  <SpotifyPlayer {...args} />
)
export const Primary = Template.bind({})

Primary.args = {
  albumId: "4fVlWLVmla38amXXsLgNwN",
}
