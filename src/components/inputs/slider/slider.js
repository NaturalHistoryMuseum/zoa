// common functions for the sliders

export function getFraction(value, props) {
  return (value - props.min) / (props.max - props.min);
}

export function getHandlePosition(slider, fraction, label) {
  // the center of the slider is slightly offset to account for the size of the
  // handle. this calculates the position of the middle of the handle along the
  // track, accounting for the offset.
  try {
    const trackWidth = slider.clientWidth;
    const handleWidth = 20; // set in CSS!
    const manualOffset = 2; // by eye

    const labelWidth = label ? label.clientWidth : 0;

    const halfTrack = trackWidth / 2;
    const currentPosition = fraction * trackWidth;
    const centerOffset = (currentPosition - halfTrack) / halfTrack;
    const offset = centerOffset * (handleWidth / 2) - manualOffset;
    const labelOffset = offset + labelWidth / 2;
    const percentOffset = offset / trackWidth;
    return {
      handle: (fraction - percentOffset) * 100,
      label: (fraction - labelOffset / trackWidth) * 100,
    };
  } catch {
    // in case we can't get the clientWidth
    const pos = fraction * 100;
    return { handle: pos, label: pos };
  }
}

export function getInitialValue(min, max, step, placeholder) {
  if (placeholder) {
    return placeholder;
  }
  let range = max - min;
  let exactMidpoint = range / 2;
  let stepDeviation = exactMidpoint % step;
  let stepMidpoint = exactMidpoint - stepDeviation;
  return stepMidpoint + min;
}
