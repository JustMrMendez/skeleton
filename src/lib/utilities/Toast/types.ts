// Toast interface types

export interface ToastSettings {
	/** Provide the toast message. Supports HTML. */
	message: string;
	/**
	 * Applies a canned set of styles.
	 * @type {'primary' | 'secondary' | 'tertiary' | 'warning' | 'success' | 'error'}
	 */
	background?: string;
	/** Enables auto-hide after the timeout duration. */
	autohide?: boolean;
	/** Set the auto-hide timeout duration. */
	timeout?: number;
	/** Generate a custom action button UI. */
	action?: {
		/** The button label. Supports HTML. */
		label: string;
		/** The function triggered when the button is pressed. */
		response: () => void;
	};
	/** Provide arbitrary CSS classes to style the toast. */
	classes?: string;
	/** Callback function that fires on trigger and close. */
	callback?: (response: { id: string; status: 'queued' | 'closed' }) => void;
}

export interface Toast extends ToastSettings {
	/** A UUID will be auto-assigned on `.trigger()`. */
	id: string;
}
