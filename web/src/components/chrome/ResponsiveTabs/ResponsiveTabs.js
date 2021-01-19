import tw, { styled } from "twin.macro";
import { motion, AnimatePresence } from "framer-motion";
import { navigate, routes } from "@redwoodjs/router";
// import useWindowWidth from "src/utils/useWindowWidth";

const ResponsiveTabs = ({ tabs, selectedTabId, topLevelRoute }) => {
  // const theme = useTheme();
  // const width = useWindowWidth();
  const isMobile = false; //width <= theme.archive.breakpoints.m;

  const handleTabClick = (tab) => () => {
    navigate(routes[topLevelRoute]({ tab: tab.id }));
  };

  const [selectedTab] = tabs.filter((tab) => tab.id === selectedTabId);

  return (
    <>
      <StyledTabs>
        {tabs.map((tab) => {
          const isSelected = tab.id === selectedTabId;
          return (
            <TabWrapper key={tab.id}>
              <StyledTab
                {...(tab.href && { href: tab.href, target: "_blank" })}
                onClick={handleTabClick(tab)}
                isSelected={isSelected}
                disabled={tab.disabled}
              >
                <TabInner>
                  <span>
                    <TabIcon type={tab.icon} />
                    {tab.name}
                  </span>
                  {isMobile && (
                    <div
                      data-migration="EuiIcon"
                      type={isSelected ? "" : "arrowDown"}
                    />
                  )}
                </TabInner>
              </StyledTab>
              {isMobile && (
                <Content
                  initial={{
                    height: 0,
                  }}
                  animate={{
                    height: isSelected ? "auto" : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <ContentWrapper>{tab.content}</ContentWrapper>
                </Content>
              )}
            </TabWrapper>
          );
        })}
      </StyledTabs>
      {!isMobile && (
        <AnimatePresence exitBeforeEnter>
          <Content
            key={selectedTabId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ContentWrapper>{selectedTab.content}</ContentWrapper>
          </Content>
        </AnimatePresence>
      )}
    </>
  );
};

const StyledTabs = styled.div`
  margin: ${({ theme }) => `${theme.euiSizeS} ${theme.euiSizeM} 0`};
  @media (max-width: ${({ theme }) => theme.euiBreakpoints}) {
    margin: 0;
    flex-direction: column;
  }
`;

const TabWrapper = styled.div`
  overflow: hidden;
`;

const StyledTab = styled.div`
  width: 100%;
  @media (max-width: ${({ theme }) => theme.euiBreakpoints}) {
    text-align: left;
  }
`;

const TabInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TabIcon = styled.div`
  margin-right: ${({ theme }) => theme.euiSizeS};
`;

const Content = styled(motion.div)``;

const ContentWrapper = styled.div`
  padding: ${({ theme }) => `${theme.euiSizeXL} ${theme.euiSizeL}`};
`;

export default ResponsiveTabs;