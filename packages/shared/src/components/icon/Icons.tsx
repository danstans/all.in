import {
  Calendar,
  Clock,
  Locate,
  Menu,
  MoreHorizontal,
  Plus,
  Star,
  Trash2,
} from "lucide-react";

const IconsMap = {
  Calendar,
  Star,
  Trash2,
  Locate,
  Plus,
  Clock,
  Menu,
  MoreHorizontal,
};

type IconsMapType = keyof typeof IconsMap;

export type IconType = {
  icon: IconsMapType;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: string;
};

export const Icon = ({ icon, size = "md", color }: IconType) => {
  const Component = IconsMap[icon];

  const sizeMap = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
  };

  return <Component color={color} size={sizeMap[size]} />;
};
