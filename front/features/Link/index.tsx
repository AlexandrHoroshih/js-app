import * as React from 'react';

import { router } from '../../app-domain/router';

interface LinkProps {
  href: string;
  passHref?: boolean;
  as?: string;
  replace?: boolean;
  scroll?: boolean;
}

function getLocationOrigin() {
  const { protocol, hostname, port } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function isLocal(url: string): boolean {
  const locationOrigin = getLocationOrigin();
  const resolved = new URL(url, locationOrigin);
  return resolved.origin === locationOrigin;
}

function linkClicked(
  e: React.MouseEvent,
  href: string,
  navigateArgs: Array<any>,
  scroll?: boolean,
): void {
  const { nodeName, target } = e.currentTarget as HTMLAnchorElement;
  if (
    nodeName === 'A' &&
    ((target && target !== '_self') ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      (e.nativeEvent && e.nativeEvent.which === 2))
  ) {
    // ignore click for new tab / new window behavior
    return;
  }

  if (!isLocal(href)) {
    // ignore click if it's outside our scope (e.g. https://google.com)
    return;
  }

  e.preventDefault();
  // replace state instead of push if prop is present
  router.navigate(...navigateArgs);
}

export const Link: React.FC<LinkProps> = ({
  href,
  passHref = false,
  as,
  replace,
  scroll,
  children,
}) => {
  const child: any = React.Children.only(children);

  const childProps: {
    onMouseEnter?: React.MouseEventHandler;
    onClick: React.MouseEventHandler;
    href?: string;
    ref?: any;
  } = {
    onClick: (e: React.MouseEvent) => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, href, as, replace, scroll);
      }
    },
  };

  // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (passHref || (child.type === 'a' && !('href' in child.props))) {
    childProps.href = href;
  }

  return React.cloneElement(child, childProps);
};
