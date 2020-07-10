import statusColors from './statusColors';

function statusColorsApplier(propName: string, attributeName: string): string {
  return propName ? statusColors[propName][attributeName] : statusColors['secondary'][attributeName];
}

export default statusColorsApplier;
