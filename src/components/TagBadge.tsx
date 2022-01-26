import { Tag, TagProps } from "antd";
import Color from "color";

export interface TagBadgeProps extends TagProps {}

function TagBadge({ children, color, ...rest }: TagBadgeProps) {
  const hexaColorPattern = /^#[a-f0-9]{3,8}$/gi;
  // const colorHandler = Color(color);

  const borderColor = Color(color)
    .darken(0.05)
    .saturate(-0.1)
    .hsl()
    .string();

  console.log(borderColor);

  if (hexaColorPattern.test(color || "")) {
    return (
      <Tag
        style={{
          borderColor: borderColor,
          color: Color(color).isLight() ? "black" : "white",
        }}
        color={color}
        {...rest}
      >
        {children}
      </Tag>
    );
  }

  return <Tag {...rest}>{children}</Tag>;
}

export default TagBadge;
