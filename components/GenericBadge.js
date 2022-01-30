import styled, { useTheme } from "styled-components";

const Badge = styled.span`
  width: fit-content;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => props.variant};
  border: 1px solid
    ${(props) =>
      props.variant === props.theme.colors.text80
        ? props.theme.colors.text60
        : props.variant};
  border-radius: 6px;
  padding: 4px 6px;
  font-weight: bold;
  text-align: center;
`;

export const GenericBadge = ({ variant, children, onClick, ...other }) => {
  const theme = useTheme();

  const getBadgeVariant = (variant) => {
    switch (variant) {
      case "purple":
        return theme.colors.purple;
      case "orange":
        return theme.colors.orange;
      case "yellow":
        return theme.colors.yellow;
      case "purpleDark":
        return theme.colors.purpleDark;
      case "purpleLight":
        return theme.colors.purpleLight;
      case "text80":
        return theme.colors.text80;
      case "text20":
        return theme.colors.text20;
      default:
        return variant;
    }
  };

  return (
    <Badge variant={getBadgeVariant(variant)} onClick={onClick} {...other}>
      {children}
    </Badge>
  );
};
