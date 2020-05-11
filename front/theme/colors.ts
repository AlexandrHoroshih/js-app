import { rgba } from 'polished';

// intended to use with polished.js "rgba" func
export const BLUE_BASE = '#367BF5';
export const RED_BASE = '#EA3D2F';
export const GREEN_BASE = '#2FA84F';
export const YELLOW_BASE = '#F3A72E';

export const BLACK_BASE = '#3E4345';
export const WHITE_BASE = '#FFFFFF';

const makeSmooth = (color: string) => rgba(color, 0.2);

export const BLUE_SMOOTH = makeSmooth(BLUE_BASE);
export const RED_SMOOTH = makeSmooth(RED_BASE);
export const GREEN_SMOOTH = makeSmooth(GREEN_BASE);
export const YELLOW_SMOOTH = makeSmooth(YELLOW_BASE);
