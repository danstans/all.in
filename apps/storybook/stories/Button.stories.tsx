import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "shared";

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
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)",
        gap: "32px",
      }}
    >
      <Button variant="primary/filled" onClick={onClick}>
        primary filled button
      </Button>
      <Button variant="primary/light" onClick={onClick}>
        primary light button
      </Button>
      <Button variant="primary/outline" onClick={onClick}>
        primary outline button
      </Button>
      <Button variant="primary/text" onClick={onClick}>
        primary text button
      </Button>

      <Button variant="secondary/filled" onClick={onClick}>
        secondary filled button
      </Button>
      <Button variant="secondary/light" onClick={onClick}>
        secondary light button
      </Button>
      <Button variant="secondary/outline" onClick={onClick}>
        secondary outline button
      </Button>
      <Button variant="secondary/text" onClick={onClick}>
        secondary text button
      </Button>

      <Button variant="warning/filled" onClick={onClick}>
        Warning button
      </Button>
      <Button variant="warning/light" onClick={onClick}>
        Warning button
      </Button>
      <Button variant="warning/outline" onClick={onClick}>
        Warning button
      </Button>
      <Button variant="warning/text" onClick={onClick}>
        Warning button
      </Button>

      <Button variant="danger/filled" onClick={onClick}>
        Danger button
      </Button>
      <Button variant="danger/light" onClick={onClick}>
        Danger button
      </Button>
      <Button variant="danger/outline" onClick={onClick}>
        Danger button
      </Button>
      <Button variant="danger/text" onClick={onClick}>
        Danger button
      </Button>
    </div>
  ),
};
