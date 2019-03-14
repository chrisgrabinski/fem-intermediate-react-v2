import React from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const Spin = keyframes`
  to {
    transform: rotate(-1turn);
  }
`;

const NavBar = () => (
  <header
    css={css`
      background-color: ${colors.dark};
      position: sticky;
      top: 0;
      z-index: 10;
    `}
  >
    <Link
      to="/"
      css={css`
        &:hover {
          text-decoration: underline;
        }
      `}
    >
      Adopt Me!
    </Link>
    <Link
      to="/"
      css={css`
        display: inline-block;
        animation: 2s ${Spin} linear infinite;
      `}
    >
      <span aria-label="logo" role="img">
        🐈
      </span>
    </Link>
  </header>
);

export default NavBar;
