import styled from "styled-components"

const componentVariants = (theme) => ({
  primary: {
    color: "white",
    backgroundColor: theme.colors.orange,
    "&:hover": {
      backgroundColor: theme.colors.darkOrange,
    },
  },
  secondary: {
    color: theme.colors.orange,
    border: `2px solid ${theme.colors.orange}`,
    backgroundColor: "transparent",
    "&:hover": {
      color: theme.colors.darkOrange,
      border: `2px solid ${theme.colors.darkOrange}`,
    },
  },
})

const Container = styled.div`
  padding: 16px 24px;
  border-radius: 4px;
  width: fit-content;
  cursor: pointer;

  ${(props) => componentVariants(props.theme)[props.variant]}
`

const Button = (props) => {
  const { variant, size, children, onClick, ...others } = props

  return (
    <Container variant={variant} size={size} {...others} onClick={onClick}>
      {children}
    </Container>
  )
}

export default Button
