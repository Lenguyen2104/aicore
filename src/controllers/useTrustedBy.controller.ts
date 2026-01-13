import { trustedLogos, heroStats } from '../models';

interface TrustedByController {
  logos: typeof trustedLogos;
  coachCount: string;
}

export const useTrustedByController = (): TrustedByController => {
  return {
    logos: trustedLogos,
    coachCount: heroStats.coachCount,
  };
};
