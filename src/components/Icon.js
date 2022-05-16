import React from 'react';
import PropTypes from 'prop-types';
import {IconContext} from 'react-icons';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';

export const Icon = (props) => {
    const location = useLocation();
    const fixedTooltip = location.pathname.endsWith('error');
    const placement = props.tooltipPlacement || 'top';

    return (
        <IconContext.Provider value={{
            color: props.color || 'black',
            size: props.size || '1rem'
        }}>
            {props.tooltip ?
                <OverlayTrigger
                    placement={placement}
                    overlay={<Tooltip className={fixedTooltip ? 'position-fixed' : ''}>{props.tooltip}</Tooltip>}>
                    <span className='custom-icon'>
                        {props.icon}
                    </span>
                </OverlayTrigger> :
                <span className='custom-icon'>
                    {props.icon}
                </span>
            }
        </IconContext.Provider>
    );
};

Icon.propTypes = {
    icon: PropTypes.element.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
    tooltip: PropTypes.element,
    tooltipPlacement: PropTypes.string
}
