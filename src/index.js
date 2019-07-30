import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShallowCompare from 'react-addons-shallow-compare';
import DeepEquals from 'deep-equal';

(function(b, s, p, o, r, t) {
    b['broadage'] = b['broadage'] || [];
    if (!b['broadage'].length) {
        r = document.createElement(s);
        t = document.getElementsByTagName(s)[0];
        r.async = true;
        r.src = p;
        t.parentNode.insertBefore(r, t);
    }
    b['broadage'].push({ 'bundleId': o.bundleId, 'widgets': o.widgets, 'accountId': o.accountId });
})(window, 'script', '//cdn-saas.broadage.com/widgets/loader/loader.js', {});

export default class BroadageWidget extends Component {
    widgetLoadInterval: Number = 0;

    static propTypes = {
        options: PropTypes.object,
        className: PropTypes.string,
        bundleId: PropTypes.string.isRequired,
        accountId: PropTypes.string.isRequired,
        widget: PropTypes.string.isRequired,
        requiredFields: PropTypes.object.isRequired,
    };

    static defaultProps = {
        options: {},
        className: null
    };

    state = {
        element: `broadage-widget-${Math.random().toString(32).substr(2)}`,
        options: this.props.options,
        className: this.props.className,
        bundleId: this.props.bundleId,
        accountId: this.props.accountId,
        widget: this.props.widget,
        requiredFields: this.props.requiredFields
    };

    constructor(props: Object): void {
        super(props);
        this.widgetLoad();
    }

    widgetLoad(): void {
        this.widgetLoadInterval = setInterval(() => {
            if (window.hasOwnProperty('broadageWidget')) {
                clearInterval(this.widgetLoadInterval);
                setTimeout(self => {
                    self.insertWidget();
                }, 0, this);
            }
        }, 250);
    }

    componentWillReceiveProps(nextProps: Object): void {
        const { bundleId, accountId, widget, options, requiredFields, className } = this.state;

        const isUpdate = (
            bundleId !== nextProps.bundleId ||
            accountId !== nextProps.accountId ||
            widget !== nextProps.widget ||
            !DeepEquals(options, nextProps.options) ||
            !DeepEquals(requiredFields, nextProps.requiredFields)
        );

        if (isUpdate) {
            this.removeWidget();

            this.setState({
                bundleId: nextProps.bundleId,
                accountId: nextProps.accountId,
                widget: nextProps.widget,
                options: { ...nextProps.options },
                requiredFields: { ...nextProps.requiredFields }
            }, () => {
                setTimeout(self => {
                    self.insertWidget();
                }, 0, this);
            });
        }

        if (className !== nextProps.className) {
            this.setState({ className });
        }
    }

    shouldComponentUpdate(nextProps: Object, nextState: Object): Boolean {
        return ShallowCompare(this, nextProps, nextState);
    }

    componentWillUnmount(): void {
        clearInterval(this.widgetLoadInterval);
        this.removeWidget();
    }

    removeWidget(): void {
        const { element } = this.state;

        if (window.hasOwnProperty('broadageWidget')) {
            window.broadageWidget.remove(element);
        }
    }

    insertWidget(): void {
        const { element, bundleId, accountId, widget, options, requiredFields } = this.state;

        if (window.hasOwnProperty('broadageWidget')) {
            window.broadageWidget.insert({
                bundleId: [bundleId],
                accountId,
                widgets: {
                    [widget]: [
                        {
                            element,
                            options: { ...options },
                            ...requiredFields
                        }
                    ]
                }
            });
        }
    }

    render() {
        const { element, className } = this.state;

        return (
            <div className={className} id={element}/>
        );
    }
}