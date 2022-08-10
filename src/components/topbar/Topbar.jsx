import { NotificationsNone } from '@mui/icons-material';
import './topbar.css';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>bilushadmin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
