import React from 'react';

import "./Alert.scss";

type AlertProps = {
  title: string;
  message: string;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onAbort: () => void;
}

// Alert
// confirmation: means no changes to 
const Alert: React.FC<AlertProps> = ({ 
  message,
  title,
  open, 
  onClose,
  onConfirm,
  onAbort
}) => {
  return (
    <div 
      className='alert-overlay'
      style={{display: open ? "block" : "none"}}
    >
      <div className="alert-card">
        <div className="alert-header">
          <h1 className="alert-title">{title}</h1>
          <div className="alert-close"></div>
        </div>
        <div className="alert-message">{message}</div>
        <div className="alert-buttons">
          <button 
            className='btn btn-secondary' 
            onClick={onAbort}
          >
            Cancel
          </button>
          <button 
            className='btn btn-primary' 
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Alert