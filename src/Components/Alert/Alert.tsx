import React from 'react';
import './Alert.css';

type Props = {
  icon?: string; //font awesome icon format e.g fa-face-smile or fa-triangle-exclamation
  hideIcon?:boolean,
  title?: string;
  description?: string;
  severity: 'info' | 'success' | 'warning' | 'error';
};

const Alert: React.FC<Props> = ({ icon, title, description, severity, hideIcon }) => {
  return (
    <div className="alert " style={{ backgroundColor: getSeverityColor(severity) }}>
      {!hideIcon &&  <div className='alert__icon'> <i className={`fa ${icon?icon:getSeverityIcon(severity)}`}></i></div>}
     
       
     
      <div className='alert__title-description'>
        {Boolean(title) &&  <h3>{title}</h3>}
        {Boolean(description) && <p>{description}</p>}
       
       
      </div>
    </div>
  );
};

const getSeverityColor = (severity: Props['severity']) => {
  switch (severity) {
    case 'info':
      return '#E8F5FC';
    case 'success':
      return '#EFF7EE';
    case 'warning':
      return '#FDF4E7';
    case 'error':
      return '#FAEEED';
    default:
      return 'white';
  }
};
const getSeverityIcon= (severity: Props['severity']) => {
  switch (severity) {
    case 'info':
      return 'fa-circle-info';
    case 'success':
      return 'fa-circle-check';
    case 'warning':
      return 'fa-triangle-exclamation';
    case 'error':
      return 'fa-circle-exclamation';
    default:
      return 'fa-circle-info';
  }
};

export default Alert;