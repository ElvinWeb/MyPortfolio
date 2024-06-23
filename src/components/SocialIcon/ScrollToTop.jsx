import { Tooltip } from "@mui/material";
import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { StyledIconButton, StyledArrowIcon } from "./SocialIconElements";

function ScrollToTop() {
  const [open, setOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const handleClick = () => {
    setOpen(false);
    scroll.scrollToTop({ duration: 0 });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 500;
      if (window.scrollY > scrollThreshold) setShouldRender(true);
      else setShouldRender(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  return (
    shouldRender && (
      <Tooltip
        title="Scroll to top"
        placement="top"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <StyledIconButton
          size="large"
          aria-label="scroll to top"
          onClick={handleClick}
        >
          <StyledArrowIcon fontSize={40} />
        </StyledIconButton>
      </Tooltip>
    )
  );
}

export default ScrollToTop;
