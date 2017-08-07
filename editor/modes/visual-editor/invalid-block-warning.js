/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import createBlockWarning from './create-block-warning';

const warning = createBlockWarning( __(
	'This block has been modified externally and has been locked to protect ' +
	'against content loss.'
) );

export default () => warning;
