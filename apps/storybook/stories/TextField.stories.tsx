import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "shared";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Menu",
  component: Menu,
  argTypes: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
      }}
    >
      <Menu>Primary Menu</Menu>
      <Menu>Secondary Menu</Menu>
      <Menu>Text Menu</Menu>
    </div>
  ),
};
