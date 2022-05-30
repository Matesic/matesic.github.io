import React, {useRef, useState} from 'react';
import {Button, Overlay, Popover} from 'react-bootstrap';
import PropTypes from 'prop-types';

export const TooltipButton = (props) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const target = useRef(null);

    const buttonClick = () => {
        setShowTooltip(true);
        target.current?.blur();
        setTimeout(() => setShowTooltip(false), 1500);

        props.onClick && props.onClick();
    }

    return (
        <>
            <Button ref={target} variant={props.variant || 'primary'} onClick={buttonClick} className={props.style || ''}>
                {props.children}
            </Button>
            <Overlay
                target={target.current}
                show={showTooltip}
                placement={props.placement || 'top'}
                transition>
                <Popover className={'px-3 ' + (props.tooltipStyle || '')}>
                    {props.tooltip || ''}
                </Popover>
            </Overlay>
        </>
    )
}

TooltipButton.propTypes = {
    tooltip: PropTypes.string,
    tooltipStyle: PropTypes.string,
    style: PropTypes.string,
    placement: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func
}