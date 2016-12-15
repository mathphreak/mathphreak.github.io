---
repo: electron-prebuilt-path
---
This is a small Node.js module I wrote to get the executable location of Electron whether run from inside Electron or not. The `electron` package on npm is set up so that `require('electron')` returns the path to the binary from a pure Node environment, but `require('electron')` returns the Electron APIs from within Electron. Through some minor shenanigans that took a few tries to get right, `require('electron-prebuilt-path')` always returns the path to the binary.
