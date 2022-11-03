import React, { cloneElement } from 'react';
import { ReactComponent as IconAbort } from './lib/abort.svg';
import { ReactComponent as IconBin } from './lib/bin.svg';
import { ReactComponent as IconCheckmark } from './lib/checkmark.svg';
import { ReactComponent as IconDot } from './lib/dot.svg';
import { ReactComponent as IconFilter } from './lib/filter.svg';
import { ReactComponent as IconLocked } from './lib/locked.svg';
import { ReactComponent as IconMoon } from './lib/moon.svg';
import { ReactComponent as IconPencil } from './lib/pencil.svg';
import { ReactComponent as IconRefresh } from './lib/refresh.svg';
import { ReactComponent as IconSearch } from './lib/search.svg';
import { ReactComponent as IconSun } from './lib/sun.svg';
import { ReactComponent as IconVarrow } from './lib/v_arrow.svg';
import { ReactComponent as IconXlarge } from './lib/x-large.svg';
import { ReactComponent as IconXmedium } from './lib/x-medium.svg';

const ICON_MAP = {
  Abort: <IconAbort />,
  Bin: <IconBin />,
  Checkmark: <IconCheckmark />,
  Dot: <IconDot />,
  Filter: <IconFilter />,
  Locked: <IconLocked />,
  Moon: <IconMoon />,
  Pencil: <IconPencil />,
  Refresh: <IconRefresh />,
  Search: <IconSearch />,
  Sun: <IconSun />,
  Varrow: <IconVarrow />,
  Xlarge: <IconXlarge />,
  Xmedium: <IconXmedium />,
};

export function Icon({ iconType, className }) {
  const preIcon = ICON_MAP[iconType];
  const newIcon = cloneElement(preIcon, { className });
  return newIcon;
}
