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

export function Icon({ iconType }) {
  console.log(iconType);
  switch (iconType) {
    case 'Abort':
      return <IconAbort />;
    case 'Bin':
      return <IconBin />;
    case 'Checkmark':
      return <IconCheckmark />;
    case 'Dot':
      return <IconDot />;
    case 'Filter':
      return <IconFilter />;
    case 'Locked':
      return <IconLocked />;
    case 'Moon':
      return <IconMoon />;
    case 'Pencil':
      return <IconPencil />;
    case 'Refresh':
      return <IconRefresh />;
    case 'Search':
      return <IconSearch />;
    case 'Sun':
      return <IconSun />;
    case 'Varrow':
      return <IconVarrow />;
    case 'Xlarge':
      return <IconXlarge />;
    case 'Xmedium':
      return <IconXmedium />;
    default:
      return false;
  }
}
