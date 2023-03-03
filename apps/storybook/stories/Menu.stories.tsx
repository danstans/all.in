import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "shared";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/TextField",
  component: TextField,
  argTypes: {},
} satisfies Meta<typeof TextField>;

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
      <TextField>Primary TextField</TextField>
    </div>
  ),
};
