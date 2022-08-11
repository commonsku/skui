import { get } from 'lodash';
import { CSSObject, css } from 'styled-components';
import { ButtonIconProps, ButtonPreset, ButtonProps, ButtonVariant } from './types';
import sizes from './sizes';
import colors from '../colors';
import { getThemeColor } from '../Theme';
import { AddIcon, DragIcon, EditIcon, SubtractIcon, TrashIcon, XIcon } from '../icons';

export function getSizeStyle(style: string, defaults: string): ((p: ButtonProps) => string) {
  return ({ size }: ButtonProps) => {
    if (size) {
      return get(sizes, [size, style]) || defaults;
    }
    return defaults;
  };
}

export function getBaseButtonStyles(props: ButtonProps): CSSObject {
  const primaryColor = getThemeColor(props, 'primary.main', colors.primary1.main);
  const ctaColor = getThemeColor(props, 'secondary1.main', colors.secondary1.main);
  const disabled = getThemeColor(props, 'neutrals.50', colors.neutrals['50']);
  const disabledText = getThemeColor(props, 'neutrals.70', colors.neutrals['70']);

  const {
    secondary,
    cta,
    size,
    variant,
  } = props;
  const varaintStyles = variant ? getVariantStyles(props, variant) : {};
  return {
    border: '3px solid white',
    borderRadius: size && sizes[size] ? sizes[size].borderRadius : '4px',
    background: secondary ? "transparent" : (cta ? ctaColor : primaryColor),
    color: secondary ? primaryColor : "white",
    borderColor: cta ? ctaColor : primaryColor,
    fontSize: getSizeStyle('font-size', '1rem')(props),
    lineHeight: getSizeStyle('line-height', '1.5rem')(props),
    padding: getSizeStyle('padding', '12px 25px')(props),
    fontFamily: getSizeStyle('font-family', "'skufont-demibold', sans-serif")(props),
    cursor: 'pointer',
    verticalAlign: 'top',
    ...varaintStyles,
    ':disabled': {
      backgroundColor: getThemeColor(props, 'disabledButton', colors.disabledButton),
      opacity: 0.5,
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: disabled,
      background: disabled,
      color: disabledText,
      cursor: 'default',
      ':focus-visible': {
        outlineColor: disabled,
        ...(get(varaintStyles, [':disabled', ':focus-visible']) || {}),
      },
      ...(get(varaintStyles, [':disabled']) || {}),
    },
    ':focus-visible': {
      outlineColor: primaryColor,
      ...(get(varaintStyles, [':focus-visible']) || {}),
    },
  };
}

type Colors = {
  white: string,
  disabled: string,
  disabledText: string,
  primary: string,
  primaryDark: string,
  primaryLight: string,
  cta: string,
  ctaDark: string,
  error: string,
  errorDark: string,
};

type variantStylesFn = (cx: Colors) => { [key: string]: CSSObject };
const variantStyles: variantStylesFn = ({
  white,
  disabled,
  disabledText,
  primary,
  primaryDark,
  primaryLight,
  cta,
  ctaDark,
  error,
  errorDark,
}: Colors) => ({
  primary: {
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: primary,
    background: primary,
    color: white,
    ':hover': {
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: primaryDark,
      background: primaryDark,
      color: white,
    },
    ':focus-visible': {
      outlineColor: primary,
    },
  },
  secondary: {
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: primary,
    background: white,
    color: primary,
    ':hover': {
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: primary,
      background: primaryLight,
      color: primary,
    },
    ':focus-visible': {
      outlineColor: primary,
    },
  },
  'primary-light': {
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: primaryLight,
    background: primaryLight,
    color: primary,
    ':hover': {
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: primaryLight,
      background: white,
      color: primary,
    },
    ':focus-visible': {
      outlineColor: primaryLight,
    },
  },
  'cta': {
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: cta,
    background: cta,
    color: white,
    ':hover': {
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: ctaDark,
      background: ctaDark,
      color: white,
    },
    ':focus-visible': {
      outlineColor: cta,
    },
  },
  'error': {
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: error,
    background: error,
    color: white,
    ':hover': {
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: errorDark,
      background: errorDark,
      color: white,
    },
    ':focus-visible': {
      outlineColor: error,
    },
  },
  'disabled': {
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: disabled,
    background: disabled,
    color: disabledText,
    cursor: 'default',
    ':focus-visible': {
      outlineColor: disabled,
    },
  },
  text: {
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: white,
    background: white,
    color: primary,
    ':hover': {
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: primaryLight,
      background: primaryLight,
      color: primary,
    },
    ':focus-visible': {
      outlineColor: white,
    },
  },
  'text-error': {
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: 'transparent',
    background: 'transparent',
    color: error,
    ':hover': {
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: error,
      background: error,
      color: white,
    },
    ':focus-visible': {
      outlineColor: 'transparent',
    },
  },
});

export function getVariantStyles(props: ButtonProps, variant: ButtonVariant): CSSObject {
  const white = getThemeColor(props, 'neutrals.white', colors.neutrals.white);
  const disabled = getThemeColor(props, 'neutrals.50', colors.neutrals['50']);
  const disabledText = getThemeColor(props, 'neutrals.70', colors.neutrals['70']);

  const primary = getThemeColor(props, 'primary1.main', colors.primary1.main);
  const primaryDark = getThemeColor(props, 'primary1.75', colors.primary1['75']);
  const primaryLight = getThemeColor(props, 'primary1.20', colors.primary1['20']);

  const cta = getThemeColor(props, 'secondary1.main', colors.secondary1.main);
  const ctaDark = getThemeColor(props, 'secondary1.80', colors.secondary1['80']);

  const error = getThemeColor(props, 'errors.main', colors.errors.main);
  const errorDark = getThemeColor(props, 'errors.80', colors.errors['80']);

  const styles = variantStyles({
    white,
    disabled,
    disabledText,
    primary,
    primaryDark,
    primaryLight,
    cta,
    ctaDark,
    error,
    errorDark,
  });

  return get(styles, [variant]) || {};
}

export const presets: {[key: string]: ButtonIconProps} = {
  edit: {
    size: "medium",
    Icon: EditIcon,
    variant: "primary"
  },
  delete: {
    Icon: TrashIcon,
    variant: 'error'
  },
  add: {
    Icon: AddIcon,
    variant: 'secondary'
  },
  remove: {
    Icon: SubtractIcon,
    variant: 'secondary'
  },
  close: {
    Icon: XIcon,
    variant: 'secondary'
  },
  drag: {
    Icon: DragIcon,
    variant: 'text',
    style: {
      cursor: 'grab',
    }
  }
};

export function getPropsByPresets(props: ButtonIconProps, preset?: ButtonPreset) {
  const presetProps = get(presets, [preset || ""]) || {};
  return { ...presetProps, ...props }
}
