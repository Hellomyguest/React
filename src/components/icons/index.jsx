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

export function Icon({ iconType, ...props }) {
  switch (iconType) {
    case 'Abort':
      return <IconAbort {...props} />;
    case 'Bin':
      return <IconBin {...props} />;
    case 'Checkmark':
      return <IconCheckmark {...props} />;
    case 'Dot':
      return <IconDot />;
    case 'Filter':
      return <IconFilter {...props} />;
    case 'Locked':
      return <IconLocked {...props} />;
    case 'Moon':
      return <IconMoon {...props} />;
    case 'Pencil':
      return <IconPencil {...props} />;
    case 'Refresh':
      return <IconRefresh {...props} />;
    case 'Search':
      return <IconSearch {...props} />;
    case 'Sun':
      return <IconSun {...props} />;
    case 'Varrow':
      return <IconVarrow {...props} />;
    case 'Xlarge':
      return <IconXlarge {...props} />;
    case 'Xmedium':
      return <IconXmedium {...props} />;
    default:
      return false;
  }
}
