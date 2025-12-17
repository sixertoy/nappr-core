const trimValue = (val: unknown): string => (val && typeof val === 'string' && val ? val : '').trim();

export const slugify = (
  text: string | unknown = '',
  pprefix = '',
  psuffix = '',
): string => {
  const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
  const b = 'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
  const p = new RegExp(a.split('').join('|'), 'g');
  let prefix = trimValue(pprefix);
  prefix = prefix ? `${prefix}-` : '';
  let suffix = trimValue(psuffix);
  suffix = suffix ? `-${suffix}` : '';
  const textStr = String(text || '');
  const result =
    textStr &&
    textStr !== '' &&
    textStr
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(p, (c) => b.charAt(a.indexOf(c)))
      .replace(/&/g, '-and-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  return (result && `${prefix}${result}${suffix}`) || '';
};
