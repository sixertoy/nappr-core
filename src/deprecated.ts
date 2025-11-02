/**
 * @deprecated This file contains deprecated functions that should be replaced by lodash.
 * These functions are maintained for backward compatibility only.
 * Please use lodash directly in new code.
 */

// Arrays
/**
 * @deprecated Use lodash uniq instead
 * @see https://lodash.com/docs/4.17.21#uniq
 */
export { uniq } from 'lodash';

// Objects
/**
 * @deprecated Use lodash isEmpty instead
 * @see https://lodash.com/docs/4.17.21#isEmpty
 */
export { isEmpty as isEmptyObject } from 'lodash';

/**
 * @deprecated Use lodash assign or merge instead
 * @see https://lodash.com/docs/4.17.21#assign
 * @see https://lodash.com/docs/4.17.21#merge
 */
export { assign as merge } from 'lodash';

// Utils
/**
 * @deprecated Use lodash debounce instead
 * @see https://lodash.com/docs/4.17.21#debounce
 */
export { debounce } from 'lodash';

/**
 * @deprecated Use lodash isEmpty instead
 * @see https://lodash.com/docs/4.17.21#isEmpty
 */
export { isEmpty } from 'lodash';

// Strings
/**
 * @deprecated Use lodash upperFirst instead
 * @see https://lodash.com/docs/4.17.21#upperFirst
 */
export { upperFirst as capitalize } from 'lodash';

/**
 * @deprecated Use lodash toLower instead
 * @see https://lodash.com/docs/4.17.21#toLower
 */
export { toLower as toLowerCase } from 'lodash';

/**
 * @deprecated Use lodash toUpper instead
 * @see https://lodash.com/docs/4.17.21#toUpper
 */
export { toUpper as toUpperCase } from 'lodash';

// Core
/**
 * @deprecated Use lodash noop instead
 * @note lodash noop returns undefined, this wrapper maintained for compatibility
 * @see https://lodash.com/docs/4.17.21#noop
 */
export { noop } from 'lodash';
