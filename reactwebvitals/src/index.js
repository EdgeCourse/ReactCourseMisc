import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
/*
Understanding Core Web Vitals Logged to Console
When you log the entries from reportWebVitals to the console, each entry typically contains the following fields:

name: The name of the metric. This tells you which Web Vital the entry is reporting.
value: The measured value of the metric, usually in milliseconds (for time-based metrics) or a score (for metrics like Cumulative Layout Shift).
id: A unique identifier for the metric event, helpful for correlating events or debugging.
delta: The change in value since the last time the metric was reported (if applicable).
entries: An array containing the actual Performance Entry objects that were used to compute the metric.
Core Web Vitals Metrics
Here’s what each core web vital metric represents:

First Contentful Paint (FCP): Measures the time from when the page starts loading to when any part of the page's content is rendered on the screen. It's a good indicator of perceived load speed.
Largest Contentful Paint (LCP): Measures the time from when the page starts loading to when the largest text block or image element is visible within the viewport. This metric is important for understanding loading performance.
Cumulative Layout Shift (CLS): Measures the sum of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. A low CLS helps ensure that the page is delightful and that content is stable as it loads.
First Input Delay (FID): Measures the time from when a user first interacts with your site (i.e., when they clicked a link, tapped on a button, etc.) to the time when the browser is able to begin processing event handlers in response to that interaction. This metric is key to understanding responsiveness.
Time to First Byte (TTFB): Measures the time it takes for a user's browser to receive the first byte of page content. This metric can indicate the responsiveness of your web servers and network.

Example:
Metric Name: Largest Contentful Paint (LCP)
Value: 2450.675 milliseconds (2.45 seconds) – indicates how long it took for the largest content element in the viewport to become visible.
Delta: The change from the previous LCP value was 10 milliseconds.
ID: A unique identifier for this particular LCP event.

How to Use These Results
Understanding these metrics helps you diagnose performance issues and identify areas where your website may need optimization. For instance:

High FCP or LCP values may suggest you need to optimize critical rendering paths or reduce server response times.
High CLS scores might mean you need to stabilize elements on your page during load, ensuring images have dimensions, and avoiding dynamic content insertion above existing content.
High FID values indicate that your page may be doing too much work on the main thread, blocking user interactions.
To improve these metrics, consider strategies like optimizing images, leveraging browser caching, reducing JavaScript execution time, and using asynchronous script loading techniques.


*/
