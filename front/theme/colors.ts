import { rgba } from 'polished';

// intended to use with polished.js "rgba" func
export const BLUE_BASE = '#367BF5';
export const RED_BASE = '#EA3D2F';
export const GREEN_BASE = '#2FA84F';
export const YELLOW_BASE = '#F3A72E';

export const BLACK_BASE = '#3E4345';
export const WHITE_BASE = '#FFFFFF';

export const makeColorSmooth = (color: string) => rgba(color, 0.2);

export const BLUE_SMOOTH = makeColorSmooth(BLUE_BASE);
export const RED_SMOOTH = makeColorSmooth(RED_BASE);
export const GREEN_SMOOTH = makeColorSmooth(GREEN_BASE);
export const YELLOW_SMOOTH = makeColorSmooth(YELLOW_BASE);
