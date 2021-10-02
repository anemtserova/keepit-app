import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";

export const Modal = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { store, actions } = useContext(GlobalState);
	const handleDoIt = () => {
		actions.deleteFetch(props.id);
		actions.deleteAllUserNotes(props.id);
		props.onClose();
	};
	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>You are about to delete this contact permanantly. This action is irreversible.</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary" onClick={() => props.onClose()}>
							Cancel
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={() => handleDoIt()}>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
