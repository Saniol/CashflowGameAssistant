// setup-tests.js

import 'react-native';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

const {JSDOM} = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const {window} = jsdom;

function copyProps(src, target) {
    Object.defineProperties(target, {
        ...Object.getOwnPropertyDescriptors(src),
        ...Object.getOwnPropertyDescriptors(target),
    });
}

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
copyProps(window, global);

function _getCallerFile() {
    const originalFunc = Error.prepareStackTrace;
    let callerFile = 'unknown';
    try {
        const err = new Error();
        let currentFile;
        let stack;
        let stackRecord;

        Error.prepareStackTrace = function(err, stack) {
            return stack;
        };

        stack = err.stack;
        stackRecord = stack.shift();
        currentFile = stackRecord.getFileName() || '';

        while (stack.length) {
            stackRecord = stack.shift();
            callerFile = stackRecord.getFileName() || '';
            if (currentFile !== callerFile) {
                break;
            }
        }
    } catch (e) {
    } finally {
        Error.prepareStackTrace = originalFunc;
    }

    return callerFile;
}

function filteredConsole(original, message, ...optionalParams) {
    const callerFile = _getCallerFile();
    const blockPattern = /.*(react-dom.development.js|module is not correctly linked)/i;
    if (!blockPattern.test(callerFile) && !blockPattern.test(message)) {
        original(message, ...optionalParams);
    }
}

const originalConsoleWarn = console.warn;
const originalConsoleError = console.error;
console.error = (message, ...optionalParams) =>
    filteredConsole(originalConsoleError, message, ...optionalParams);
console.warn = (message, ...optionalParams) =>
    filteredConsole(originalConsoleWarn, message, ...optionalParams);

Enzyme.configure({adapter: new Adapter()});
