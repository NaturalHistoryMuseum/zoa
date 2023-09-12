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
    const handleWidth = 24; // set in CSS; including border!

    const labelWidth = label ? label.clientWidth : 0;

    const halfTrack = trackWidth / 2;
    const currentPosition = fraction * trackWidth;
    const centerOffset = (currentPosition - halfTrack) / halfTrack;
    const offset = centerOffset * (handleWidth / 2);
    const labelOffset = offset + labelWidth / 2;
    const percentOffset = offset / trackWidth;
    return {
      handle: ((fraction - percentOffset) * 100).toFixed(2),
      label: ((fraction - labelOffset / trackWidth) * 100).toFixed(2),
    };
  } catch {
    // in case we can't get the clientWidth
    const pos = fraction * 100;
    return { handle: pos.toFixed(2), label: pos.toFixed(2) };
  }
}

export function getInitialValue(
  min,
  max,
  step,
  placeholder = null,
  position = 0.5,
) {
  if (placeholder) {
    return placeholder;
  }
  let range = max - min;
  let exactMidpoint = range / (1 / position);
  let stepDeviation = exactMidpoint % step;
  let stepMidpoint = exactMidpoint - stepDeviation;
  return stepMidpoint + min;
}
