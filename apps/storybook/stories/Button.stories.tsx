import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "shared";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: ({ onClick }) => (
    <div
      style={{
        display: "flex",
        gap: "16px",
      }}
    >
      <Button variant="primary" onClick={onClick}>
        Primary button
      </Button>
      <Button variant="secondary" onClick={onClick}>
        Secondary button
      </Button>
      <Button variant="text" onClick={onClick}>
        Text button
      </Button>
    </div>
  ),
};
