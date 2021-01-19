import tw, { styled } from "twin.macro";
import ChromeLayout from "src/layouts/ChromeLayout/ChromeLayout";

const PageLayout = ({ headerTitle, children, minimalChrome, noPadding }) => {
  return (
    <ChromeLayout headerTitle={headerTitle} minimal={minimalChrome}>
      <div>
        <div component="div">
          <PageContent noPadding={noPadding}>{children}</PageContent>
        </div>
      </div>
    </ChromeLayout>
  );
};

const PageContent = styled.div(({ noPadding }) => [
  noPadding ? tw`p-0` : tw`p-4`,
]);

export default PageLayout;
