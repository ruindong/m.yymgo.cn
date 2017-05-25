
/**
 *
 *A super lightweight script (1kb) to detect via Javascript events like
 *  ‘tap’ ‘dbltap’ ‘swipeup’ ‘swipedown’ ‘swipeleft’ ‘swiperight’
 *  on any kind of device.
 **/

(function(doc, win) {
    'use strict';
    if (typeof doc.createEvent !== 'function') return false; // no tap events here
    // helpers
    var useJquery = typeof jQuery !== 'undefined',
    // some helpers borrowed from https://github.com/WebReflection/ie-touch
        msPointerEnabled = !!navigator.pointerEnabled || navigator.msPointerEnabled,
        isTouch = (!!('ontouchstart' in win) && navigator.userAgent.indexOf('PhantomJS') < 0) || msPointerEnabled,
        msEventType = function(type) {
            var lo = type.toLowerCase(),
                ms = 'MS' + type;
            return navigator.msPointerEnabled ? ms : lo;
        },
        touchevents = {
            touchstart: msEventType('PointerDown') + ' touchstart',
            touchend: msEventType('PointerUp') + ' touchend',
            touchmove: msEventType('PointerMove') + ' touchmove'
        },
        setListener = function(elm, events, callback) {
            var eventsArray = events.split(' '),
                i = eventsArray.length;

            while (i--) {
                elm.addEventListener(eventsArray[i], callback, false);
            }
        },
        getPointerEvent = function(event) {
            return event.targetTouches ? event.targetTouches[0] : event;
        },
        getTimestamp = function () {
            return new Date().getTime();
        },
        sendEvent = function(elm, eventName, originalEvent, data) {
            var customEvent = doc.createEvent('Event');
            data = data || {};
            data.x = currX;
            data.y = currY;
            data.distance = data.distance;
            if (useJquery)
                jQuery(elm).trigger(eventName, data);
            else {
                customEvent.originalEvent = originalEvent;
                for (var key in data) {
                    customEvent[key] = data[key];
                }
                customEvent.initEvent(eventName, true, true);
                elm.dispatchEvent(customEvent);
            }
        },

        onTouchStart = function(e) {
            var pointer = getPointerEvent(e);
            // caching the current x
            cachedX = currX = pointer.pageX;
            // caching the current y
            cachedY = currY = pointer.pageY;

            timestamp = getTimestamp();
            tapNum++;
            // we will use these variables on the touchend events
        },
        onTouchEnd = function(e) {
            var eventsArr = [],
                deltaY = cachedY - currY,
                deltaX = cachedX - currX;

            // clear the previous timer in case it was set
            clearTimeout(tapTimer);

            if (deltaX <= -swipeThreshold)
                eventsArr.push('swiperight');

            if (deltaX >= swipeThreshold)
                eventsArr.push('swipeleft');

            if (deltaY <= -swipeThreshold)
                eventsArr.push('swipedown');

            if (deltaY >= swipeThreshold)
                eventsArr.push('swipeup');
            if (eventsArr.length) {
                for (var i = 0; i < eventsArr.length; i++) {
                    var eventName = eventsArr[i];
                    sendEvent(e.target, eventName, e, {
                        distance: {
                            x: Math.abs(deltaX),
                            y: Math.abs(deltaY)
                        }
                    });
                }
            } else {

                if (
                    (timestamp + tapThreshold) - getTimestamp() >= 0 &&
                    cachedX >= currX - tapPrecision &&
                    cachedX <= currX + tapPrecision &&
                    cachedY >= currY - tapPrecision &&
                    cachedY <= currY + tapPrecision
                    ) {
                    // Here you get the Tap event
                    sendEvent(e.target, (tapNum === 2) && (target === e.target) ? 'dbltap' : 'tap', e);
                    target= e.target;
                }

                // reset the tap counter
                tapTimer = setTimeout(function() {
                    tapNum = 0;
                }, dbltapThreshold);

            }
        },
        onTouchMove = function(e) {
            var pointer = getPointerEvent(e);
            currX = pointer.pageX;
            currY = pointer.pageY;
        },
        swipeThreshold = win.SWIPE_THRESHOLD || 100,
        tapThreshold = win.TAP_THRESHOLD || 150, // range of time where a tap event could be detected
        dbltapThreshold = win.DBL_TAP_THRESHOLD || 200, // delay needed to detect a double tap
        tapPrecision = win.TAP_PRECISION / 2 || 60 / 2, // touch events boundaries ( 60px by default )
        justTouchEvents = win.JUST_ON_TOUCH_DEVICES || isTouch,
        tapNum = 0,
        currX, currY, cachedX, cachedY, tapTimer, timestamp, target;

    //setting the events listeners
    setListener(doc, touchevents.touchstart + (justTouchEvents ? '' : ' mousedown'), onTouchStart);
    setListener(doc, touchevents.touchend + (justTouchEvents ? '' : ' mouseup'), onTouchEnd);
    setListener(doc, touchevents.touchmove + (justTouchEvents ? '' : ' mousemove'), onTouchMove);
}(document, window));
