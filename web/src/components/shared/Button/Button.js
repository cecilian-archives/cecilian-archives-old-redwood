import tw, { styled } from "twin.macro";

const Button = ({ type, size, onClick, children }) => {
  return (
    <Root type={type} size={size} onClick={onClick}>
      {children}
    </Root>
  );
};

const Root = styled.button(({ type, size }) => {
  return [
    tw`relative hover:shadow-lg hover:-top-0.5
    font-body text-white
    rounded-md shadow-md
    focus:outline-none focus:ring-2 focus:ring-opacity-50`,
    size === "large"
      ? tw`py-2 px-6 text-lg md:text-base`
      : tw`py-2 px-4 text-base`,
    type === "primary" &&
      tw`bg-deepBlue border border-deepBlue
      hover:bg-deepBlue-105 focus:ring-deepBlue`,
    type === "secondary" &&
      tw`border border-brightYellow
      hover:bg-brightYellow focus:ring-brightYellow`,
  ];
});

export default Button;
