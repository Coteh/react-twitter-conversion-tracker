// Type definitions for react-twitter-conversion-tracker-plus 1.1
// Project: https://github.com/theworkflow/react-twitter-conversion-tracker
// Definitions by: Coteh <https://github.com/Coteh>
// Definitions: https://github.com/theworkflow/react-twitter-conversion-tracker

declare module 'react-twitter-conversion-tracker-plus' {
    export function init(convId: string): void;

    export function pageView(): void;

    export function track(action: string): void;
}
