import UIfx from 'uifx';
import SuccessMP3 from './audio/Success.mp3';
import ErrorMP3 from './audio/Error.mp3';

export const SuccessBeep = new UIfx(
    SuccessMP3,
    {
      volume: 0.4, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
)

export const ErrorBeep = new UIfx(
    ErrorMP3,
    {
      volume: 1, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
)