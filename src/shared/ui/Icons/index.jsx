import React, { cloneElement } from 'react';
import { ReactComponent as IconAbort } from './abort.svg';
import { ReactComponent as IconBin } from './bin.svg';
import { ReactComponent as IconCheckmark } from './checkmark.svg';
import { ReactComponent as IconDot } from './dot.svg';
import { ReactComponent as IconFilter } from './filter.svg';
import { ReactComponent as IconLocked } from './locked.svg';
import { ReactComponent as IconMoon } from './moon.svg';
import { ReactComponent as IconPencil } from './pencil.svg';
import { ReactComponent as IconRefresh } from './refresh.svg';
import { ReactComponent as IconSearch } from './search.svg';
import { ReactComponent as IconSun } from './sun.svg';
import { ReactComponent as IconVarrow } from './v_arrow.svg';
import { ReactComponent as IconXlarge } from './x-large.svg';
import { ReactComponent as IconXmedium } from './x-medium.svg';

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
