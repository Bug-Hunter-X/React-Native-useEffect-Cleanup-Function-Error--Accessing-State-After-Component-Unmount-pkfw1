# React Native useEffect Cleanup Function Error

This repository demonstrates a common error in React Native applications involving the `useEffect` hook and its cleanup function.  The error arises when the cleanup function attempts to access component state or props after the component has unmounted. This typically results in an error because the component's state and props are no longer available.

## Problem

The `bug.js` file shows an example of this issue. A `useEffect` hook is used to set up an interval. The cleanup function attempts to clear the interval. However, if the component unmounts before the cleanup function runs, attempting to access `intervalId` will throw an error because the component is already unmounted and `intervalId` is no longer available.

## Solution

The `bugSolution.js` file provides a solution to this problem.  It introduces a `mounted` state variable and checks its value within the cleanup function before accessing any state or props.  This ensures that the cleanup function only executes if the component is still mounted, thus preventing the error.