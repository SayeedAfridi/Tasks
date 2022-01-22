import { fp } from '@src/utils/font.utils';

const textVariants = {
  body: {
    fontSize: fp(1.8),
    color: 'text',
  },
  button: {
    fontSize: fp(2),
    color: 'text',
    fontWeight: '700',
  },
  title: {
    fontSize: fp(2),
    color: 'text',
  },
  inputLabel: {
    fontSize: fp(1.9),
    color: 'text',
  },
  error: {
    fontSize: fp(1.7),
    color: 'danger',
  },
  tiny: {
    fontSize: fp(1.4),
    color: 'text',
  },
};

export default textVariants;
