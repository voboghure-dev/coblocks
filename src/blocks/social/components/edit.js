/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Controls from './controls';
import Inspector from './inspector';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { Component, Fragment } = wp.element;

/**
 * Block edit function
 */
class Edit extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			className,
			isSelected,
			setAttributes,
		} = this.props;

		const {
			borderRadius,
			facebook,
			hasColors,
			linkedin,
			pinterest,
			reddit,
			size,
			textAlign,
			tumblr,
			twitter,
			email,
		} = attributes;

		const classes = classnames( className, {
				[ `has-button-size-${ size }` ] : size != 'med',
				'has-colors' : hasColors,
			}
		);

		const buttonClasses = classnames(
			`wp-block-button__link`,
			`wp-block-coblocks-social__button`, {
				'has-background' : hasColors,
			}
		);

		const buttonStyles = {
			borderRadius: borderRadius ? borderRadius + 'px' : undefined,
		};

		return [
			<Fragment>
				{ isSelected && (
					<Controls
						{ ...this.props }
					/>
				) }
				{ isSelected && (
					<Inspector
						{ ...this.props }
					/>
				) }
				<div className={ classes } style={ { textAlign: textAlign } }>
					<ul>
					{ twitter &&
						<li>
							<a className={ classnames( buttonClasses, `wp-block-coblocks-social__button--twitter` ) } style={ buttonStyles }>
								<span className="wp-block-coblocks-social__icon"></span>
								<span className="wp-block-coblocks-social__text">{ __( 'Share on Twitter' ) }</span>
							</a>
						</li>
					}
					{ facebook &&
						<li>
							<a className={ classnames( buttonClasses, `wp-block-coblocks-social__button--facebook` ) } style={ buttonStyles }>
								<span className="wp-block-coblocks-social__icon"></span>
								<span className="wp-block-coblocks-social__text">{ __( 'Share on Facebook' ) }</span>
							</a>
						</li>
					}
					{ pinterest &&
						<li>
							<a className={ classnames( buttonClasses, `wp-block-coblocks-social__button--pinterest` ) } style={ buttonStyles }>
								<span className="wp-block-coblocks-social__icon"></span>
								<span className="wp-block-coblocks-social__text">{ __( 'Share on Pinterest' ) }</span>
							</a>
						</li>
					}
					{ linkedin &&
						<li>
							<a className={ classnames( buttonClasses, `wp-block-coblocks-social__button--linkedin` ) } style={ buttonStyles }>
								<span className="wp-block-coblocks-social__icon"></span>
								<span className="wp-block-coblocks-social__text">{ __( 'Share on LinkedIn' ) }</span>
							</a>
						</li>
					}
					{ tumblr &&
						<li>
							<a className={ classnames( buttonClasses, `wp-block-coblocks-social__button--tumblr` ) } style={ buttonStyles }>
								<span className="wp-block-coblocks-social__icon"></span>
								<span className="wp-block-coblocks-social__text">{ __( 'Share on Tumblr' ) }</span>
							</a>
						</li>
					}
					{ reddit &&
						<li>
							<a className={ classnames( buttonClasses, `wp-block-coblocks-social__button--reddit` ) } style={ buttonStyles }>
								<span className="wp-block-coblocks-social__icon"></span>
								<span className="wp-block-coblocks-social__text">{ __( 'Share on Reddit' ) }</span>
							</a>
						</li>
					}
					{ email &&
						<li>
							<a className={ classnames( buttonClasses, `wp-block-coblocks-social__button--email` ) } style={ buttonStyles }>
								<span className="wp-block-coblocks-social__icon"></span>
								<span className="wp-block-coblocks-social__text">{ __( 'Share via Email' ) }</span>
							</a>
						</li>
					}
					</ul>
				</div>
			</Fragment>
		];
	}
};

export default Edit;
