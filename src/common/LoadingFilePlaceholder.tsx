import React from 'react';
import './LoadingFilePlaceholder.css';

export default function LoadingFilePlaceholder(): JSX.Element {
    return (
        <div id="loading-container">
            <div className="loading-line loading-title-line" />
            <div className="loading-line loading-text-line" />
            <div className="loading-line loading-text-line" />
            <div className="loading-line loading-text-line" />
            <div className="loading-line loading-text-line-semi" />
            <div className="loading-code-block">
                <div className="loading-code-line">
                    <div className="loading-code-token loading-code-blue loading-code-is-1" />
                    <div className="loading-code-token loading-code-plain loading-code-is-2" />
                </div>
                <div className="loading-code-line" />
                <div className="loading-code-line">
                    <div className="loading-code-token loading-code-green loading-code-is-3" />
                </div>
                <div className="loading-code-line">
                    <div className="loading-code-token loading-code-blue loading-code-is-1" />
                    <div className="loading-code-token loading-code-plain loading-code-is-3" />
                    <div className="loading-code-token loading-code-blue loading-code-is-1" />
                </div>
                <div className="loading-code-line">
                    <div className="loading-code-token loading-code-is-1" />
                    <div className="loading-code-token loading-code-red loading-code-is-1" />
                    <div className="loading-code-token loading-code-plain loading-code-is-1" />
                </div>
                <div className="loading-code-line">
                    <div className="loading-code-token loading-code-is-1" />
                    <div className="loading-code-token loading-code-plain loading-code-is-3" />
                </div>
                <div className="loading-code-line">
                    <div className="loading-code-token loading-code-is-1" />
                    <div className="loading-code-token loading-code-plain loading-code-is-2" />
                </div>
                <div className="loading-code-line">
                    <div className="loading-code-token loading-code-is-1" />
                    <div className="loading-code-token loading-code-plain loading-code-is-1" />
                    <div className="loading-code-token loading-code-blue loading-code-is-1" />
                </div>
                <div className="loading-code-line">
                    <div className="loading-code-token loading-code-is-1" />
                    <div className="loading-code-token loading-code-plain loading-code-is-3" />
                </div>
            </div>
        </div>
    );
}
