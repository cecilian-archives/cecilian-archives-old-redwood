import { useState } from "react";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { navigate, routes } from "@redwoodjs/router";
import { EuiIcon, EuiTabs, EuiTab } from "@elastic/eui";
import useWindowWidth from "src/utils/useWindowWidth";

const ResponsiveTabs = ({ tabs, selectedTabId, topLevelRoute }) => {
  const theme = useTheme();
  const width = useWindowWidth();
  const isMobile = width <= theme.archive.breakpoints.m;

  const [expanded, setExpanded] = useState(false);
  const toggleExpansion = () => setExpanded((prev) => !prev);
  const handleTabClick = (tab) => () => {
    navigate(routes[topLevelRoute]({ tab: tab.id }));
    setExpanded(false);
  };

  return (
    <StyledTabs>
      {tabs.map((tab) => {
        const isSelected = tab.id === selectedTabId;
        return (
          <TabWrapper
            key={tab.id}
            animate={{
              height: !isMobile || isSelected || expanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <StyledTab
              {...(tab.href && { href: tab.href, target: "_blank" })}
              onClick={isSelected ? toggleExpansion : handleTabClick(tab)}
              isSelected={isSelected}
              disabled={tab.disabled}
            >
              <TabInner>
                <span>
                  <TabIcon type={tab.icon} />
                  {tab.name}
                </span>
                {isMobile && isSelected && (
                  <EuiIcon type={expanded ? "arrowUp" : "arrowDown"} />
                )}
              </TabInner>
            </StyledTab>
          </TabWrapper>
        );
      })}
    </StyledTabs>
  );
};

const StyledTabs = styled(EuiTabs)`
  @media (max-width: ${({ theme }) => theme.euiBreakpoints.m}) {
    flex-direction: column;
  }
`;

const TabWrapper = styled(motion.div)`
  overflow: hidden;
`;

const StyledTab = styled(EuiTab)`
  width: 100%;
  @media (max-width: ${({ theme }) => theme.euiBreakpoints.m}) {
    text-align: left;
  }
`;

const TabInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TabIcon = styled(EuiIcon)`
  margin-right: ${({ theme }) => theme.euiSizeS};
`;

export default ResponsiveTabs;
