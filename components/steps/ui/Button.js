import * as $ from "@/styles/components/steps/ui/Button.styled";

const Button = ({
  type,
  isVisible = true,
  isVisibleMobile = true,
  isVisibleTablet = true,
  handleClick,
  children,
}) => {
  const getTypeButton = (type) => {
    if (type === "darkColor") return $.DarkColorButton;
    if (type === "lightColor") return $.LightColorButton;

    return $.MainColorButton;
  };

  const TypeButton = getTypeButton(type);

  return (
    <TypeButton
      onClick={handleClick}
      $isVisible={isVisible}
      $isVisibleMobile={isVisibleMobile}
      $isVisibleTablet={isVisibleTablet}
    >
      {children}
    </TypeButton>
  );
};

export default Button;
