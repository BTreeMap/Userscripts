// ==UserScript==
// @name         Google Play Become a Tester
// @version      0.0.0
// @namespace    https://oss.joefang.org/
// @description  Automatically refresh the Google Play “Become a Tester” page and join as a beta tester when the tester quota becomes available.
// @author       Joe Fang
// @supportURL   https://github.com/BTreeMap/Userscripts/issues
// @updateURL    https://github.com/BTreeMap/Userscripts/raw/main/google-play-become-a-tester.user.js
// @downloadURL  https://github.com/BTreeMap/Userscripts/raw/main/google-play-become-a-tester.user.js
// @license      MIT
// @match        https://play.google.com/apps/testing/*
// @icon         https://ragnarok.joefang.org/static/xcrlna1r34p5m12ihdgb4erl3lob053p2.png
// ==/UserScript==

"use strict";


(() => {
    const getJoinButton = () => {
        const button = document.querySelector('input[type="submit"]')
        if (button && button.value && button.value.trim().toLowerCase() === 'become a tester') {
            return button
        }
        return undefined
    }

    const getLeaveButton = () => {
        const button = document.querySelector('input[type="submit"]')
        if (button && button.value && button.value.trim().toLowerCase() === 'leave the program') {
            return button
        }
        return undefined
    }

    if (getLeaveButton()) {
        return;
    }

    let button = getJoinButton();
    console.log('Button', button)
    if (!button) {
        setTimeout(() => location.reload(), 30000.0)
        console.log('Time:', (new Date()).toLocaleString(), '; Refreshing', location.href, 'in 30 seconds');
        return
    }

    button.click()
})()
