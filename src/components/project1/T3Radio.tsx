import React, { useRef, useState } from 'react';
import './T3Radio.css';

const FREQUENCIES = ['53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128'];

const T3Radio = () => {
  const [dialAngle, setDialAngle] = useState(0);

  const dragging = useRef(false);
  const startAngle = useRef(0);
  const lastAngle = useRef(0);

  const getAngle = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    const dial = document.getElementById('t3radio-dial-circle');
    if (!dial) return 0;
    const rect = dial.getBoundingClientRect();
    let x: number, y: number;
    if ('touches' in e && e.touches.length > 0) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else if ('clientX' in e && 'clientY' in e) {
      x = e.clientX;
      y = e.clientY;
    } else {
      return 0;
    }
    const dx = x - (rect.left + rect.width / 2);
    const dy = y - (rect.top + rect.height / 2);
    return Math.atan2(dy, dx) * (180 / Math.PI);
  };

  const onDialDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    dragging.current = true;
    startAngle.current = getAngle(e);
    lastAngle.current = dialAngle;
    document.addEventListener('mousemove', onDialMove as EventListener);
    document.addEventListener('touchmove', onDialMove as EventListener);
    document.addEventListener('mouseup', onDialUp as EventListener);
    document.addEventListener('touchend', onDialUp as EventListener);
  };

  const onDialMove = (e: MouseEvent | TouchEvent) => {
    if (!dragging.current) return;
    const angle = getAngle(e);
    let newAngle = lastAngle.current + (angle - startAngle.current);
    // Clamp between -90 and 90 degrees
    newAngle = Math.max(-90, Math.min(90, newAngle));
    setDialAngle(newAngle);
  };

  const onDialUp = () => {
    dragging.current = false;
    // Snap dial to nearest frequency
    const step = 180 / (FREQUENCIES.length - 1);
    const snapped = Math.round((dialAngle + 90) / step) * step - 90;
    setDialAngle(snapped);
    document.removeEventListener('mousemove', onDialMove as EventListener);
    document.removeEventListener('touchmove', onDialMove as EventListener);
    document.removeEventListener('mouseup', onDialUp as EventListener);
    document.removeEventListener('touchend', onDialUp as EventListener);
  };

  return (
    <div className="t3radio-body t3radio-depth">
      <div className="t3radio-grill">
        {[...Array(11)].map((_, row) => (
          <div className="t3radio-grill-row" key={row}>
            {[...Array(11)].map((_, col) => (
              <div className="t3radio-grill-dot" key={col} />
            ))}
          </div>
        ))}
      </div>
      <div className="t3radio-dial">
        <div
          id="t3radio-dial-circle"
          className="t3radio-dial-circle t3radio-dial-depth"
          style={{ transform: `rotate(${dialAngle}deg)` }}
          onMouseDown={onDialDown}
          onTouchStart={onDialDown}
        >
          <div className="t3radio-dial-indicator" />
        </div>
      </div>
    </div>
  );
};

export default T3Radio;
