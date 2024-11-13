/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@firebase/util/dist/index.esm2017.js":
/*!***********************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.esm2017.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONSTANTS: () => (/* binding */ CONSTANTS),
/* harmony export */   DecodeBase64StringError: () => (/* binding */ DecodeBase64StringError),
/* harmony export */   Deferred: () => (/* binding */ Deferred),
/* harmony export */   ErrorFactory: () => (/* binding */ ErrorFactory),
/* harmony export */   FirebaseError: () => (/* binding */ FirebaseError),
/* harmony export */   MAX_VALUE_MILLIS: () => (/* binding */ MAX_VALUE_MILLIS),
/* harmony export */   RANDOM_FACTOR: () => (/* binding */ RANDOM_FACTOR),
/* harmony export */   Sha1: () => (/* binding */ Sha1),
/* harmony export */   areCookiesEnabled: () => (/* binding */ areCookiesEnabled),
/* harmony export */   assert: () => (/* binding */ assert),
/* harmony export */   assertionError: () => (/* binding */ assertionError),
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   base64: () => (/* binding */ base64),
/* harmony export */   base64Decode: () => (/* binding */ base64Decode),
/* harmony export */   base64Encode: () => (/* binding */ base64Encode),
/* harmony export */   base64urlEncodeWithoutPadding: () => (/* binding */ base64urlEncodeWithoutPadding),
/* harmony export */   calculateBackoffMillis: () => (/* binding */ calculateBackoffMillis),
/* harmony export */   contains: () => (/* binding */ contains),
/* harmony export */   createMockUserToken: () => (/* binding */ createMockUserToken),
/* harmony export */   createSubscribe: () => (/* binding */ createSubscribe),
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   deepCopy: () => (/* binding */ deepCopy),
/* harmony export */   deepEqual: () => (/* binding */ deepEqual),
/* harmony export */   deepExtend: () => (/* binding */ deepExtend),
/* harmony export */   errorPrefix: () => (/* binding */ errorPrefix),
/* harmony export */   extractQuerystring: () => (/* binding */ extractQuerystring),
/* harmony export */   getDefaultAppConfig: () => (/* binding */ getDefaultAppConfig),
/* harmony export */   getDefaultEmulatorHost: () => (/* binding */ getDefaultEmulatorHost),
/* harmony export */   getDefaultEmulatorHostnameAndPort: () => (/* binding */ getDefaultEmulatorHostnameAndPort),
/* harmony export */   getDefaults: () => (/* binding */ getDefaults),
/* harmony export */   getExperimentalSetting: () => (/* binding */ getExperimentalSetting),
/* harmony export */   getGlobal: () => (/* binding */ getGlobal),
/* harmony export */   getModularInstance: () => (/* binding */ getModularInstance),
/* harmony export */   getUA: () => (/* binding */ getUA),
/* harmony export */   isAdmin: () => (/* binding */ isAdmin),
/* harmony export */   isBrowser: () => (/* binding */ isBrowser),
/* harmony export */   isBrowserExtension: () => (/* binding */ isBrowserExtension),
/* harmony export */   isCloudflareWorker: () => (/* binding */ isCloudflareWorker),
/* harmony export */   isElectron: () => (/* binding */ isElectron),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   isIE: () => (/* binding */ isIE),
/* harmony export */   isIndexedDBAvailable: () => (/* binding */ isIndexedDBAvailable),
/* harmony export */   isMobileCordova: () => (/* binding */ isMobileCordova),
/* harmony export */   isNode: () => (/* binding */ isNode),
/* harmony export */   isNodeSdk: () => (/* binding */ isNodeSdk),
/* harmony export */   isReactNative: () => (/* binding */ isReactNative),
/* harmony export */   isSafari: () => (/* binding */ isSafari),
/* harmony export */   isUWP: () => (/* binding */ isUWP),
/* harmony export */   isValidFormat: () => (/* binding */ isValidFormat),
/* harmony export */   isValidTimestamp: () => (/* binding */ isValidTimestamp),
/* harmony export */   isWebWorker: () => (/* binding */ isWebWorker),
/* harmony export */   issuedAtTime: () => (/* binding */ issuedAtTime),
/* harmony export */   jsonEval: () => (/* binding */ jsonEval),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   ordinal: () => (/* binding */ ordinal),
/* harmony export */   promiseWithTimeout: () => (/* binding */ promiseWithTimeout),
/* harmony export */   querystring: () => (/* binding */ querystring),
/* harmony export */   querystringDecode: () => (/* binding */ querystringDecode),
/* harmony export */   safeGet: () => (/* binding */ safeGet),
/* harmony export */   stringLength: () => (/* binding */ stringLength),
/* harmony export */   stringToByteArray: () => (/* binding */ stringToByteArray),
/* harmony export */   stringify: () => (/* binding */ stringify),
/* harmony export */   uuidv4: () => (/* binding */ uuidv4),
/* harmony export */   validateArgCount: () => (/* binding */ validateArgCount),
/* harmony export */   validateCallback: () => (/* binding */ validateCallback),
/* harmony export */   validateContextObject: () => (/* binding */ validateContextObject),
/* harmony export */   validateIndexedDBOpenable: () => (/* binding */ validateIndexedDBOpenable),
/* harmony export */   validateNamespace: () => (/* binding */ validateNamespace)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
const CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
const assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
const assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const stringToByteArray$1 = function (str) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
const byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let pos = 0, c = 0;
    while (pos < bytes.length) {
        const c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
// TODO(dlarocque): Define this as a class, since we no longer target ES5.
const base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray(input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        const byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        const output = [];
        for (let i = 0; i < input.length; i += 3) {
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            let outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            let outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray(input, webSafe) {
        this.init_();
        const charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        const output = [];
        for (let i = 0; i < input.length;) {
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw new DecodeBase64StringError();
            }
            const outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                const outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    const outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_() {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (let i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * An error encountered while decoding base64 string.
 */
class DecodeBase64StringError extends Error {
    constructor() {
        super(...arguments);
        this.name = 'DecodeBase64StringError';
    }
}
/**
 * URL-safe base64 encoding
 */
const base64Encode = function (str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */
const base64urlEncodeWithoutPadding = function (str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
const base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (const prop in source) {
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */
function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    throw new Error('Unable to locate global object.');
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
/**
 * Attempt to read defaults from a JSON string provided to
 * process(.)env(.)__FIREBASE_DEFAULTS__ or a JSON file whose path is in
 * process(.)env(.)__FIREBASE_DEFAULTS_PATH__
 * The dots are in parens because certain compilers (Vite?) cannot
 * handle seeing that variable in comments.
 * See https://github.com/firebase/firebase-js-sdk/issues/6838
 */
const getDefaultsFromEnvVariable = () => {
    if (typeof process === 'undefined' || typeof process.env === 'undefined') {
        return;
    }
    const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
    if (defaultsJsonString) {
        return JSON.parse(defaultsJsonString);
    }
};
const getDefaultsFromCookie = () => {
    if (typeof document === 'undefined') {
        return;
    }
    let match;
    try {
        match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    }
    catch (e) {
        // Some environments such as Angular Universal SSR have a
        // `document` object but error on accessing `document.cookie`.
        return;
    }
    const decoded = match && base64Decode(match[1]);
    return decoded && JSON.parse(decoded);
};
/**
 * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
 * (1) if such an object exists as a property of `globalThis`
 * (2) if such an object was provided on a shell environment variable
 * (3) if such an object exists in a cookie
 * @public
 */
const getDefaults = () => {
    try {
        return (getDefaultsFromGlobal() ||
            getDefaultsFromEnvVariable() ||
            getDefaultsFromCookie());
    }
    catch (e) {
        /**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */
        console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
        return;
    }
};
/**
 * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
 * @public
 */
const getDefaultEmulatorHost = (productName) => { var _a, _b; return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName]; };
/**
 * Returns emulator hostname and port stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a pair of hostname and port like `["::1", 4000]` if available
 * @public
 */
const getDefaultEmulatorHostnameAndPort = (productName) => {
    const host = getDefaultEmulatorHost(productName);
    if (!host) {
        return undefined;
    }
    const separatorIndex = host.lastIndexOf(':'); // Finding the last since IPv6 addr also has colons.
    if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
        throw new Error(`Invalid host ${host} with no separate hostname and port!`);
    }
    // eslint-disable-next-line no-restricted-globals
    const port = parseInt(host.substring(separatorIndex + 1), 10);
    if (host[0] === '[') {
        // Bracket-quoted `[ipv6addr]:port` => return "ipv6addr" (without brackets).
        return [host.substring(1, separatorIndex - 1), port];
    }
    else {
        return [host.substring(0, separatorIndex), port];
    }
};
/**
 * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
 * @public
 */
const getDefaultAppConfig = () => { var _a; return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config; };
/**
 * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
 * prefixed by "_")
 * @public
 */
const getExperimentalSetting = (name) => { var _a; return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a[`_${name}`]; };

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Deferred {
    constructor() {
        this.reject = () => { };
        this.resolve = () => { };
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    /**
     * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    wrapCallback(callback) {
        return (error, value) => {
            if (error) {
                this.reject(error);
            }
            else {
                this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(() => { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createMockUserToken(token, projectId) {
    if (token.uid) {
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    // Unsecured JWTs use "none" as the algorithm.
    const header = {
        alg: 'none',
        type: 'JWT'
    };
    const project = projectId || 'demo-project';
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) {
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    const payload = Object.assign({ 
        // Set all required fields to decent defaults
        iss: `https://securetoken.google.com/${project}`, aud: project, iat, exp: iat + 3600, auth_time: iat, sub, user_id: sub, firebase: {
            sign_in_provider: 'custom',
            identities: {}
        } }, token);
    // Unsecured JWTs use the empty string as a signature.
    const signature = '';
    return [
        base64urlEncodeWithoutPadding(JSON.stringify(header)),
        base64urlEncodeWithoutPadding(JSON.stringify(payload)),
        signature
    ].join('.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected or specified.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    var _a;
    const forceEnvironment = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.forceEnvironment;
    if (forceEnvironment === 'node') {
        return true;
    }
    else if (forceEnvironment === 'browser') {
        return false;
    }
    try {
        return (Object.prototype.toString.call(global.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment.
 * Note: This will return true for certain test frameworks that are incompletely
 * mimicking a browser, and should not lead to assuming all browser APIs are
 * available.
 */
function isBrowser() {
    return typeof window !== 'undefined' || isWebWorker();
}
/**
 * Detect Web Worker context.
 */
function isWebWorker() {
    return (typeof WorkerGlobalScope !== 'undefined' &&
        typeof self !== 'undefined' &&
        self instanceof WorkerGlobalScope);
}
/**
 * Detect Cloudflare Worker context.
 */
function isCloudflareWorker() {
    return (typeof navigator !== 'undefined' &&
        navigator.userAgent === 'Cloudflare-Workers');
}
function isBrowserExtension() {
    const runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    const ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
    return (!isNode() &&
        !!navigator.userAgent &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'));
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */
function isIndexedDBAvailable() {
    try {
        return typeof indexedDB === 'object';
    }
    catch (e) {
        return false;
    }
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */
function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
        try {
            let preExist = true;
            const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = () => {
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) {
                    self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                }
                resolve(true);
            };
            request.onupgradeneeded = () => {
                preExist = false;
            };
            request.onerror = () => {
                var _a;
                reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        }
        catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */
function areCookiesEnabled() {
    if (typeof navigator === 'undefined' || !navigator.cookieEnabled) {
        return false;
    }
    return true;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // TypeScript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */
const ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class FirebaseError extends Error {
    constructor(
    /** The error code for this error. */
    code, message, 
    /** Custom data for this error. */
    customData) {
        super(message);
        this.code = code;
        this.customData = customData;
        /** The custom name for all FirebaseErrors. */
        this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // TODO(dlarocque): Replace this with `new.target`: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget
        //                   which we can now use since we no longer target ES5.
        Object.setPrototypeOf(this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
        }
    }
}
class ErrorFactory {
    constructor(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    create(code, ...data) {
        const customData = data[0] || {};
        const fullCode = `${this.service}/${code}`;
        const template = this.errors[code];
        const message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    }
}
function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
        const value = data[key];
        return value != null ? String(value) : `<${key}?>`;
    });
}
const PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data JavaScript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const decode = function (token) {
    let header = {}, claims = {}, data = {}, signature = '';
    try {
        const parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header,
        claims,
        data,
        signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isValidTimestamp = function (token) {
    const claims = decode(token).claims;
    const now = Math.floor(new Date().getTime() / 1000);
    let validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const issuedAtTime = function (token) {
    const claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isValidFormat = function (token) {
    const decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isAdmin = function (token) {
    const claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    const res = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys) {
        if (!bKeys.includes(k)) {
            return false;
        }
        const aProp = a[k];
        const bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
                return false;
            }
        }
        else if (aProp !== bProp) {
            return false;
        }
    }
    for (const k of bKeys) {
        if (!aKeys.includes(k)) {
            return false;
        }
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Rejects if the given promise doesn't resolve in timeInMS milliseconds.
 * @internal
 */
function promiseWithTimeout(promise, timeInMS = 2000) {
    const deferredPromise = new Deferred();
    setTimeout(() => deferredPromise.reject('timeout!'), timeInMS);
    promise.then(deferredPromise.resolve, deferredPromise.reject);
    return deferredPromise.promise;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams)) {
        if (Array.isArray(value)) {
            value.forEach(arrayVal => {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    const obj = {};
    const tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(token => {
        if (token) {
            const [key, value] = token.split('=');
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */
function extractQuerystring(url) {
    const queryStart = url.indexOf('?');
    if (!queryStart) {
        return '';
    }
    const fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
class Sha1 {
    constructor() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (let i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    reset() {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    compress_(buf, offset) {
        if (!offset) {
            offset = 0;
        }
        const W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (let i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (let i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (let i = 16; i < 80; i++) {
            const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        let a = this.chain_[0];
        let b = this.chain_[1];
        let c = this.chain_[2];
        let d = this.chain_[3];
        let e = this.chain_[4];
        let f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (let i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            const t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    }
    update(bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        const lengthMinusBlock = length - this.blockSize;
        let n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        const buf = this.buf_;
        let inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    }
    /** @override */
    digest() {
        const digest = [];
        let totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (let i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        let n = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    }
}

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
class ObserverProxy {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    constructor(executor, onNoObservers) {
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(() => {
            executor(this);
        })
            .catch(e => {
            this.error(e);
        });
    }
    next(value) {
        this.forEachObserver((observer) => {
            observer.next(value);
        });
    }
    error(error) {
        this.forEachObserver((observer) => {
            observer.error(error);
        });
        this.close(error);
    }
    complete() {
        this.forEachObserver((observer) => {
            observer.complete();
        });
        this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber synchronously to their
     *   call to subscribe().
     */
    subscribe(nextOrObserver, error, complete) {
        let observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error,
                complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(() => {
                try {
                    if (this.finalError) {
                        observer.error(this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    }
    forEachObserver(fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (let i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i, fn) {
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            if (this.observers !== undefined && this.observers[i] !== undefined) {
                try {
                    fn(this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    }
    close(err) {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            this.observers = undefined;
            this.onNoObservers = undefined;
        });
    }
}
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return (...args) => {
        Promise.resolve(true)
            .then(() => {
            fn(...args);
        })
            .catch((error) => {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (const method of methods) {
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
const validateArgCount = function (fnName, minCount, maxCount, argCount) {
    let argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        const error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argName) {
    return `${fnName} failed: ${argName} argument `;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentName, 
// eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in JavaScript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
const stringToByteArray = function (str) {
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            const high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            const low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
const stringLength = function (str) {
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Copied from https://stackoverflow.com/a/2117523
 * Generates a new uuid.
 * @public
 */
const uuidv4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The amount of milliseconds to exponentially increase.
 */
const DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */
const DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */
const MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */
const RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */
function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    const randomWait = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR *
        currBaseValue *
        // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
        // if we add or subtract.
        (Math.random() - 0.5) *
        2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provide English ordinal letters after a number
 */
function ordinal(i) {
    if (!Number.isFinite(i)) {
        return `${i}`;
    }
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    const cent = i % 100;
    if (cent >= 10 && cent <= 20) {
        return 'th';
    }
    const dec = i % 10;
    if (dec === 1) {
        return 'st';
    }
    if (dec === 2) {
        return 'nd';
    }
    if (dec === 3) {
        return 'rd';
    }
    return 'th';
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
    if (service && service._delegate) {
        return service._delegate;
    }
    else {
        return service;
    }
}


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAPI: () => (/* binding */ getAPI)
/* harmony export */ });
/* harmony import */ var _api_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/app */ "./src/api/app.ts");
/* harmony import */ var _api_check_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/check_in */ "./src/api/check_in.ts");
/* harmony import */ var _api_installations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/installations */ "./src/api/installations.ts");
/* harmony import */ var _api_fcm_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/fcm_token */ "./src/api/fcm_token.ts");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function getAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        const check_in = yield (0,_api_check_in__WEBPACK_IMPORTED_MODULE_1__.getCheckIn)();
        const installations = yield (0,_api_installations__WEBPACK_IMPORTED_MODULE_2__.getInstallations)();
        const fcm_token = yield (0,_api_fcm_token__WEBPACK_IMPORTED_MODULE_3__.getFCMToken)(check_in, installations);
        if (fcm_token.token === "") {
            return "";
        }
        const app_id = yield (0,_api_app__WEBPACK_IMPORTED_MODULE_0__.getAppId)(fcm_token);
        return app_id.id;
    });
}



/***/ }),

/***/ "./src/api/app.ts":
/*!************************!*\
  !*** ./src/api/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAppId: () => (/* binding */ getAppId)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/api/const.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function sha256(message) {
    return __awaiter(this, void 0, void 0, function* () {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = yield crypto.subtle.digest("SHA-256", msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    });
}
function getDate() {
    return __awaiter(this, void 0, void 0, function* () {
        const { date: date } = yield browser.storage.local.get({
            date: {
                date: "",
                timestamp: 0,
            },
        });
        const response = yield fetch("https://json2.dcinside.com/json0/app_check_A_rina_one_new.php", {
            "credentials": "omit",
            "headers": {
                "User-Agent": "dcinside.app"
            },
            "referrer": "http://www.dcinside.com",
            "method": "GET",
            "mode": "cors",
        });
        const json = yield response.json();
        if (date.date !== json[0].date) {
            date.date = json[0].date;
            date.timestamp = Date.now();
            yield browser.storage.local.set({
                date: date,
            });
        }
        return date;
    });
}
function fetchAppId(value_token, client_token) {
    return __awaiter(this, void 0, void 0, function* () {
        const form = new FormData();
        form.append("value_token", value_token);
        form.append("signature", _const__WEBPACK_IMPORTED_MODULE_0__["default"].APPLICATION.FINGERPRINT.SHA256);
        form.append("pkg", _const__WEBPACK_IMPORTED_MODULE_0__["default"].APPLICATION.PACKAGE_NAME);
        form.append("vCode", _const__WEBPACK_IMPORTED_MODULE_0__["default"].APPLICATION.VERSION);
        form.append("vName", _const__WEBPACK_IMPORTED_MODULE_0__["default"].APPLICATION.VERSION_NAME);
        form.append("client_token", client_token);
        const response = yield fetch("https://msign.dcinside.com/auth/mobile_app_verification", {
            credentials: "omit",
            headers: {
                "Accept": "application/json",
                "User-Agent": "okhttp",
            },
            referrer: "http://www.dcinside.com",
            body: form,
            method: "POST",
            mode: "cors"
        });
        const json = yield response.json();
        return json.app_id;
    });
}
function getAppId(fcm_token) {
    return __awaiter(this, void 0, void 0, function* () {
        const { app_id: app_id } = yield browser.storage.local.get({
            app_id: {
                id: "",
                timestamp: 0,
            },
        });
        const date = yield getDate();
        if (app_id.id === "" || app_id.timestamp < fcm_token.timestamp || app_id.timestamp < date.timestamp) {
            const value_token = yield sha256(`dcArdchk_${date.date}`);
            app_id.id = yield fetchAppId(value_token, fcm_token.token);
            app_id.timestamp = Date.now();
            yield browser.storage.local.set({
                app_id: app_id,
            });
        }
        return app_id;
    });
}



/***/ }),

/***/ "./src/api/check_in.ts":
/*!*****************************!*\
  !*** ./src/api/check_in.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCheckIn: () => (/* binding */ getCheckIn)
/* harmony export */ });
/* harmony import */ var lossless_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lossless-json */ "./node_modules/lossless-json/lib/esm/index.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function fetchCheckIn(check_in) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = (0,lossless_json__WEBPACK_IMPORTED_MODULE_0__.stringify)({
            id: check_in.id,
            checkin: {
                last_checkin_msec: check_in.timestamp,
                type: 3,
            },
            security_token: check_in.token,
            version: 2,
        });
        const response = yield fetch("https://device-provisioning.googleapis.com/checkin", {
            credentials: "omit",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "User-Agent": "okhttp",
            },
            body: body,
            method: "POST",
            mode: "cors"
        });
        const json = (0,lossless_json__WEBPACK_IMPORTED_MODULE_0__.parse)(yield response.text(), null, lossless_json__WEBPACK_IMPORTED_MODULE_0__.parseNumberAndBigInt);
        return {
            id: json.android_id,
            token: json.security_token,
            timestamp: json.last_checkin_msec,
            version_info: json.version_info,
        };
    });
}
function getCheckIn() {
    return __awaiter(this, void 0, void 0, function* () {
        let { check_in: check_in } = yield browser.storage.local.get({
            check_in: { id: 0, token: 0, timestamp: 0, version_info: "" },
        });
        if (Date.now() - Number(check_in.timestamp) > 24 * 60 * 60 * 1000) {
            check_in = yield fetchCheckIn(check_in);
            yield browser.storage.local.set({
                check_in: check_in,
            });
        }
        return check_in;
    });
}



/***/ }),

/***/ "./src/api/const.ts":
/*!**************************!*\
  !*** ./src/api/const.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Application = {
    PACKAGE_NAME: "com.dcinside.app.android",
    VERSION: "100101",
    VERSION_NAME: "5.0.2",
    FINGERPRINT: {
        SHA1: "43bd70dfc365ec1749f0424d28174da44ee7659d",
        SHA256: "5rJxRKJ2YLHgBgj6RdMZBl2X0KcftUuMoXVug0bsKd0=",
    },
};
const FIREBASE_PROJECT_ID = "dcinside-b3f40";
const FIREBASE_SENDER_ID = "477369754343";
const Firebase = {
    API_KEY: "AIzaSyDcbVof_4Bi2GwJ1H8NjSwSTaMPPZeCE38",
    AUTH_DOMAIN: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
    DATABASE_URL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com`,
    PROJECT_ID: `${FIREBASE_PROJECT_ID}`,
    STORAGE_BUCKET: `${FIREBASE_PROJECT_ID}.appspot.com`,
    MESSAGING_SENDER_ID: `${FIREBASE_SENDER_ID}`,
    APP_ID: `1:${FIREBASE_SENDER_ID}:android:d2ffdd960120a207727842`,
    APP_NAME_HASH: "R1dAH9Ui7M-ynoznwBdw01tLxhI",
};
const Constants = {
    APPLICATION: Application,
    FIREBASE: Firebase,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Constants);


/***/ }),

/***/ "./src/api/fcm_token.ts":
/*!******************************!*\
  !*** ./src/api/fcm_token.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFCMToken: () => (/* binding */ getFCMToken)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/api/const.ts");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function fetchFCMToken(android_id, security_token, version_info, firebaseInstallationsId, firebaseInstallationsAuth) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const form = new URLSearchParams({
            "app": _const__WEBPACK_IMPORTED_MODULE_0__["default"].APPLICATION.PACKAGE_NAME,
            "app_ver": _const__WEBPACK_IMPORTED_MODULE_0__["default"].APPLICATION.VERSION,
            "cert": _const__WEBPACK_IMPORTED_MODULE_0__["default"].APPLICATION.FINGERPRINT.SHA1,
            "device": android_id.toString(),
            "sender": _const__WEBPACK_IMPORTED_MODULE_0__["default"].FIREBASE.MESSAGING_SENDER_ID,
            "info": version_info,
            "X-app_ver": _const__WEBPACK_IMPORTED_MODULE_0__["default"].APPLICATION.VERSION,
            "X-app_ver_name": _const__WEBPACK_IMPORTED_MODULE_0__["default"].APPLICATION.VERSION_NAME,
            "X-subtype": _const__WEBPACK_IMPORTED_MODULE_0__["default"].FIREBASE.MESSAGING_SENDER_ID,
            "X-appid": firebaseInstallationsId,
            "X-Goog-Firebase-Installations-Auth": firebaseInstallationsAuth,
            "X-firebase-app-name-hash": _const__WEBPACK_IMPORTED_MODULE_0__["default"].FIREBASE.APP_NAME_HASH,
            "X-gmp_app_id": _const__WEBPACK_IMPORTED_MODULE_0__["default"].FIREBASE.APP_ID,
            "X-scope": "*",
        });
        const response = yield fetch("https://fcmtoken.googleapis.com/register", {
            credentials: "omit",
            headers: {
                "Authorization": `AidLogin ${android_id}:${security_token}`,
                "app": _const__WEBPACK_IMPORTED_MODULE_0__["default"].APPLICATION.PACKAGE_NAME,
                "User-Agent": "okhttp",
            },
            body: form,
            method: "POST",
            mode: "cors"
        });
        const text = yield response.text();
        return (_a = (new URLSearchParams(text)).get("token")) !== null && _a !== void 0 ? _a : "";
    });
}
function getFCMToken(check_in, installations) {
    return __awaiter(this, void 0, void 0, function* () {
        const { fcm_token: fcm_token } = yield browser.storage.local.get({
            fcm_token: {
                token: "",
                timestamp: 0,
            },
        });
        if (fcm_token.token === "" || fcm_token.timestamp < check_in.timestamp || fcm_token.timestamp < installations.timestamp) {
            fcm_token.token = yield fetchFCMToken(check_in.id, check_in.token, check_in.version_info, installations.id, installations.token);
            fcm_token.timestamp = Date.now();
            yield browser.storage.local.set({
                fcm_token: fcm_token,
            });
        }
        return fcm_token;
    });
}



/***/ }),

/***/ "./src/api/installations.ts":
/*!**********************************!*\
  !*** ./src/api/installations.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInstallations: () => (/* binding */ getInstallations)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/esm/index.esm.js");
/* harmony import */ var firebase_installations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/installations */ "./node_modules/firebase/installations/dist/esm/index.esm.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "./src/api/const.ts");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const options = {
    apiKey: _const__WEBPACK_IMPORTED_MODULE_2__["default"].FIREBASE.API_KEY,
    authDomain: _const__WEBPACK_IMPORTED_MODULE_2__["default"].FIREBASE.AUTH_DOMAIN,
    databaseURL: _const__WEBPACK_IMPORTED_MODULE_2__["default"].FIREBASE.DATABASE_URL,
    projectId: _const__WEBPACK_IMPORTED_MODULE_2__["default"].FIREBASE.PROJECT_ID,
    storageBucket: _const__WEBPACK_IMPORTED_MODULE_2__["default"].FIREBASE.STORAGE_BUCKET,
    messagingSenderId: _const__WEBPACK_IMPORTED_MODULE_2__["default"].FIREBASE.MESSAGING_SENDER_ID,
    appId: _const__WEBPACK_IMPORTED_MODULE_2__["default"].FIREBASE.APP_ID
};
window.Headers = new Proxy(window.Headers, {
    construct(target, argumentsList, newTarget) {
        const headers = Reflect.construct(target, argumentsList, newTarget);
        headers.append("User-Agent", "okhttp");
        return headers;
    },
});
const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(options);
const firebaseInstallations = (0,firebase_installations__WEBPACK_IMPORTED_MODULE_1__.getInstallations)(firebaseApp);
function getInstallations() {
    return __awaiter(this, void 0, void 0, function* () {
        const { installations: installations } = yield browser.storage.local.get({
            installations: {
                id: "",
                token: "",
                timestamp: 0,
            },
        });
        const id = yield (0,firebase_installations__WEBPACK_IMPORTED_MODULE_1__.getId)(firebaseInstallations);
        const token = yield (0,firebase_installations__WEBPACK_IMPORTED_MODULE_1__.getToken)(firebaseInstallations);
        if (!(installations.id === id && installations.token === token)) {
            installations.id = id;
            installations.token = token;
            installations.timestamp = Date.now();
            yield browser.storage.local.set({
                installations: installations,
            });
        }
        return installations;
    });
}



/***/ }),

/***/ "./src/api/voice_reple.ts":
/*!********************************!*\
  !*** ./src/api/voice_reple.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   voiceReple: () => (/* binding */ voiceReple)
/* harmony export */ });

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function voiceReple(gall_id, app_id, file) {
    return __awaiter(this, void 0, void 0, function* () {
        const form = new FormData();
        form.append("gall_id", gall_id);
        form.append("upfile", file.slice(0, file.size, "audio/m4a"), file.name);
        form.append("name", "ㅇㅇ");
        form.append("app_id", app_id);
        form.append("down_chk", "1");
        const response = yield fetch("https://upload.dcinside.com/_app_vr_board.php", {
            credentials: "omit",
            headers: {
                "Accept": "application/json",
                "User-Agent": "dcinside.app",
            },
            // @ts-ignore
            body: form,
            referrer: "http://www.dcinside.com",
            method: "POST",
            mode: "cors"
        });
        const json = yield response.json();
        return json[0].cause;
    });
}



/***/ }),

/***/ "./node_modules/@firebase/app/dist/esm/index.esm2017.js":
/*!**************************************************************!*\
  !*** ./node_modules/@firebase/app/dist/esm/index.esm2017.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseError: () => (/* reexport safe */ _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError),
/* harmony export */   SDK_VERSION: () => (/* binding */ SDK_VERSION),
/* harmony export */   _DEFAULT_ENTRY_NAME: () => (/* binding */ DEFAULT_ENTRY_NAME),
/* harmony export */   _addComponent: () => (/* binding */ _addComponent),
/* harmony export */   _addOrOverwriteComponent: () => (/* binding */ _addOrOverwriteComponent),
/* harmony export */   _apps: () => (/* binding */ _apps),
/* harmony export */   _clearComponents: () => (/* binding */ _clearComponents),
/* harmony export */   _components: () => (/* binding */ _components),
/* harmony export */   _getProvider: () => (/* binding */ _getProvider),
/* harmony export */   _isFirebaseApp: () => (/* binding */ _isFirebaseApp),
/* harmony export */   _isFirebaseServerApp: () => (/* binding */ _isFirebaseServerApp),
/* harmony export */   _registerComponent: () => (/* binding */ _registerComponent),
/* harmony export */   _removeServiceInstance: () => (/* binding */ _removeServiceInstance),
/* harmony export */   _serverApps: () => (/* binding */ _serverApps),
/* harmony export */   deleteApp: () => (/* binding */ deleteApp),
/* harmony export */   getApp: () => (/* binding */ getApp),
/* harmony export */   getApps: () => (/* binding */ getApps),
/* harmony export */   initializeApp: () => (/* binding */ initializeApp),
/* harmony export */   initializeServerApp: () => (/* binding */ initializeServerApp),
/* harmony export */   onLog: () => (/* binding */ onLog),
/* harmony export */   registerVersion: () => (/* binding */ registerVersion),
/* harmony export */   setLogLevel: () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/index.js");






/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PlatformLoggerServiceImpl {
    constructor(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
        const providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(provider => {
            if (isVersionServiceProvider(provider)) {
                const service = provider.getImmediate();
                return `${service.library}/${service.version}`;
            }
            else {
                return null;
            }
        })
            .filter(logString => logString)
            .join(' ');
    }
}
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* ComponentType.VERSION */;
}

const name$q = "@firebase/app";
const version$1 = "0.10.15";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.Logger('@firebase/app');

const name$p = "@firebase/app-compat";

const name$o = "@firebase/analytics-compat";

const name$n = "@firebase/analytics";

const name$m = "@firebase/app-check-compat";

const name$l = "@firebase/app-check";

const name$k = "@firebase/auth";

const name$j = "@firebase/auth-compat";

const name$i = "@firebase/database";

const name$h = "@firebase/data-connect";

const name$g = "@firebase/database-compat";

const name$f = "@firebase/functions";

const name$e = "@firebase/functions-compat";

const name$d = "@firebase/installations";

const name$c = "@firebase/installations-compat";

const name$b = "@firebase/messaging";

const name$a = "@firebase/messaging-compat";

const name$9 = "@firebase/performance";

const name$8 = "@firebase/performance-compat";

const name$7 = "@firebase/remote-config";

const name$6 = "@firebase/remote-config-compat";

const name$5 = "@firebase/storage";

const name$4 = "@firebase/storage-compat";

const name$3 = "@firebase/firestore";

const name$2 = "@firebase/vertexai";

const name$1 = "@firebase/firestore-compat";

const name = "firebase";
const version = "11.0.1";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default app name
 *
 * @internal
 */
const DEFAULT_ENTRY_NAME = '[DEFAULT]';
const PLATFORM_LOG_STRING = {
    [name$q]: 'fire-core',
    [name$p]: 'fire-core-compat',
    [name$n]: 'fire-analytics',
    [name$o]: 'fire-analytics-compat',
    [name$l]: 'fire-app-check',
    [name$m]: 'fire-app-check-compat',
    [name$k]: 'fire-auth',
    [name$j]: 'fire-auth-compat',
    [name$i]: 'fire-rtdb',
    [name$h]: 'fire-data-connect',
    [name$g]: 'fire-rtdb-compat',
    [name$f]: 'fire-fn',
    [name$e]: 'fire-fn-compat',
    [name$d]: 'fire-iid',
    [name$c]: 'fire-iid-compat',
    [name$b]: 'fire-fcm',
    [name$a]: 'fire-fcm-compat',
    [name$9]: 'fire-perf',
    [name$8]: 'fire-perf-compat',
    [name$7]: 'fire-rc',
    [name$6]: 'fire-rc-compat',
    [name$5]: 'fire-gcs',
    [name$4]: 'fire-gcs-compat',
    [name$3]: 'fire-fst',
    [name$1]: 'fire-fst-compat',
    [name$2]: 'fire-vertex',
    'fire-js': 'fire-js',
    [name]: 'fire-js-all'
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
const _apps = new Map();
/**
 * @internal
 */
const _serverApps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */
function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    }
    catch (e) {
        logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
}
/**
 *
 * @internal
 */
function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */
function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug(`There were multiple attempts to register component ${componentName}.`);
        return false;
    }
    _components.set(componentName, component);
    // add the component to existing app instances
    for (const app of _apps.values()) {
        _addComponent(app, component);
    }
    for (const serverApp of _serverApps.values()) {
        _addComponent(serverApp, component);
    }
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */
function _getProvider(app, name) {
    const heartbeatController = app.container
        .getProvider('heartbeat')
        .getImmediate({ optional: true });
    if (heartbeatController) {
        void heartbeatController.triggerHeartbeat();
    }
    return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */
function _removeServiceInstance(app, name, instanceIdentifier = DEFAULT_ENTRY_NAME) {
    _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 *
 * @param obj - an object of type FirebaseApp or FirebaseOptions.
 *
 * @returns true if the provide object is of type FirebaseApp.
 *
 * @internal
 */
function _isFirebaseApp(obj) {
    return obj.options !== undefined;
}
/**
 *
 * @param obj - an object of type FirebaseApp.
 *
 * @returns true if the provided object is of type FirebaseServerAppImpl.
 *
 * @internal
 */
function _isFirebaseServerApp(obj) {
    return obj.settings !== undefined;
}
/**
 * Test only
 *
 * @internal
 */
function _clearComponents() {
    _components.clear();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS = {
    ["no-app" /* AppError.NO_APP */]: "No Firebase App '{$appName}' has been created - " +
        'call initializeApp() first',
    ["bad-app-name" /* AppError.BAD_APP_NAME */]: "Illegal App name: '{$appName}'",
    ["duplicate-app" /* AppError.DUPLICATE_APP */]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted" /* AppError.APP_DELETED */]: "Firebase App named '{$appName}' already deleted",
    ["server-app-deleted" /* AppError.SERVER_APP_DELETED */]: 'Firebase Server App has been deleted',
    ["no-options" /* AppError.NO_OPTIONS */]: 'Need to provide options, when not being deployed to hosting via source.',
    ["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */]: 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    ["invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */]: 'First argument to `onLog` must be null or a function.',
    ["idb-open" /* AppError.IDB_OPEN */]: 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-get" /* AppError.IDB_GET */]: 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-set" /* AppError.IDB_WRITE */]: 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-delete" /* AppError.IDB_DELETE */]: 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    ["finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */]: 'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    ["invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */]: 'FirebaseServerApp is not for use in browser environments.'
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAppImpl {
    constructor(options, config, container) {
        this._isDeleted = false;
        this._options = Object.assign({}, options);
        this._config = Object.assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled =
            config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('app', () => this, "PUBLIC" /* ComponentType.PUBLIC */));
    }
    get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
    }
    get name() {
        this.checkDestroyed();
        return this._name;
    }
    get options() {
        this.checkDestroyed();
        return this._options;
    }
    get config() {
        this.checkDestroyed();
        return this._config;
    }
    get container() {
        return this._container;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(val) {
        this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    checkDestroyed() {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted" /* AppError.APP_DELETED */, { appName: this._name });
        }
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseServerAppImpl extends FirebaseAppImpl {
    constructor(options, serverConfig, name, container) {
        // Build configuration parameters for the FirebaseAppImpl base class.
        const automaticDataCollectionEnabled = serverConfig.automaticDataCollectionEnabled !== undefined
            ? serverConfig.automaticDataCollectionEnabled
            : false;
        // Create the FirebaseAppSettings object for the FirebaseAppImp constructor.
        const config = {
            name,
            automaticDataCollectionEnabled
        };
        if (options.apiKey !== undefined) {
            // Construct the parent FirebaseAppImp object.
            super(options, config, container);
        }
        else {
            const appImpl = options;
            super(appImpl.options, config, container);
        }
        // Now construct the data for the FirebaseServerAppImpl.
        this._serverConfig = Object.assign({ automaticDataCollectionEnabled }, serverConfig);
        this._finalizationRegistry = null;
        if (typeof FinalizationRegistry !== 'undefined') {
            this._finalizationRegistry = new FinalizationRegistry(() => {
                this.automaticCleanup();
            });
        }
        this._refCount = 0;
        this.incRefCount(this._serverConfig.releaseOnDeref);
        // Do not retain a hard reference to the dref object, otherwise the FinalizationRegistry
        // will never trigger.
        this._serverConfig.releaseOnDeref = undefined;
        serverConfig.releaseOnDeref = undefined;
        registerVersion(name$q, version$1, 'serverapp');
    }
    toJSON() {
        return undefined;
    }
    get refCount() {
        return this._refCount;
    }
    // Increment the reference count of this server app. If an object is provided, register it
    // with the finalization registry.
    incRefCount(obj) {
        if (this.isDeleted) {
            return;
        }
        this._refCount++;
        if (obj !== undefined && this._finalizationRegistry !== null) {
            this._finalizationRegistry.register(obj, this);
        }
    }
    // Decrement the reference count.
    decRefCount() {
        if (this.isDeleted) {
            return 0;
        }
        return --this._refCount;
    }
    // Invoked by the FinalizationRegistry callback to note that this app should go through its
    // reference counts and delete itself if no reference count remain. The coordinating logic that
    // handles this is in deleteApp(...).
    automaticCleanup() {
        void deleteApp(this);
    }
    get settings() {
        this.checkDestroyed();
        return this._serverConfig;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    checkDestroyed() {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("server-app-deleted" /* AppError.SERVER_APP_DELETED */);
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The current SDK version.
 *
 * @public
 */
const SDK_VERSION = version;
function initializeApp(_options, rawConfig = {}) {
    let options = _options;
    if (typeof rawConfig !== 'object') {
        const name = rawConfig;
        rawConfig = { name };
    }
    const config = Object.assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
    const name = config.name;
    if (typeof name !== 'string' || !name) {
        throw ERROR_FACTORY.create("bad-app-name" /* AppError.BAD_APP_NAME */, {
            appName: String(name)
        });
    }
    options || (options = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultAppConfig)());
    if (!options) {
        throw ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */);
    }
    const existingApp = _apps.get(name);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(options, existingApp.options) &&
            (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(config, existingApp.config)) {
            return existingApp;
        }
        else {
            throw ERROR_FACTORY.create("duplicate-app" /* AppError.DUPLICATE_APP */, { appName: name });
        }
    }
    const container = new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.ComponentContainer(name);
    for (const component of _components.values()) {
        container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name, newApp);
    return newApp;
}
function initializeServerApp(_options, _serverAppConfig) {
    if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isBrowser)() && !(0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isWebWorker)()) {
        // FirebaseServerApp isn't designed to be run in browsers.
        throw ERROR_FACTORY.create("invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */);
    }
    if (_serverAppConfig.automaticDataCollectionEnabled === undefined) {
        _serverAppConfig.automaticDataCollectionEnabled = false;
    }
    let appOptions;
    if (_isFirebaseApp(_options)) {
        appOptions = _options.options;
    }
    else {
        appOptions = _options;
    }
    // Build an app name based on a hash of the configuration options.
    const nameObj = Object.assign(Object.assign({}, _serverAppConfig), appOptions);
    // However, Do not mangle the name based on releaseOnDeref, since it will vary between the
    // construction of FirebaseServerApp instances. For example, if the object is the request headers.
    if (nameObj.releaseOnDeref !== undefined) {
        delete nameObj.releaseOnDeref;
    }
    const hashCode = (s) => {
        return [...s].reduce((hash, c) => (Math.imul(31, hash) + c.charCodeAt(0)) | 0, 0);
    };
    if (_serverAppConfig.releaseOnDeref !== undefined) {
        if (typeof FinalizationRegistry === 'undefined') {
            throw ERROR_FACTORY.create("finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */, {});
        }
    }
    const nameString = '' + hashCode(JSON.stringify(nameObj));
    const existingApp = _serverApps.get(nameString);
    if (existingApp) {
        existingApp.incRefCount(_serverAppConfig.releaseOnDeref);
        return existingApp;
    }
    const container = new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.ComponentContainer(nameString);
    for (const component of _components.values()) {
        container.addComponent(component);
    }
    const newApp = new FirebaseServerAppImpl(appOptions, _serverAppConfig, nameString, container);
    _serverApps.set(nameString, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */
function getApp(name = DEFAULT_ENTRY_NAME) {
    const app = _apps.get(name);
    if (!app && name === DEFAULT_ENTRY_NAME && (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultAppConfig)()) {
        return initializeApp();
    }
    if (!app) {
        throw ERROR_FACTORY.create("no-app" /* AppError.NO_APP */, { appName: name });
    }
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */
function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */
async function deleteApp(app) {
    let cleanupProviders = false;
    const name = app.name;
    if (_apps.has(name)) {
        cleanupProviders = true;
        _apps.delete(name);
    }
    else if (_serverApps.has(name)) {
        const firebaseServerApp = app;
        if (firebaseServerApp.decRefCount() <= 0) {
            _serverApps.delete(name);
            cleanupProviders = true;
        }
    }
    if (cleanupProviders) {
        await Promise.all(app.container
            .getProviders()
            .map(provider => provider.delete()));
        app.isDeleted = true;
    }
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */
function registerVersion(libraryKeyOrName, version, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
        library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        const warning = [
            `Unable to register library "${library}" with version "${version}":`
        ];
        if (libraryMismatch) {
            warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
        }
        if (libraryMismatch && versionMismatch) {
            warning.push('and');
        }
        if (versionMismatch) {
            warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
        }
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component(`${library}-version`, () => ({ library, version }), "VERSION" /* ComponentType.VERSION */));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */
function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
        throw ERROR_FACTORY.create("invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */);
    }
    (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setUserLogHandler)(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */
function setLogLevel(logLevel) {
    (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setLogLevel)(logLevel);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DB_NAME = 'firebase-heartbeat-database';
const DB_VERSION = 1;
const STORE_NAME = 'firebase-heartbeat-store';
let dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_3__.openDB)(DB_NAME, DB_VERSION, {
            upgrade: (db, oldVersion) => {
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (oldVersion) {
                    case 0:
                        try {
                            db.createObjectStore(STORE_NAME);
                        }
                        catch (e) {
                            // Safari/iOS browsers throw occasional exceptions on
                            // db.createObjectStore() that may be a bug. Avoid blocking
                            // the rest of the app functionality.
                            console.warn(e);
                        }
                }
            }
        }).catch(e => {
            throw ERROR_FACTORY.create("idb-open" /* AppError.IDB_OPEN */, {
                originalErrorMessage: e.message
            });
        });
    }
    return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app) {
    try {
        const db = await getDbPromise();
        const tx = db.transaction(STORE_NAME);
        const result = await tx.objectStore(STORE_NAME).get(computeKey(app));
        // We already have the value but tx.done can throw,
        // so we need to await it here to catch errors
        await tx.done;
        return result;
    }
    catch (e) {
        if (e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError) {
            logger.warn(e.message);
        }
        else {
            const idbGetError = ERROR_FACTORY.create("idb-get" /* AppError.IDB_GET */, {
                originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
            });
            logger.warn(idbGetError.message);
        }
    }
}
async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    try {
        const db = await getDbPromise();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const objectStore = tx.objectStore(STORE_NAME);
        await objectStore.put(heartbeatObject, computeKey(app));
        await tx.done;
    }
    catch (e) {
        if (e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError) {
            logger.warn(e.message);
        }
        else {
            const idbGetError = ERROR_FACTORY.create("idb-set" /* AppError.IDB_WRITE */, {
                originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
            });
            logger.warn(idbGetError.message);
        }
    }
}
function computeKey(app) {
    return `${app.name}!${app.options.appId}`;
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const MAX_HEADER_BYTES = 1024;
// 30 days
const STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;
class HeartbeatServiceImpl {
    constructor(container) {
        this.container = container;
        /**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */
        this._heartbeatsCache = null;
        const app = this.container.getProvider('app').getImmediate();
        this._storage = new HeartbeatStorageImpl(app);
        this._heartbeatsCachePromise = this._storage.read().then(result => {
            this._heartbeatsCache = result;
            return result;
        });
    }
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */
    async triggerHeartbeat() {
        var _a, _b;
        try {
            const platformLogger = this.container
                .getProvider('platform-logger')
                .getImmediate();
            // This is the "Firebase user agent" string from the platform logger
            // service, not the browser user agent.
            const agent = platformLogger.getPlatformInfoString();
            const date = getUTCDateString();
            if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null) {
                this._heartbeatsCache = await this._heartbeatsCachePromise;
                // If we failed to construct a heartbeats cache, then return immediately.
                if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
                    return;
                }
            }
            // Do not store a heartbeat if one is already stored for this day
            // or if a header has already been sent today.
            if (this._heartbeatsCache.lastSentHeartbeatDate === date ||
                this._heartbeatsCache.heartbeats.some(singleDateHeartbeat => singleDateHeartbeat.date === date)) {
                return;
            }
            else {
                // There is no entry for this date. Create one.
                this._heartbeatsCache.heartbeats.push({ date, agent });
            }
            // Remove entries older than 30 days.
            this._heartbeatsCache.heartbeats =
                this._heartbeatsCache.heartbeats.filter(singleDateHeartbeat => {
                    const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
                    const now = Date.now();
                    return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
                });
            return this._storage.overwrite(this._heartbeatsCache);
        }
        catch (e) {
            logger.warn(e);
        }
    }
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */
    async getHeartbeatsHeader() {
        var _a;
        try {
            if (this._heartbeatsCache === null) {
                await this._heartbeatsCachePromise;
            }
            // If it's still null or the array is empty, there is no data to send.
            if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null ||
                this._heartbeatsCache.heartbeats.length === 0) {
                return '';
            }
            const date = getUTCDateString();
            // Extract as many heartbeats from the cache as will fit under the size limit.
            const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
            const headerString = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.base64urlEncodeWithoutPadding)(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
            // Store last sent date to prevent another being logged/sent for the same day.
            this._heartbeatsCache.lastSentHeartbeatDate = date;
            if (unsentEntries.length > 0) {
                // Store any unsent entries if they exist.
                this._heartbeatsCache.heartbeats = unsentEntries;
                // This seems more likely than emptying the array (below) to lead to some odd state
                // since the cache isn't empty and this will be called again on the next request,
                // and is probably safest if we await it.
                await this._storage.overwrite(this._heartbeatsCache);
            }
            else {
                this._heartbeatsCache.heartbeats = [];
                // Do not wait for this, to reduce latency.
                void this._storage.overwrite(this._heartbeatsCache);
            }
            return headerString;
        }
        catch (e) {
            logger.warn(e);
            return '';
        }
    }
}
function getUTCDateString() {
    const today = new Date();
    // Returns date format 'YYYY-MM-DD'
    return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
    // Heartbeats grouped by user agent in the standard format to be sent in
    // the header.
    const heartbeatsToSend = [];
    // Single date format heartbeats that are not sent.
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache) {
        // Look for an existing entry with the same user agent.
        const heartbeatEntry = heartbeatsToSend.find(hb => hb.agent === singleDateHeartbeat.agent);
        if (!heartbeatEntry) {
            // If no entry for this user agent exists, create one.
            heartbeatsToSend.push({
                agent: singleDateHeartbeat.agent,
                dates: [singleDateHeartbeat.date]
            });
            if (countBytes(heartbeatsToSend) > maxSize) {
                // If the header would exceed max size, remove the added heartbeat
                // entry and stop adding to the header.
                heartbeatsToSend.pop();
                break;
            }
        }
        else {
            heartbeatEntry.dates.push(singleDateHeartbeat.date);
            // If the header would exceed max size, remove the added date
            // and stop adding to the header.
            if (countBytes(heartbeatsToSend) > maxSize) {
                heartbeatEntry.dates.pop();
                break;
            }
        }
        // Pop unsent entry from queue. (Skipped if adding the entry exceeded
        // quota and the loop breaks early.)
        unsentEntries = unsentEntries.slice(1);
    }
    return {
        heartbeatsToSend,
        unsentEntries
    };
}
class HeartbeatStorageImpl {
    constructor(app) {
        this.app = app;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    async runIndexedDBEnvironmentCheck() {
        if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isIndexedDBAvailable)()) {
            return false;
        }
        else {
            return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.validateIndexedDBOpenable)()
                .then(() => true)
                .catch(() => false);
        }
    }
    /**
     * Read all heartbeats.
     */
    async read() {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return { heartbeats: [] };
        }
        else {
            const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
            if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
                return idbHeartbeatObject;
            }
            else {
                return { heartbeats: [] };
            }
        }
    }
    // overwrite the storage with the provided heartbeats
    async overwrite(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return;
        }
        else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: heartbeatsObject.heartbeats
            });
        }
    }
    // add heartbeats
    async add(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return;
        }
        else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: [
                    ...existingHeartbeatsObject.heartbeats,
                    ...heartbeatsObject.heartbeats
                ]
            });
        }
    }
}
/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */
function countBytes(heartbeatsCache) {
    // base64 has a restricted set of characters, all of which should be 1 byte.
    return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.base64urlEncodeWithoutPadding)(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: heartbeatsCache })).length;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
    _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('platform-logger', container => new PlatformLoggerServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */));
    _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('heartbeat', container => new HeartbeatServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */));
    // Register `app` package.
    registerVersion(name$q, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm2017, cjs2017, etc during the compilation
    registerVersion(name$q, version$1, 'esm2017');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}

/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */
registerCoreComponents('');


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/component/dist/esm/index.esm2017.js":
/*!********************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/esm/index.esm2017.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component),
/* harmony export */   ComponentContainer: () => (/* binding */ ComponentContainer),
/* harmony export */   Provider: () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");


/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
class Component {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    constructor(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* InstantiationMode.LAZY */;
        this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
    }
    setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    }
    setServiceProps(props) {
        this.serviceProps = props;
        return this;
    }
    setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
class Provider {
    constructor(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide multiple instances of a service
     * if this.component.multipleInstances is true.
     */
    get(identifier) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()) {
                // initialize the service if it can be auto-initialized
                try {
                    const instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                }
                catch (e) {
                    // when the instance factory throws an exception during get(), it should not cause
                    // a fatal error. We just return the unresolved promise in this case.
                }
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) ||
            this.shouldAutoInitialize()) {
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
            }
            catch (e) {
                if (optional) {
                    return null;
                }
                else {
                    throw e;
                }
            }
        }
        else {
            // In case a component is not initialized and should/cannot be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
                return null;
            }
            else {
                throw Error(`Service ${this.name} is not available`);
            }
        }
    }
    getComponent() {
        return this.component;
    }
    setComponent(component) {
        if (component.name !== this.name) {
            throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
        }
        if (this.component) {
            throw Error(`Component for ${this.name} has already been provided`);
        }
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) {
            return;
        }
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        // Create service instances for the pending promises and resolve them
        // NOTE: if this.multipleInstances is false, only the default instance will be created
        // and all promises with resolve with it regardless of the identifier.
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                instanceDeferred.resolve(instance);
            }
            catch (e) {
                // when the instance factory throws an exception, it should not cause
                // a fatal error. We just leave the promise unresolved.
            }
        }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME) {
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
            ...services
                .filter(service => 'INTERNAL' in service) // legacy services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(service => service.INTERNAL.delete()),
            ...services
                .filter(service => '_delete' in service) // modularized services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(service => service._delete())
        ]);
    }
    isComponentSet() {
        return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME) {
        return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME) {
        return this.instancesOptions.get(identifier) || {};
    }
    initialize(opts = {}) {
        const { options = {} } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
            throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        }
        if (!this.isComponentSet()) {
            throw Error(`Component ${this.name} has not been registered yet`);
        }
        const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
        });
        // resolve any pending promise waiting for the service instance
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) {
                instanceDeferred.resolve(instance);
            }
        }
        return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    onInit(callback, identifier) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
        }
        return () => {
            existingCallbacks.delete(callback);
        };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
            return;
        }
        for (const callback of callbacks) {
            try {
                callback(instance, identifier);
            }
            catch (_a) {
                // ignore errors in the onInit callback
            }
        }
    }
    getOrInitializeService({ instanceIdentifier, options = {} }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */
            this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */
            if (this.component.onInstanceCreated) {
                try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                }
                catch (_a) {
                    // ignore errors in the onInstanceCreatedCallback
                }
            }
        }
        return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    }
    shouldAutoInitialize() {
        return (!!this.component &&
            this.component.instantiationMode !== "EXPLICIT" /* InstantiationMode.EXPLICIT */);
    }
}
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* InstantiationMode.EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
class ComponentContainer {
    constructor(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    addComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
        }
        provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    getProvider(name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        const provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    }
    getProviders() {
        return Array.from(this.providers.values());
    }
}


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/installations/dist/esm/index.esm2017.js":
/*!************************************************************************!*\
  !*** ./node_modules/@firebase/installations/dist/esm/index.esm2017.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteInstallations: () => (/* binding */ deleteInstallations),
/* harmony export */   getId: () => (/* binding */ getId),
/* harmony export */   getInstallations: () => (/* binding */ getInstallations),
/* harmony export */   getToken: () => (/* binding */ getToken),
/* harmony export */   onIdChange: () => (/* binding */ onIdChange)
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/index.js");





const name = "@firebase/installations";
const version = "0.6.10";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PENDING_TIMEOUT_MS = 10000;
const PACKAGE_VERSION = `w:${version}`;
const INTERNAL_AUTH_VERSION = 'FIS_v2';
const INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
const TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
const SERVICE = 'installations';
const SERVICE_NAME = 'Installations';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERROR_DESCRIPTION_MAP = {
    ["missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */]: 'Missing App configuration value: "{$valueName}"',
    ["not-registered" /* ErrorCode.NOT_REGISTERED */]: 'Firebase Installation is not registered.',
    ["installation-not-found" /* ErrorCode.INSTALLATION_NOT_FOUND */]: 'Firebase Installation not found.',
    ["request-failed" /* ErrorCode.REQUEST_FAILED */]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    ["app-offline" /* ErrorCode.APP_OFFLINE */]: 'Could not process request. Application offline.',
    ["delete-pending-registration" /* ErrorCode.DELETE_PENDING_REGISTRATION */]: "Can't delete installation while there is a pending registration request."
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/** Returns true if error is a FirebaseError that is based on an error from the server. */
function isServerError(error) {
    return (error instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError &&
        error.code.includes("request-failed" /* ErrorCode.REQUEST_FAILED */));
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationsEndpoint({ projectId }) {
    return `${INSTALLATIONS_API_URL}/projects/${projectId}/installations`;
}
function extractAuthTokenInfoFromResponse(response) {
    return {
        token: response.token,
        requestStatus: 2 /* RequestStatus.COMPLETED */,
        expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
        creationTime: Date.now()
    };
}
async function getErrorFromResponse(requestName, response) {
    const responseJson = await response.json();
    const errorData = responseJson.error;
    return ERROR_FACTORY.create("request-failed" /* ErrorCode.REQUEST_FAILED */, {
        requestName,
        serverCode: errorData.code,
        serverMessage: errorData.message,
        serverStatus: errorData.status
    });
}
function getHeaders({ apiKey }) {
    return new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-goog-api-key': apiKey
    });
}
function getHeadersWithAuth(appConfig, { refreshToken }) {
    const headers = getHeaders(appConfig);
    headers.append('Authorization', getAuthorizationHeader(refreshToken));
    return headers;
}
/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */
async function retryIfServerError(fn) {
    const result = await fn();
    if (result.status >= 500 && result.status < 600) {
        // Internal Server Error. Retry request.
        return fn();
    }
    return result;
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
    // This works because the server will never respond with fractions of a second.
    return Number(responseExpiresIn.replace('s', '000'));
}
function getAuthorizationHeader(refreshToken) {
    return `${INTERNAL_AUTH_VERSION} ${refreshToken}`;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function createInstallationRequest({ appConfig, heartbeatServiceProvider }, { fid }) {
    const endpoint = getInstallationsEndpoint(appConfig);
    const headers = getHeaders(appConfig);
    // If heartbeat service exists, add the heartbeat string to the header.
    const heartbeatService = heartbeatServiceProvider.getImmediate({
        optional: true
    });
    if (heartbeatService) {
        const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
        if (heartbeatsHeader) {
            headers.append('x-firebase-client', heartbeatsHeader);
        }
    }
    const body = {
        fid,
        authVersion: INTERNAL_AUTH_VERSION,
        appId: appConfig.appId,
        sdkVersion: PACKAGE_VERSION
    };
    const request = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    };
    const response = await retryIfServerError(() => fetch(endpoint, request));
    if (response.ok) {
        const responseValue = await response.json();
        const registeredInstallationEntry = {
            fid: responseValue.fid || fid,
            registrationStatus: 2 /* RequestStatus.COMPLETED */,
            refreshToken: responseValue.refreshToken,
            authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
        };
        return registeredInstallationEntry;
    }
    else {
        throw await getErrorFromResponse('Create Installation', response);
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a promise that resolves after given time passes. */
function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bufferToBase64UrlSafe(array) {
    const b64 = btoa(String.fromCharCode(...array));
    return b64.replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
const INVALID_FID = '';
/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */
function generateFid() {
    try {
        // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
        // bytes. our implementation generates a 17 byte array instead.
        const fidByteArray = new Uint8Array(17);
        const crypto = self.crypto || self.msCrypto;
        crypto.getRandomValues(fidByteArray);
        // Replace the first 4 random bits with the constant FID header of 0b0111.
        fidByteArray[0] = 0b01110000 + (fidByteArray[0] % 0b00010000);
        const fid = encode(fidByteArray);
        return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
    }
    catch (_a) {
        // FID generation errored
        return INVALID_FID;
    }
}
/** Converts a FID Uint8Array to a base64 string representation. */
function encode(fidByteArray) {
    const b64String = bufferToBase64UrlSafe(fidByteArray);
    // Remove the 23rd character that was added because of the extra 4 bits at the
    // end of our 17 byte array, and the '=' padding.
    return b64String.substr(0, 22);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a string key that can be used to identify the app. */
function getKey(appConfig) {
    return `${appConfig.appName}!${appConfig.appId}`;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fidChangeCallbacks = new Map();
/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */
function fidChanged(appConfig, fid) {
    const key = getKey(appConfig);
    callFidChangeCallbacks(key, fid);
    broadcastFidChange(key, fid);
}
function addCallback(appConfig, callback) {
    // Open the broadcast channel if it's not already open,
    // to be able to listen to change events from other tabs.
    getBroadcastChannel();
    const key = getKey(appConfig);
    let callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
        callbackSet = new Set();
        fidChangeCallbacks.set(key, callbackSet);
    }
    callbackSet.add(callback);
}
function removeCallback(appConfig, callback) {
    const key = getKey(appConfig);
    const callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
        return;
    }
    callbackSet.delete(callback);
    if (callbackSet.size === 0) {
        fidChangeCallbacks.delete(key);
    }
    // Close broadcast channel if there are no more callbacks.
    closeBroadcastChannel();
}
function callFidChangeCallbacks(key, fid) {
    const callbacks = fidChangeCallbacks.get(key);
    if (!callbacks) {
        return;
    }
    for (const callback of callbacks) {
        callback(fid);
    }
}
function broadcastFidChange(key, fid) {
    const channel = getBroadcastChannel();
    if (channel) {
        channel.postMessage({ key, fid });
    }
    closeBroadcastChannel();
}
let broadcastChannel = null;
/** Opens and returns a BroadcastChannel if it is supported by the browser. */
function getBroadcastChannel() {
    if (!broadcastChannel && 'BroadcastChannel' in self) {
        broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
        broadcastChannel.onmessage = e => {
            callFidChangeCallbacks(e.data.key, e.data.fid);
        };
    }
    return broadcastChannel;
}
function closeBroadcastChannel() {
    if (fidChangeCallbacks.size === 0 && broadcastChannel) {
        broadcastChannel.close();
        broadcastChannel = null;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DATABASE_NAME = 'firebase-installations-database';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'firebase-installations-store';
let dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_3__.openDB)(DATABASE_NAME, DATABASE_VERSION, {
            upgrade: (db, oldVersion) => {
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (oldVersion) {
                    case 0:
                        db.createObjectStore(OBJECT_STORE_NAME);
                }
            }
        });
    }
    return dbPromise;
}
/** Assigns or overwrites the record for the given key with the given value. */
async function set(appConfig, value) {
    const key = getKey(appConfig);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const objectStore = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = (await objectStore.get(key));
    await objectStore.put(value, key);
    await tx.done;
    if (!oldValue || oldValue.fid !== value.fid) {
        fidChanged(appConfig, value.fid);
    }
    return value;
}
/** Removes record(s) from the objectStore that match the given key. */
async function remove(appConfig) {
    const key = getKey(appConfig);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    await tx.objectStore(OBJECT_STORE_NAME).delete(key);
    await tx.done;
}
/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */
async function update(appConfig, updateFn) {
    const key = getKey(appConfig);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = (await store.get(key));
    const newValue = updateFn(oldValue);
    if (newValue === undefined) {
        await store.delete(key);
    }
    else {
        await store.put(newValue, key);
    }
    await tx.done;
    if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
        fidChanged(appConfig, newValue.fid);
    }
    return newValue;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */
async function getInstallationEntry(installations) {
    let registrationPromise;
    const installationEntry = await update(installations.appConfig, oldEntry => {
        const installationEntry = updateOrCreateInstallationEntry(oldEntry);
        const entryWithPromise = triggerRegistrationIfNecessary(installations, installationEntry);
        registrationPromise = entryWithPromise.registrationPromise;
        return entryWithPromise.installationEntry;
    });
    if (installationEntry.fid === INVALID_FID) {
        // FID generation failed. Waiting for the FID from the server.
        return { installationEntry: await registrationPromise };
    }
    return {
        installationEntry,
        registrationPromise
    };
}
/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */
function updateOrCreateInstallationEntry(oldEntry) {
    const entry = oldEntry || {
        fid: generateFid(),
        registrationStatus: 0 /* RequestStatus.NOT_STARTED */
    };
    return clearTimedOutRequest(entry);
}
/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */
function triggerRegistrationIfNecessary(installations, installationEntry) {
    if (installationEntry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
        if (!navigator.onLine) {
            // Registration required but app is offline.
            const registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */));
            return {
                installationEntry,
                registrationPromise: registrationPromiseWithError
            };
        }
        // Try registering. Change status to IN_PROGRESS.
        const inProgressEntry = {
            fid: installationEntry.fid,
            registrationStatus: 1 /* RequestStatus.IN_PROGRESS */,
            registrationTime: Date.now()
        };
        const registrationPromise = registerInstallation(installations, inProgressEntry);
        return { installationEntry: inProgressEntry, registrationPromise };
    }
    else if (installationEntry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */) {
        return {
            installationEntry,
            registrationPromise: waitUntilFidRegistration(installations)
        };
    }
    else {
        return { installationEntry };
    }
}
/** This will be executed only once for each new Firebase Installation. */
async function registerInstallation(installations, installationEntry) {
    try {
        const registeredInstallationEntry = await createInstallationRequest(installations, installationEntry);
        return set(installations.appConfig, registeredInstallationEntry);
    }
    catch (e) {
        if (isServerError(e) && e.customData.serverCode === 409) {
            // Server returned a "FID cannot be used" error.
            // Generate a new ID next time.
            await remove(installations.appConfig);
        }
        else {
            // Registration failed. Set FID as not registered.
            await set(installations.appConfig, {
                fid: installationEntry.fid,
                registrationStatus: 0 /* RequestStatus.NOT_STARTED */
            });
        }
        throw e;
    }
}
/** Call if FID registration is pending in another request. */
async function waitUntilFidRegistration(installations) {
    // Unfortunately, there is no way of reliably observing when a value in
    // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
    // so we need to poll.
    let entry = await updateInstallationRequest(installations.appConfig);
    while (entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */) {
        // createInstallation request still in progress.
        await sleep(100);
        entry = await updateInstallationRequest(installations.appConfig);
    }
    if (entry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
        // The request timed out or failed in a different call. Try again.
        const { installationEntry, registrationPromise } = await getInstallationEntry(installations);
        if (registrationPromise) {
            return registrationPromise;
        }
        else {
            // if there is no registrationPromise, entry is registered.
            return installationEntry;
        }
    }
    return entry;
}
/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */
function updateInstallationRequest(appConfig) {
    return update(appConfig, oldEntry => {
        if (!oldEntry) {
            throw ERROR_FACTORY.create("installation-not-found" /* ErrorCode.INSTALLATION_NOT_FOUND */);
        }
        return clearTimedOutRequest(oldEntry);
    });
}
function clearTimedOutRequest(entry) {
    if (hasInstallationRequestTimedOut(entry)) {
        return {
            fid: entry.fid,
            registrationStatus: 0 /* RequestStatus.NOT_STARTED */
        };
    }
    return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
    return (installationEntry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */ &&
        installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now());
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function generateAuthTokenRequest({ appConfig, heartbeatServiceProvider }, installationEntry) {
    const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
    const headers = getHeadersWithAuth(appConfig, installationEntry);
    // If heartbeat service exists, add the heartbeat string to the header.
    const heartbeatService = heartbeatServiceProvider.getImmediate({
        optional: true
    });
    if (heartbeatService) {
        const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
        if (heartbeatsHeader) {
            headers.append('x-firebase-client', heartbeatsHeader);
        }
    }
    const body = {
        installation: {
            sdkVersion: PACKAGE_VERSION,
            appId: appConfig.appId
        }
    };
    const request = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    };
    const response = await retryIfServerError(() => fetch(endpoint, request));
    if (response.ok) {
        const responseValue = await response.json();
        const completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
        return completedAuthToken;
    }
    else {
        throw await getErrorFromResponse('Generate Auth Token', response);
    }
}
function getGenerateAuthTokenEndpoint(appConfig, { fid }) {
    return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */
async function refreshAuthToken(installations, forceRefresh = false) {
    let tokenPromise;
    const entry = await update(installations.appConfig, oldEntry => {
        if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered" /* ErrorCode.NOT_REGISTERED */);
        }
        const oldAuthToken = oldEntry.authToken;
        if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
            // There is a valid token in the DB.
            return oldEntry;
        }
        else if (oldAuthToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */) {
            // There already is a token request in progress.
            tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
            return oldEntry;
        }
        else {
            // No token or token expired.
            if (!navigator.onLine) {
                throw ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */);
            }
            const inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
            tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
            return inProgressEntry;
        }
    });
    const authToken = tokenPromise
        ? await tokenPromise
        : entry.authToken;
    return authToken;
}
/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */
async function waitUntilAuthTokenRequest(installations, forceRefresh) {
    // Unfortunately, there is no way of reliably observing when a value in
    // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
    // so we need to poll.
    let entry = await updateAuthTokenRequest(installations.appConfig);
    while (entry.authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */) {
        // generateAuthToken still in progress.
        await sleep(100);
        entry = await updateAuthTokenRequest(installations.appConfig);
    }
    const authToken = entry.authToken;
    if (authToken.requestStatus === 0 /* RequestStatus.NOT_STARTED */) {
        // The request timed out or failed in a different call. Try again.
        return refreshAuthToken(installations, forceRefresh);
    }
    else {
        return authToken;
    }
}
/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */
function updateAuthTokenRequest(appConfig) {
    return update(appConfig, oldEntry => {
        if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered" /* ErrorCode.NOT_REGISTERED */);
        }
        const oldAuthToken = oldEntry.authToken;
        if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
            return Object.assign(Object.assign({}, oldEntry), { authToken: { requestStatus: 0 /* RequestStatus.NOT_STARTED */ } });
        }
        return oldEntry;
    });
}
async function fetchAuthTokenFromServer(installations, installationEntry) {
    try {
        const authToken = await generateAuthTokenRequest(installations, installationEntry);
        const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken });
        await set(installations.appConfig, updatedInstallationEntry);
        return authToken;
    }
    catch (e) {
        if (isServerError(e) &&
            (e.customData.serverCode === 401 || e.customData.serverCode === 404)) {
            // Server returned a "FID not found" or a "Invalid authentication" error.
            // Generate a new ID next time.
            await remove(installations.appConfig);
        }
        else {
            const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken: { requestStatus: 0 /* RequestStatus.NOT_STARTED */ } });
            await set(installations.appConfig, updatedInstallationEntry);
        }
        throw e;
    }
}
function isEntryRegistered(installationEntry) {
    return (installationEntry !== undefined &&
        installationEntry.registrationStatus === 2 /* RequestStatus.COMPLETED */);
}
function isAuthTokenValid(authToken) {
    return (authToken.requestStatus === 2 /* RequestStatus.COMPLETED */ &&
        !isAuthTokenExpired(authToken));
}
function isAuthTokenExpired(authToken) {
    const now = Date.now();
    return (now < authToken.creationTime ||
        authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER);
}
/** Returns an updated InstallationEntry with an InProgressAuthToken. */
function makeAuthTokenRequestInProgressEntry(oldEntry) {
    const inProgressAuthToken = {
        requestStatus: 1 /* RequestStatus.IN_PROGRESS */,
        requestTime: Date.now()
    };
    return Object.assign(Object.assign({}, oldEntry), { authToken: inProgressAuthToken });
}
function hasAuthTokenRequestTimedOut(authToken) {
    return (authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */ &&
        authToken.requestTime + PENDING_TIMEOUT_MS < Date.now());
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Creates a Firebase Installation if there isn't one for the app and
 * returns the Installation ID.
 * @param installations - The `Installations` instance.
 *
 * @public
 */
async function getId(installations) {
    const installationsImpl = installations;
    const { installationEntry, registrationPromise } = await getInstallationEntry(installationsImpl);
    if (registrationPromise) {
        registrationPromise.catch(console.error);
    }
    else {
        // If the installation is already registered, update the authentication
        // token if needed.
        refreshAuthToken(installationsImpl).catch(console.error);
    }
    return installationEntry.fid;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a Firebase Installations auth token, identifying the current
 * Firebase Installation.
 * @param installations - The `Installations` instance.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */
async function getToken(installations, forceRefresh = false) {
    const installationsImpl = installations;
    await completeInstallationRegistration(installationsImpl);
    // At this point we either have a Registered Installation in the DB, or we've
    // already thrown an error.
    const authToken = await refreshAuthToken(installationsImpl, forceRefresh);
    return authToken.token;
}
async function completeInstallationRegistration(installations) {
    const { registrationPromise } = await getInstallationEntry(installations);
    if (registrationPromise) {
        // A createInstallation request is in progress. Wait until it finishes.
        await registrationPromise;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function deleteInstallationRequest(appConfig, installationEntry) {
    const endpoint = getDeleteEndpoint(appConfig, installationEntry);
    const headers = getHeadersWithAuth(appConfig, installationEntry);
    const request = {
        method: 'DELETE',
        headers
    };
    const response = await retryIfServerError(() => fetch(endpoint, request));
    if (!response.ok) {
        throw await getErrorFromResponse('Delete Installation', response);
    }
}
function getDeleteEndpoint(appConfig, { fid }) {
    return `${getInstallationsEndpoint(appConfig)}/${fid}`;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Deletes the Firebase Installation and all associated data.
 * @param installations - The `Installations` instance.
 *
 * @public
 */
async function deleteInstallations(installations) {
    const { appConfig } = installations;
    const entry = await update(appConfig, oldEntry => {
        if (oldEntry && oldEntry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
            // Delete the unregistered entry without sending a deleteInstallation request.
            return undefined;
        }
        return oldEntry;
    });
    if (entry) {
        if (entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */) {
            // Can't delete while trying to register.
            throw ERROR_FACTORY.create("delete-pending-registration" /* ErrorCode.DELETE_PENDING_REGISTRATION */);
        }
        else if (entry.registrationStatus === 2 /* RequestStatus.COMPLETED */) {
            if (!navigator.onLine) {
                throw ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */);
            }
            else {
                await deleteInstallationRequest(appConfig, entry);
                await remove(appConfig);
            }
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Sets a new callback that will get called when Installation ID changes.
 * Returns an unsubscribe function that will remove the callback when called.
 * @param installations - The `Installations` instance.
 * @param callback - The callback function that is invoked when FID changes.
 * @returns A function that can be called to unsubscribe.
 *
 * @public
 */
function onIdChange(installations, callback) {
    const { appConfig } = installations;
    addCallback(appConfig, callback);
    return () => {
        removeCallback(appConfig, callback);
    };
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns an instance of {@link Installations} associated with the given
 * {@link @firebase/app#FirebaseApp} instance.
 * @param app - The {@link @firebase/app#FirebaseApp} instance.
 *
 * @public
 */
function getInstallations(app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)()) {
    const installationsImpl = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, 'installations').getImmediate();
    return installationsImpl;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
    if (!app || !app.options) {
        throw getMissingValueError('App Configuration');
    }
    if (!app.name) {
        throw getMissingValueError('App Name');
    }
    // Required app config keys
    const configKeys = [
        'projectId',
        'apiKey',
        'appId'
    ];
    for (const keyName of configKeys) {
        if (!app.options[keyName]) {
            throw getMissingValueError(keyName);
        }
    }
    return {
        appName: app.name,
        projectId: app.options.projectId,
        apiKey: app.options.apiKey,
        appId: app.options.appId
    };
}
function getMissingValueError(valueName) {
    return ERROR_FACTORY.create("missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */, {
        valueName
    });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const INSTALLATIONS_NAME = 'installations';
const INSTALLATIONS_NAME_INTERNAL = 'installations-internal';
const publicFactory = (container) => {
    const app = container.getProvider('app').getImmediate();
    // Throws if app isn't configured properly.
    const appConfig = extractAppConfig(app);
    const heartbeatServiceProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, 'heartbeat');
    const installationsImpl = {
        app,
        appConfig,
        heartbeatServiceProvider,
        _delete: () => Promise.resolve()
    };
    return installationsImpl;
};
const internalFactory = (container) => {
    const app = container.getProvider('app').getImmediate();
    // Internal FIS instance relies on public FIS instance.
    const installations = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, INSTALLATIONS_NAME).getImmediate();
    const installationsInternal = {
        getId: () => getId(installations),
        getToken: (forceRefresh) => getToken(installations, forceRefresh)
    };
    return installationsInternal;
};
function registerInstallations() {
    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(INSTALLATIONS_NAME, publicFactory, "PUBLIC" /* ComponentType.PUBLIC */));
    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE" /* ComponentType.PRIVATE */));
}

/**
 * The Firebase Installations Web SDK.
 * This SDK does not work in a Node.js environment.
 *
 * @packageDocumentation
 */
registerInstallations();
(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version);
// BUILD_TARGET will be replaced by values like esm2017, cjs2017, etc during the compilation
(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'esm2017');


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/esm/index.esm2017.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevel: () => (/* binding */ LogLevel),
/* harmony export */   Logger: () => (/* binding */ Logger),
/* harmony export */   setLogLevel: () => (/* binding */ setLogLevel),
/* harmony export */   setUserLogHandler: () => (/* binding */ setUserLogHandler)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A container for all of the Logger instances
 */
const instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
const levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
const defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
const ConsoleMethod = {
    [LogLevel.DEBUG]: 'log',
    [LogLevel.VERBOSE]: 'log',
    [LogLevel.INFO]: 'info',
    [LogLevel.WARN]: 'warn',
    [LogLevel.ERROR]: 'error'
};
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
const defaultLogHandler = (instance, logType, ...args) => {
    if (logType < instance.logLevel) {
        return;
    }
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
        console[method](`[${now}]  ${instance.name}:`, ...args);
    }
    else {
        throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
    }
};
class Logger {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    constructor(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    get logLevel() {
        return this._logLevel;
    }
    set logLevel(val) {
        if (!(val in LogLevel)) {
            throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        }
        this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    }
    get logHandler() {
        return this._logHandler;
    }
    set logHandler(val) {
        if (typeof val !== 'function') {
            throw new TypeError('Value assigned to `logHandler` must be a function');
        }
        this._logHandler = val;
    }
    get userLogHandler() {
        return this._userLogHandler;
    }
    set userLogHandler(val) {
        this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */
    debug(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
        this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
        this._userLogHandler &&
            this._userLogHandler(this, LogLevel.VERBOSE, ...args);
        this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
        this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
        this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
        this._logHandler(this, LogLevel.ERROR, ...args);
    }
}
function setLogLevel(level) {
    instances.forEach(inst => {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    for (const instance of instances) {
        let customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = (instance, level, ...args) => {
                const message = args
                    .map(arg => {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(arg => arg)
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message,
                        args,
                        type: instance.name
                    });
                }
            };
        }
    }
}


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/firebase/app/dist/esm/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/firebase/app/dist/esm/index.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseError: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.FirebaseError),
/* harmony export */   SDK_VERSION: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.SDK_VERSION),
/* harmony export */   _DEFAULT_ENTRY_NAME: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._DEFAULT_ENTRY_NAME),
/* harmony export */   _addComponent: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addComponent),
/* harmony export */   _addOrOverwriteComponent: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addOrOverwriteComponent),
/* harmony export */   _apps: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._apps),
/* harmony export */   _clearComponents: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._clearComponents),
/* harmony export */   _components: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._components),
/* harmony export */   _getProvider: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider),
/* harmony export */   _isFirebaseApp: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._isFirebaseApp),
/* harmony export */   _isFirebaseServerApp: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._isFirebaseServerApp),
/* harmony export */   _registerComponent: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent),
/* harmony export */   _removeServiceInstance: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._removeServiceInstance),
/* harmony export */   _serverApps: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._serverApps),
/* harmony export */   deleteApp: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.deleteApp),
/* harmony export */   getApp: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp),
/* harmony export */   getApps: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps),
/* harmony export */   initializeApp: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp),
/* harmony export */   initializeServerApp: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeServerApp),
/* harmony export */   onLog: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.onLog),
/* harmony export */   registerVersion: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion),
/* harmony export */   setLogLevel: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.setLogLevel)
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js");



var name = "firebase";
var version = "11.0.1";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'app');
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/installations/dist/esm/index.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/firebase/installations/dist/esm/index.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteInstallations: () => (/* reexport safe */ _firebase_installations__WEBPACK_IMPORTED_MODULE_0__.deleteInstallations),
/* harmony export */   getId: () => (/* reexport safe */ _firebase_installations__WEBPACK_IMPORTED_MODULE_0__.getId),
/* harmony export */   getInstallations: () => (/* reexport safe */ _firebase_installations__WEBPACK_IMPORTED_MODULE_0__.getInstallations),
/* harmony export */   getToken: () => (/* reexport safe */ _firebase_installations__WEBPACK_IMPORTED_MODULE_0__.getToken),
/* harmony export */   onIdChange: () => (/* reexport safe */ _firebase_installations__WEBPACK_IMPORTED_MODULE_0__.onIdChange)
/* harmony export */ });
/* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/installations */ "./node_modules/@firebase/installations/dist/esm/index.esm2017.js");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/idb/build/index.js":
/*!*****************************************!*\
  !*** ./node_modules/idb/build/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteDB: () => (/* binding */ deleteDB),
/* harmony export */   openDB: () => (/* binding */ openDB),
/* harmony export */   unwrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   wrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ "./node_modules/idb/build/wrap-idb-value.js");



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction), event);
        });
    }
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event.newVersion, event));
    }
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking) {
            db.addEventListener('versionchange', (event) => blocking(event.oldVersion, event.newVersion, event));
        }
    })
        .catch(() => { });
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event));
    }
    return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done,
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));




/***/ }),

/***/ "./node_modules/idb/build/wrap-idb-value.js":
/*!**************************************************!*\
  !*** ./node_modules/idb/build/wrap-idb-value.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ reverseTransformCache),
/* harmony export */   i: () => (/* binding */ instanceOfAny),
/* harmony export */   r: () => (/* binding */ replaceTraps),
/* harmony export */   u: () => (/* binding */ unwrap),
/* harmony export */   w: () => (/* binding */ wrap)
/* harmony export */ });
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then((value) => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);




/***/ }),

/***/ "./node_modules/lossless-json/lib/esm/LosslessNumber.js":
/*!**************************************************************!*\
  !*** ./node_modules/lossless-json/lib/esm/LosslessNumber.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LosslessNumber: () => (/* binding */ LosslessNumber),
/* harmony export */   isLosslessNumber: () => (/* binding */ isLosslessNumber),
/* harmony export */   toLosslessNumber: () => (/* binding */ toLosslessNumber)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/lossless-json/lib/esm/utils.js");


/**
 * A lossless number. Stores its numeric value as string
 */
class LosslessNumber {
  // numeric value as string

  // type information
  isLosslessNumber = true;
  constructor(value) {
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value)) {
      throw new Error(`Invalid number (value: "${value}")`);
    }
    this.value = value;
  }

  /**
   * Get the value of the LosslessNumber as number or bigint.
   *
   * - a number is returned for safe numbers and decimal values that only lose some insignificant digits
   * - a bigint is returned for big integer numbers
   * - an Error is thrown for values that will overflow or underflow
   *
   * Note that you can implement your own strategy for conversion by just getting the value as string
   * via .toString(), and using util functions like isInteger, isSafeNumber, getUnsafeNumberReason,
   * and toSafeNumberOrThrow to convert it to a numeric value.
   */
  valueOf() {
    const unsafeReason = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getUnsafeNumberReason)(this.value);

    // safe or truncate_float
    if (unsafeReason === undefined || unsafeReason === _utils_js__WEBPACK_IMPORTED_MODULE_0__.UnsafeNumberReason.truncate_float) {
      return Number.parseFloat(this.value);
    }

    // truncate_integer
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(this.value)) {
      return BigInt(this.value);
    }

    // overflow or underflow
    throw new Error(`Cannot safely convert to number: the value '${this.value}' would ${unsafeReason} and become ${Number.parseFloat(this.value)}`);
  }

  /**
   * Get the value of the LosslessNumber as string.
   */
  toString() {
    return this.value;
  }

  // Note: we do NOT implement a .toJSON() method, and you should not implement
  // or use that, it cannot safely turn the numeric value in the string into
  // stringified JSON since it has to be parsed into a number first.
}

/**
 * Test whether a value is a LosslessNumber
 */
function isLosslessNumber(value) {
  // @ts-ignore
  return value && typeof value === 'object' && value.isLosslessNumber === true || false;
}

/**
 * Convert a number into a LosslessNumber if this is possible in a safe way
 * If the value has too many digits, or is NaN or Infinity, an error will be thrown
 */
function toLosslessNumber(value) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.extractSignificantDigits)(String(value)).length > 15) {
    throw new Error(`Invalid number: contains more than 15 digits and is most likely truncated and unsafe by itself (value: ${value})`);
  }
  if (Number.isNaN(value)) {
    throw new Error('Invalid number: NaN');
  }
  if (!Number.isFinite(value)) {
    throw new Error(`Invalid number: ${value}`);
  }
  return new LosslessNumber(String(value));
}
//# sourceMappingURL=LosslessNumber.js.map

/***/ }),

/***/ "./node_modules/lossless-json/lib/esm/config.js":
/*!******************************************************!*\
  !*** ./node_modules/lossless-json/lib/esm/config.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
/**
 * Get and/or set configuration options
 * @deprecated There is no config anymore
 */
function config(_options) {
  // Backward compatibility warning for v1.x
  throw new Error('config is deprecated, support for circularRefs is removed from the library. ' + 'If you encounter circular references in your data structures, ' + 'please rethink your datastructures: ' + 'better prevent circular references in the first place.');
}
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/lossless-json/lib/esm/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/lossless-json/lib/esm/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LosslessNumber: () => (/* reexport safe */ _LosslessNumber_js__WEBPACK_IMPORTED_MODULE_3__.LosslessNumber),
/* harmony export */   UnsafeNumberReason: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_6__.UnsafeNumberReason),
/* harmony export */   config: () => (/* reexport safe */ _config_js__WEBPACK_IMPORTED_MODULE_0__.config),
/* harmony export */   getUnsafeNumberReason: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_6__.getUnsafeNumberReason),
/* harmony export */   isInteger: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_6__.isInteger),
/* harmony export */   isLosslessNumber: () => (/* reexport safe */ _LosslessNumber_js__WEBPACK_IMPORTED_MODULE_3__.isLosslessNumber),
/* harmony export */   isNumber: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_6__.isNumber),
/* harmony export */   isSafeNumber: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_6__.isSafeNumber),
/* harmony export */   parse: () => (/* reexport safe */ _parse_js__WEBPACK_IMPORTED_MODULE_1__.parse),
/* harmony export */   parseLosslessNumber: () => (/* reexport safe */ _numberParsers_js__WEBPACK_IMPORTED_MODULE_5__.parseLosslessNumber),
/* harmony export */   parseNumberAndBigInt: () => (/* reexport safe */ _numberParsers_js__WEBPACK_IMPORTED_MODULE_5__.parseNumberAndBigInt),
/* harmony export */   reviveDate: () => (/* reexport safe */ _reviveDate_js__WEBPACK_IMPORTED_MODULE_4__.reviveDate),
/* harmony export */   stringify: () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_2__.stringify),
/* harmony export */   toLosslessNumber: () => (/* reexport safe */ _LosslessNumber_js__WEBPACK_IMPORTED_MODULE_3__.toLosslessNumber),
/* harmony export */   toSafeNumberOrThrow: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_6__.toSafeNumberOrThrow)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./node_modules/lossless-json/lib/esm/config.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/lossless-json/lib/esm/parse.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/lossless-json/lib/esm/stringify.js");
/* harmony import */ var _LosslessNumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LosslessNumber.js */ "./node_modules/lossless-json/lib/esm/LosslessNumber.js");
/* harmony import */ var _reviveDate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reviveDate.js */ "./node_modules/lossless-json/lib/esm/reviveDate.js");
/* harmony import */ var _numberParsers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./numberParsers.js */ "./node_modules/lossless-json/lib/esm/numberParsers.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.js */ "./node_modules/lossless-json/lib/esm/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types.js */ "./node_modules/lossless-json/lib/esm/types.js");








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/lossless-json/lib/esm/numberParsers.js":
/*!*************************************************************!*\
  !*** ./node_modules/lossless-json/lib/esm/numberParsers.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseLosslessNumber: () => (/* binding */ parseLosslessNumber),
/* harmony export */   parseNumberAndBigInt: () => (/* binding */ parseNumberAndBigInt)
/* harmony export */ });
/* harmony import */ var _LosslessNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LosslessNumber.js */ "./node_modules/lossless-json/lib/esm/LosslessNumber.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/lossless-json/lib/esm/utils.js");


function parseLosslessNumber(value) {
  return new _LosslessNumber_js__WEBPACK_IMPORTED_MODULE_0__.LosslessNumber(value);
}
function parseNumberAndBigInt(value) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isInteger)(value) ? BigInt(value) : Number.parseFloat(value);
}
//# sourceMappingURL=numberParsers.js.map

/***/ }),

/***/ "./node_modules/lossless-json/lib/esm/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/lossless-json/lib/esm/parse.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   codeLowercaseA: () => (/* binding */ codeLowercaseA),
/* harmony export */   codeLowercaseE: () => (/* binding */ codeLowercaseE),
/* harmony export */   codeLowercaseF: () => (/* binding */ codeLowercaseF),
/* harmony export */   codeUppercaseA: () => (/* binding */ codeUppercaseA),
/* harmony export */   codeUppercaseE: () => (/* binding */ codeUppercaseE),
/* harmony export */   codeUppercaseF: () => (/* binding */ codeUppercaseF),
/* harmony export */   isDeepEqual: () => (/* binding */ isDeepEqual),
/* harmony export */   isValidStringCharacter: () => (/* binding */ isValidStringCharacter),
/* harmony export */   parse: () => (/* binding */ parse)
/* harmony export */ });
/* harmony import */ var _numberParsers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberParsers.js */ "./node_modules/lossless-json/lib/esm/numberParsers.js");
/* harmony import */ var _revive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./revive.js */ "./node_modules/lossless-json/lib/esm/revive.js");


/**
 * The LosslessJSON.parse() method parses a string as JSON, optionally transforming
 * the value produced by parsing.
 *
 * The parser is based on the parser of Tan Li Hou shared in
 * https://lihautan.com/json-parser-with-javascript/
 *
 * @param text
 * The string to parse as JSON. See the JSON object for a description of JSON syntax.
 *
 * @param [reviver]
 * If a function, prescribes how the value originally produced by parsing is
 * transformed, before being returned.
 *
 * @param [parseNumber=parseLosslessNumber]
 * Pass a custom number parser. Input is a string, and the output can be unknown
 * numeric value: number, bigint, LosslessNumber, or a custom BigNumber library.
 *
 * @returns Returns the Object corresponding to the given JSON text.
 *
 * @throws Throws a SyntaxError exception if the string to parse is not valid JSON.
 */
function parse(text, reviver) {
  let parseNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _numberParsers_js__WEBPACK_IMPORTED_MODULE_0__.parseLosslessNumber;
  let i = 0;
  const value = parseValue();
  expectValue(value);
  expectEndOfInput();
  return reviver ? (0,_revive_js__WEBPACK_IMPORTED_MODULE_1__.revive)(value, reviver) : value;
  function parseObject() {
    if (text.charCodeAt(i) === codeOpeningBrace) {
      i++;
      skipWhitespace();
      const object = {};
      let initial = true;
      while (i < text.length && text.charCodeAt(i) !== codeClosingBrace) {
        if (!initial) {
          eatComma();
          skipWhitespace();
        } else {
          initial = false;
        }
        const start = i;
        const key = parseString();
        if (key === undefined) {
          throwObjectKeyExpected();
          return; // To make TS happy
        }
        skipWhitespace();
        eatColon();
        const value = parseValue();
        if (value === undefined) {
          throwObjectValueExpected();
          return; // To make TS happy
        }

        // TODO: test deep equal instead of strict equal
        if (Object.prototype.hasOwnProperty.call(object, key) && !isDeepEqual(value, object[key])) {
          // Note that we could also test `if(key in object) {...}`
          // or `if (object[key] !== 'undefined') {...}`, but that is slower.
          throwDuplicateKey(key, start + 1);
        }
        object[key] = value;
      }
      if (text.charCodeAt(i) !== codeClosingBrace) {
        throwObjectKeyOrEndExpected();
      }
      i++;
      return object;
    }
  }
  function parseArray() {
    if (text.charCodeAt(i) === codeOpeningBracket) {
      i++;
      skipWhitespace();
      const array = [];
      let initial = true;
      while (i < text.length && text.charCodeAt(i) !== codeClosingBracket) {
        if (!initial) {
          eatComma();
        } else {
          initial = false;
        }
        const value = parseValue();
        expectArrayItem(value);
        array.push(value);
      }
      if (text.charCodeAt(i) !== codeClosingBracket) {
        throwArrayItemOrEndExpected();
      }
      i++;
      return array;
    }
  }
  function parseValue() {
    skipWhitespace();
    const value = parseString() ?? parseNumeric() ?? parseObject() ?? parseArray() ?? parseKeyword('true', true) ?? parseKeyword('false', false) ?? parseKeyword('null', null);
    skipWhitespace();
    return value;
  }
  function parseKeyword(name, value) {
    if (text.slice(i, i + name.length) === name) {
      i += name.length;
      return value;
    }
  }
  function skipWhitespace() {
    while (isWhitespace(text.charCodeAt(i))) {
      i++;
    }
  }
  function parseString() {
    if (text.charCodeAt(i) === codeDoubleQuote) {
      i++;
      let result = '';
      while (i < text.length && text.charCodeAt(i) !== codeDoubleQuote) {
        if (text.charCodeAt(i) === codeBackslash) {
          const char = text[i + 1];
          const escapeChar = escapeCharacters[char];
          if (escapeChar !== undefined) {
            result += escapeChar;
            i++;
          } else if (char === 'u') {
            if (isHex(text.charCodeAt(i + 2)) && isHex(text.charCodeAt(i + 3)) && isHex(text.charCodeAt(i + 4)) && isHex(text.charCodeAt(i + 5))) {
              result += String.fromCharCode(Number.parseInt(text.slice(i + 2, i + 6), 16));
              i += 5;
            } else {
              throwInvalidUnicodeCharacter(i);
            }
          } else {
            throwInvalidEscapeCharacter(i);
          }
        } else {
          if (isValidStringCharacter(text.charCodeAt(i))) {
            result += text[i];
          } else {
            throwInvalidCharacter(text[i]);
          }
        }
        i++;
      }
      expectEndOfString();
      i++;
      return result;
    }
  }
  function parseNumeric() {
    const start = i;
    if (text.charCodeAt(i) === codeMinus) {
      i++;
      expectDigit(start);
    }
    if (text.charCodeAt(i) === codeZero) {
      i++;
    } else if (isNonZeroDigit(text.charCodeAt(i))) {
      i++;
      while (isDigit(text.charCodeAt(i))) {
        i++;
      }
    }
    if (text.charCodeAt(i) === codeDot) {
      i++;
      expectDigit(start);
      while (isDigit(text.charCodeAt(i))) {
        i++;
      }
    }
    if (text.charCodeAt(i) === codeLowercaseE || text.charCodeAt(i) === codeUppercaseE) {
      i++;
      if (text.charCodeAt(i) === codeMinus || text.charCodeAt(i) === codePlus) {
        i++;
      }
      expectDigit(start);
      while (isDigit(text.charCodeAt(i))) {
        i++;
      }
    }
    if (i > start) {
      return parseNumber(text.slice(start, i));
    }
  }
  function eatComma() {
    if (text.charCodeAt(i) !== codeComma) {
      throw new SyntaxError(`Comma ',' expected after value ${gotAt()}`);
    }
    i++;
  }
  function eatColon() {
    if (text.charCodeAt(i) !== codeColon) {
      throw new SyntaxError(`Colon ':' expected after property name ${gotAt()}`);
    }
    i++;
  }
  function expectValue(value) {
    if (value === undefined) {
      throw new SyntaxError(`JSON value expected ${gotAt()}`);
    }
  }
  function expectArrayItem(value) {
    if (value === undefined) {
      throw new SyntaxError(`Array item expected ${gotAt()}`);
    }
  }
  function expectEndOfInput() {
    if (i < text.length) {
      throw new SyntaxError(`Expected end of input ${gotAt()}`);
    }
  }
  function expectDigit(start) {
    if (!isDigit(text.charCodeAt(i))) {
      const numSoFar = text.slice(start, i);
      throw new SyntaxError(`Invalid number '${numSoFar}', expecting a digit ${gotAt()}`);
    }
  }
  function expectEndOfString() {
    if (text.charCodeAt(i) !== codeDoubleQuote) {
      throw new SyntaxError(`End of string '"' expected ${gotAt()}`);
    }
  }
  function throwObjectKeyExpected() {
    throw new SyntaxError(`Quoted object key expected ${gotAt()}`);
  }
  function throwDuplicateKey(key, pos) {
    throw new SyntaxError(`Duplicate key '${key}' encountered at position ${pos}`);
  }
  function throwObjectKeyOrEndExpected() {
    throw new SyntaxError(`Quoted object key or end of object '}' expected ${gotAt()}`);
  }
  function throwArrayItemOrEndExpected() {
    throw new SyntaxError(`Array item or end of array ']' expected ${gotAt()}`);
  }
  function throwInvalidCharacter(char) {
    throw new SyntaxError(`Invalid character '${char}' ${pos()}`);
  }
  function throwInvalidEscapeCharacter(start) {
    const chars = text.slice(start, start + 2);
    throw new SyntaxError(`Invalid escape character '${chars}' ${pos()}`);
  }
  function throwObjectValueExpected() {
    throw new SyntaxError(`Object value expected after ':' ${pos()}`);
  }
  function throwInvalidUnicodeCharacter(start) {
    const chars = text.slice(start, start + 6);
    throw new SyntaxError(`Invalid unicode character '${chars}' ${pos()}`);
  }

  // zero based character position
  function pos() {
    return `at position ${i}`;
  }
  function got() {
    return i < text.length ? `but got '${text[i]}'` : 'but reached end of input';
  }
  function gotAt() {
    return `${got()} ${pos()}`;
  }
}
function isWhitespace(code) {
  return code === codeSpace || code === codeNewline || code === codeTab || code === codeReturn;
}
function isHex(code) {
  return code >= codeZero && code <= codeNine || code >= codeUppercaseA && code <= codeUppercaseF || code >= codeLowercaseA && code <= codeLowercaseF;
}
function isDigit(code) {
  return code >= codeZero && code <= codeNine;
}
function isNonZeroDigit(code) {
  return code >= codeOne && code <= codeNine;
}
function isValidStringCharacter(code) {
  return code >= 0x20 && code <= 0x10ffff;
}
function isDeepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((item, index) => isDeepEqual(item, b[index]));
  }
  if (isObject(a) && isObject(b)) {
    const keys = [...new Set([...Object.keys(a), ...Object.keys(b)])];
    return keys.every(key => isDeepEqual(a[key], b[key]));
  }
  return false;
}
function isObject(value) {
  return typeof value === 'object' && value !== null;
}

// map with all escape characters
const escapeCharacters = {
  '"': '"',
  '\\': '\\',
  '/': '/',
  b: '\b',
  f: '\f',
  n: '\n',
  r: '\r',
  t: '\t'
  // note that \u is handled separately in parseString()
};
const codeBackslash = 0x5c; // "\"
const codeOpeningBrace = 0x7b; // "{"
const codeClosingBrace = 0x7d; // "}"
const codeOpeningBracket = 0x5b; // "["
const codeClosingBracket = 0x5d; // "]"
const codeSpace = 0x20; // " "
const codeNewline = 0xa; // "\n"
const codeTab = 0x9; // "\t"
const codeReturn = 0xd; // "\r"
const codeDoubleQuote = 0x0022; // "
const codePlus = 0x2b; // "+"
const codeMinus = 0x2d; // "-"
const codeZero = 0x30;
const codeOne = 0x31;
const codeNine = 0x39;
const codeComma = 0x2c; // ","
const codeDot = 0x2e; // "." (dot, period)
const codeColon = 0x3a; // ":"
const codeUppercaseA = 0x41; // "A"
const codeLowercaseA = 0x61; // "a"
const codeUppercaseE = 0x45; // "E"
const codeLowercaseE = 0x65; // "e"
const codeUppercaseF = 0x46; // "F"
const codeLowercaseF = 0x66; // "f"
//# sourceMappingURL=parse.js.map

/***/ }),

/***/ "./node_modules/lossless-json/lib/esm/revive.js":
/*!******************************************************!*\
  !*** ./node_modules/lossless-json/lib/esm/revive.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   revive: () => (/* binding */ revive)
/* harmony export */ });
/* harmony import */ var _LosslessNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LosslessNumber.js */ "./node_modules/lossless-json/lib/esm/LosslessNumber.js");

/**
 * Revive a json object.
 * Applies the reviver function recursively on all values in the JSON object.
 * @param json   A JSON Object, Array, or value
 * @param reviver
 *              A reviver function invoked with arguments `key` and `value`,
 *              which must return a replacement value. The function context
 *              (`this`) is the Object or Array that contains the currently
 *              handled value.
 */
function revive(json, reviver) {
  return reviveValue({
    '': json
  }, '', json, reviver);
}

/**
 * Revive a value
 */
function reviveValue(context, key, value, reviver) {
  if (Array.isArray(value)) {
    return reviver.call(context, key, reviveArray(value, reviver));
  }
  if (value && typeof value === 'object' && !(0,_LosslessNumber_js__WEBPACK_IMPORTED_MODULE_0__.isLosslessNumber)(value)) {
    // note the special case for LosslessNumber,
    // we don't want to iterate over the internals of a LosslessNumber
    return reviver.call(context, key, reviveObject(value, reviver));
  }
  return reviver.call(context, key, value);
}

/**
 * Revive the properties of an object
 */
function reviveObject(object, reviver) {
  for (const key of Object.keys(object)) {
    const value = reviveValue(object, key, object[key], reviver);
    if (value !== undefined) {
      object[key] = value;
    } else {
      delete object[key];
    }
  }
  return object;
}

/**
 * Revive the properties of an Array
 */
function reviveArray(array, reviver) {
  for (let i = 0; i < array.length; i++) {
    array[i] = reviveValue(array, String(i), array[i], reviver);
  }
  return array;
}
//# sourceMappingURL=revive.js.map

/***/ }),

/***/ "./node_modules/lossless-json/lib/esm/reviveDate.js":
/*!**********************************************************!*\
  !*** ./node_modules/lossless-json/lib/esm/reviveDate.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reviveDate: () => (/* binding */ reviveDate)
/* harmony export */ });
/**
 * Revive a string containing an ISO 8601 date string into a JavaScript `Date` object
 */
function reviveDate(key, value) {
  return typeof value === 'string' && isoDateRegex.test(value) ? new Date(value) : value;
}

// Matches strings like "2022-08-25T09:39:19.288Z"
const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
//# sourceMappingURL=reviveDate.js.map

/***/ }),

/***/ "./node_modules/lossless-json/lib/esm/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/lossless-json/lib/esm/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/lossless-json/lib/esm/utils.js");


/**
 * The LosslessJSON.stringify() method converts a JavaScript value to a JSON string,
 * optionally replacing values if a replacer function is specified, or
 * optionally including only the specified properties if a replacer array is specified.
 *
 * @param value
 * The value to convert to a JSON string.
 *
 * @param [replacer]
 * A function that alters the behavior of the stringification process,
 * or an array of String and Number objects that serve as a whitelist for
 * selecting the properties of the value object to be included in the JSON string.
 * If this value is null or not provided, all properties of the object are
 * included in the resulting JSON string.
 *
 * @param [space]
 * A String or Number object that's used to insert white space into the output
 * JSON string for readability purposes. If this is a Number, it indicates the
 * number of space characters to use as white space; this number is capped at 10
 * if it's larger than that. Values less than 1 indicate that no space should be
 * used. If this is a String, the string (or the first 10 characters of the string,
 * if it's longer than that) is used as white space. If this parameter is not
 * provided (or is null), no white space is used.
 *
 * @param [numberStringifiers]
 * An optional list with additional number stringifiers, for example to serialize
 * a BigNumber. The output of the function must be valid stringified JSON.
 * When `undefined` is returned, the property will be deleted from the object.
 * The difference with using a `replacer` is that the output of a `replacer`
 * must be JSON and will be stringified afterwards, whereas the output of the
 * `numberStringifiers` is already stringified JSON.
 *
 * @returns Returns the string representation of the JSON object.
 */
function stringify(value, replacer, space, numberStringifiers) {
  const resolvedSpace = resolveSpace(space);
  const replacedValue = typeof replacer === 'function' ? replacer.call({
    '': value
  }, '', value) : value;
  return stringifyValue(replacedValue, '');

  /**
   * Stringify a value
   */
  function stringifyValue(value, indent) {
    if (Array.isArray(numberStringifiers)) {
      const stringifier = numberStringifiers.find(item => item.test(value));
      if (stringifier) {
        const str = stringifier.stringify(value);
        if (typeof str !== 'string' || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(str)) {
          throw new Error(`Invalid JSON number: output of a number stringifier must be a string containing a JSON number (output: ${str})`);
        }
        return str;
      }
    }

    // boolean, null, number, string, or date
    if (typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string' || value === null || value instanceof Date || value instanceof Boolean || value instanceof Number || value instanceof String) {
      return JSON.stringify(value);
    }

    // lossless number, the secret ingredient :)
    // @ts-ignore
    if (value?.isLosslessNumber) {
      return value.toString();
    }

    // BigInt
    if (typeof value === 'bigint') {
      return value.toString();
    }

    // Array
    if (Array.isArray(value)) {
      return stringifyArray(value, indent);
    }

    // Object (test lastly!)
    if (value && typeof value === 'object') {
      return stringifyObject(value, indent);
    }
    return undefined;
  }

  /**
   * Stringify an array
   */
  function stringifyArray(array, indent) {
    if (array.length === 0) {
      return '[]';
    }
    const childIndent = resolvedSpace ? indent + resolvedSpace : undefined;
    let str = resolvedSpace ? '[\n' : '[';
    for (let i = 0; i < array.length; i++) {
      const item = typeof replacer === 'function' ? replacer.call(array, String(i), array[i]) : array[i];
      if (resolvedSpace) {
        str += childIndent;
      }
      if (typeof item !== 'undefined' && typeof item !== 'function') {
        str += stringifyValue(item, childIndent);
      } else {
        str += 'null';
      }
      if (i < array.length - 1) {
        str += resolvedSpace ? ',\n' : ',';
      }
    }
    str += resolvedSpace ? `\n${indent}]` : ']';
    return str;
  }

  /**
   * Stringify an object
   */
  function stringifyObject(object, indent) {
    if (typeof object.toJSON === 'function') {
      return stringify(object.toJSON(), replacer, space, undefined);
    }
    const keys = Array.isArray(replacer) ? replacer.map(String) : Object.keys(object);
    if (keys.length === 0) {
      return '{}';
    }
    const childIndent = resolvedSpace ? indent + resolvedSpace : undefined;
    let first = true;
    let str = resolvedSpace ? '{\n' : '{';
    for (const key of keys) {
      const value = typeof replacer === 'function' ? replacer.call(object, key, object[key]) : object[key];
      if (includeProperty(key, value)) {
        if (first) {
          first = false;
        } else {
          str += resolvedSpace ? ',\n' : ',';
        }
        const keyStr = JSON.stringify(key);
        str += resolvedSpace ? `${childIndent + keyStr}: ` : `${keyStr}:`;
        str += stringifyValue(value, childIndent);
      }
    }
    str += resolvedSpace ? `\n${indent}}` : '}';
    return str;
  }

  /**
   * Test whether to include a property in a stringified object or not.
   */
  function includeProperty(_key, value) {
    return typeof value !== 'undefined' && typeof value !== 'function' && typeof value !== 'symbol';
  }
}

/**
 * Resolve a JSON stringify space:
 * replace a number with a string containing that number of spaces
 */
function resolveSpace(space) {
  if (typeof space === 'number') {
    return ' '.repeat(space);
  }
  if (typeof space === 'string' && space !== '') {
    return space;
  }
  return undefined;
}
//# sourceMappingURL=stringify.js.map

/***/ }),

/***/ "./node_modules/lossless-json/lib/esm/types.js":
/*!*****************************************************!*\
  !*** ./node_modules/lossless-json/lib/esm/types.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/lossless-json/lib/esm/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/lossless-json/lib/esm/utils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsafeNumberReason: () => (/* binding */ UnsafeNumberReason),
/* harmony export */   extractSignificantDigits: () => (/* binding */ extractSignificantDigits),
/* harmony export */   getUnsafeNumberReason: () => (/* binding */ getUnsafeNumberReason),
/* harmony export */   isInteger: () => (/* binding */ isInteger),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isSafeNumber: () => (/* binding */ isSafeNumber),
/* harmony export */   toSafeNumberOrThrow: () => (/* binding */ toSafeNumberOrThrow)
/* harmony export */ });
/**
 * Test whether a string contains an integer number
 */
function isInteger(value) {
  return INTEGER_REGEX.test(value);
}
const INTEGER_REGEX = /^-?[0-9]+$/;

/**
 * Test whether a string contains a number
 * http://stackoverflow.com/questions/13340717/json-numbers-regular-expression
 */
function isNumber(value) {
  return NUMBER_REGEX.test(value);
}
const NUMBER_REGEX = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;

/**
 * Test whether a string can be safely represented with a number
 * without information loss.
 *
 * When approx is true, floating point numbers that lose a few digits but
 * are still approximately equal in value are considered safe too.
 * Integer numbers must still be exactly equal.
 */
function isSafeNumber(value, config) {
  const num = Number.parseFloat(value);
  const str = String(num);
  const v = extractSignificantDigits(value);
  const s = extractSignificantDigits(str);
  if (v === s) {
    return true;
  }
  if (config?.approx === true) {
    // A value is approximately equal when:
    // 1. it is a floating point number, not an integer
    // 2. it has at least 14 digits
    // 3. the first 14 digits are equal
    const requiredDigits = 14;
    if (!isInteger(value) && s.length >= requiredDigits && v.startsWith(s.substring(0, requiredDigits))) {
      return true;
    }
  }
  return false;
}
let UnsafeNumberReason = /*#__PURE__*/function (UnsafeNumberReason) {
  UnsafeNumberReason["underflow"] = "underflow";
  UnsafeNumberReason["overflow"] = "overflow";
  UnsafeNumberReason["truncate_integer"] = "truncate_integer";
  UnsafeNumberReason["truncate_float"] = "truncate_float";
  return UnsafeNumberReason;
}({});

/**
 * When the provided value is an unsafe number, describe what the reason is:
 * overflow, underflow, truncate_integer, or truncate_float.
 * Returns undefined when the value is safe.
 */
function getUnsafeNumberReason(value) {
  if (isSafeNumber(value, {
    approx: false
  })) {
    return undefined;
  }
  if (isInteger(value)) {
    return UnsafeNumberReason.truncate_integer;
  }
  const num = Number.parseFloat(value);
  if (!Number.isFinite(num)) {
    return UnsafeNumberReason.overflow;
  }
  if (num === 0) {
    return UnsafeNumberReason.underflow;
  }
  return UnsafeNumberReason.truncate_float;
}

/**
 * Convert a string into a number when it is safe to do so.
 * Throws an error otherwise, explaining the reason.
 */
function toSafeNumberOrThrow(value, config) {
  const number = Number.parseFloat(value);
  const unsafeReason = getUnsafeNumberReason(value);
  if (config?.approx === true ? unsafeReason && unsafeReason !== UnsafeNumberReason.truncate_float : unsafeReason) {
    const unsafeReasonText = unsafeReason?.replace(/_\w+$/, '');
    throw new Error(`Cannot safely convert to number: the value '${value}' would ${unsafeReasonText} and become ${number}`);
  }
  return number;
}

/**
 * Get the significant digits of a number.
 *
 * For example:
 *   '2.34' returns '234'
 *   '-77' returns '77'
 *   '0.003400' returns '34'
 *   '120.5e+30' returns '1205'
 **/
function extractSignificantDigits(value) {
  return value
  // from "-0.250e+30" to "-0.250"
  .replace(EXPONENTIAL_PART_REGEX, '')

  // from "-0.250" to "-0250"
  .replace(DOT_REGEX, '')

  // from "-0250" to "-025"
  .replace(TRAILING_ZEROS_REGEX, '')

  // from "-025" to "25"
  .replace(LEADING_MINUS_AND_ZEROS_REGEX, '');
}
const EXPONENTIAL_PART_REGEX = /[eE][+-]?\d+$/;
const LEADING_MINUS_AND_ZEROS_REGEX = /^-?(0*)?/;
const DOT_REGEX = /\./;
const TRAILING_ZEROS_REGEX = /0+$/;
//# sourceMappingURL=utils.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/background_script.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.ts");
/* harmony import */ var _api_voice_reple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/voice_reple */ "./src/api/voice_reple.ts");
// Put all the javascript code here, that you want to execute in background.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


browser.runtime.onMessage.addListener(function onMessage(message, sender, sendResponse) {
    return __awaiter(this, void 0, void 0, function* () {
        const app_id = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.getAPI)();
        const reple = (0,_api_voice_reple__WEBPACK_IMPORTED_MODULE_1__.voiceReple)(message.id, app_id, message.file);
        const text = yield reple;
        return text;
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZF9zY3JpcHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDhCQUE4QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsWUFBWTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0Esd0NBQXdDLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRLHdFQUF3RSxLQUFLOztBQUVoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE1BQU07QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxpQkFBaUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixhQUFhLEdBQUcsS0FBSztBQUNqRDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUJBQWlCLElBQUksU0FBUyxHQUFHLFNBQVM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsSUFBSTtBQUN2RCxLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsTUFBTSxJQUFJOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLEdBQUc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGFBQWEsV0FBVztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx5QkFBeUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsNkJBQTZCLFFBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0JBQWdCLEdBQUcsZ0JBQWdCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQU07O0FBRXpCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxHQUFHO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrQkFBa0IsR0FBRyxnQkFBZ0I7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQ0FBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlDQUF5QztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNCQUFzQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0MsY0FBYyxvQ0FBb0MsR0FBRyxJQUFJO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRCxJQUFJLGlDQUFpQztBQUNyQyxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxREFBTTtBQUN0Qyw4QkFBOEIsMkRBQVk7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDJEQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFrQixLQUFLLDBEQUFTO0FBQ3BDLElBQUksaUVBQWtCLEtBQUssMERBQVM7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBZTtBQUNmO0FBQ0EsOERBQWU7O0FBRStEO0FBQzlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEJBQTRCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLElBQUksS0FBSyxjQUFjO0FBQ25EO0FBQ0E7QUFDQSxzRkFBc0YsUUFBUTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxJQUFJO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU0RDtBQUM1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFOZ0Q7QUFDbEI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCd0M7QUFDeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEbUU7QUFDTjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMseUNBQXlDLElBQUk7QUFDOUU7QUFDQSx3QkFBd0IscURBQUk7QUFDNUI7QUFDQTtBQUNBLG9CQUFvQixxREFBSSxzREFBc0QscURBQUk7QUFDbEYsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVLElBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxREFBSTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RjVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcktVO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsR0FBRzs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLE1BQU0sVUFBVSxrQkFBa0IsYUFBYSxPQUFPO0FBQ3pIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDdEhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsNEVBQTRFOzs7Ozs7Ozs7O0FBRTdDO0FBQ2dCO0FBTy9DLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FDakMsU0FBZSxTQUFTLENBQUMsT0FBZ0IsRUFBRSxNQUFNLEVBQUUsWUFBWTs7UUFDM0QsTUFBTSxNQUFNLEdBQUcsTUFBTSw0Q0FBTSxFQUFFLENBQUM7UUFFOUIsTUFBTSxLQUFLLEdBQUcsNERBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxLQUFLLENBQUM7UUFFekIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUFBLENBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9kaXN0L2luZGV4LmVzbTIwMTcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2NoZWNrX2luLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvY29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9mY21fdG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9pbnN0YWxsYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvdm9pY2VfcmVwbGUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvZGlzdC9lc20vaW5kZXguZXNtMjAxNy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2NvbXBvbmVudC9kaXN0L2VzbS9pbmRleC5lc20yMDE3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9kaXN0L2VzbS9pbmRleC5lc20yMDE3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvbG9nZ2VyL2Rpc3QvZXNtL2luZGV4LmVzbTIwMTcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlL2FwcC9kaXN0L2VzbS9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlL2luc3RhbGxhdGlvbnMvZGlzdC9lc20vaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pZGIvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lkYi9idWlsZC93cmFwLWlkYi12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9zc2xlc3MtanNvbi9saWIvZXNtL0xvc3NsZXNzTnVtYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb3NzbGVzcy1qc29uL2xpYi9lc20vY29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb3NzbGVzcy1qc29uL2xpYi9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvc3NsZXNzLWpzb24vbGliL2VzbS9udW1iZXJQYXJzZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb3NzbGVzcy1qc29uL2xpYi9lc20vcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvc3NsZXNzLWpzb24vbGliL2VzbS9yZXZpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvc3NsZXNzLWpzb24vbGliL2VzbS9yZXZpdmVEYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb3NzbGVzcy1qc29uL2xpYi9lc20vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb3NzbGVzcy1qc29uL2xpYi9lc20vdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvc3NsZXNzLWpzb24vbGliL2VzbS91dGlscy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZF9zY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgRmlyZWJhc2UgY29uc3RhbnRzLiAgU29tZSBvZiB0aGVzZSAoQGRlZmluZXMpIGNhbiBiZSBvdmVycmlkZGVuIGF0IGNvbXBpbGUtdGltZS5cclxuICovXHJcbmNvbnN0IENPTlNUQU5UUyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogQGRlZmluZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIGlzIHRoZSBjbGllbnQgTm9kZS5qcyBTREsuXHJcbiAgICAgKi9cclxuICAgIE5PREVfQ0xJRU5UOiBmYWxzZSxcclxuICAgIC8qKlxyXG4gICAgICogQGRlZmluZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIGlzIHRoZSBBZG1pbiBOb2RlLmpzIFNESy5cclxuICAgICAqL1xyXG4gICAgTk9ERV9BRE1JTjogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEZpcmViYXNlIFNESyBWZXJzaW9uXHJcbiAgICAgKi9cclxuICAgIFNES19WRVJTSU9OOiAnJHtKU0NPUkVfVkVSU0lPTn0nXHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHByb3ZpZGVkIGFzc2VydGlvbiBpcyBmYWxzeVxyXG4gKi9cclxuY29uc3QgYXNzZXJ0ID0gZnVuY3Rpb24gKGFzc2VydGlvbiwgbWVzc2FnZSkge1xyXG4gICAgaWYgKCFhc3NlcnRpb24pIHtcclxuICAgICAgICB0aHJvdyBhc3NlcnRpb25FcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRXJyb3Igb2JqZWN0IHN1aXRhYmxlIGZvciB0aHJvd2luZy5cclxuICovXHJcbmNvbnN0IGFzc2VydGlvbkVycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ZpcmViYXNlIERhdGFiYXNlICgnICtcclxuICAgICAgICBDT05TVEFOVFMuU0RLX1ZFUlNJT04gK1xyXG4gICAgICAgICcpIElOVEVSTkFMIEFTU0VSVCBGQUlMRUQ6ICcgK1xyXG4gICAgICAgIG1lc3NhZ2UpO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBzdHJpbmdUb0J5dGVBcnJheSQxID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgLy8gVE9ETyh1c2VyKTogVXNlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgaWYvd2hlbiBhdmFpbGFibGVcclxuICAgIGNvbnN0IG91dCA9IFtdO1xyXG4gICAgbGV0IHAgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGlmIChjIDwgMTI4KSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gYztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA8IDIwNDgpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiA2KSB8IDE5MjtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKGMgJiAweGZjMDApID09PSAweGQ4MDAgJiZcclxuICAgICAgICAgICAgaSArIDEgPCBzdHIubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIChzdHIuY2hhckNvZGVBdChpICsgMSkgJiAweGZjMDApID09PSAweGRjMDApIHtcclxuICAgICAgICAgICAgLy8gU3Vycm9nYXRlIFBhaXJcclxuICAgICAgICAgICAgYyA9IDB4MTAwMDAgKyAoKGMgJiAweDAzZmYpIDw8IDEwKSArIChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHgwM2ZmKTtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxOCkgfCAyNDA7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDEyKSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDEyKSB8IDIyNDtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxufTtcclxuLyoqXHJcbiAqIFR1cm5zIGFuIGFycmF5IG9mIG51bWJlcnMgaW50byB0aGUgc3RyaW5nIGdpdmVuIGJ5IHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZVxyXG4gKiBjaGFyYWN0ZXJzIHRvIHdoaWNoIHRoZSBudW1iZXJzIGNvcnJlc3BvbmQuXHJcbiAqIEBwYXJhbSBieXRlcyBBcnJheSBvZiBudW1iZXJzIHJlcHJlc2VudGluZyBjaGFyYWN0ZXJzLlxyXG4gKiBAcmV0dXJuIFN0cmluZ2lmaWNhdGlvbiBvZiB0aGUgYXJyYXkuXHJcbiAqL1xyXG5jb25zdCBieXRlQXJyYXlUb1N0cmluZyA9IGZ1bmN0aW9uIChieXRlcykge1xyXG4gICAgLy8gVE9ETyh1c2VyKTogVXNlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgaWYvd2hlbiBhdmFpbGFibGVcclxuICAgIGNvbnN0IG91dCA9IFtdO1xyXG4gICAgbGV0IHBvcyA9IDAsIGMgPSAwO1xyXG4gICAgd2hpbGUgKHBvcyA8IGJ5dGVzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGMxID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgIGlmIChjMSA8IDEyOCkge1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjMSA+IDE5MSAmJiBjMSA8IDIyNCkge1xyXG4gICAgICAgICAgICBjb25zdCBjMiA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYzEgJiAzMSkgPDwgNikgfCAoYzIgJiA2MykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjMSA+IDIzOSAmJiBjMSA8IDM2NSkge1xyXG4gICAgICAgICAgICAvLyBTdXJyb2dhdGUgUGFpclxyXG4gICAgICAgICAgICBjb25zdCBjMiA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgY29uc3QgYzMgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIGNvbnN0IGM0ID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgICAgICBjb25zdCB1ID0gKCgoYzEgJiA3KSA8PCAxOCkgfCAoKGMyICYgNjMpIDw8IDEyKSB8ICgoYzMgJiA2MykgPDwgNikgfCAoYzQgJiA2MykpIC1cclxuICAgICAgICAgICAgICAgIDB4MTAwMDA7XHJcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDAgKyAodSA+PiAxMCkpO1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkYzAwICsgKHUgJiAxMDIzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjMiA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgY29uc3QgYzMgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMxICYgMTUpIDw8IDEyKSB8ICgoYzIgJiA2MykgPDwgNikgfCAoYzMgJiA2MykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQuam9pbignJyk7XHJcbn07XHJcbi8vIFdlIGRlZmluZSBpdCBhcyBhbiBvYmplY3QgbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY2xhc3MgYmVjYXVzZSBhIGNsYXNzIGNvbXBpbGVkIGRvd24gdG8gZXM1IGNhbid0XHJcbi8vIGJlIHRyZWVzaGFrZWQuIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNjkxXHJcbi8vIFN0YXRpYyBsb29rdXAgbWFwcywgbGF6aWx5IHBvcHVsYXRlZCBieSBpbml0XygpXHJcbi8vIFRPRE8oZGxhcm9jcXVlKTogRGVmaW5lIHRoaXMgYXMgYSBjbGFzcywgc2luY2Ugd2Ugbm8gbG9uZ2VyIHRhcmdldCBFUzUuXHJcbmNvbnN0IGJhc2U2NCA9IHtcclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBieXRlcyB0byBjaGFyYWN0ZXJzLlxyXG4gICAgICovXHJcbiAgICBieXRlVG9DaGFyTWFwXzogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBjaGFyYWN0ZXJzIHRvIGJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBjaGFyVG9CeXRlTWFwXzogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBieXRlcyB0byB3ZWJzYWZlIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBieXRlVG9DaGFyTWFwV2ViU2FmZV86IG51bGwsXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgd2Vic2FmZSBjaGFyYWN0ZXJzIHRvIGJ5dGVzLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgY2hhclRvQnl0ZU1hcFdlYlNhZmVfOiBudWxsLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXIgZGVmYXVsdCBhbHBoYWJldCwgc2hhcmVkIGJldHdlZW5cclxuICAgICAqIEVOQ09ERURfVkFMUyBhbmQgRU5DT0RFRF9WQUxTX1dFQlNBRkVcclxuICAgICAqL1xyXG4gICAgRU5DT0RFRF9WQUxTX0JBU0U6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicgKyAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonICsgJzAxMjM0NTY3ODknLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXIgZGVmYXVsdCBhbHBoYWJldC4gVmFsdWUgNjQgKD0pIGlzIHNwZWNpYWw7IGl0IG1lYW5zIFwibm90aGluZy5cIlxyXG4gICAgICovXHJcbiAgICBnZXQgRU5DT0RFRF9WQUxTKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkVOQ09ERURfVkFMU19CQVNFICsgJysvPSc7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXIgd2Vic2FmZSBhbHBoYWJldC5cclxuICAgICAqL1xyXG4gICAgZ2V0IEVOQ09ERURfVkFMU19XRUJTQUZFKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkVOQ09ERURfVkFMU19CQVNFICsgJy1fLic7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgYnJvd3NlciBzdXBwb3J0cyB0aGUgYXRvYiBhbmQgYnRvYSBmdW5jdGlvbnMuIFRoaXMgZXh0ZW5zaW9uXHJcbiAgICAgKiBzdGFydGVkIGF0IE1vemlsbGEgYnV0IGlzIG5vdyBpbXBsZW1lbnRlZCBieSBtYW55IGJyb3dzZXJzLiBXZSB1c2UgdGhlXHJcbiAgICAgKiBBU1NVTUVfKiB2YXJpYWJsZXMgdG8gYXZvaWQgcHVsbGluZyBpbiB0aGUgZnVsbCB1c2VyYWdlbnQgZGV0ZWN0aW9uIGxpYnJhcnlcclxuICAgICAqIGJ1dCBzdGlsbCBhbGxvd2luZyB0aGUgc3RhbmRhcmQgcGVyLWJyb3dzZXIgY29tcGlsYXRpb25zLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgSEFTX05BVElWRV9TVVBQT1JUOiB0eXBlb2YgYXRvYiA9PT0gJ2Z1bmN0aW9uJyxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWVuY29kZSBhbiBhcnJheSBvZiBieXRlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgQW4gYXJyYXkgb2YgYnl0ZXMgKG51bWJlcnMgd2l0aFxyXG4gICAgICogICAgIHZhbHVlIGluIFswLCAyNTVdKSB0byBlbmNvZGUuXHJcbiAgICAgKiBAcGFyYW0gd2ViU2FmZSBCb29sZWFuIGluZGljYXRpbmcgd2Ugc2hvdWxkIHVzZSB0aGVcclxuICAgICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cclxuICAgICAqIEByZXR1cm4gVGhlIGJhc2U2NCBlbmNvZGVkIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgZW5jb2RlQnl0ZUFycmF5KGlucHV0LCB3ZWJTYWZlKSB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignZW5jb2RlQnl0ZUFycmF5IHRha2VzIGFuIGFycmF5IGFzIGEgcGFyYW1ldGVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdF8oKTtcclxuICAgICAgICBjb25zdCBieXRlVG9DaGFyTWFwID0gd2ViU2FmZVxyXG4gICAgICAgICAgICA/IHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfXHJcbiAgICAgICAgICAgIDogdGhpcy5ieXRlVG9DaGFyTWFwXztcclxuICAgICAgICBjb25zdCBvdXRwdXQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGUxID0gaW5wdXRbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGhhdmVCeXRlMiA9IGkgKyAxIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlMiA9IGhhdmVCeXRlMiA/IGlucHV0W2kgKyAxXSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhdmVCeXRlMyA9IGkgKyAyIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlMyA9IGhhdmVCeXRlMyA/IGlucHV0W2kgKyAyXSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUxID0gYnl0ZTEgPj4gMjtcclxuICAgICAgICAgICAgY29uc3Qgb3V0Qnl0ZTIgPSAoKGJ5dGUxICYgMHgwMykgPDwgNCkgfCAoYnl0ZTIgPj4gNCk7XHJcbiAgICAgICAgICAgIGxldCBvdXRCeXRlMyA9ICgoYnl0ZTIgJiAweDBmKSA8PCAyKSB8IChieXRlMyA+PiA2KTtcclxuICAgICAgICAgICAgbGV0IG91dEJ5dGU0ID0gYnl0ZTMgJiAweDNmO1xyXG4gICAgICAgICAgICBpZiAoIWhhdmVCeXRlMykge1xyXG4gICAgICAgICAgICAgICAgb3V0Qnl0ZTQgPSA2NDtcclxuICAgICAgICAgICAgICAgIGlmICghaGF2ZUJ5dGUyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0Qnl0ZTMgPSA2NDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChieXRlVG9DaGFyTWFwW291dEJ5dGUxXSwgYnl0ZVRvQ2hhck1hcFtvdXRCeXRlMl0sIGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTNdLCBieXRlVG9DaGFyTWFwW291dEJ5dGU0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQuam9pbignJyk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlNjQtZW5jb2RlIGEgc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpbnB1dCBBIHN0cmluZyB0byBlbmNvZGUuXHJcbiAgICAgKiBAcGFyYW0gd2ViU2FmZSBJZiB0cnVlLCB3ZSBzaG91bGQgdXNlIHRoZVxyXG4gICAgICogICAgIGFsdGVybmF0aXZlIGFscGhhYmV0LlxyXG4gICAgICogQHJldHVybiBUaGUgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBlbmNvZGVTdHJpbmcoaW5wdXQsIHdlYlNhZmUpIHtcclxuICAgICAgICAvLyBTaG9ydGN1dCBmb3IgTW96aWxsYSBicm93c2VycyB0aGF0IGltcGxlbWVudFxyXG4gICAgICAgIC8vIGEgbmF0aXZlIGJhc2U2NCBlbmNvZGVyIGluIHRoZSBmb3JtIG9mIFwiYnRvYS9hdG9iXCJcclxuICAgICAgICBpZiAodGhpcy5IQVNfTkFUSVZFX1NVUFBPUlQgJiYgIXdlYlNhZmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJ0b2EoaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGVCeXRlQXJyYXkoc3RyaW5nVG9CeXRlQXJyYXkkMShpbnB1dCksIHdlYlNhZmUpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWRlY29kZSBhIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgdG8gZGVjb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgVHJ1ZSBpZiB3ZSBzaG91bGQgdXNlIHRoZVxyXG4gICAgICogICAgIGFsdGVybmF0aXZlIGFscGhhYmV0LlxyXG4gICAgICogQHJldHVybiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBkZWNvZGVkIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBkZWNvZGVTdHJpbmcoaW5wdXQsIHdlYlNhZmUpIHtcclxuICAgICAgICAvLyBTaG9ydGN1dCBmb3IgTW96aWxsYSBicm93c2VycyB0aGF0IGltcGxlbWVudFxyXG4gICAgICAgIC8vIGEgbmF0aXZlIGJhc2U2NCBlbmNvZGVyIGluIHRoZSBmb3JtIG9mIFwiYnRvYS9hdG9iXCJcclxuICAgICAgICBpZiAodGhpcy5IQVNfTkFUSVZFX1NVUFBPUlQgJiYgIXdlYlNhZmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0b2IoaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnl0ZUFycmF5VG9TdHJpbmcodGhpcy5kZWNvZGVTdHJpbmdUb0J5dGVBcnJheShpbnB1dCwgd2ViU2FmZSkpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWRlY29kZSBhIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBJbiBiYXNlLTY0IGRlY29kaW5nLCBncm91cHMgb2YgZm91ciBjaGFyYWN0ZXJzIGFyZSBjb252ZXJ0ZWQgaW50byB0aHJlZVxyXG4gICAgICogYnl0ZXMuICBJZiB0aGUgZW5jb2RlciBkaWQgbm90IGFwcGx5IHBhZGRpbmcsIHRoZSBpbnB1dCBsZW5ndGggbWF5IG5vdFxyXG4gICAgICogYmUgYSBtdWx0aXBsZSBvZiA0LlxyXG4gICAgICpcclxuICAgICAqIEluIHRoaXMgY2FzZSwgdGhlIGxhc3QgZ3JvdXAgd2lsbCBoYXZlIGZld2VyIHRoYW4gNCBjaGFyYWN0ZXJzLCBhbmRcclxuICAgICAqIHBhZGRpbmcgd2lsbCBiZSBpbmZlcnJlZC4gIElmIHRoZSBncm91cCBoYXMgb25lIG9yIHR3byBjaGFyYWN0ZXJzLCBpdCBkZWNvZGVzXHJcbiAgICAgKiB0byBvbmUgYnl0ZS4gIElmIHRoZSBncm91cCBoYXMgdGhyZWUgY2hhcmFjdGVycywgaXQgZGVjb2RlcyB0byB0d28gYnl0ZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlucHV0IElucHV0IHRvIGRlY29kZS5cclxuICAgICAqIEBwYXJhbSB3ZWJTYWZlIFRydWUgaWYgd2Ugc2hvdWxkIHVzZSB0aGUgd2ViLXNhZmUgYWxwaGFiZXQuXHJcbiAgICAgKiBAcmV0dXJuIGJ5dGVzIHJlcHJlc2VudGluZyB0aGUgZGVjb2RlZCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgZGVjb2RlU3RyaW5nVG9CeXRlQXJyYXkoaW5wdXQsIHdlYlNhZmUpIHtcclxuICAgICAgICB0aGlzLmluaXRfKCk7XHJcbiAgICAgICAgY29uc3QgY2hhclRvQnl0ZU1hcCA9IHdlYlNhZmVcclxuICAgICAgICAgICAgPyB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1xyXG4gICAgICAgICAgICA6IHRoaXMuY2hhclRvQnl0ZU1hcF87XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGUxID0gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSsrKV07XHJcbiAgICAgICAgICAgIGNvbnN0IGhhdmVCeXRlMiA9IGkgPCBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGUyID0gaGF2ZUJ5dGUyID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogMDtcclxuICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICBjb25zdCBoYXZlQnl0ZTMgPSBpIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlMyA9IGhhdmVCeXRlMyA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDY0O1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhdmVCeXRlNCA9IGkgPCBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGU0ID0gaGF2ZUJ5dGU0ID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogNjQ7XHJcbiAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgaWYgKGJ5dGUxID09IG51bGwgfHwgYnl0ZTIgPT0gbnVsbCB8fCBieXRlMyA9PSBudWxsIHx8IGJ5dGU0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBEZWNvZGVCYXNlNjRTdHJpbmdFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUxID0gKGJ5dGUxIDw8IDIpIHwgKGJ5dGUyID4+IDQpO1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChvdXRCeXRlMSk7XHJcbiAgICAgICAgICAgIGlmIChieXRlMyAhPT0gNjQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUyID0gKChieXRlMiA8PCA0KSAmIDB4ZjApIHwgKGJ5dGUzID4+IDIpO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ5dGU0ICE9PSA2NCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUzID0gKChieXRlMyA8PCA2KSAmIDB4YzApIHwgYnl0ZTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXp5IHN0YXRpYyBpbml0aWFsaXphdGlvbiBmdW5jdGlvbi4gQ2FsbGVkIGJlZm9yZVxyXG4gICAgICogYWNjZXNzaW5nIGFueSBvZiB0aGUgc3RhdGljIG1hcCB2YXJpYWJsZXMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBpbml0XygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYnl0ZVRvQ2hhck1hcF8pIHtcclxuICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwXyA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfID0ge307XHJcbiAgICAgICAgICAgIC8vIFdlIHdhbnQgcXVpY2sgbWFwcGluZ3MgYmFjayBhbmQgZm9ydGgsIHNvIHdlIHByZWNvbXB1dGUgdHdvIG1hcHMuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTkNPREVEX1ZBTFMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcF9baV0gPSB0aGlzLkVOQ09ERURfVkFMUy5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfW3RoaXMuYnl0ZVRvQ2hhck1hcF9baV1dID0gaTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfW2ldID0gdGhpcy5FTkNPREVEX1ZBTFNfV0VCU0FGRS5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1t0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlX1tpXV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgLy8gQmUgZm9yZ2l2aW5nIHdoZW4gZGVjb2RpbmcgYW5kIGNvcnJlY3RseSBkZWNvZGUgYm90aCBlbmNvZGluZ3MuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA+PSB0aGlzLkVOQ09ERURfVkFMU19CQVNFLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcF9bdGhpcy5FTkNPREVEX1ZBTFNfV0VCU0FGRS5jaGFyQXQoaSldID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1t0aGlzLkVOQ09ERURfVkFMUy5jaGFyQXQoaSldID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIEFuIGVycm9yIGVuY291bnRlcmVkIHdoaWxlIGRlY29kaW5nIGJhc2U2NCBzdHJpbmcuXHJcbiAqL1xyXG5jbGFzcyBEZWNvZGVCYXNlNjRTdHJpbmdFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ0RlY29kZUJhc2U2NFN0cmluZ0Vycm9yJztcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVVJMLXNhZmUgYmFzZTY0IGVuY29kaW5nXHJcbiAqL1xyXG5jb25zdCBiYXNlNjRFbmNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICBjb25zdCB1dGY4Qnl0ZXMgPSBzdHJpbmdUb0J5dGVBcnJheSQxKHN0cik7XHJcbiAgICByZXR1cm4gYmFzZTY0LmVuY29kZUJ5dGVBcnJheSh1dGY4Qnl0ZXMsIHRydWUpO1xyXG59O1xyXG4vKipcclxuICogVVJMLXNhZmUgYmFzZTY0IGVuY29kaW5nICh3aXRob3V0IFwiLlwiIHBhZGRpbmcgaW4gdGhlIGVuZCkuXHJcbiAqIGUuZy4gVXNlZCBpbiBKU09OIFdlYiBUb2tlbiAoSldUKSBwYXJ0cy5cclxuICovXHJcbmNvbnN0IGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgLy8gVXNlIGJhc2U2NHVybCBlbmNvZGluZyBhbmQgcmVtb3ZlIHBhZGRpbmcgaW4gdGhlIGVuZCAoZG90IGNoYXJhY3RlcnMpLlxyXG4gICAgcmV0dXJuIGJhc2U2NEVuY29kZShzdHIpLnJlcGxhY2UoL1xcLi9nLCAnJyk7XHJcbn07XHJcbi8qKlxyXG4gKiBVUkwtc2FmZSBiYXNlNjQgZGVjb2RpbmdcclxuICpcclxuICogTk9URTogRE8gTk9UIHVzZSB0aGUgZ2xvYmFsIGF0b2IoKSBmdW5jdGlvbiAtIGl0IGRvZXMgTk9UIHN1cHBvcnQgdGhlXHJcbiAqIGJhc2U2NFVybCB2YXJpYW50IGVuY29kaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0gc3RyIFRvIGJlIGRlY29kZWRcclxuICogQHJldHVybiBEZWNvZGVkIHJlc3VsdCwgaWYgcG9zc2libGVcclxuICovXHJcbmNvbnN0IGJhc2U2NERlY29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGJhc2U2NC5kZWNvZGVTdHJpbmcoc3RyLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignYmFzZTY0RGVjb2RlIGZhaWxlZDogJywgZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIERvIGEgZGVlcC1jb3B5IG9mIGJhc2ljIEphdmFTY3JpcHQgT2JqZWN0cyBvciBBcnJheXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWVwQ29weSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIGRlZXBFeHRlbmQodW5kZWZpbmVkLCB2YWx1ZSk7XHJcbn1cclxuLyoqXHJcbiAqIENvcHkgcHJvcGVydGllcyBmcm9tIHNvdXJjZSB0byB0YXJnZXQgKHJlY3Vyc2l2ZWx5IGFsbG93cyBleHRlbnNpb25cclxuICogb2YgT2JqZWN0cyBhbmQgQXJyYXlzKS4gIFNjYWxhciB2YWx1ZXMgaW4gdGhlIHRhcmdldCBhcmUgb3Zlci13cml0dGVuLlxyXG4gKiBJZiB0YXJnZXQgaXMgdW5kZWZpbmVkLCBhbiBvYmplY3Qgb2YgdGhlIGFwcHJvcHJpYXRlIHR5cGUgd2lsbCBiZSBjcmVhdGVkXHJcbiAqIChhbmQgcmV0dXJuZWQpLlxyXG4gKlxyXG4gKiBXZSByZWN1cnNpdmVseSBjb3B5IGFsbCBjaGlsZCBwcm9wZXJ0aWVzIG9mIHBsYWluIE9iamVjdHMgaW4gdGhlIHNvdXJjZS0gc29cclxuICogdGhhdCBuYW1lc3BhY2UtIGxpa2UgZGljdGlvbmFyaWVzIGFyZSBtZXJnZWQuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB0aGUgdGFyZ2V0IGNhbiBiZSBhIGZ1bmN0aW9uLCBpbiB3aGljaCBjYXNlIHRoZSBwcm9wZXJ0aWVzIGluXHJcbiAqIHRoZSBzb3VyY2UgT2JqZWN0IGFyZSBjb3BpZWQgb250byBpdCBhcyBzdGF0aWMgcHJvcGVydGllcyBvZiB0aGUgRnVuY3Rpb24uXHJcbiAqXHJcbiAqIE5vdGU6IHdlIGRvbid0IG1lcmdlIF9fcHJvdG9fXyB0byBwcmV2ZW50IHByb3RvdHlwZSBwb2xsdXRpb25cclxuICovXHJcbmZ1bmN0aW9uIGRlZXBFeHRlbmQodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGlmICghKHNvdXJjZSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChzb3VyY2UuY29uc3RydWN0b3IpIHtcclxuICAgICAgICBjYXNlIERhdGU6XHJcbiAgICAgICAgICAgIC8vIFRyZWF0IERhdGVzIGxpa2Ugc2NhbGFyczsgaWYgdGhlIHRhcmdldCBkYXRlIG9iamVjdCBoYWQgYW55IGNoaWxkXHJcbiAgICAgICAgICAgIC8vIHByb3BlcnRpZXMgLSB0aGV5IHdpbGwgYmUgbG9zdCFcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVZhbHVlID0gc291cmNlO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVZhbHVlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgY2FzZSBPYmplY3Q6XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBcnJheTpcclxuICAgICAgICAgICAgLy8gQWx3YXlzIGNvcHkgdGhlIGFycmF5IHNvdXJjZSBhbmQgb3ZlcndyaXRlIHRoZSB0YXJnZXQuXHJcbiAgICAgICAgICAgIHRhcmdldCA9IFtdO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBOb3QgYSBwbGFpbiBPYmplY3QgLSB0cmVhdCBpdCBhcyBhIHNjYWxhci5cclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBzb3VyY2UpIHtcclxuICAgICAgICAvLyB1c2UgaXNWYWxpZEtleSB0byBndWFyZCBhZ2FpbnN0IHByb3RvdHlwZSBwb2xsdXRpb24uIFNlZSBodHRwczovL3NueWsuaW8vdnVsbi9TTllLLUpTLUxPREFTSC00NTAyMDJcclxuICAgICAgICBpZiAoIXNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSB8fCAhaXNWYWxpZEtleShwcm9wKSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gZGVlcEV4dGVuZCh0YXJnZXRbcHJvcF0sIHNvdXJjZVtwcm9wXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcbmZ1bmN0aW9uIGlzVmFsaWRLZXkoa2V5KSB7XHJcbiAgICByZXR1cm4ga2V5ICE9PSAnX19wcm90b19fJztcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUG9seWZpbGwgZm9yIGBnbG9iYWxUaGlzYCBvYmplY3QuXHJcbiAqIEByZXR1cm5zIHRoZSBgZ2xvYmFsVGhpc2Agb2JqZWN0IGZvciB0aGUgZ2l2ZW4gZW52aXJvbm1lbnQuXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcclxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3c7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3QuJyk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgZ2V0RGVmYXVsdHNGcm9tR2xvYmFsID0gKCkgPT4gZ2V0R2xvYmFsKCkuX19GSVJFQkFTRV9ERUZBVUxUU19fO1xyXG4vKipcclxuICogQXR0ZW1wdCB0byByZWFkIGRlZmF1bHRzIGZyb20gYSBKU09OIHN0cmluZyBwcm92aWRlZCB0b1xyXG4gKiBwcm9jZXNzKC4pZW52KC4pX19GSVJFQkFTRV9ERUZBVUxUU19fIG9yIGEgSlNPTiBmaWxlIHdob3NlIHBhdGggaXMgaW5cclxuICogcHJvY2VzcyguKWVudiguKV9fRklSRUJBU0VfREVGQVVMVFNfUEFUSF9fXHJcbiAqIFRoZSBkb3RzIGFyZSBpbiBwYXJlbnMgYmVjYXVzZSBjZXJ0YWluIGNvbXBpbGVycyAoVml0ZT8pIGNhbm5vdFxyXG4gKiBoYW5kbGUgc2VlaW5nIHRoYXQgdmFyaWFibGUgaW4gY29tbWVudHMuXHJcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmlyZWJhc2UvZmlyZWJhc2UtanMtc2RrL2lzc3Vlcy82ODM4XHJcbiAqL1xyXG5jb25zdCBnZXREZWZhdWx0c0Zyb21FbnZWYXJpYWJsZSA9ICgpID0+IHtcclxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHByb2Nlc3MuZW52ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRlZmF1bHRzSnNvblN0cmluZyA9IHByb2Nlc3MuZW52Ll9fRklSRUJBU0VfREVGQVVMVFNfXztcclxuICAgIGlmIChkZWZhdWx0c0pzb25TdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWZhdWx0c0pzb25TdHJpbmcpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBnZXREZWZhdWx0c0Zyb21Db29raWUgPSAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBtYXRjaDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2goL19fRklSRUJBU0VfREVGQVVMVFNfXz0oW147XSspLyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIFNvbWUgZW52aXJvbm1lbnRzIHN1Y2ggYXMgQW5ndWxhciBVbml2ZXJzYWwgU1NSIGhhdmUgYVxyXG4gICAgICAgIC8vIGBkb2N1bWVudGAgb2JqZWN0IGJ1dCBlcnJvciBvbiBhY2Nlc3NpbmcgYGRvY3VtZW50LmNvb2tpZWAuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGVjb2RlZCA9IG1hdGNoICYmIGJhc2U2NERlY29kZShtYXRjaFsxXSk7XHJcbiAgICByZXR1cm4gZGVjb2RlZCAmJiBKU09OLnBhcnNlKGRlY29kZWQpO1xyXG59O1xyXG4vKipcclxuICogR2V0IHRoZSBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gb2JqZWN0LiBJdCBjaGVja3MgaW4gb3JkZXI6XHJcbiAqICgxKSBpZiBzdWNoIGFuIG9iamVjdCBleGlzdHMgYXMgYSBwcm9wZXJ0eSBvZiBgZ2xvYmFsVGhpc2BcclxuICogKDIpIGlmIHN1Y2ggYW4gb2JqZWN0IHdhcyBwcm92aWRlZCBvbiBhIHNoZWxsIGVudmlyb25tZW50IHZhcmlhYmxlXHJcbiAqICgzKSBpZiBzdWNoIGFuIG9iamVjdCBleGlzdHMgaW4gYSBjb29raWVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuY29uc3QgZ2V0RGVmYXVsdHMgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiAoZ2V0RGVmYXVsdHNGcm9tR2xvYmFsKCkgfHxcclxuICAgICAgICAgICAgZ2V0RGVmYXVsdHNGcm9tRW52VmFyaWFibGUoKSB8fFxyXG4gICAgICAgICAgICBnZXREZWZhdWx0c0Zyb21Db29raWUoKSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhdGNoLWFsbCBmb3IgYmVpbmcgdW5hYmxlIHRvIGdldCBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gZHVlXHJcbiAgICAgICAgICogdG8gYW55IGVudmlyb25tZW50IGNhc2Ugd2UgaGF2ZSBub3QgYWNjb3VudGVkIGZvci4gTG9nIHRvXHJcbiAgICAgICAgICogaW5mbyBpbnN0ZWFkIG9mIHN3YWxsb3dpbmcgc28gd2UgY2FuIGZpbmQgdGhlc2UgdW5rbm93biBjYXNlc1xyXG4gICAgICAgICAqIGFuZCBhZGQgcGF0aHMgZm9yIHRoZW0gaWYgbmVlZGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhgVW5hYmxlIHRvIGdldCBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gZHVlIHRvOiAke2V9YCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogUmV0dXJucyBlbXVsYXRvciBob3N0IHN0b3JlZCBpbiB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdFxyXG4gKiBmb3IgdGhlIGdpdmVuIHByb2R1Y3QuXHJcbiAqIEByZXR1cm5zIGEgVVJMIGhvc3QgZm9ybWF0dGVkIGxpa2UgYDEyNy4wLjAuMTo5OTk5YCBvciBgWzo6MV06NDAwMGAgaWYgYXZhaWxhYmxlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmNvbnN0IGdldERlZmF1bHRFbXVsYXRvckhvc3QgPSAocHJvZHVjdE5hbWUpID0+IHsgdmFyIF9hLCBfYjsgcmV0dXJuIChfYiA9IChfYSA9IGdldERlZmF1bHRzKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5lbXVsYXRvckhvc3RzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbcHJvZHVjdE5hbWVdOyB9O1xyXG4vKipcclxuICogUmV0dXJucyBlbXVsYXRvciBob3N0bmFtZSBhbmQgcG9ydCBzdG9yZWQgaW4gdGhlIF9fRklSRUJBU0VfREVGQVVMVFNfXyBvYmplY3RcclxuICogZm9yIHRoZSBnaXZlbiBwcm9kdWN0LlxyXG4gKiBAcmV0dXJucyBhIHBhaXIgb2YgaG9zdG5hbWUgYW5kIHBvcnQgbGlrZSBgW1wiOjoxXCIsIDQwMDBdYCBpZiBhdmFpbGFibGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuY29uc3QgZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdG5hbWVBbmRQb3J0ID0gKHByb2R1Y3ROYW1lKSA9PiB7XHJcbiAgICBjb25zdCBob3N0ID0gZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdChwcm9kdWN0TmFtZSk7XHJcbiAgICBpZiAoIWhvc3QpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VwYXJhdG9ySW5kZXggPSBob3N0Lmxhc3RJbmRleE9mKCc6Jyk7IC8vIEZpbmRpbmcgdGhlIGxhc3Qgc2luY2UgSVB2NiBhZGRyIGFsc28gaGFzIGNvbG9ucy5cclxuICAgIGlmIChzZXBhcmF0b3JJbmRleCA8PSAwIHx8IHNlcGFyYXRvckluZGV4ICsgMSA9PT0gaG9zdC5sZW5ndGgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaG9zdCAke2hvc3R9IHdpdGggbm8gc2VwYXJhdGUgaG9zdG5hbWUgYW5kIHBvcnQhYCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXHJcbiAgICBjb25zdCBwb3J0ID0gcGFyc2VJbnQoaG9zdC5zdWJzdHJpbmcoc2VwYXJhdG9ySW5kZXggKyAxKSwgMTApO1xyXG4gICAgaWYgKGhvc3RbMF0gPT09ICdbJykge1xyXG4gICAgICAgIC8vIEJyYWNrZXQtcXVvdGVkIGBbaXB2NmFkZHJdOnBvcnRgID0+IHJldHVybiBcImlwdjZhZGRyXCIgKHdpdGhvdXQgYnJhY2tldHMpLlxyXG4gICAgICAgIHJldHVybiBbaG9zdC5zdWJzdHJpbmcoMSwgc2VwYXJhdG9ySW5kZXggLSAxKSwgcG9ydF07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gW2hvc3Quc3Vic3RyaW5nKDAsIHNlcGFyYXRvckluZGV4KSwgcG9ydF07XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBSZXR1cm5zIEZpcmViYXNlIGFwcCBjb25maWcgc3RvcmVkIGluIHRoZSBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gb2JqZWN0LlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5jb25zdCBnZXREZWZhdWx0QXBwQ29uZmlnID0gKCkgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBnZXREZWZhdWx0cygpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29uZmlnOyB9O1xyXG4vKipcclxuICogUmV0dXJucyBhbiBleHBlcmltZW50YWwgc2V0dGluZyBvbiB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdCAocHJvcGVydGllc1xyXG4gKiBwcmVmaXhlZCBieSBcIl9cIilcclxuICogQHB1YmxpY1xyXG4gKi9cclxuY29uc3QgZ2V0RXhwZXJpbWVudGFsU2V0dGluZyA9IChuYW1lKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGdldERlZmF1bHRzKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtgXyR7bmFtZX1gXTsgfTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY2xhc3MgRGVmZXJyZWQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yZWplY3QgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlID0gKCkgPT4geyB9O1xyXG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE91ciBBUEkgaW50ZXJuYWxzIGFyZSBub3QgcHJvbWlzaWZpZWQgYW5kIGNhbm5vdCBiZWNhdXNlIG91ciBjYWxsYmFjayBBUElzIGhhdmUgc3VidGxlIGV4cGVjdGF0aW9ucyBhcm91bmRcclxuICAgICAqIGludm9raW5nIHByb21pc2VzIGlubGluZSwgd2hpY2ggUHJvbWlzZXMgYXJlIGZvcmJpZGRlbiB0byBkby4gVGhpcyBtZXRob2QgYWNjZXB0cyBhbiBvcHRpb25hbCBub2RlLXN0eWxlIGNhbGxiYWNrXHJcbiAgICAgKiBhbmQgcmV0dXJucyBhIG5vZGUtc3R5bGUgY2FsbGJhY2sgd2hpY2ggd2lsbCByZXNvbHZlIG9yIHJlamVjdCB0aGUgRGVmZXJyZWQncyBwcm9taXNlLlxyXG4gICAgICovXHJcbiAgICB3cmFwQ2FsbGJhY2soY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gKGVycm9yLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgLy8gQXR0YWNoaW5nIG5vb3AgaGFuZGxlciBqdXN0IGluIGNhc2UgZGV2ZWxvcGVyIHdhc24ndCBleHBlY3RpbmdcclxuICAgICAgICAgICAgICAgIC8vIHByb21pc2VzXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb21pc2UuY2F0Y2goKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgICAgIC8vIFNvbWUgb2Ygb3VyIGNhbGxiYWNrcyBkb24ndCBleHBlY3QgYSB2YWx1ZSBhbmQgb3VyIG93biB0ZXN0c1xyXG4gICAgICAgICAgICAgICAgLy8gYXNzZXJ0IHRoYXQgdGhlIHBhcmFtZXRlciBsZW5ndGggaXMgMVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZU1vY2tVc2VyVG9rZW4odG9rZW4sIHByb2plY3RJZCkge1xyXG4gICAgaWYgKHRva2VuLnVpZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIFwidWlkXCIgZmllbGQgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBieSBtb2NrVXNlclRva2VuLiBQbGVhc2UgdXNlIFwic3ViXCIgaW5zdGVhZCBmb3IgRmlyZWJhc2UgQXV0aCBVc2VyIElELicpO1xyXG4gICAgfVxyXG4gICAgLy8gVW5zZWN1cmVkIEpXVHMgdXNlIFwibm9uZVwiIGFzIHRoZSBhbGdvcml0aG0uXHJcbiAgICBjb25zdCBoZWFkZXIgPSB7XHJcbiAgICAgICAgYWxnOiAnbm9uZScsXHJcbiAgICAgICAgdHlwZTogJ0pXVCdcclxuICAgIH07XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdElkIHx8ICdkZW1vLXByb2plY3QnO1xyXG4gICAgY29uc3QgaWF0ID0gdG9rZW4uaWF0IHx8IDA7XHJcbiAgICBjb25zdCBzdWIgPSB0b2tlbi5zdWIgfHwgdG9rZW4udXNlcl9pZDtcclxuICAgIGlmICghc3ViKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibW9ja1VzZXJUb2tlbiBtdXN0IGNvbnRhaW4gJ3N1Yicgb3IgJ3VzZXJfaWQnIGZpZWxkIVwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBheWxvYWQgPSBPYmplY3QuYXNzaWduKHsgXHJcbiAgICAgICAgLy8gU2V0IGFsbCByZXF1aXJlZCBmaWVsZHMgdG8gZGVjZW50IGRlZmF1bHRzXHJcbiAgICAgICAgaXNzOiBgaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tLyR7cHJvamVjdH1gLCBhdWQ6IHByb2plY3QsIGlhdCwgZXhwOiBpYXQgKyAzNjAwLCBhdXRoX3RpbWU6IGlhdCwgc3ViLCB1c2VyX2lkOiBzdWIsIGZpcmViYXNlOiB7XHJcbiAgICAgICAgICAgIHNpZ25faW5fcHJvdmlkZXI6ICdjdXN0b20nLFxyXG4gICAgICAgICAgICBpZGVudGl0aWVzOiB7fVxyXG4gICAgICAgIH0gfSwgdG9rZW4pO1xyXG4gICAgLy8gVW5zZWN1cmVkIEpXVHMgdXNlIHRoZSBlbXB0eSBzdHJpbmcgYXMgYSBzaWduYXR1cmUuXHJcbiAgICBjb25zdCBzaWduYXR1cmUgPSAnJztcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcoSlNPTi5zdHJpbmdpZnkoaGVhZGVyKSksXHJcbiAgICAgICAgYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpLFxyXG4gICAgICAgIHNpZ25hdHVyZVxyXG4gICAgXS5qb2luKCcuJyk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHVybnMgbmF2aWdhdG9yLnVzZXJBZ2VudCBzdHJpbmcgb3IgJycgaWYgaXQncyBub3QgZGVmaW5lZC5cclxuICogQHJldHVybiB1c2VyIGFnZW50IHN0cmluZ1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VUEoKSB7XHJcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICB0eXBlb2YgbmF2aWdhdG9yWyd1c2VyQWdlbnQnXSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yWyd1c2VyQWdlbnQnXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxufVxyXG4vKipcclxuICogRGV0ZWN0IENvcmRvdmEgLyBQaG9uZUdhcCAvIElvbmljIGZyYW1ld29ya3Mgb24gYSBtb2JpbGUgZGV2aWNlLlxyXG4gKlxyXG4gKiBEZWxpYmVyYXRlbHkgZG9lcyBub3QgcmVseSBvbiBjaGVja2luZyBgZmlsZTovL2AgVVJMcyAoYXMgdGhpcyBmYWlscyBQaG9uZUdhcFxyXG4gKiBpbiB0aGUgUmlwcGxlIGVtdWxhdG9yKSBub3IgQ29yZG92YSBgb25EZXZpY2VSZWFkeWAsIHdoaWNoIHdvdWxkIG5vcm1hbGx5XHJcbiAqIHdhaXQgZm9yIGEgY2FsbGJhY2suXHJcbiAqL1xyXG5mdW5jdGlvbiBpc01vYmlsZUNvcmRvdmEoKSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBTZXR0aW5nIHVwIGFuIGJyb2FkbHkgYXBwbGljYWJsZSBpbmRleCBzaWduYXR1cmUgZm9yIFdpbmRvd1xyXG4gICAgICAgIC8vIGp1c3QgdG8gZGVhbCB3aXRoIHRoaXMgY2FzZSB3b3VsZCBwcm9iYWJseSBiZSBhIGJhZCBpZGVhLlxyXG4gICAgICAgICEhKHdpbmRvd1snY29yZG92YSddIHx8IHdpbmRvd1sncGhvbmVnYXAnXSB8fCB3aW5kb3dbJ1Bob25lR2FwJ10pICYmXHJcbiAgICAgICAgL2lvc3xpcGhvbmV8aXBvZHxpcGFkfGFuZHJvaWR8YmxhY2tiZXJyeXxpZW1vYmlsZS9pLnRlc3QoZ2V0VUEoKSkpO1xyXG59XHJcbi8qKlxyXG4gKiBEZXRlY3QgTm9kZS5qcy5cclxuICpcclxuICogQHJldHVybiB0cnVlIGlmIE5vZGUuanMgZW52aXJvbm1lbnQgaXMgZGV0ZWN0ZWQgb3Igc3BlY2lmaWVkLlxyXG4gKi9cclxuLy8gTm9kZSBkZXRlY3Rpb24gbG9naWMgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2lsaWFrYW4vZGV0ZWN0LW5vZGUvXHJcbmZ1bmN0aW9uIGlzTm9kZSgpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGNvbnN0IGZvcmNlRW52aXJvbm1lbnQgPSAoX2EgPSBnZXREZWZhdWx0cygpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yY2VFbnZpcm9ubWVudDtcclxuICAgIGlmIChmb3JjZUVudmlyb25tZW50ID09PSAnbm9kZScpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGZvcmNlRW52aXJvbm1lbnQgPT09ICdicm93c2VyJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCBCcm93c2VyIEVudmlyb25tZW50LlxyXG4gKiBOb3RlOiBUaGlzIHdpbGwgcmV0dXJuIHRydWUgZm9yIGNlcnRhaW4gdGVzdCBmcmFtZXdvcmtzIHRoYXQgYXJlIGluY29tcGxldGVseVxyXG4gKiBtaW1pY2tpbmcgYSBicm93c2VyLCBhbmQgc2hvdWxkIG5vdCBsZWFkIHRvIGFzc3VtaW5nIGFsbCBicm93c2VyIEFQSXMgYXJlXHJcbiAqIGF2YWlsYWJsZS5cclxuICovXHJcbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcclxuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyB8fCBpc1dlYldvcmtlcigpO1xyXG59XHJcbi8qKlxyXG4gKiBEZXRlY3QgV2ViIFdvcmtlciBjb250ZXh0LlxyXG4gKi9cclxuZnVuY3Rpb24gaXNXZWJXb3JrZXIoKSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUpO1xyXG59XHJcbi8qKlxyXG4gKiBEZXRlY3QgQ2xvdWRmbGFyZSBXb3JrZXIgY29udGV4dC5cclxuICovXHJcbmZ1bmN0aW9uIGlzQ2xvdWRmbGFyZVdvcmtlcigpIHtcclxuICAgIHJldHVybiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50ID09PSAnQ2xvdWRmbGFyZS1Xb3JrZXJzJyk7XHJcbn1cclxuZnVuY3Rpb24gaXNCcm93c2VyRXh0ZW5zaW9uKCkge1xyXG4gICAgY29uc3QgcnVudGltZSA9IHR5cGVvZiBjaHJvbWUgPT09ICdvYmplY3QnXHJcbiAgICAgICAgPyBjaHJvbWUucnVudGltZVxyXG4gICAgICAgIDogdHlwZW9mIGJyb3dzZXIgPT09ICdvYmplY3QnXHJcbiAgICAgICAgICAgID8gYnJvd3Nlci5ydW50aW1lXHJcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBydW50aW1lID09PSAnb2JqZWN0JyAmJiBydW50aW1lLmlkICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCBSZWFjdCBOYXRpdmUuXHJcbiAqXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBSZWFjdE5hdGl2ZSBlbnZpcm9ubWVudCBpcyBkZXRlY3RlZC5cclxuICovXHJcbmZ1bmN0aW9uIGlzUmVhY3ROYXRpdmUoKSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnICYmIG5hdmlnYXRvclsncHJvZHVjdCddID09PSAnUmVhY3ROYXRpdmUnKTtcclxufVxyXG4vKiogRGV0ZWN0cyBFbGVjdHJvbiBhcHBzLiAqL1xyXG5mdW5jdGlvbiBpc0VsZWN0cm9uKCkge1xyXG4gICAgcmV0dXJuIGdldFVBKCkuaW5kZXhPZignRWxlY3Ryb24vJykgPj0gMDtcclxufVxyXG4vKiogRGV0ZWN0cyBJbnRlcm5ldCBFeHBsb3Jlci4gKi9cclxuZnVuY3Rpb24gaXNJRSgpIHtcclxuICAgIGNvbnN0IHVhID0gZ2V0VUEoKTtcclxuICAgIHJldHVybiB1YS5pbmRleE9mKCdNU0lFICcpID49IDAgfHwgdWEuaW5kZXhPZignVHJpZGVudC8nKSA+PSAwO1xyXG59XHJcbi8qKiBEZXRlY3RzIFVuaXZlcnNhbCBXaW5kb3dzIFBsYXRmb3JtIGFwcHMuICovXHJcbmZ1bmN0aW9uIGlzVVdQKCkge1xyXG4gICAgcmV0dXJuIGdldFVBKCkuaW5kZXhPZignTVNBcHBIb3N0LycpID49IDA7XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCB3aGV0aGVyIHRoZSBjdXJyZW50IFNESyBidWlsZCBpcyB0aGUgTm9kZSB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHRydWUgaWYgaXQncyB0aGUgTm9kZSBTREsgYnVpbGQuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc05vZGVTZGsoKSB7XHJcbiAgICByZXR1cm4gQ09OU1RBTlRTLk5PREVfQ0xJRU5UID09PSB0cnVlIHx8IENPTlNUQU5UUy5OT0RFX0FETUlOID09PSB0cnVlO1xyXG59XHJcbi8qKiBSZXR1cm5zIHRydWUgaWYgd2UgYXJlIHJ1bm5pbmcgaW4gU2FmYXJpLiAqL1xyXG5mdW5jdGlvbiBpc1NhZmFyaSgpIHtcclxuICAgIHJldHVybiAoIWlzTm9kZSgpICYmXHJcbiAgICAgICAgISFuYXZpZ2F0b3IudXNlckFnZW50ICYmXHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnU2FmYXJpJykgJiZcclxuICAgICAgICAhbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnQ2hyb21lJykpO1xyXG59XHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBjaGVja3MgaWYgaW5kZXhlZERCIGlzIHN1cHBvcnRlZCBieSBjdXJyZW50IGJyb3dzZXIvc2VydmljZSB3b3JrZXIgY29udGV4dFxyXG4gKiBAcmV0dXJuIHRydWUgaWYgaW5kZXhlZERCIGlzIHN1cHBvcnRlZCBieSBjdXJyZW50IGJyb3dzZXIvc2VydmljZSB3b3JrZXIgY29udGV4dFxyXG4gKi9cclxuZnVuY3Rpb24gaXNJbmRleGVkREJBdmFpbGFibGUoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgaW5kZXhlZERCID09PSAnb2JqZWN0JztcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCB2YWxpZGF0ZXMgYnJvd3Nlci9zdyBjb250ZXh0IGZvciBpbmRleGVkREIgYnkgb3BlbmluZyBhIGR1bW15IGluZGV4ZWREQiBkYXRhYmFzZSBhbmQgcmVqZWN0XHJcbiAqIGlmIGVycm9ycyBvY2N1ciBkdXJpbmcgdGhlIGRhdGFiYXNlIG9wZW4gb3BlcmF0aW9uLlxyXG4gKlxyXG4gKiBAdGhyb3dzIGV4Y2VwdGlvbiBpZiBjdXJyZW50IGJyb3dzZXIvc3cgY29udGV4dCBjYW4ndCBydW4gaWRiLm9wZW4gKGV4OiBTYWZhcmkgaWZyYW1lLCBGaXJlZm94XHJcbiAqIHByaXZhdGUgYnJvd3NpbmcpXHJcbiAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcHJlRXhpc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCBEQl9DSEVDS19OQU1FID0gJ3ZhbGlkYXRlLWJyb3dzZXItY29udGV4dC1mb3ItaW5kZXhlZGRiLWFuYWx5dGljcy1tb2R1bGUnO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gc2VsZi5pbmRleGVkREIub3BlbihEQl9DSEVDS19OQU1FKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnJlc3VsdC5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIGRhdGFiYXNlIG9ubHkgd2hlbiBpdCBkb2Vzbid0IHByZS1leGlzdFxyXG4gICAgICAgICAgICAgICAgaWYgKCFwcmVFeGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKERCX0NIRUNLX05BTUUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcmVFeGlzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoKChfYSA9IHJlcXVlc3QuZXJyb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tZXNzYWdlKSB8fCAnJyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBUaGlzIG1ldGhvZCBjaGVja3Mgd2hldGhlciBjb29raWUgaXMgZW5hYmxlZCB3aXRoaW4gY3VycmVudCBicm93c2VyXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBjb29raWUgaXMgZW5hYmxlZCB3aXRoaW4gY3VycmVudCBicm93c2VyXHJcbiAqL1xyXG5mdW5jdGlvbiBhcmVDb29raWVzRW5hYmxlZCgpIHtcclxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJyB8fCAhbmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBTdGFuZGFyZGl6ZWQgRmlyZWJhc2UgRXJyb3IuXHJcbiAqXHJcbiAqIFVzYWdlOlxyXG4gKlxyXG4gKiAgIC8vIFR5cGVTY3JpcHQgc3RyaW5nIGxpdGVyYWxzIGZvciB0eXBlLXNhZmUgY29kZXNcclxuICogICB0eXBlIEVyciA9XHJcbiAqICAgICAndW5rbm93bicgfFxyXG4gKiAgICAgJ29iamVjdC1ub3QtZm91bmQnXHJcbiAqICAgICA7XHJcbiAqXHJcbiAqICAgLy8gQ2xvc3VyZSBlbnVtIGZvciB0eXBlLXNhZmUgZXJyb3IgY29kZXNcclxuICogICAvLyBhdC1lbnVtIHtzdHJpbmd9XHJcbiAqICAgdmFyIEVyciA9IHtcclxuICogICAgIFVOS05PV046ICd1bmtub3duJyxcclxuICogICAgIE9CSkVDVF9OT1RfRk9VTkQ6ICdvYmplY3Qtbm90LWZvdW5kJyxcclxuICogICB9XHJcbiAqXHJcbiAqICAgbGV0IGVycm9yczogTWFwPEVyciwgc3RyaW5nPiA9IHtcclxuICogICAgICdnZW5lcmljLWVycm9yJzogXCJVbmtub3duIGVycm9yXCIsXHJcbiAqICAgICAnZmlsZS1ub3QtZm91bmQnOiBcIkNvdWxkIG5vdCBmaW5kIGZpbGU6IHskZmlsZX1cIixcclxuICogICB9O1xyXG4gKlxyXG4gKiAgIC8vIFR5cGUtc2FmZSBmdW5jdGlvbiAtIG11c3QgcGFzcyBhIHZhbGlkIGVycm9yIGNvZGUgYXMgcGFyYW0uXHJcbiAqICAgbGV0IGVycm9yID0gbmV3IEVycm9yRmFjdG9yeTxFcnI+KCdzZXJ2aWNlJywgJ1NlcnZpY2UnLCBlcnJvcnMpO1xyXG4gKlxyXG4gKiAgIC4uLlxyXG4gKiAgIHRocm93IGVycm9yLmNyZWF0ZShFcnIuR0VORVJJQyk7XHJcbiAqICAgLi4uXHJcbiAqICAgdGhyb3cgZXJyb3IuY3JlYXRlKEVyci5GSUxFX05PVF9GT1VORCwgeydmaWxlJzogZmlsZU5hbWV9KTtcclxuICogICAuLi5cclxuICogICAvLyBTZXJ2aWNlOiBDb3VsZCBub3QgZmlsZSBmaWxlOiBmb28udHh0IChzZXJ2aWNlL2ZpbGUtbm90LWZvdW5kKS5cclxuICpcclxuICogICBjYXRjaCAoZSkge1xyXG4gKiAgICAgYXNzZXJ0KGUubWVzc2FnZSA9PT0gXCJDb3VsZCBub3QgZmluZCBmaWxlOiBmb28udHh0LlwiKTtcclxuICogICAgIGlmICgoZSBhcyBGaXJlYmFzZUVycm9yKT8uY29kZSA9PT0gJ3NlcnZpY2UvZmlsZS1ub3QtZm91bmQnKSB7XHJcbiAqICAgICAgIGNvbnNvbGUubG9nKFwiQ291bGQgbm90IHJlYWQgZmlsZTogXCIgKyBlWydmaWxlJ10pO1xyXG4gKiAgICAgfVxyXG4gKiAgIH1cclxuICovXHJcbmNvbnN0IEVSUk9SX05BTUUgPSAnRmlyZWJhc2VFcnJvcic7XHJcbi8vIEJhc2VkIG9uIGNvZGUgZnJvbTpcclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3IjQ3VzdG9tX0Vycm9yX1R5cGVzXHJcbmNsYXNzIEZpcmViYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBUaGUgZXJyb3IgY29kZSBmb3IgdGhpcyBlcnJvci4gKi9cclxuICAgIGNvZGUsIG1lc3NhZ2UsIFxyXG4gICAgLyoqIEN1c3RvbSBkYXRhIGZvciB0aGlzIGVycm9yLiAqL1xyXG4gICAgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5jdXN0b21EYXRhID0gY3VzdG9tRGF0YTtcclxuICAgICAgICAvKiogVGhlIGN1c3RvbSBuYW1lIGZvciBhbGwgRmlyZWJhc2VFcnJvcnMuICovXHJcbiAgICAgICAgdGhpcy5uYW1lID0gRVJST1JfTkFNRTtcclxuICAgICAgICAvLyBGaXggRm9yIEVTNVxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC13aWtpL2Jsb2IvbWFzdGVyL0JyZWFraW5nLUNoYW5nZXMubWQjZXh0ZW5kaW5nLWJ1aWx0LWlucy1saWtlLWVycm9yLWFycmF5LWFuZC1tYXAtbWF5LW5vLWxvbmdlci13b3JrXHJcbiAgICAgICAgLy8gVE9ETyhkbGFyb2NxdWUpOiBSZXBsYWNlIHRoaXMgd2l0aCBgbmV3LnRhcmdldGA6IGh0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL3JlbGVhc2Utbm90ZXMvdHlwZXNjcmlwdC0yLTIuaHRtbCNzdXBwb3J0LWZvci1uZXd0YXJnZXRcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICB3aGljaCB3ZSBjYW4gbm93IHVzZSBzaW5jZSB3ZSBubyBsb25nZXIgdGFyZ2V0IEVTNS5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgRmlyZWJhc2VFcnJvci5wcm90b3R5cGUpO1xyXG4gICAgICAgIC8vIE1haW50YWlucyBwcm9wZXIgc3RhY2sgdHJhY2UgZm9yIHdoZXJlIG91ciBlcnJvciB3YXMgdGhyb3duLlxyXG4gICAgICAgIC8vIE9ubHkgYXZhaWxhYmxlIG9uIFY4LlxyXG4gICAgICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xyXG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFcnJvckZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmNsYXNzIEVycm9yRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXJ2aWNlLCBzZXJ2aWNlTmFtZSwgZXJyb3JzKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lID0gc2VydmljZU5hbWU7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoY29kZSwgLi4uZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGN1c3RvbURhdGEgPSBkYXRhWzBdIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGZ1bGxDb2RlID0gYCR7dGhpcy5zZXJ2aWNlfS8ke2NvZGV9YDtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZXJyb3JzW2NvZGVdO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0ZW1wbGF0ZSA/IHJlcGxhY2VUZW1wbGF0ZSh0ZW1wbGF0ZSwgY3VzdG9tRGF0YSkgOiAnRXJyb3InO1xyXG4gICAgICAgIC8vIFNlcnZpY2UgTmFtZTogRXJyb3IgbWVzc2FnZSAoc2VydmljZS9jb2RlKS5cclxuICAgICAgICBjb25zdCBmdWxsTWVzc2FnZSA9IGAke3RoaXMuc2VydmljZU5hbWV9OiAke21lc3NhZ2V9ICgke2Z1bGxDb2RlfSkuYDtcclxuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBGaXJlYmFzZUVycm9yKGZ1bGxDb2RlLCBmdWxsTWVzc2FnZSwgY3VzdG9tRGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlcGxhY2VUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSkge1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoUEFUVEVSTiwgKF8sIGtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXldO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPSBudWxsID8gU3RyaW5nKHZhbHVlKSA6IGA8JHtrZXl9Pz5gO1xyXG4gICAgfSk7XHJcbn1cclxuY29uc3QgUEFUVEVSTiA9IC9cXHtcXCQoW159XSspfS9nO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogRXZhbHVhdGVzIGEgSlNPTiBzdHJpbmcgaW50byBhIGphdmFzY3JpcHQgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIEEgc3RyaW5nIGNvbnRhaW5pbmcgSlNPTi5cclxuICogQHJldHVybiB7Kn0gVGhlIGphdmFzY3JpcHQgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgc3BlY2lmaWVkIEpTT04uXHJcbiAqL1xyXG5mdW5jdGlvbiBqc29uRXZhbChzdHIpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgSlNPTiByZXByZXNlbnRpbmcgYSBqYXZhc2NyaXB0IG9iamVjdC5cclxuICogQHBhcmFtIHsqfSBkYXRhIEphdmFTY3JpcHQgb2JqZWN0IHRvIGJlIHN0cmluZ2lmaWVkLlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBKU09OIGNvbnRlbnRzIG9mIHRoZSBvYmplY3QuXHJcbiAqL1xyXG5mdW5jdGlvbiBzdHJpbmdpZnkoZGF0YSkge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gaW50byBjb25zdGl0dWVudCBwYXJ0cy5cclxuICpcclxuICogTm90ZXM6XHJcbiAqIC0gTWF5IHJldHVybiB3aXRoIGludmFsaWQgLyBpbmNvbXBsZXRlIGNsYWltcyBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cclxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cclxuICovXHJcbmNvbnN0IGRlY29kZSA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgbGV0IGhlYWRlciA9IHt9LCBjbGFpbXMgPSB7fSwgZGF0YSA9IHt9LCBzaWduYXR1cmUgPSAnJztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSB0b2tlbi5zcGxpdCgnLicpO1xyXG4gICAgICAgIGhlYWRlciA9IGpzb25FdmFsKGJhc2U2NERlY29kZShwYXJ0c1swXSkgfHwgJycpO1xyXG4gICAgICAgIGNsYWltcyA9IGpzb25FdmFsKGJhc2U2NERlY29kZShwYXJ0c1sxXSkgfHwgJycpO1xyXG4gICAgICAgIHNpZ25hdHVyZSA9IHBhcnRzWzJdO1xyXG4gICAgICAgIGRhdGEgPSBjbGFpbXNbJ2QnXSB8fCB7fTtcclxuICAgICAgICBkZWxldGUgY2xhaW1zWydkJ107XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkgeyB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWRlcixcclxuICAgICAgICBjbGFpbXMsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBzaWduYXR1cmVcclxuICAgIH07XHJcbn07XHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gYW5kIGNoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaXRzIHRpbWUtYmFzZWQgY2xhaW1zLiBXaWxsIHJldHVybiB0cnVlIGlmIHRoZVxyXG4gKiB0b2tlbiBpcyB3aXRoaW4gdGhlIHRpbWUgd2luZG93IGF1dGhvcml6ZWQgYnkgdGhlICduYmYnIChub3QtYmVmb3JlKSBhbmQgJ2lhdCcgKGlzc3VlZC1hdCkgY2xhaW1zLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIGEgZmFsc2UgbmVnYXRpdmUgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG5jb25zdCBpc1ZhbGlkVGltZXN0YW1wID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICBjb25zdCBjbGFpbXMgPSBkZWNvZGUodG9rZW4pLmNsYWltcztcclxuICAgIGNvbnN0IG5vdyA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgIGxldCB2YWxpZFNpbmNlID0gMCwgdmFsaWRVbnRpbCA9IDA7XHJcbiAgICBpZiAodHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBpZiAoY2xhaW1zLmhhc093blByb3BlcnR5KCduYmYnKSkge1xyXG4gICAgICAgICAgICB2YWxpZFNpbmNlID0gY2xhaW1zWyduYmYnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2xhaW1zLmhhc093blByb3BlcnR5KCdpYXQnKSkge1xyXG4gICAgICAgICAgICB2YWxpZFNpbmNlID0gY2xhaW1zWydpYXQnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnZXhwJykpIHtcclxuICAgICAgICAgICAgdmFsaWRVbnRpbCA9IGNsYWltc1snZXhwJ107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0b2tlbiB3aWxsIGV4cGlyZSBhZnRlciAyNGggYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICB2YWxpZFVudGlsID0gdmFsaWRTaW5jZSArIDg2NDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoISFub3cgJiZcclxuICAgICAgICAhIXZhbGlkU2luY2UgJiZcclxuICAgICAgICAhIXZhbGlkVW50aWwgJiZcclxuICAgICAgICBub3cgPj0gdmFsaWRTaW5jZSAmJlxyXG4gICAgICAgIG5vdyA8PSB2YWxpZFVudGlsKTtcclxufTtcclxuLyoqXHJcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgcmV0dXJucyBpdHMgaXNzdWVkIGF0IHRpbWUgaWYgdmFsaWQsIG51bGwgb3RoZXJ3aXNlLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIG51bGwgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG5jb25zdCBpc3N1ZWRBdFRpbWUgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIGNvbnN0IGNsYWltcyA9IGRlY29kZSh0b2tlbikuY2xhaW1zO1xyXG4gICAgaWYgKHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnICYmIGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnaWF0JykpIHtcclxuICAgICAgICByZXR1cm4gY2xhaW1zWydpYXQnXTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG4vKipcclxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGFuZCBjaGVja3MgdGhlIHZhbGlkaXR5IG9mIGl0cyBmb3JtYXQuIEV4cGVjdHMgYSB2YWxpZCBpc3N1ZWQtYXQgdGltZS5cclxuICpcclxuICogTm90ZXM6XHJcbiAqIC0gTWF5IHJldHVybiBhIGZhbHNlIG5lZ2F0aXZlIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxyXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxyXG4gKi9cclxuY29uc3QgaXNWYWxpZEZvcm1hdCA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgY29uc3QgZGVjb2RlZCA9IGRlY29kZSh0b2tlbiksIGNsYWltcyA9IGRlY29kZWQuY2xhaW1zO1xyXG4gICAgcmV0dXJuICEhY2xhaW1zICYmIHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnICYmIGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnaWF0Jyk7XHJcbn07XHJcbi8qKlxyXG4gKiBBdHRlbXB0cyB0byBwZWVyIGludG8gYW4gYXV0aCB0b2tlbiBhbmQgZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWRtaW4gYXV0aCB0b2tlbiBieSBsb29raW5nIGF0IHRoZSBjbGFpbXMgcG9ydGlvbi5cclxuICpcclxuICogTm90ZXM6XHJcbiAqIC0gTWF5IHJldHVybiBhIGZhbHNlIG5lZ2F0aXZlIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxyXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxyXG4gKi9cclxuY29uc3QgaXNBZG1pbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgY29uc3QgY2xhaW1zID0gZGVjb2RlKHRva2VuKS5jbGFpbXM7XHJcbiAgICByZXR1cm4gdHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcgJiYgY2xhaW1zWydhZG1pbiddID09PSB0cnVlO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb250YWlucyhvYmosIGtleSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XHJcbn1cclxuZnVuY3Rpb24gc2FmZUdldChvYmosIGtleSkge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcclxuICAgICAgICByZXR1cm4gb2JqW2tleV07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZnVuY3Rpb24gbWFwKG9iaiwgZm4sIGNvbnRleHRPYmopIHtcclxuICAgIGNvbnN0IHJlcyA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcclxuICAgICAgICAgICAgcmVzW2tleV0gPSBmbi5jYWxsKGNvbnRleHRPYmosIG9ialtrZXldLCBrZXksIG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG4vKipcclxuICogRGVlcCBlcXVhbCB0d28gb2JqZWN0cy4gU3VwcG9ydCBBcnJheXMgYW5kIE9iamVjdHMuXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWVwRXF1YWwoYSwgYikge1xyXG4gICAgaWYgKGEgPT09IGIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XHJcbiAgICBjb25zdCBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xyXG4gICAgZm9yIChjb25zdCBrIG9mIGFLZXlzKSB7XHJcbiAgICAgICAgaWYgKCFiS2V5cy5pbmNsdWRlcyhrKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFQcm9wID0gYVtrXTtcclxuICAgICAgICBjb25zdCBiUHJvcCA9IGJba107XHJcbiAgICAgICAgaWYgKGlzT2JqZWN0KGFQcm9wKSAmJiBpc09iamVjdChiUHJvcCkpIHtcclxuICAgICAgICAgICAgaWYgKCFkZWVwRXF1YWwoYVByb3AsIGJQcm9wKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFQcm9wICE9PSBiUHJvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrIG9mIGJLZXlzKSB7XHJcbiAgICAgICAgaWYgKCFhS2V5cy5pbmNsdWRlcyhrKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZnVuY3Rpb24gaXNPYmplY3QodGhpbmcpIHtcclxuICAgIHJldHVybiB0aGluZyAhPT0gbnVsbCAmJiB0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMiBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZWplY3RzIGlmIHRoZSBnaXZlbiBwcm9taXNlIGRvZXNuJ3QgcmVzb2x2ZSBpbiB0aW1lSW5NUyBtaWxsaXNlY29uZHMuXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gcHJvbWlzZVdpdGhUaW1lb3V0KHByb21pc2UsIHRpbWVJbk1TID0gMjAwMCkge1xyXG4gICAgY29uc3QgZGVmZXJyZWRQcm9taXNlID0gbmV3IERlZmVycmVkKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IGRlZmVycmVkUHJvbWlzZS5yZWplY3QoJ3RpbWVvdXQhJyksIHRpbWVJbk1TKTtcclxuICAgIHByb21pc2UudGhlbihkZWZlcnJlZFByb21pc2UucmVzb2x2ZSwgZGVmZXJyZWRQcm9taXNlLnJlamVjdCk7XHJcbiAgICByZXR1cm4gZGVmZXJyZWRQcm9taXNlLnByb21pc2U7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHVybnMgYSBxdWVyeXN0cmluZy1mb3JtYXR0ZWQgc3RyaW5nIChlLmcuICZhcmc9dmFsJmFyZzI9dmFsMikgZnJvbSBhXHJcbiAqIHBhcmFtcyBvYmplY3QgKGUuZy4ge2FyZzogJ3ZhbCcsIGFyZzI6ICd2YWwyJ30pXHJcbiAqIE5vdGU6IFlvdSBtdXN0IHByZXBlbmQgaXQgd2l0aCA/IHdoZW4gYWRkaW5nIGl0IHRvIGEgVVJMLlxyXG4gKi9cclxuZnVuY3Rpb24gcXVlcnlzdHJpbmcocXVlcnlzdHJpbmdQYXJhbXMpIHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocXVlcnlzdHJpbmdQYXJhbXMpKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goYXJyYXlWYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXJyYXlWYWwpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJhbXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwYXJhbXMubGVuZ3RoID8gJyYnICsgcGFyYW1zLmpvaW4oJyYnKSA6ICcnO1xyXG59XHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgcXVlcnlzdHJpbmcgKGUuZy4gP2FyZz12YWwmYXJnMj12YWwyKSBpbnRvIGEgcGFyYW1zIG9iamVjdFxyXG4gKiAoZS5nLiB7YXJnOiAndmFsJywgYXJnMjogJ3ZhbDInfSlcclxuICovXHJcbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5nRGVjb2RlKHF1ZXJ5c3RyaW5nKSB7XHJcbiAgICBjb25zdCBvYmogPSB7fTtcclxuICAgIGNvbnN0IHRva2VucyA9IHF1ZXJ5c3RyaW5nLnJlcGxhY2UoL15cXD8vLCAnJykuc3BsaXQoJyYnKTtcclxuICAgIHRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gdG9rZW4uc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChrZXkpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbi8qKlxyXG4gKiBFeHRyYWN0IHRoZSBxdWVyeSBzdHJpbmcgcGFydCBvZiBhIFVSTCwgaW5jbHVkaW5nIHRoZSBsZWFkaW5nIHF1ZXN0aW9uIG1hcmsgKGlmIHByZXNlbnQpLlxyXG4gKi9cclxuZnVuY3Rpb24gZXh0cmFjdFF1ZXJ5c3RyaW5nKHVybCkge1xyXG4gICAgY29uc3QgcXVlcnlTdGFydCA9IHVybC5pbmRleE9mKCc/Jyk7XHJcbiAgICBpZiAoIXF1ZXJ5U3RhcnQpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmcmFnbWVudFN0YXJ0ID0gdXJsLmluZGV4T2YoJyMnLCBxdWVyeVN0YXJ0KTtcclxuICAgIHJldHVybiB1cmwuc3Vic3RyaW5nKHF1ZXJ5U3RhcnQsIGZyYWdtZW50U3RhcnQgPiAwID8gZnJhZ21lbnRTdGFydCA6IHVuZGVmaW5lZCk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgU0hBLTEgY3J5cHRvZ3JhcGhpYyBoYXNoLlxyXG4gKiBWYXJpYWJsZSBuYW1lcyBmb2xsb3cgdGhlIG5vdGF0aW9uIGluIEZJUFMgUFVCIDE4MC0zOlxyXG4gKiBodHRwOi8vY3NyYy5uaXN0Lmdvdi9wdWJsaWNhdGlvbnMvZmlwcy9maXBzMTgwLTMvZmlwczE4MC0zX2ZpbmFsLnBkZi5cclxuICpcclxuICogVXNhZ2U6XHJcbiAqICAgdmFyIHNoYTEgPSBuZXcgc2hhMSgpO1xyXG4gKiAgIHNoYTEudXBkYXRlKGJ5dGVzKTtcclxuICogICB2YXIgaGFzaCA9IHNoYTEuZGlnZXN0KCk7XHJcbiAqXHJcbiAqIFBlcmZvcm1hbmNlOlxyXG4gKiAgIENocm9tZSAyMzogICB+NDAwIE1iaXQvc1xyXG4gKiAgIEZpcmVmb3ggMTY6ICB+MjUwIE1iaXQvc1xyXG4gKlxyXG4gKi9cclxuLyoqXHJcbiAqIFNIQS0xIGNyeXB0b2dyYXBoaWMgaGFzaCBjb25zdHJ1Y3Rvci5cclxuICpcclxuICogVGhlIHByb3BlcnRpZXMgZGVjbGFyZWQgaGVyZSBhcmUgZGlzY3Vzc2VkIGluIHRoZSBhYm92ZSBhbGdvcml0aG0gZG9jdW1lbnQuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAZmluYWxcclxuICogQHN0cnVjdFxyXG4gKi9cclxuY2xhc3MgU2hhMSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIb2xkcyB0aGUgcHJldmlvdXMgdmFsdWVzIG9mIGFjY3VtdWxhdGVkIHZhcmlhYmxlcyBhLWUgaW4gdGhlIGNvbXByZXNzX1xyXG4gICAgICAgICAqIGZ1bmN0aW9uLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jaGFpbl8gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIGJ1ZmZlciBob2xkaW5nIHRoZSBwYXJ0aWFsbHkgY29tcHV0ZWQgaGFzaCByZXN1bHQuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmJ1Zl8gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBhcnJheSBvZiA4MCBieXRlcywgZWFjaCBhIHBhcnQgb2YgdGhlIG1lc3NhZ2UgdG8gYmUgaGFzaGVkLiAgUmVmZXJyZWQgdG9cclxuICAgICAgICAgKiBhcyB0aGUgbWVzc2FnZSBzY2hlZHVsZSBpbiB0aGUgZG9jcy5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuV18gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb250YWlucyBkYXRhIG5lZWRlZCB0byBwYWQgbWVzc2FnZXMgbGVzcyB0aGFuIDY0IGJ5dGVzLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5wYWRfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmluYnVmXyA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnRvdGFsXyA9IDA7XHJcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSA1MTIgLyA4O1xyXG4gICAgICAgIHRoaXMucGFkX1swXSA9IDEyODtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYmxvY2tTaXplOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWRfW2ldID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMF0gPSAweDY3NDUyMzAxO1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzFdID0gMHhlZmNkYWI4OTtcclxuICAgICAgICB0aGlzLmNoYWluX1syXSA9IDB4OThiYWRjZmU7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bM10gPSAweDEwMzI1NDc2O1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzRdID0gMHhjM2QyZTFmMDtcclxuICAgICAgICB0aGlzLmluYnVmXyA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbF8gPSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcm5hbCBjb21wcmVzcyBoZWxwZXIgZnVuY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gYnVmIEJsb2NrIHRvIGNvbXByZXNzLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBPZmZzZXQgb2YgdGhlIGJsb2NrIGluIHRoZSBidWZmZXIuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBjb21wcmVzc18oYnVmLCBvZmZzZXQpIHtcclxuICAgICAgICBpZiAoIW9mZnNldCkge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBXID0gdGhpcy5XXztcclxuICAgICAgICAvLyBnZXQgMTYgYmlnIGVuZGlhbiB3b3Jkc1xyXG4gICAgICAgIGlmICh0eXBlb2YgYnVmID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8odXNlcik6IFtidWcgODE0MDEyMl0gUmVjZW50IHZlcnNpb25zIG9mIFNhZmFyaSBmb3IgTWFjIE9TIGFuZCBpT1NcclxuICAgICAgICAgICAgICAgIC8vIGhhdmUgYSBidWcgdGhhdCB0dXJucyB0aGUgcG9zdC1pbmNyZW1lbnQgKysgb3BlcmF0b3IgaW50byBwcmUtaW5jcmVtZW50XHJcbiAgICAgICAgICAgICAgICAvLyBkdXJpbmcgSklUIGNvbXBpbGF0aW9uLiAgV2UgaGF2ZSBjb2RlIHRoYXQgZGVwZW5kcyBoZWF2aWx5IG9uIFNIQS0xIGZvclxyXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdG5lc3MgYW5kIHdoaWNoIGlzIGFmZmVjdGVkIGJ5IHRoaXMgYnVnLCBzbyBJJ3ZlIHJlbW92ZWQgYWxsIHVzZXNcclxuICAgICAgICAgICAgICAgIC8vIG9mIHBvc3QtaW5jcmVtZW50ICsrIGluIHdoaWNoIHRoZSByZXN1bHQgdmFsdWUgaXMgdXNlZC4gIFdlIGNhbiByZXZlcnRcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY2hhbmdlIG9uY2UgdGhlIFNhZmFyaSBidWdcclxuICAgICAgICAgICAgICAgIC8vIChodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTA5MDM2KSBoYXMgYmVlbiBmaXhlZCBhbmRcclxuICAgICAgICAgICAgICAgIC8vIG1vc3QgY2xpZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuICAgICAgICAgICAgICAgIFdbaV0gPVxyXG4gICAgICAgICAgICAgICAgICAgIChidWYuY2hhckNvZGVBdChvZmZzZXQpIDw8IDI0KSB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChidWYuY2hhckNvZGVBdChvZmZzZXQgKyAxKSA8PCAxNikgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMikgPDwgOCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWYuY2hhckNvZGVBdChvZmZzZXQgKyAzKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIFdbaV0gPVxyXG4gICAgICAgICAgICAgICAgICAgIChidWZbb2Zmc2V0XSA8PCAyNCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmW29mZnNldCArIDFdIDw8IDE2KSB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChidWZbb2Zmc2V0ICsgMl0gPDwgOCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZbb2Zmc2V0ICsgM107XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBleHBhbmQgdG8gODAgd29yZHNcclxuICAgICAgICBmb3IgKGxldCBpID0gMTY7IGkgPCA4MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBXW2kgLSAzXSBeIFdbaSAtIDhdIF4gV1tpIC0gMTRdIF4gV1tpIC0gMTZdO1xyXG4gICAgICAgICAgICBXW2ldID0gKCh0IDw8IDEpIHwgKHQgPj4+IDMxKSkgJiAweGZmZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYSA9IHRoaXMuY2hhaW5fWzBdO1xyXG4gICAgICAgIGxldCBiID0gdGhpcy5jaGFpbl9bMV07XHJcbiAgICAgICAgbGV0IGMgPSB0aGlzLmNoYWluX1syXTtcclxuICAgICAgICBsZXQgZCA9IHRoaXMuY2hhaW5fWzNdO1xyXG4gICAgICAgIGxldCBlID0gdGhpcy5jaGFpbl9bNF07XHJcbiAgICAgICAgbGV0IGYsIGs7XHJcbiAgICAgICAgLy8gVE9ETyh1c2VyKTogVHJ5IHRvIHVucm9sbCB0aGlzIGxvb3AgdG8gc3BlZWQgdXAgdGhlIGNvbXB1dGF0aW9uLlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODA7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA8IDQwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IGQgXiAoYiAmIChjIF4gZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGsgPSAweDVhODI3OTk5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IGIgXiBjIF4gZDtcclxuICAgICAgICAgICAgICAgICAgICBrID0gMHg2ZWQ5ZWJhMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgNjApIHtcclxuICAgICAgICAgICAgICAgICAgICBmID0gKGIgJiBjKSB8IChkICYgKGIgfCBjKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgayA9IDB4OGYxYmJjZGM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmID0gYiBeIGMgXiBkO1xyXG4gICAgICAgICAgICAgICAgICAgIGsgPSAweGNhNjJjMWQ2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSAoKChhIDw8IDUpIHwgKGEgPj4+IDI3KSkgKyBmICsgZSArIGsgKyBXW2ldKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgICAgIGUgPSBkO1xyXG4gICAgICAgICAgICBkID0gYztcclxuICAgICAgICAgICAgYyA9ICgoYiA8PCAzMCkgfCAoYiA+Pj4gMikpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICAgICAgYiA9IGE7XHJcbiAgICAgICAgICAgIGEgPSB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYWluX1swXSA9ICh0aGlzLmNoYWluX1swXSArIGEpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1sxXSA9ICh0aGlzLmNoYWluX1sxXSArIGIpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1syXSA9ICh0aGlzLmNoYWluX1syXSArIGMpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1szXSA9ICh0aGlzLmNoYWluX1szXSArIGQpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1s0XSA9ICh0aGlzLmNoYWluX1s0XSArIGUpICYgMHhmZmZmZmZmZjtcclxuICAgIH1cclxuICAgIHVwZGF0ZShieXRlcywgbGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gVE9ETyhqb2hubGVueik6IHRpZ2h0ZW4gdGhlIGZ1bmN0aW9uIHNpZ25hdHVyZSBhbmQgcmVtb3ZlIHRoaXMgY2hlY2tcclxuICAgICAgICBpZiAoYnl0ZXMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZW5ndGggPSBieXRlcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aE1pbnVzQmxvY2sgPSBsZW5ndGggLSB0aGlzLmJsb2NrU2l6ZTtcclxuICAgICAgICBsZXQgbiA9IDA7XHJcbiAgICAgICAgLy8gVXNpbmcgbG9jYWwgaW5zdGVhZCBvZiBtZW1iZXIgdmFyaWFibGVzIGdpdmVzIH41JSBzcGVlZHVwIG9uIEZpcmVmb3ggMTYuXHJcbiAgICAgICAgY29uc3QgYnVmID0gdGhpcy5idWZfO1xyXG4gICAgICAgIGxldCBpbmJ1ZiA9IHRoaXMuaW5idWZfO1xyXG4gICAgICAgIC8vIFRoZSBvdXRlciB3aGlsZSBsb29wIHNob3VsZCBleGVjdXRlIGF0IG1vc3QgdHdpY2UuXHJcbiAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gV2hlbiB3ZSBoYXZlIG5vIGRhdGEgaW4gdGhlIGJsb2NrIHRvIHRvcCB1cCwgd2UgY2FuIGRpcmVjdGx5IHByb2Nlc3MgdGhlXHJcbiAgICAgICAgICAgIC8vIGlucHV0IGJ1ZmZlciAoYXNzdW1pbmcgaXQgY29udGFpbnMgc3VmZmljaWVudCBkYXRhKS4gVGhpcyBnaXZlcyB+MjUlXHJcbiAgICAgICAgICAgIC8vIHNwZWVkdXAgb24gQ2hyb21lIDIzIGFuZCB+MTUlIHNwZWVkdXAgb24gRmlyZWZveCAxNiwgYnV0IHJlcXVpcmVzIHRoYXRcclxuICAgICAgICAgICAgLy8gdGhlIGRhdGEgaXMgcHJvdmlkZWQgaW4gbGFyZ2UgY2h1bmtzIChvciBpbiBtdWx0aXBsZXMgb2YgNjQgYnl0ZXMpLlxyXG4gICAgICAgICAgICBpZiAoaW5idWYgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuIDw9IGxlbmd0aE1pbnVzQmxvY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhieXRlcywgbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbiArPSB0aGlzLmJsb2NrU2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWZbaW5idWZdID0gYnl0ZXMuY2hhckNvZGVBdChuKTtcclxuICAgICAgICAgICAgICAgICAgICArK2luYnVmO1xyXG4gICAgICAgICAgICAgICAgICAgICsrbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5idWYgPT09IHRoaXMuYmxvY2tTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ1Zik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluYnVmID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgb3V0ZXIgbG9vcCBzbyB3ZSB1c2UgdGhlIGZ1bGwtYmxvY2sgb3B0aW1pemF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZltpbmJ1Zl0gPSBieXRlc1tuXTtcclxuICAgICAgICAgICAgICAgICAgICArK2luYnVmO1xyXG4gICAgICAgICAgICAgICAgICAgICsrbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5idWYgPT09IHRoaXMuYmxvY2tTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ1Zik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluYnVmID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgb3V0ZXIgbG9vcCBzbyB3ZSB1c2UgdGhlIGZ1bGwtYmxvY2sgb3B0aW1pemF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmJ1Zl8gPSBpbmJ1ZjtcclxuICAgICAgICB0aGlzLnRvdGFsXyArPSBsZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKiogQG92ZXJyaWRlICovXHJcbiAgICBkaWdlc3QoKSB7XHJcbiAgICAgICAgY29uc3QgZGlnZXN0ID0gW107XHJcbiAgICAgICAgbGV0IHRvdGFsQml0cyA9IHRoaXMudG90YWxfICogODtcclxuICAgICAgICAvLyBBZGQgcGFkIDB4ODAgMHgwMCouXHJcbiAgICAgICAgaWYgKHRoaXMuaW5idWZfIDwgNTYpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5wYWRfLCA1NiAtIHRoaXMuaW5idWZfKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMucGFkXywgdGhpcy5ibG9ja1NpemUgLSAodGhpcy5pbmJ1Zl8gLSA1NikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgIyBiaXRzLlxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmJsb2NrU2l6ZSAtIDE7IGkgPj0gNTY7IGktLSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1Zl9baV0gPSB0b3RhbEJpdHMgJiAyNTU7XHJcbiAgICAgICAgICAgIHRvdGFsQml0cyAvPSAyNTY7IC8vIERvbid0IHVzZSBiaXQtc2hpZnRpbmcgaGVyZSFcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb21wcmVzc18odGhpcy5idWZfKTtcclxuICAgICAgICBsZXQgbiA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDI0OyBqID49IDA7IGogLT0gOCkge1xyXG4gICAgICAgICAgICAgICAgZGlnZXN0W25dID0gKHRoaXMuY2hhaW5fW2ldID4+IGopICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgKytuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaWdlc3Q7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEhlbHBlciB0byBtYWtlIGEgU3Vic2NyaWJlIGZ1bmN0aW9uIChqdXN0IGxpa2UgUHJvbWlzZSBoZWxwcyBtYWtlIGFcclxuICogVGhlbmFibGUpLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXhlY3V0b3IgRnVuY3Rpb24gd2hpY2ggY2FuIG1ha2UgY2FsbHMgdG8gYSBzaW5nbGUgT2JzZXJ2ZXJcclxuICogICAgIGFzIGEgcHJveHkuXHJcbiAqIEBwYXJhbSBvbk5vT2JzZXJ2ZXJzIENhbGxiYWNrIHdoZW4gY291bnQgb2YgT2JzZXJ2ZXJzIGdvZXMgdG8gemVyby5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmliZShleGVjdXRvciwgb25Ob09ic2VydmVycykge1xyXG4gICAgY29uc3QgcHJveHkgPSBuZXcgT2JzZXJ2ZXJQcm94eShleGVjdXRvciwgb25Ob09ic2VydmVycyk7XHJcbiAgICByZXR1cm4gcHJveHkuc3Vic2NyaWJlLmJpbmQocHJveHkpO1xyXG59XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnQgZmFuLW91dCBmb3IgYW55IG51bWJlciBvZiBPYnNlcnZlcnMgYXR0YWNoZWQgdmlhIGEgc3Vic2NyaWJlXHJcbiAqIGZ1bmN0aW9uLlxyXG4gKi9cclxuY2xhc3MgT2JzZXJ2ZXJQcm94eSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBleGVjdXRvciBGdW5jdGlvbiB3aGljaCBjYW4gbWFrZSBjYWxscyB0byBhIHNpbmdsZSBPYnNlcnZlclxyXG4gICAgICogICAgIGFzIGEgcHJveHkuXHJcbiAgICAgKiBAcGFyYW0gb25Ob09ic2VydmVycyBDYWxsYmFjayB3aGVuIGNvdW50IG9mIE9ic2VydmVycyBnb2VzIHRvIHplcm8uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGV4ZWN1dG9yLCBvbk5vT2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgLy8gTWljcm8tdGFzayBzY2hlZHVsaW5nIGJ5IGNhbGxpbmcgdGFzay50aGVuKCkuXHJcbiAgICAgICAgdGhpcy50YXNrID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgdGhpcy5maW5hbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uTm9PYnNlcnZlcnMgPSBvbk5vT2JzZXJ2ZXJzO1xyXG4gICAgICAgIC8vIENhbGwgdGhlIGV4ZWN1dG9yIGFzeW5jaHJvbm91c2x5IHNvIHN1YnNjcmliZXJzIHRoYXQgYXJlIGNhbGxlZFxyXG4gICAgICAgIC8vIHN5bmNocm9ub3VzbHkgYWZ0ZXIgdGhlIGNyZWF0aW9uIG9mIHRoZSBzdWJzY3JpYmUgZnVuY3Rpb25cclxuICAgICAgICAvLyBjYW4gc3RpbGwgcmVjZWl2ZSB0aGUgdmVyeSBmaXJzdCB2YWx1ZSBnZW5lcmF0ZWQgaW4gdGhlIGV4ZWN1dG9yLlxyXG4gICAgICAgIHRoaXMudGFza1xyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGV4ZWN1dG9yKHRoaXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG5leHQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmZvckVhY2hPYnNlcnZlcigob2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlcnJvcihlcnJvcikge1xyXG4gICAgICAgIHRoaXMuZm9yRWFjaE9ic2VydmVyKChvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbG9zZShlcnJvcik7XHJcbiAgICB9XHJcbiAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLmZvckVhY2hPYnNlcnZlcigob2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGFkZCBhbiBPYnNlcnZlciB0byB0aGUgZmFuLW91dCBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIC0gV2UgcmVxdWlyZSB0aGF0IG5vIGV2ZW50IGlzIHNlbnQgdG8gYSBzdWJzY3JpYmVyIHN5bmNocm9ub3VzbHkgdG8gdGhlaXJcclxuICAgICAqICAgY2FsbCB0byBzdWJzY3JpYmUoKS5cclxuICAgICAqL1xyXG4gICAgc3Vic2NyaWJlKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcclxuICAgICAgICBsZXQgb2JzZXJ2ZXI7XHJcbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyID09PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgZXJyb3IgPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBPYnNlcnZlci4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQXNzZW1ibGUgYW4gT2JzZXJ2ZXIgb2JqZWN0IHdoZW4gcGFzc2VkIGFzIGNhbGxiYWNrIGZ1bmN0aW9ucy5cclxuICAgICAgICBpZiAoaW1wbGVtZW50c0FueU1ldGhvZHMobmV4dE9yT2JzZXJ2ZXIsIFtcclxuICAgICAgICAgICAgJ25leHQnLFxyXG4gICAgICAgICAgICAnZXJyb3InLFxyXG4gICAgICAgICAgICAnY29tcGxldGUnXHJcbiAgICAgICAgXSkpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXh0T3JPYnNlcnZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0ge1xyXG4gICAgICAgICAgICAgICAgbmV4dDogbmV4dE9yT2JzZXJ2ZXIsXHJcbiAgICAgICAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYnNlcnZlci5uZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCA9IG5vb3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYnNlcnZlci5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yID0gbm9vcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9ic2VydmVyLmNvbXBsZXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUgPSBub29wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1bnN1YiA9IHRoaXMudW5zdWJzY3JpYmVPbmUuYmluZCh0aGlzLCB0aGlzLm9ic2VydmVycy5sZW5ndGgpO1xyXG4gICAgICAgIC8vIEF0dGVtcHQgdG8gc3Vic2NyaWJlIHRvIGEgdGVybWluYXRlZCBPYnNlcnZhYmxlIC0gd2VcclxuICAgICAgICAvLyBqdXN0IHJlc3BvbmQgdG8gdGhlIE9ic2VydmVyIHdpdGggdGhlIGZpbmFsIGVycm9yIG9yIGNvbXBsZXRlXHJcbiAgICAgICAgLy8gZXZlbnQuXHJcbiAgICAgICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICAgICAgdGhpcy50YXNrLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maW5hbEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKHRoaXMuZmluYWxFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90aGluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgcmV0dXJuIHVuc3ViO1xyXG4gICAgfVxyXG4gICAgLy8gVW5zdWJzY3JpYmUgaXMgc3luY2hyb25vdXMgLSB3ZSBndWFyYW50ZWUgdGhhdCBubyBldmVudHMgYXJlIHNlbnQgdG9cclxuICAgIC8vIGFueSB1bnN1YnNjcmliZWQgT2JzZXJ2ZXIuXHJcbiAgICB1bnN1YnNjcmliZU9uZShpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzID09PSB1bmRlZmluZWQgfHwgdGhpcy5vYnNlcnZlcnNbaV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1tpXTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyQ291bnQgLT0gMTtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlckNvdW50ID09PSAwICYmIHRoaXMub25Ob09ic2VydmVycyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Ob09ic2VydmVycyh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JFYWNoT2JzZXJ2ZXIoZm4pIHtcclxuICAgICAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcclxuICAgICAgICAgICAgLy8gQWxyZWFkeSBjbG9zZWQgYnkgcHJldmlvdXMgZXZlbnQuLi4uanVzdCBlYXQgdGhlIGFkZGl0aW9uYWwgdmFsdWVzLlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNpbmNlIHNlbmRPbmUgY2FsbHMgYXN5bmNocm9ub3VzbHkgLSB0aGVyZSBpcyBubyBjaGFuY2UgdGhhdFxyXG4gICAgICAgIC8vIHRoaXMub2JzZXJ2ZXJzIHdpbGwgYmVjb21lIHVuZGVmaW5lZC5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2JzZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZE9uZShpLCBmbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2FsbCB0aGUgT2JzZXJ2ZXIgdmlhIG9uZSBvZiBpdCdzIGNhbGxiYWNrIGZ1bmN0aW9uLiBXZSBhcmUgY2FyZWZ1bCB0b1xyXG4gICAgLy8gY29uZmlybSB0aGF0IHRoZSBvYnNlcnZlIGhhcyBub3QgYmVlbiB1bnN1YnNjcmliZWQgc2luY2UgdGhpcyBhc3luY2hyb25vdXNcclxuICAgIC8vIGZ1bmN0aW9uIGhhZCBiZWVuIHF1ZXVlZC5cclxuICAgIHNlbmRPbmUoaSwgZm4pIHtcclxuICAgICAgICAvLyBFeGVjdXRlIHRoZSBjYWxsYmFjayBhc3luY2hyb25vdXNseVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICB0aGlzLnRhc2sudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9ic2VydmVycyAhPT0gdW5kZWZpbmVkICYmIHRoaXMub2JzZXJ2ZXJzW2ldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm4odGhpcy5vYnNlcnZlcnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgZXhjZXB0aW9ucyByYWlzZWQgaW4gT2JzZXJ2ZXJzIG9yIG1pc3NpbmcgbWV0aG9kcyBvZiBhblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9ic2VydmVyLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIExvZyBlcnJvciB0byBjb25zb2xlLiBiLzMxNDA0ODA2XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjbG9zZShlcnIpIHtcclxuICAgICAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbmFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKGVyciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluYWxFcnJvciA9IGVycjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUHJveHkgaXMgbm8gbG9uZ2VyIG5lZWRlZCAtIGdhcmJhZ2UgY29sbGVjdCByZWZlcmVuY2VzXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgIHRoaXMudGFzay50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub25Ob09ic2VydmVycyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vKiogVHVybiBzeW5jaHJvbm91cyBmdW5jdGlvbiBpbnRvIG9uZSBjYWxsZWQgYXN5bmNocm9ub3VzbHkuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXHJcbmZ1bmN0aW9uIGFzeW5jKGZuLCBvbkVycm9yKSB7XHJcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUodHJ1ZSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBmbiguLi5hcmdzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogUmV0dXJuIHRydWUgaWYgdGhlIG9iamVjdCBwYXNzZWQgaW4gaW1wbGVtZW50cyBhbnkgb2YgdGhlIG5hbWVkIG1ldGhvZHMuXHJcbiAqL1xyXG5mdW5jdGlvbiBpbXBsZW1lbnRzQW55TWV0aG9kcyhvYmosIG1ldGhvZHMpIHtcclxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBtZXRob2RzKSB7XHJcbiAgICAgICAgaWYgKG1ldGhvZCBpbiBvYmogJiYgdHlwZW9mIG9ialttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBub29wKCkge1xyXG4gICAgLy8gZG8gbm90aGluZ1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBDaGVjayB0byBtYWtlIHN1cmUgdGhlIGFwcHJvcHJpYXRlIG51bWJlciBvZiBhcmd1bWVudHMgYXJlIHByb3ZpZGVkIGZvciBhIHB1YmxpYyBmdW5jdGlvbi5cclxuICogVGhyb3dzIGFuIGVycm9yIGlmIGl0IGZhaWxzLlxyXG4gKlxyXG4gKiBAcGFyYW0gZm5OYW1lIFRoZSBmdW5jdGlvbiBuYW1lXHJcbiAqIEBwYXJhbSBtaW5Db3VudCBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIGFsbG93IGZvciB0aGUgZnVuY3Rpb24gY2FsbFxyXG4gKiBAcGFyYW0gbWF4Q291bnQgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50IHRvIGFsbG93IGZvciB0aGUgZnVuY3Rpb24gY2FsbFxyXG4gKiBAcGFyYW0gYXJnQ291bnQgVGhlIGFjdHVhbCBudW1iZXIgb2YgYXJndW1lbnRzIHByb3ZpZGVkLlxyXG4gKi9cclxuY29uc3QgdmFsaWRhdGVBcmdDb3VudCA9IGZ1bmN0aW9uIChmbk5hbWUsIG1pbkNvdW50LCBtYXhDb3VudCwgYXJnQ291bnQpIHtcclxuICAgIGxldCBhcmdFcnJvcjtcclxuICAgIGlmIChhcmdDb3VudCA8IG1pbkNvdW50KSB7XHJcbiAgICAgICAgYXJnRXJyb3IgPSAnYXQgbGVhc3QgJyArIG1pbkNvdW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYXJnQ291bnQgPiBtYXhDb3VudCkge1xyXG4gICAgICAgIGFyZ0Vycm9yID0gbWF4Q291bnQgPT09IDAgPyAnbm9uZScgOiAnbm8gbW9yZSB0aGFuICcgKyBtYXhDb3VudDtcclxuICAgIH1cclxuICAgIGlmIChhcmdFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gZm5OYW1lICtcclxuICAgICAgICAgICAgJyBmYWlsZWQ6IFdhcyBjYWxsZWQgd2l0aCAnICtcclxuICAgICAgICAgICAgYXJnQ291bnQgK1xyXG4gICAgICAgICAgICAoYXJnQ291bnQgPT09IDEgPyAnIGFyZ3VtZW50LicgOiAnIGFyZ3VtZW50cy4nKSArXHJcbiAgICAgICAgICAgICcgRXhwZWN0cyAnICtcclxuICAgICAgICAgICAgYXJnRXJyb3IgK1xyXG4gICAgICAgICAgICAnLic7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyB0byBwcmVmaXggYW4gZXJyb3IgbWVzc2FnZSBhYm91dCBmYWlsZWQgYXJndW1lbnQgdmFsaWRhdGlvblxyXG4gKlxyXG4gKiBAcGFyYW0gZm5OYW1lIFRoZSBmdW5jdGlvbiBuYW1lXHJcbiAqIEBwYXJhbSBhcmdOYW1lIFRoZSBuYW1lIG9mIHRoZSBhcmd1bWVudFxyXG4gKiBAcmV0dXJuIFRoZSBwcmVmaXggdG8gYWRkIHRvIHRoZSBlcnJvciB0aHJvd24gZm9yIHZhbGlkYXRpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBlcnJvclByZWZpeChmbk5hbWUsIGFyZ05hbWUpIHtcclxuICAgIHJldHVybiBgJHtmbk5hbWV9IGZhaWxlZDogJHthcmdOYW1lfSBhcmd1bWVudCBgO1xyXG59XHJcbi8qKlxyXG4gKiBAcGFyYW0gZm5OYW1lXHJcbiAqIEBwYXJhbSBhcmd1bWVudE51bWJlclxyXG4gKiBAcGFyYW0gbmFtZXNwYWNlXHJcbiAqIEBwYXJhbSBvcHRpb25hbFxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVOYW1lc3BhY2UoZm5OYW1lLCBuYW1lc3BhY2UsIG9wdGlvbmFsKSB7XHJcbiAgICBpZiAob3B0aW9uYWwgJiYgIW5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIC8vVE9ETzogSSBzaG91bGQgZG8gbW9yZSB2YWxpZGF0aW9uIGhlcmUuIFdlIG9ubHkgYWxsb3cgY2VydGFpbiBjaGFycyBpbiBuYW1lc3BhY2VzLlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclByZWZpeChmbk5hbWUsICduYW1lc3BhY2UnKSArICdtdXN0IGJlIGEgdmFsaWQgZmlyZWJhc2UgbmFtZXNwYWNlLicpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHZhbGlkYXRlQ2FsbGJhY2soZm5OYW1lLCBhcmd1bWVudE5hbWUsIFxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xyXG5jYWxsYmFjaywgb3B0aW9uYWwpIHtcclxuICAgIGlmIChvcHRpb25hbCAmJiAhY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROYW1lKSArICdtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uJyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVDb250ZXh0T2JqZWN0KGZuTmFtZSwgYXJndW1lbnROYW1lLCBjb250ZXh0LCBvcHRpb25hbCkge1xyXG4gICAgaWYgKG9wdGlvbmFsICYmICFjb250ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjb250ZXh0ICE9PSAnb2JqZWN0JyB8fCBjb250ZXh0ID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROYW1lKSArICdtdXN0IGJlIGEgdmFsaWQgY29udGV4dCBvYmplY3QuJyk7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLy8gQ29kZSBvcmlnaW5hbGx5IGNhbWUgZnJvbSBnb29nLmNyeXB0LnN0cmluZ1RvVXRmOEJ5dGVBcnJheSwgYnV0IGZvciBzb21lIHJlYXNvbiB0aGV5XHJcbi8vIGF1dG9tYXRpY2FsbHkgcmVwbGFjZWQgJ1xcclxcbicgd2l0aCAnXFxuJywgYW5kIHRoZXkgZGlkbid0IGhhbmRsZSBzdXJyb2dhdGUgcGFpcnMsXHJcbi8vIHNvIGl0J3MgYmVlbiBtb2RpZmllZC5cclxuLy8gTm90ZSB0aGF0IG5vdCBhbGwgVW5pY29kZSBjaGFyYWN0ZXJzIGFwcGVhciBhcyBzaW5nbGUgY2hhcmFjdGVycyBpbiBKYXZhU2NyaXB0IHN0cmluZ3MuXHJcbi8vIGZyb21DaGFyQ29kZSByZXR1cm5zIHRoZSBVVEYtMTYgZW5jb2Rpbmcgb2YgYSBjaGFyYWN0ZXIgLSBzbyBzb21lIFVuaWNvZGUgY2hhcmFjdGVyc1xyXG4vLyB1c2UgMiBjaGFyYWN0ZXJzIGluIEphdmFTY3JpcHQuICBBbGwgNC1ieXRlIFVURi04IGNoYXJhY3RlcnMgYmVnaW4gd2l0aCBhIGZpcnN0XHJcbi8vIGNoYXJhY3RlciBpbiB0aGUgcmFuZ2UgMHhEODAwIC0gMHhEQkZGICh0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGEgc28tY2FsbGVkIHN1cnJvZ2F0ZVxyXG4vLyBwYWlyKS5cclxuLy8gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy0xNS4xLjNcclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqL1xyXG5jb25zdCBzdHJpbmdUb0J5dGVBcnJheSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIGNvbnN0IG91dCA9IFtdO1xyXG4gICAgbGV0IHAgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIC8vIElzIHRoaXMgdGhlIGxlYWQgc3Vycm9nYXRlIGluIGEgc3Vycm9nYXRlIHBhaXI/XHJcbiAgICAgICAgaWYgKGMgPj0gMHhkODAwICYmIGMgPD0gMHhkYmZmKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZ2ggPSBjIC0gMHhkODAwOyAvLyB0aGUgaGlnaCAxMCBiaXRzLlxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIGFzc2VydChpIDwgc3RyLmxlbmd0aCwgJ1N1cnJvZ2F0ZSBwYWlyIG1pc3NpbmcgdHJhaWwgc3Vycm9nYXRlLicpO1xyXG4gICAgICAgICAgICBjb25zdCBsb3cgPSBzdHIuY2hhckNvZGVBdChpKSAtIDB4ZGMwMDsgLy8gdGhlIGxvdyAxMCBiaXRzLlxyXG4gICAgICAgICAgICBjID0gMHgxMDAwMCArIChoaWdoIDw8IDEwKSArIGxvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMgPCAxMjgpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSBjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjIDwgMjA0OCkge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDYpIHwgMTkyO1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjIDwgNjU1MzYpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxMikgfCAyMjQ7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxOCkgfCAyNDA7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDEyKSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxufTtcclxuLyoqXHJcbiAqIENhbGN1bGF0ZSBsZW5ndGggd2l0aG91dCBhY3R1YWxseSBjb252ZXJ0aW5nOyB1c2VmdWwgZm9yIGRvaW5nIGNoZWFwZXIgdmFsaWRhdGlvbi5cclxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG5jb25zdCBzdHJpbmdMZW5ndGggPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICBsZXQgcCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGMgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICAgICAgICBwKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPCAyMDQ4KSB7XHJcbiAgICAgICAgICAgIHAgKz0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA+PSAweGQ4MDAgJiYgYyA8PSAweGRiZmYpIHtcclxuICAgICAgICAgICAgLy8gTGVhZCBzdXJyb2dhdGUgb2YgYSBzdXJyb2dhdGUgcGFpci4gIFRoZSBwYWlyIHRvZ2V0aGVyIHdpbGwgdGFrZSA0IGJ5dGVzIHRvIHJlcHJlc2VudC5cclxuICAgICAgICAgICAgcCArPSA0O1xyXG4gICAgICAgICAgICBpKys7IC8vIHNraXAgdHJhaWwgc3Vycm9nYXRlLlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcCArPSAzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQ29waWVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjNcclxuICogR2VuZXJhdGVzIGEgbmV3IHV1aWQuXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmNvbnN0IHV1aWR2NCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsIHYgPSBjID09PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xyXG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgIH0pO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogVGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gZXhwb25lbnRpYWxseSBpbmNyZWFzZS5cclxuICovXHJcbmNvbnN0IERFRkFVTFRfSU5URVJWQUxfTUlMTElTID0gMTAwMDtcclxuLyoqXHJcbiAqIFRoZSBmYWN0b3IgdG8gYmFja29mZiBieS5cclxuICogU2hvdWxkIGJlIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAxLlxyXG4gKi9cclxuY29uc3QgREVGQVVMVF9CQUNLT0ZGX0ZBQ1RPUiA9IDI7XHJcbi8qKlxyXG4gKiBUaGUgbWF4aW11bSBtaWxsaXNlY29uZHMgdG8gaW5jcmVhc2UgdG8uXHJcbiAqXHJcbiAqIDxwPlZpc2libGUgZm9yIHRlc3RpbmdcclxuICovXHJcbmNvbnN0IE1BWF9WQUxVRV9NSUxMSVMgPSA0ICogNjAgKiA2MCAqIDEwMDA7IC8vIEZvdXIgaG91cnMsIGxpa2UgaU9TIGFuZCBBbmRyb2lkLlxyXG4vKipcclxuICogVGhlIHBlcmNlbnRhZ2Ugb2YgYmFja29mZiB0aW1lIHRvIHJhbmRvbWl6ZSBieS5cclxuICogU2VlXHJcbiAqIGh0dHA6Ly9nby9zYWZlLWNsaWVudC1iZWhhdmlvciNzdGVwLTEtZGV0ZXJtaW5lLXRoZS1hcHByb3ByaWF0ZS1yZXRyeS1pbnRlcnZhbC10by1oYW5kbGUtc3Bpa2UtdHJhZmZpY1xyXG4gKiBmb3IgY29udGV4dC5cclxuICpcclxuICogPHA+VmlzaWJsZSBmb3IgdGVzdGluZ1xyXG4gKi9cclxuY29uc3QgUkFORE9NX0ZBQ1RPUiA9IDAuNTtcclxuLyoqXHJcbiAqIEJhc2VkIG9uIHRoZSBiYWNrb2ZmIG1ldGhvZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1saWJyYXJ5L2Jsb2IvbWFzdGVyL2Nsb3N1cmUvZ29vZy9tYXRoL2V4cG9uZW50aWFsYmFja29mZi5qcy5cclxuICogRXh0cmFjdGVkIGhlcmUgc28gd2UgZG9uJ3QgbmVlZCB0byBwYXNzIG1ldGFkYXRhIGFuZCBhIHN0YXRlZnVsIEV4cG9uZW50aWFsQmFja29mZiBvYmplY3QgYXJvdW5kLlxyXG4gKi9cclxuZnVuY3Rpb24gY2FsY3VsYXRlQmFja29mZk1pbGxpcyhiYWNrb2ZmQ291bnQsIGludGVydmFsTWlsbGlzID0gREVGQVVMVF9JTlRFUlZBTF9NSUxMSVMsIGJhY2tvZmZGYWN0b3IgPSBERUZBVUxUX0JBQ0tPRkZfRkFDVE9SKSB7XHJcbiAgICAvLyBDYWxjdWxhdGVzIGFuIGV4cG9uZW50aWFsbHkgaW5jcmVhc2luZyB2YWx1ZS5cclxuICAgIC8vIERldmlhdGlvbjogY2FsY3VsYXRlcyB2YWx1ZSBmcm9tIGNvdW50IGFuZCBhIGNvbnN0YW50IGludGVydmFsLCBzbyB3ZSBvbmx5IG5lZWQgdG8gc2F2ZSB2YWx1ZVxyXG4gICAgLy8gYW5kIGNvdW50IHRvIHJlc3RvcmUgc3RhdGUuXHJcbiAgICBjb25zdCBjdXJyQmFzZVZhbHVlID0gaW50ZXJ2YWxNaWxsaXMgKiBNYXRoLnBvdyhiYWNrb2ZmRmFjdG9yLCBiYWNrb2ZmQ291bnQpO1xyXG4gICAgLy8gQSByYW5kb20gXCJmdXp6XCIgdG8gYXZvaWQgd2F2ZXMgb2YgcmV0cmllcy5cclxuICAgIC8vIERldmlhdGlvbjogcmFuZG9tRmFjdG9yIGlzIHJlcXVpcmVkLlxyXG4gICAgY29uc3QgcmFuZG9tV2FpdCA9IE1hdGgucm91bmQoXHJcbiAgICAvLyBBIGZyYWN0aW9uIG9mIHRoZSBiYWNrb2ZmIHZhbHVlIHRvIGFkZC9zdWJ0cmFjdC5cclxuICAgIC8vIERldmlhdGlvbjogY2hhbmdlcyBtdWx0aXBsaWNhdGlvbiBvcmRlciB0byBpbXByb3ZlIHJlYWRhYmlsaXR5LlxyXG4gICAgUkFORE9NX0ZBQ1RPUiAqXHJcbiAgICAgICAgY3VyckJhc2VWYWx1ZSAqXHJcbiAgICAgICAgLy8gQSByYW5kb20gZmxvYXQgKHJvdW5kZWQgdG8gaW50IGJ5IE1hdGgucm91bmQgYWJvdmUpIGluIHRoZSByYW5nZSBbLTEsIDFdLiBEZXRlcm1pbmVzXHJcbiAgICAgICAgLy8gaWYgd2UgYWRkIG9yIHN1YnRyYWN0LlxyXG4gICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqXHJcbiAgICAgICAgMik7XHJcbiAgICAvLyBMaW1pdHMgYmFja29mZiB0byBtYXggdG8gYXZvaWQgZWZmZWN0aXZlbHkgcGVybWFuZW50IGJhY2tvZmYuXHJcbiAgICByZXR1cm4gTWF0aC5taW4oTUFYX1ZBTFVFX01JTExJUywgY3VyckJhc2VWYWx1ZSArIHJhbmRvbVdhaXQpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBQcm92aWRlIEVuZ2xpc2ggb3JkaW5hbCBsZXR0ZXJzIGFmdGVyIGEgbnVtYmVyXHJcbiAqL1xyXG5mdW5jdGlvbiBvcmRpbmFsKGkpIHtcclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke2l9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBpICsgaW5kaWNhdG9yKGkpO1xyXG59XHJcbmZ1bmN0aW9uIGluZGljYXRvcihpKSB7XHJcbiAgICBpID0gTWF0aC5hYnMoaSk7XHJcbiAgICBjb25zdCBjZW50ID0gaSAlIDEwMDtcclxuICAgIGlmIChjZW50ID49IDEwICYmIGNlbnQgPD0gMjApIHtcclxuICAgICAgICByZXR1cm4gJ3RoJztcclxuICAgIH1cclxuICAgIGNvbnN0IGRlYyA9IGkgJSAxMDtcclxuICAgIGlmIChkZWMgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gJ3N0JztcclxuICAgIH1cclxuICAgIGlmIChkZWMgPT09IDIpIHtcclxuICAgICAgICByZXR1cm4gJ25kJztcclxuICAgIH1cclxuICAgIGlmIChkZWMgPT09IDMpIHtcclxuICAgICAgICByZXR1cm4gJ3JkJztcclxuICAgIH1cclxuICAgIHJldHVybiAndGgnO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGdldE1vZHVsYXJJbnN0YW5jZShzZXJ2aWNlKSB7XHJcbiAgICBpZiAoc2VydmljZSAmJiBzZXJ2aWNlLl9kZWxlZ2F0ZSkge1xyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlLl9kZWxlZ2F0ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlO1xyXG4gICAgfVxyXG59XG5cbmV4cG9ydCB7IENPTlNUQU5UUywgRGVjb2RlQmFzZTY0U3RyaW5nRXJyb3IsIERlZmVycmVkLCBFcnJvckZhY3RvcnksIEZpcmViYXNlRXJyb3IsIE1BWF9WQUxVRV9NSUxMSVMsIFJBTkRPTV9GQUNUT1IsIFNoYTEsIGFyZUNvb2tpZXNFbmFibGVkLCBhc3NlcnQsIGFzc2VydGlvbkVycm9yLCBhc3luYywgYmFzZTY0LCBiYXNlNjREZWNvZGUsIGJhc2U2NEVuY29kZSwgYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcsIGNhbGN1bGF0ZUJhY2tvZmZNaWxsaXMsIGNvbnRhaW5zLCBjcmVhdGVNb2NrVXNlclRva2VuLCBjcmVhdGVTdWJzY3JpYmUsIGRlY29kZSwgZGVlcENvcHksIGRlZXBFcXVhbCwgZGVlcEV4dGVuZCwgZXJyb3JQcmVmaXgsIGV4dHJhY3RRdWVyeXN0cmluZywgZ2V0RGVmYXVsdEFwcENvbmZpZywgZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdCwgZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdG5hbWVBbmRQb3J0LCBnZXREZWZhdWx0cywgZ2V0RXhwZXJpbWVudGFsU2V0dGluZywgZ2V0R2xvYmFsLCBnZXRNb2R1bGFySW5zdGFuY2UsIGdldFVBLCBpc0FkbWluLCBpc0Jyb3dzZXIsIGlzQnJvd3NlckV4dGVuc2lvbiwgaXNDbG91ZGZsYXJlV29ya2VyLCBpc0VsZWN0cm9uLCBpc0VtcHR5LCBpc0lFLCBpc0luZGV4ZWREQkF2YWlsYWJsZSwgaXNNb2JpbGVDb3Jkb3ZhLCBpc05vZGUsIGlzTm9kZVNkaywgaXNSZWFjdE5hdGl2ZSwgaXNTYWZhcmksIGlzVVdQLCBpc1ZhbGlkRm9ybWF0LCBpc1ZhbGlkVGltZXN0YW1wLCBpc1dlYldvcmtlciwgaXNzdWVkQXRUaW1lLCBqc29uRXZhbCwgbWFwLCBvcmRpbmFsLCBwcm9taXNlV2l0aFRpbWVvdXQsIHF1ZXJ5c3RyaW5nLCBxdWVyeXN0cmluZ0RlY29kZSwgc2FmZUdldCwgc3RyaW5nTGVuZ3RoLCBzdHJpbmdUb0J5dGVBcnJheSwgc3RyaW5naWZ5LCB1dWlkdjQsIHZhbGlkYXRlQXJnQ291bnQsIHZhbGlkYXRlQ2FsbGJhY2ssIHZhbGlkYXRlQ29udGV4dE9iamVjdCwgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSwgdmFsaWRhdGVOYW1lc3BhY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbTIwMTcuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGdldEFwcElkIH0gZnJvbSBcIi4vYXBpL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRDaGVja0luIH0gZnJvbSBcIi4vYXBpL2NoZWNrX2luXCI7XHJcbmltcG9ydCB7IGdldEluc3RhbGxhdGlvbnMgfSBmcm9tIFwiLi9hcGkvaW5zdGFsbGF0aW9uc1wiO1xyXG5pbXBvcnQgeyBnZXRGQ01Ub2tlbiB9IGZyb20gXCIuL2FwaS9mY21fdG9rZW5cIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFQSSgpIHtcclxuICAgIGNvbnN0IGNoZWNrX2luID0gYXdhaXQgZ2V0Q2hlY2tJbigpO1xyXG4gICAgY29uc3QgaW5zdGFsbGF0aW9ucyA9IGF3YWl0IGdldEluc3RhbGxhdGlvbnMoKTtcclxuICAgIGNvbnN0IGZjbV90b2tlbiA9IGF3YWl0IGdldEZDTVRva2VuKGNoZWNrX2luLCBpbnN0YWxsYXRpb25zKTtcclxuXHJcbiAgICBpZiAoZmNtX3Rva2VuLnRva2VuID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwX2lkID0gYXdhaXQgZ2V0QXBwSWQoZmNtX3Rva2VuKTtcclxuICAgIHJldHVybiBhcHBfaWQuaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldEFQSSB9OyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vY29uc3RcIjtcclxuaW1wb3J0IHsgRkNNVG9rZW5TdHJ1Y3QgfSBmcm9tIFwiLi9mY21fdG9rZW5cIjtcclxuXHJcbnR5cGUgRGF0ZVN0cnVjdCA9IHtcclxuICAgIGRhdGU6IHN0cmluZztcclxuICAgIHRpbWVzdGFtcDogbnVtYmVyO1xyXG59XHJcblxyXG50eXBlIEFwcElkU3RydWN0ID0ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRpbWVzdGFtcDogbnVtYmVyO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzaGEyNTYobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IG1zZ0J1ZmZlciAgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUobWVzc2FnZSk7XHJcbiAgICBjb25zdCBoYXNoQnVmZmVyID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoXCJTSEEtMjU2XCIsIG1zZ0J1ZmZlcik7XHJcbiAgICBjb25zdCBoYXNoQXJyYXkgID0gQXJyYXkuZnJvbShuZXcgVWludDhBcnJheShoYXNoQnVmZmVyKSk7XHJcbiAgICBjb25zdCBoYXNoSGV4ICAgID0gaGFzaEFycmF5Lm1hcChiID0+IGIudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xyXG4gICAgcmV0dXJuIGhhc2hIZXg7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGUoKSB7XHJcbiAgICBjb25zdCB7IGRhdGU6IGRhdGUgfSA9IGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoe1xyXG4gICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgZGF0ZTogXCJcIixcclxuICAgICAgICAgICAgdGltZXN0YW1wOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KSBhcyB7IGRhdGU6IERhdGVTdHJ1Y3Q7IH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbjIuZGNpbnNpZGUuY29tL2pzb24wL2FwcF9jaGVja19BX3JpbmFfb25lX25ldy5waHBcIiwge1xyXG4gICAgICAgIFwiY3JlZGVudGlhbHNcIjogXCJvbWl0XCIsXHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgICAgXCJVc2VyLUFnZW50XCI6IFwiZGNpbnNpZGUuYXBwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVmZXJyZXJcIjogXCJodHRwOi8vd3d3LmRjaW5zaWRlLmNvbVwiLFxyXG4gICAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXHJcbiAgICAgICAgXCJtb2RlXCI6IFwiY29yc1wiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAoZGF0ZS5kYXRlICE9PSBqc29uWzBdLmRhdGUpIHtcclxuICAgICAgICBkYXRlLmRhdGUgPSBqc29uWzBdLmRhdGU7XHJcbiAgICAgICAgZGF0ZS50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICBhd2FpdCBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHtcclxuICAgICAgICAgICAgZGF0ZTogZGF0ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcHBJZCh2YWx1ZV90b2tlbjogc3RyaW5nLCBjbGllbnRfdG9rZW46IHN0cmluZykge1xyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kKFwidmFsdWVfdG9rZW5cIiwgIHZhbHVlX3Rva2VuKTtcclxuICAgIGZvcm0uYXBwZW5kKFwic2lnbmF0dXJlXCIsICAgIENvbnN0YW50cy5BUFBMSUNBVElPTi5GSU5HRVJQUklOVC5TSEEyNTYpO1xyXG4gICAgZm9ybS5hcHBlbmQoXCJwa2dcIiwgICAgICAgICAgQ29uc3RhbnRzLkFQUExJQ0FUSU9OLlBBQ0tBR0VfTkFNRSk7XHJcbiAgICBmb3JtLmFwcGVuZChcInZDb2RlXCIsICAgICAgICBDb25zdGFudHMuQVBQTElDQVRJT04uVkVSU0lPTik7XHJcbiAgICBmb3JtLmFwcGVuZChcInZOYW1lXCIsICAgICAgICBDb25zdGFudHMuQVBQTElDQVRJT04uVkVSU0lPTl9OQU1FKTtcclxuICAgIGZvcm0uYXBwZW5kKFwiY2xpZW50X3Rva2VuXCIsIGNsaWVudF90b2tlbik7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbXNpZ24uZGNpbnNpZGUuY29tL2F1dGgvbW9iaWxlX2FwcF92ZXJpZmljYXRpb25cIiwge1xyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcIm9taXRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIlVzZXItQWdlbnRcIjogXCJva2h0dHBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZmVycmVyOiBcImh0dHA6Ly93d3cuZGNpbnNpZGUuY29tXCIsXHJcbiAgICAgICAgYm9keTogZm9ybSxcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIG1vZGU6IFwiY29yc1wiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiBqc29uLmFwcF9pZDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QXBwSWQoZmNtX3Rva2VuOiBGQ01Ub2tlblN0cnVjdCkge1xyXG4gICAgY29uc3QgeyBhcHBfaWQ6IGFwcF9pZCB9ID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCh7XHJcbiAgICAgICAgYXBwX2lkOiB7XHJcbiAgICAgICAgICAgIGlkOiBcIlwiLFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IDAsXHJcbiAgICAgICAgfSxcclxuICAgIH0pIGFzIHsgYXBwX2lkOiBBcHBJZFN0cnVjdDsgfTtcclxuXHJcbiAgICBjb25zdCBkYXRlID0gYXdhaXQgZ2V0RGF0ZSgpO1xyXG5cclxuICAgIGlmIChhcHBfaWQuaWQgPT09IFwiXCIgfHwgYXBwX2lkLnRpbWVzdGFtcCA8IGZjbV90b2tlbi50aW1lc3RhbXAgfHwgYXBwX2lkLnRpbWVzdGFtcCA8IGRhdGUudGltZXN0YW1wKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVfdG9rZW4gPSBhd2FpdCBzaGEyNTYoYGRjQXJkY2hrXyR7ZGF0ZS5kYXRlfWApO1xyXG5cclxuICAgICAgICBhcHBfaWQuaWQgPSBhd2FpdCBmZXRjaEFwcElkKHZhbHVlX3Rva2VuLCBmY21fdG9rZW4udG9rZW4pO1xyXG4gICAgICAgIGFwcF9pZC50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICBhd2FpdCBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHtcclxuICAgICAgICAgICAgYXBwX2lkOiBhcHBfaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFwcF9pZDtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0QXBwSWQgfTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IHBhcnNlLCBzdHJpbmdpZnksIHBhcnNlTnVtYmVyQW5kQmlnSW50IH0gZnJvbSBcImxvc3NsZXNzLWpzb25cIjtcclxuXHJcbnR5cGUgQ2hlY2tJblN0cnVjdCA9IHtcclxuICAgIGlkOiAgICAgICAgICAgbnVtYmVyIHwgQmlnSW50O1xyXG4gICAgdG9rZW46ICAgICAgICBudW1iZXIgfCBCaWdJbnQ7XHJcbiAgICB0aW1lc3RhbXA6ICAgIG51bWJlciB8IGJpZ2ludDtcclxuICAgIHZlcnNpb25faW5mbzogc3RyaW5nO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaENoZWNrSW4oY2hlY2tfaW46IENoZWNrSW5TdHJ1Y3QpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBzdHJpbmdpZnkoe1xyXG4gICAgICAgIGlkOiBjaGVja19pbi5pZCxcclxuICAgICAgICBjaGVja2luOiB7XHJcbiAgICAgICAgICAgIGxhc3RfY2hlY2tpbl9tc2VjOiBjaGVja19pbi50aW1lc3RhbXAsXHJcbiAgICAgICAgICAgIHR5cGU6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWN1cml0eV90b2tlbjogY2hlY2tfaW4udG9rZW4sXHJcbiAgICAgICAgdmVyc2lvbjogMixcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RldmljZS1wcm92aXNpb25pbmcuZ29vZ2xlYXBpcy5jb20vY2hlY2tpblwiLCB7XHJcbiAgICAgICAgY3JlZGVudGlhbHM6IFwib21pdFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIlVzZXItQWdlbnRcIjogXCJva2h0dHBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IGJvZHksXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBtb2RlOiBcImNvcnNcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QganNvbjogYW55ID0gcGFyc2UoYXdhaXQgcmVzcG9uc2UudGV4dCgpLCBudWxsLCBwYXJzZU51bWJlckFuZEJpZ0ludCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogICAgICAgICAgIGpzb24uYW5kcm9pZF9pZCxcclxuICAgICAgICB0b2tlbjogICAgICAgIGpzb24uc2VjdXJpdHlfdG9rZW4sXHJcbiAgICAgICAgdGltZXN0YW1wOiAgICBqc29uLmxhc3RfY2hlY2tpbl9tc2VjLFxyXG4gICAgICAgIHZlcnNpb25faW5mbzoganNvbi52ZXJzaW9uX2luZm8sXHJcbiAgICB9IGFzIENoZWNrSW5TdHJ1Y3Q7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldENoZWNrSW4oKSB7XHJcbiAgICBsZXQgeyBjaGVja19pbjogY2hlY2tfaW4gfSA9IGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoe1xyXG4gICAgICAgIGNoZWNrX2luOiB7IGlkOiAwLCB0b2tlbjogMCwgdGltZXN0YW1wOiAwLCB2ZXJzaW9uX2luZm86IFwiXCIgfSxcclxuICAgIH0pIGFzIHsgY2hlY2tfaW46IENoZWNrSW5TdHJ1Y3Q7IH07XHJcblxyXG4gICAgaWYgKERhdGUubm93KCkgLSBOdW1iZXIoY2hlY2tfaW4udGltZXN0YW1wKSA+IDI0ICogNjAgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICBjaGVja19pbiA9IGF3YWl0IGZldGNoQ2hlY2tJbihjaGVja19pbik7XHJcblxyXG4gICAgICAgIGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoe1xyXG4gICAgICAgICAgICBjaGVja19pbjogY2hlY2tfaW4sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNoZWNrX2luO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXRDaGVja0luLCBDaGVja0luU3RydWN0IH07IiwiY29uc3QgQXBwbGljYXRpb24gPSB7XHJcbiAgICBQQUNLQUdFX05BTUU6IFwiY29tLmRjaW5zaWRlLmFwcC5hbmRyb2lkXCIsXHJcbiAgICBWRVJTSU9OOiAgICAgIFwiMTAwMTAxXCIsXHJcbiAgICBWRVJTSU9OX05BTUU6IFwiNS4wLjJcIixcclxuXHJcbiAgICBGSU5HRVJQUklOVDoge1xyXG4gICAgICAgIFNIQTE6ICAgXCI0M2JkNzBkZmMzNjVlYzE3NDlmMDQyNGQyODE3NGRhNDRlZTc2NTlkXCIsXHJcbiAgICAgICAgU0hBMjU2OiBcIjVySnhSS0oyWUxIZ0JnajZSZE1aQmwyWDBLY2Z0VXVNb1hWdWcwYnNLZDA9XCIsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgRklSRUJBU0VfUFJPSkVDVF9JRCA9IFwiZGNpbnNpZGUtYjNmNDBcIjtcclxuY29uc3QgRklSRUJBU0VfU0VOREVSX0lEICA9IFwiNDc3MzY5NzU0MzQzXCI7XHJcblxyXG5jb25zdCBGaXJlYmFzZSA9IHtcclxuICAgIEFQSV9LRVk6ICAgICAgICAgICAgIFwiQUl6YVN5RGNiVm9mXzRCaTJHd0oxSDhOalN3U1RhTVBQWmVDRTM4XCIsXHJcbiAgICBBVVRIX0RPTUFJTjogICAgICAgICBgJHtGSVJFQkFTRV9QUk9KRUNUX0lEfS5maXJlYmFzZWFwcC5jb21gLFxyXG4gICAgREFUQUJBU0VfVVJMOiAgICAgICAgYGh0dHBzOi8vJHtGSVJFQkFTRV9QUk9KRUNUX0lEfS5maXJlYmFzZWlvLmNvbWAsXHJcbiAgICBQUk9KRUNUX0lEOiAgICAgICAgICBgJHtGSVJFQkFTRV9QUk9KRUNUX0lEfWAsXHJcbiAgICBTVE9SQUdFX0JVQ0tFVDogICAgICBgJHtGSVJFQkFTRV9QUk9KRUNUX0lEfS5hcHBzcG90LmNvbWAsXHJcbiAgICBNRVNTQUdJTkdfU0VOREVSX0lEOiBgJHtGSVJFQkFTRV9TRU5ERVJfSUR9YCxcclxuICAgIEFQUF9JRDogICAgICAgICAgICAgIGAxOiR7RklSRUJBU0VfU0VOREVSX0lEfTphbmRyb2lkOmQyZmZkZDk2MDEyMGEyMDc3Mjc4NDJgLFxyXG4gICAgQVBQX05BTUVfSEFTSDogICAgICAgXCJSMWRBSDlVaTdNLXlub3pud0JkdzAxdEx4aElcIixcclxufTtcclxuXHJcbmNvbnN0IENvbnN0YW50cyA9IHtcclxuICAgIEFQUExJQ0FUSU9OOiBBcHBsaWNhdGlvbixcclxuICAgIEZJUkVCQVNFOiAgICBGaXJlYmFzZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnN0YW50czsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENoZWNrSW5TdHJ1Y3QgfSBmcm9tIFwiLi9jaGVja19pblwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL2NvbnN0XCI7XHJcbmltcG9ydCB7IEluc3RhbGxhdGlvbnNTdHJ1Y3QgfSBmcm9tIFwiLi9pbnN0YWxsYXRpb25zXCI7XHJcblxyXG50eXBlIEZDTVRva2VuU3RydWN0ID0ge1xyXG4gICAgdG9rZW46ICAgICBzdHJpbmc7XHJcbiAgICB0aW1lc3RhbXA6IG51bWJlcjtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hGQ01Ub2tlbihcclxuICAgIGFuZHJvaWRfaWQ6ICAgICAgICAgICAgICAgIG51bWJlciB8IEJpZ0ludCxcclxuICAgIHNlY3VyaXR5X3Rva2VuOiAgICAgICAgICAgIG51bWJlciB8IEJpZ0ludCxcclxuICAgIHZlcnNpb25faW5mbzogICAgICAgICAgICAgIHN0cmluZyxcclxuICAgIGZpcmViYXNlSW5zdGFsbGF0aW9uc0lkOiAgIHN0cmluZyxcclxuICAgIGZpcmViYXNlSW5zdGFsbGF0aW9uc0F1dGg6IHN0cmluZyxcclxuKSB7XHJcbiAgICBjb25zdCBmb3JtID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgXCJhcHBcIjogICAgIENvbnN0YW50cy5BUFBMSUNBVElPTi5QQUNLQUdFX05BTUUsXHJcbiAgICAgICAgXCJhcHBfdmVyXCI6IENvbnN0YW50cy5BUFBMSUNBVElPTi5WRVJTSU9OLFxyXG4gICAgICAgIFwiY2VydFwiOiAgICBDb25zdGFudHMuQVBQTElDQVRJT04uRklOR0VSUFJJTlQuU0hBMSxcclxuICAgICAgICBcImRldmljZVwiOiAgYW5kcm9pZF9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIFwic2VuZGVyXCI6ICBDb25zdGFudHMuRklSRUJBU0UuTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICAgICAgICBcImluZm9cIjogICAgdmVyc2lvbl9pbmZvLFxyXG5cclxuICAgICAgICBcIlgtYXBwX3ZlclwiOiAgICAgIENvbnN0YW50cy5BUFBMSUNBVElPTi5WRVJTSU9OLFxyXG4gICAgICAgIFwiWC1hcHBfdmVyX25hbWVcIjogQ29uc3RhbnRzLkFQUExJQ0FUSU9OLlZFUlNJT05fTkFNRSxcclxuICAgICAgICBcIlgtc3VidHlwZVwiOiAgICAgIENvbnN0YW50cy5GSVJFQkFTRS5NRVNTQUdJTkdfU0VOREVSX0lELFxyXG5cclxuICAgICAgICBcIlgtYXBwaWRcIjogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2VJbnN0YWxsYXRpb25zSWQsXHJcbiAgICAgICAgXCJYLUdvb2ctRmlyZWJhc2UtSW5zdGFsbGF0aW9ucy1BdXRoXCI6IGZpcmViYXNlSW5zdGFsbGF0aW9uc0F1dGgsXHJcblxyXG4gICAgICAgIFwiWC1maXJlYmFzZS1hcHAtbmFtZS1oYXNoXCI6IENvbnN0YW50cy5GSVJFQkFTRS5BUFBfTkFNRV9IQVNILFxyXG4gICAgICAgIFwiWC1nbXBfYXBwX2lkXCI6ICAgICAgICAgICAgIENvbnN0YW50cy5GSVJFQkFTRS5BUFBfSUQsXHJcbiAgICAgICAgXCJYLXNjb3BlXCI6ICAgICAgICAgICAgICAgICAgXCIqXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9mY210b2tlbi5nb29nbGVhcGlzLmNvbS9yZWdpc3RlclwiLCB7XHJcbiAgICAgICAgY3JlZGVudGlhbHM6IFwib21pdFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBBaWRMb2dpbiAke2FuZHJvaWRfaWR9OiR7c2VjdXJpdHlfdG9rZW59YCxcclxuICAgICAgICAgICAgXCJhcHBcIjogQ29uc3RhbnRzLkFQUExJQ0FUSU9OLlBBQ0tBR0VfTkFNRSxcclxuICAgICAgICAgICAgXCJVc2VyLUFnZW50XCI6IFwib2todHRwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBmb3JtLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcblxyXG4gICAgcmV0dXJuIChuZXcgVVJMU2VhcmNoUGFyYW1zKHRleHQpKS5nZXQoXCJ0b2tlblwiKSA/PyBcIlwiO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRGQ01Ub2tlbihcclxuICAgIGNoZWNrX2luOiAgICAgIENoZWNrSW5TdHJ1Y3QsXHJcbiAgICBpbnN0YWxsYXRpb25zOiBJbnN0YWxsYXRpb25zU3RydWN0LFxyXG4pIHtcclxuICAgIGNvbnN0IHsgZmNtX3Rva2VuOiBmY21fdG9rZW4gfSA9IGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoe1xyXG4gICAgICAgIGZjbV90b2tlbjoge1xyXG4gICAgICAgICAgICB0b2tlbjogXCJcIixcclxuICAgICAgICAgICAgdGltZXN0YW1wOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KSBhcyB7IGZjbV90b2tlbjogRkNNVG9rZW5TdHJ1Y3Q7IH07XHJcblxyXG4gICAgaWYgKGZjbV90b2tlbi50b2tlbiA9PT0gXCJcIiB8fCBmY21fdG9rZW4udGltZXN0YW1wIDwgY2hlY2tfaW4udGltZXN0YW1wIHx8IGZjbV90b2tlbi50aW1lc3RhbXAgPCBpbnN0YWxsYXRpb25zLnRpbWVzdGFtcCkge1xyXG4gICAgICAgIGZjbV90b2tlbi50b2tlbiA9IGF3YWl0IGZldGNoRkNNVG9rZW4oXHJcbiAgICAgICAgICAgIGNoZWNrX2luLmlkLFxyXG4gICAgICAgICAgICBjaGVja19pbi50b2tlbixcclxuICAgICAgICAgICAgY2hlY2tfaW4udmVyc2lvbl9pbmZvLFxyXG4gICAgICAgICAgICBpbnN0YWxsYXRpb25zLmlkLFxyXG4gICAgICAgICAgICBpbnN0YWxsYXRpb25zLnRva2VuXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmY21fdG9rZW4udGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7XHJcbiAgICAgICAgICAgIGZjbV90b2tlbjogZmNtX3Rva2VuLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gZmNtX3Rva2VuO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXRGQ01Ub2tlbiwgRkNNVG9rZW5TdHJ1Y3QgfTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgYXMgZmlyZWJhc2VJbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRJbnN0YWxsYXRpb25zIGFzIGZpcmViYXNlR2V0SW5zdGFsbGF0aW9ucywgZ2V0SWQsIGdldFRva2VuLCBvbklkQ2hhbmdlLCAgfSBmcm9tIFwiZmlyZWJhc2UvaW5zdGFsbGF0aW9uc1wiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL2NvbnN0XCI7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgYXBpS2V5OiAgICAgICAgICAgIENvbnN0YW50cy5GSVJFQkFTRS5BUElfS0VZLFxyXG4gICAgYXV0aERvbWFpbjogICAgICAgIENvbnN0YW50cy5GSVJFQkFTRS5BVVRIX0RPTUFJTixcclxuICAgIGRhdGFiYXNlVVJMOiAgICAgICBDb25zdGFudHMuRklSRUJBU0UuREFUQUJBU0VfVVJMLFxyXG4gICAgcHJvamVjdElkOiAgICAgICAgIENvbnN0YW50cy5GSVJFQkFTRS5QUk9KRUNUX0lELFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogICAgIENvbnN0YW50cy5GSVJFQkFTRS5TVE9SQUdFX0JVQ0tFVCxcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBDb25zdGFudHMuRklSRUJBU0UuTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICAgIGFwcElkOiAgICAgICAgICAgICBDb25zdGFudHMuRklSRUJBU0UuQVBQX0lEXHJcbn07XHJcblxyXG53aW5kb3cuSGVhZGVycyA9IG5ldyBQcm94eSh3aW5kb3cuSGVhZGVycywge1xyXG4gICAgY29uc3RydWN0KHRhcmdldCwgYXJndW1lbnRzTGlzdCwgbmV3VGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IFJlZmxlY3QuY29uc3RydWN0KHRhcmdldCwgYXJndW1lbnRzTGlzdCwgbmV3VGFyZ2V0KTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIlVzZXItQWdlbnRcIiwgXCJva2h0dHBcIik7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IGZpcmViYXNlQXBwICAgICAgICAgICA9IGZpcmViYXNlSW5pdGlhbGl6ZUFwcChvcHRpb25zKTtcclxuY29uc3QgZmlyZWJhc2VJbnN0YWxsYXRpb25zID0gZmlyZWJhc2VHZXRJbnN0YWxsYXRpb25zKGZpcmViYXNlQXBwKTtcclxuXHJcbnR5cGUgSW5zdGFsbGF0aW9uc1N0cnVjdCA9IHtcclxuICAgIGlkOiAgICAgICAgc3RyaW5nO1xyXG4gICAgdG9rZW46ICAgICBzdHJpbmc7XHJcbiAgICB0aW1lc3RhbXA6IG51bWJlcjtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0SW5zdGFsbGF0aW9ucygpIHtcclxuICAgIGNvbnN0IHsgaW5zdGFsbGF0aW9uczogaW5zdGFsbGF0aW9ucyB9ID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCh7XHJcbiAgICAgICAgaW5zdGFsbGF0aW9uczoge1xyXG4gICAgICAgICAgICBpZDogXCJcIixcclxuICAgICAgICAgICAgdG9rZW46IFwiXCIsXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogMCxcclxuICAgICAgICB9LFxyXG4gICAgfSkgYXMgeyBpbnN0YWxsYXRpb25zOiBJbnN0YWxsYXRpb25zU3RydWN0OyB9O1xyXG5cclxuICAgIGNvbnN0IGlkID0gYXdhaXQgZ2V0SWQoZmlyZWJhc2VJbnN0YWxsYXRpb25zKTtcclxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oZmlyZWJhc2VJbnN0YWxsYXRpb25zKTtcclxuXHJcbiAgICBpZiAoIShpbnN0YWxsYXRpb25zLmlkID09PSBpZCAmJiBpbnN0YWxsYXRpb25zLnRva2VuID09PSB0b2tlbikpIHtcclxuICAgICAgICBpbnN0YWxsYXRpb25zLmlkID0gaWQ7XHJcbiAgICAgICAgaW5zdGFsbGF0aW9ucy50b2tlbiA9IHRva2VuO1xyXG4gICAgICAgIGluc3RhbGxhdGlvbnMudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7XHJcbiAgICAgICAgICAgIGluc3RhbGxhdGlvbnM6IGluc3RhbGxhdGlvbnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluc3RhbGxhdGlvbnM7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldEluc3RhbGxhdGlvbnMsIEluc3RhbGxhdGlvbnNTdHJ1Y3QgfTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBOZXdGb3JtRGF0YSBmcm9tIFwiZm9ybS1kYXRhXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiB2b2ljZVJlcGxlKGdhbGxfaWQ6IHN0cmluZywgYXBwX2lkOiBzdHJpbmcsIGZpbGU6IEZpbGUpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIFxyXG4gICAgZm9ybS5hcHBlbmQoXCJnYWxsX2lkXCIsIGdhbGxfaWQpO1xyXG4gICAgZm9ybS5hcHBlbmQoXCJ1cGZpbGVcIiwgZmlsZS5zbGljZSgwLCBmaWxlLnNpemUsIFwiYXVkaW8vbTRhXCIpLCBmaWxlLm5hbWUpO1xyXG4gICAgZm9ybS5hcHBlbmQoXCJuYW1lXCIsIFwi44WH44WHXCIpO1xyXG4gICAgZm9ybS5hcHBlbmQoXCJhcHBfaWRcIiwgYXBwX2lkKTtcclxuICAgIGZvcm0uYXBwZW5kKFwiZG93bl9jaGtcIiwgXCIxXCIpO1xyXG4gICAgXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly91cGxvYWQuZGNpbnNpZGUuY29tL19hcHBfdnJfYm9hcmQucGhwXCIsIHtcclxuICAgICAgICBjcmVkZW50aWFsczogXCJvbWl0XCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJVc2VyLUFnZW50XCI6IFwiZGNpbnNpZGUuYXBwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgYm9keTogZm9ybSxcclxuICAgICAgICByZWZlcnJlcjogXCJodHRwOi8vd3d3LmRjaW5zaWRlLmNvbVwiLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIGpzb25bMF0uY2F1c2U7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHZvaWNlUmVwbGUgfTsiLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudENvbnRhaW5lciB9IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nZ2VyLCBzZXRVc2VyTG9nSGFuZGxlciwgc2V0TG9nTGV2ZWwgYXMgc2V0TG9nTGV2ZWwkMSB9IGZyb20gJ0BmaXJlYmFzZS9sb2dnZXInO1xuaW1wb3J0IHsgRXJyb3JGYWN0b3J5LCBnZXREZWZhdWx0QXBwQ29uZmlnLCBkZWVwRXF1YWwsIGlzQnJvd3NlciwgaXNXZWJXb3JrZXIsIEZpcmViYXNlRXJyb3IsIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nLCBpc0luZGV4ZWREQkF2YWlsYWJsZSwgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmV4cG9ydCB7IEZpcmViYXNlRXJyb3IgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQgeyBvcGVuREIgfSBmcm9tICdpZGInO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jbGFzcyBQbGF0Zm9ybUxvZ2dlclNlcnZpY2VJbXBsIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgfVxyXG4gICAgLy8gSW4gaW5pdGlhbCBpbXBsZW1lbnRhdGlvbiwgdGhpcyB3aWxsIGJlIGNhbGxlZCBieSBpbnN0YWxsYXRpb25zIG9uXHJcbiAgICAvLyBhdXRoIHRva2VuIHJlZnJlc2gsIGFuZCBpbnN0YWxsYXRpb25zIHdpbGwgc2VuZCB0aGlzIHN0cmluZy5cclxuICAgIGdldFBsYXRmb3JtSW5mb1N0cmluZygpIHtcclxuICAgICAgICBjb25zdCBwcm92aWRlcnMgPSB0aGlzLmNvbnRhaW5lci5nZXRQcm92aWRlcnMoKTtcclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggcHJvdmlkZXJzIGFuZCBnZXQgbGlicmFyeS92ZXJzaW9uIHBhaXJzIGZyb20gYW55IHRoYXQgYXJlXHJcbiAgICAgICAgLy8gdmVyc2lvbiBjb21wb25lbnRzLlxyXG4gICAgICAgIHJldHVybiBwcm92aWRlcnNcclxuICAgICAgICAgICAgLm1hcChwcm92aWRlciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc1ZlcnNpb25TZXJ2aWNlUHJvdmlkZXIocHJvdmlkZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gcHJvdmlkZXIuZ2V0SW1tZWRpYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7c2VydmljZS5saWJyYXJ5fS8ke3NlcnZpY2UudmVyc2lvbn1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGxvZ1N0cmluZyA9PiBsb2dTdHJpbmcpXHJcbiAgICAgICAgICAgIC5qb2luKCcgJyk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBwcm92aWRlciBjaGVjayBpZiB0aGlzIHByb3ZpZGVyIHByb3ZpZGVzIGEgVmVyc2lvblNlcnZpY2VcclxuICpcclxuICogTk9URTogVXNpbmcgUHJvdmlkZXI8J2FwcC12ZXJzaW9uJz4gaXMgYSBoYWNrIHRvIGluZGljYXRlIHRoYXQgdGhlIHByb3ZpZGVyXHJcbiAqIHByb3ZpZGVzIFZlcnNpb25TZXJ2aWNlLiBUaGUgcHJvdmlkZXIgaXMgbm90IG5lY2Vzc2FyaWx5IGEgJ2FwcC12ZXJzaW9uJ1xyXG4gKiBwcm92aWRlci5cclxuICovXHJcbmZ1bmN0aW9uIGlzVmVyc2lvblNlcnZpY2VQcm92aWRlcihwcm92aWRlcikge1xyXG4gICAgY29uc3QgY29tcG9uZW50ID0gcHJvdmlkZXIuZ2V0Q29tcG9uZW50KCk7XHJcbiAgICByZXR1cm4gKGNvbXBvbmVudCA9PT0gbnVsbCB8fCBjb21wb25lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXBvbmVudC50eXBlKSA9PT0gXCJWRVJTSU9OXCIgLyogQ29tcG9uZW50VHlwZS5WRVJTSU9OICovO1xyXG59XG5cbmNvbnN0IG5hbWUkcSA9IFwiQGZpcmViYXNlL2FwcFwiO1xuY29uc3QgdmVyc2lvbiQxID0gXCIwLjEwLjE1XCI7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0BmaXJlYmFzZS9hcHAnKTtcblxuY29uc3QgbmFtZSRwID0gXCJAZmlyZWJhc2UvYXBwLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJG8gPSBcIkBmaXJlYmFzZS9hbmFseXRpY3MtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUkbiA9IFwiQGZpcmViYXNlL2FuYWx5dGljc1wiO1xuXG5jb25zdCBuYW1lJG0gPSBcIkBmaXJlYmFzZS9hcHAtY2hlY2stY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUkbCA9IFwiQGZpcmViYXNlL2FwcC1jaGVja1wiO1xuXG5jb25zdCBuYW1lJGsgPSBcIkBmaXJlYmFzZS9hdXRoXCI7XG5cbmNvbnN0IG5hbWUkaiA9IFwiQGZpcmViYXNlL2F1dGgtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUkaSA9IFwiQGZpcmViYXNlL2RhdGFiYXNlXCI7XG5cbmNvbnN0IG5hbWUkaCA9IFwiQGZpcmViYXNlL2RhdGEtY29ubmVjdFwiO1xuXG5jb25zdCBuYW1lJGcgPSBcIkBmaXJlYmFzZS9kYXRhYmFzZS1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRmID0gXCJAZmlyZWJhc2UvZnVuY3Rpb25zXCI7XG5cbmNvbnN0IG5hbWUkZSA9IFwiQGZpcmViYXNlL2Z1bmN0aW9ucy1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRkID0gXCJAZmlyZWJhc2UvaW5zdGFsbGF0aW9uc1wiO1xuXG5jb25zdCBuYW1lJGMgPSBcIkBmaXJlYmFzZS9pbnN0YWxsYXRpb25zLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJGIgPSBcIkBmaXJlYmFzZS9tZXNzYWdpbmdcIjtcblxuY29uc3QgbmFtZSRhID0gXCJAZmlyZWJhc2UvbWVzc2FnaW5nLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJDkgPSBcIkBmaXJlYmFzZS9wZXJmb3JtYW5jZVwiO1xuXG5jb25zdCBuYW1lJDggPSBcIkBmaXJlYmFzZS9wZXJmb3JtYW5jZS1jb21wYXRcIjtcblxuY29uc3QgbmFtZSQ3ID0gXCJAZmlyZWJhc2UvcmVtb3RlLWNvbmZpZ1wiO1xuXG5jb25zdCBuYW1lJDYgPSBcIkBmaXJlYmFzZS9yZW1vdGUtY29uZmlnLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJDUgPSBcIkBmaXJlYmFzZS9zdG9yYWdlXCI7XG5cbmNvbnN0IG5hbWUkNCA9IFwiQGZpcmViYXNlL3N0b3JhZ2UtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUkMyA9IFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBuYW1lJDIgPSBcIkBmaXJlYmFzZS92ZXJ0ZXhhaVwiO1xuXG5jb25zdCBuYW1lJDEgPSBcIkBmaXJlYmFzZS9maXJlc3RvcmUtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUgPSBcImZpcmViYXNlXCI7XG5jb25zdCB2ZXJzaW9uID0gXCIxMS4wLjFcIjtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IGFwcCBuYW1lXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuY29uc3QgREVGQVVMVF9FTlRSWV9OQU1FID0gJ1tERUZBVUxUXSc7XHJcbmNvbnN0IFBMQVRGT1JNX0xPR19TVFJJTkcgPSB7XHJcbiAgICBbbmFtZSRxXTogJ2ZpcmUtY29yZScsXHJcbiAgICBbbmFtZSRwXTogJ2ZpcmUtY29yZS1jb21wYXQnLFxyXG4gICAgW25hbWUkbl06ICdmaXJlLWFuYWx5dGljcycsXHJcbiAgICBbbmFtZSRvXTogJ2ZpcmUtYW5hbHl0aWNzLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRsXTogJ2ZpcmUtYXBwLWNoZWNrJyxcclxuICAgIFtuYW1lJG1dOiAnZmlyZS1hcHAtY2hlY2stY29tcGF0JyxcclxuICAgIFtuYW1lJGtdOiAnZmlyZS1hdXRoJyxcclxuICAgIFtuYW1lJGpdOiAnZmlyZS1hdXRoLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRpXTogJ2ZpcmUtcnRkYicsXHJcbiAgICBbbmFtZSRoXTogJ2ZpcmUtZGF0YS1jb25uZWN0JyxcclxuICAgIFtuYW1lJGddOiAnZmlyZS1ydGRiLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRmXTogJ2ZpcmUtZm4nLFxyXG4gICAgW25hbWUkZV06ICdmaXJlLWZuLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRkXTogJ2ZpcmUtaWlkJyxcclxuICAgIFtuYW1lJGNdOiAnZmlyZS1paWQtY29tcGF0JyxcclxuICAgIFtuYW1lJGJdOiAnZmlyZS1mY20nLFxyXG4gICAgW25hbWUkYV06ICdmaXJlLWZjbS1jb21wYXQnLFxyXG4gICAgW25hbWUkOV06ICdmaXJlLXBlcmYnLFxyXG4gICAgW25hbWUkOF06ICdmaXJlLXBlcmYtY29tcGF0JyxcclxuICAgIFtuYW1lJDddOiAnZmlyZS1yYycsXHJcbiAgICBbbmFtZSQ2XTogJ2ZpcmUtcmMtY29tcGF0JyxcclxuICAgIFtuYW1lJDVdOiAnZmlyZS1nY3MnLFxyXG4gICAgW25hbWUkNF06ICdmaXJlLWdjcy1jb21wYXQnLFxyXG4gICAgW25hbWUkM106ICdmaXJlLWZzdCcsXHJcbiAgICBbbmFtZSQxXTogJ2ZpcmUtZnN0LWNvbXBhdCcsXHJcbiAgICBbbmFtZSQyXTogJ2ZpcmUtdmVydGV4JyxcclxuICAgICdmaXJlLWpzJzogJ2ZpcmUtanMnLFxyXG4gICAgW25hbWVdOiAnZmlyZS1qcy1hbGwnXHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmNvbnN0IF9hcHBzID0gbmV3IE1hcCgpO1xyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5jb25zdCBfc2VydmVyQXBwcyA9IG5ldyBNYXAoKTtcclxuLyoqXHJcbiAqIFJlZ2lzdGVyZWQgY29tcG9uZW50cy5cclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG5jb25zdCBfY29tcG9uZW50cyA9IG5ldyBNYXAoKTtcclxuLyoqXHJcbiAqIEBwYXJhbSBjb21wb25lbnQgLSB0aGUgY29tcG9uZW50IGJlaW5nIGFkZGVkIHRvIHRoaXMgYXBwJ3MgY29udGFpbmVyXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX2FkZENvbXBvbmVudChhcHAsIGNvbXBvbmVudCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhcHAuY29udGFpbmVyLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBsb2dnZXIuZGVidWcoYENvbXBvbmVudCAke2NvbXBvbmVudC5uYW1lfSBmYWlsZWQgdG8gcmVnaXN0ZXIgd2l0aCBGaXJlYmFzZUFwcCAke2FwcC5uYW1lfWAsIGUpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9hZGRPck92ZXJ3cml0ZUNvbXBvbmVudChhcHAsIGNvbXBvbmVudCkge1xyXG4gICAgYXBwLmNvbnRhaW5lci5hZGRPck92ZXJ3cml0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gY29tcG9uZW50IC0gdGhlIGNvbXBvbmVudCB0byByZWdpc3RlclxyXG4gKiBAcmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgY29tcG9uZW50IGlzIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5XHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX3JlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudC5uYW1lO1xyXG4gICAgaWYgKF9jb21wb25lbnRzLmhhcyhjb21wb25lbnROYW1lKSkge1xyXG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlcmUgd2VyZSBtdWx0aXBsZSBhdHRlbXB0cyB0byByZWdpc3RlciBjb21wb25lbnQgJHtjb21wb25lbnROYW1lfS5gKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBfY29tcG9uZW50cy5zZXQoY29tcG9uZW50TmFtZSwgY29tcG9uZW50KTtcclxuICAgIC8vIGFkZCB0aGUgY29tcG9uZW50IHRvIGV4aXN0aW5nIGFwcCBpbnN0YW5jZXNcclxuICAgIGZvciAoY29uc3QgYXBwIG9mIF9hcHBzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgX2FkZENvbXBvbmVudChhcHAsIGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHNlcnZlckFwcCBvZiBfc2VydmVyQXBwcy52YWx1ZXMoKSkge1xyXG4gICAgICAgIF9hZGRDb21wb25lbnQoc2VydmVyQXBwLCBjb21wb25lbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBhcHAgLSBGaXJlYmFzZUFwcCBpbnN0YW5jZVxyXG4gKiBAcGFyYW0gbmFtZSAtIHNlcnZpY2UgbmFtZVxyXG4gKlxyXG4gKiBAcmV0dXJucyB0aGUgcHJvdmlkZXIgZm9yIHRoZSBzZXJ2aWNlIHdpdGggdGhlIG1hdGNoaW5nIG5hbWVcclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBfZ2V0UHJvdmlkZXIoYXBwLCBuYW1lKSB7XHJcbiAgICBjb25zdCBoZWFydGJlYXRDb250cm9sbGVyID0gYXBwLmNvbnRhaW5lclxyXG4gICAgICAgIC5nZXRQcm92aWRlcignaGVhcnRiZWF0JylcclxuICAgICAgICAuZ2V0SW1tZWRpYXRlKHsgb3B0aW9uYWw6IHRydWUgfSk7XHJcbiAgICBpZiAoaGVhcnRiZWF0Q29udHJvbGxlcikge1xyXG4gICAgICAgIHZvaWQgaGVhcnRiZWF0Q29udHJvbGxlci50cmlnZ2VySGVhcnRiZWF0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwLmNvbnRhaW5lci5nZXRQcm92aWRlcihuYW1lKTtcclxufVxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGFwcCAtIEZpcmViYXNlQXBwIGluc3RhbmNlXHJcbiAqIEBwYXJhbSBuYW1lIC0gc2VydmljZSBuYW1lXHJcbiAqIEBwYXJhbSBpbnN0YW5jZUlkZW50aWZpZXIgLSBzZXJ2aWNlIGluc3RhbmNlIGlkZW50aWZpZXIgaW4gY2FzZSB0aGUgc2VydmljZSBzdXBwb3J0cyBtdWx0aXBsZSBpbnN0YW5jZXNcclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBfcmVtb3ZlU2VydmljZUluc3RhbmNlKGFwcCwgbmFtZSwgaW5zdGFuY2VJZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XHJcbiAgICBfZ2V0UHJvdmlkZXIoYXBwLCBuYW1lKS5jbGVhckluc3RhbmNlKGluc3RhbmNlSWRlbnRpZmllcik7XHJcbn1cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBvYmogLSBhbiBvYmplY3Qgb2YgdHlwZSBGaXJlYmFzZUFwcCBvciBGaXJlYmFzZU9wdGlvbnMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHRydWUgaWYgdGhlIHByb3ZpZGUgb2JqZWN0IGlzIG9mIHR5cGUgRmlyZWJhc2VBcHAuXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX2lzRmlyZWJhc2VBcHAob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqLm9wdGlvbnMgIT09IHVuZGVmaW5lZDtcclxufVxyXG4vKipcclxuICpcclxuICogQHBhcmFtIG9iaiAtIGFuIG9iamVjdCBvZiB0eXBlIEZpcmViYXNlQXBwLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgb2YgdHlwZSBGaXJlYmFzZVNlcnZlckFwcEltcGwuXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX2lzRmlyZWJhc2VTZXJ2ZXJBcHAob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqLnNldHRpbmdzICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuLyoqXHJcbiAqIFRlc3Qgb25seVxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9jbGVhckNvbXBvbmVudHMoKSB7XHJcbiAgICBfY29tcG9uZW50cy5jbGVhcigpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmNvbnN0IEVSUk9SUyA9IHtcclxuICAgIFtcIm5vLWFwcFwiIC8qIEFwcEVycm9yLk5PX0FQUCAqL106IFwiTm8gRmlyZWJhc2UgQXBwICd7JGFwcE5hbWV9JyBoYXMgYmVlbiBjcmVhdGVkIC0gXCIgK1xyXG4gICAgICAgICdjYWxsIGluaXRpYWxpemVBcHAoKSBmaXJzdCcsXHJcbiAgICBbXCJiYWQtYXBwLW5hbWVcIiAvKiBBcHBFcnJvci5CQURfQVBQX05BTUUgKi9dOiBcIklsbGVnYWwgQXBwIG5hbWU6ICd7JGFwcE5hbWV9J1wiLFxyXG4gICAgW1wiZHVwbGljYXRlLWFwcFwiIC8qIEFwcEVycm9yLkRVUExJQ0FURV9BUFAgKi9dOiBcIkZpcmViYXNlIEFwcCBuYW1lZCAneyRhcHBOYW1lfScgYWxyZWFkeSBleGlzdHMgd2l0aCBkaWZmZXJlbnQgb3B0aW9ucyBvciBjb25maWdcIixcclxuICAgIFtcImFwcC1kZWxldGVkXCIgLyogQXBwRXJyb3IuQVBQX0RFTEVURUQgKi9dOiBcIkZpcmViYXNlIEFwcCBuYW1lZCAneyRhcHBOYW1lfScgYWxyZWFkeSBkZWxldGVkXCIsXHJcbiAgICBbXCJzZXJ2ZXItYXBwLWRlbGV0ZWRcIiAvKiBBcHBFcnJvci5TRVJWRVJfQVBQX0RFTEVURUQgKi9dOiAnRmlyZWJhc2UgU2VydmVyIEFwcCBoYXMgYmVlbiBkZWxldGVkJyxcclxuICAgIFtcIm5vLW9wdGlvbnNcIiAvKiBBcHBFcnJvci5OT19PUFRJT05TICovXTogJ05lZWQgdG8gcHJvdmlkZSBvcHRpb25zLCB3aGVuIG5vdCBiZWluZyBkZXBsb3llZCB0byBob3N0aW5nIHZpYSBzb3VyY2UuJyxcclxuICAgIFtcImludmFsaWQtYXBwLWFyZ3VtZW50XCIgLyogQXBwRXJyb3IuSU5WQUxJRF9BUFBfQVJHVU1FTlQgKi9dOiAnZmlyZWJhc2UueyRhcHBOYW1lfSgpIHRha2VzIGVpdGhlciBubyBhcmd1bWVudCBvciBhICcgK1xyXG4gICAgICAgICdGaXJlYmFzZSBBcHAgaW5zdGFuY2UuJyxcclxuICAgIFtcImludmFsaWQtbG9nLWFyZ3VtZW50XCIgLyogQXBwRXJyb3IuSU5WQUxJRF9MT0dfQVJHVU1FTlQgKi9dOiAnRmlyc3QgYXJndW1lbnQgdG8gYG9uTG9nYCBtdXN0IGJlIG51bGwgb3IgYSBmdW5jdGlvbi4nLFxyXG4gICAgW1wiaWRiLW9wZW5cIiAvKiBBcHBFcnJvci5JREJfT1BFTiAqL106ICdFcnJvciB0aHJvd24gd2hlbiBvcGVuaW5nIEluZGV4ZWREQi4gT3JpZ2luYWwgZXJyb3I6IHskb3JpZ2luYWxFcnJvck1lc3NhZ2V9LicsXHJcbiAgICBbXCJpZGItZ2V0XCIgLyogQXBwRXJyb3IuSURCX0dFVCAqL106ICdFcnJvciB0aHJvd24gd2hlbiByZWFkaW5nIGZyb20gSW5kZXhlZERCLiBPcmlnaW5hbCBlcnJvcjogeyRvcmlnaW5hbEVycm9yTWVzc2FnZX0uJyxcclxuICAgIFtcImlkYi1zZXRcIiAvKiBBcHBFcnJvci5JREJfV1JJVEUgKi9dOiAnRXJyb3IgdGhyb3duIHdoZW4gd3JpdGluZyB0byBJbmRleGVkREIuIE9yaWdpbmFsIGVycm9yOiB7JG9yaWdpbmFsRXJyb3JNZXNzYWdlfS4nLFxyXG4gICAgW1wiaWRiLWRlbGV0ZVwiIC8qIEFwcEVycm9yLklEQl9ERUxFVEUgKi9dOiAnRXJyb3IgdGhyb3duIHdoZW4gZGVsZXRpbmcgZnJvbSBJbmRleGVkREIuIE9yaWdpbmFsIGVycm9yOiB7JG9yaWdpbmFsRXJyb3JNZXNzYWdlfS4nLFxyXG4gICAgW1wiZmluYWxpemF0aW9uLXJlZ2lzdHJ5LW5vdC1zdXBwb3J0ZWRcIiAvKiBBcHBFcnJvci5GSU5BTElaQVRJT05fUkVHSVNUUllfTk9UX1NVUFBPUlRFRCAqL106ICdGaXJlYmFzZVNlcnZlckFwcCBkZWxldGVPbkRlcmVmIGZpZWxkIGRlZmluZWQgYnV0IHRoZSBKUyBydW50aW1lIGRvZXMgbm90IHN1cHBvcnQgRmluYWxpemF0aW9uUmVnaXN0cnkuJyxcclxuICAgIFtcImludmFsaWQtc2VydmVyLWFwcC1lbnZpcm9ubWVudFwiIC8qIEFwcEVycm9yLklOVkFMSURfU0VSVkVSX0FQUF9FTlZJUk9OTUVOVCAqL106ICdGaXJlYmFzZVNlcnZlckFwcCBpcyBub3QgZm9yIHVzZSBpbiBicm93c2VyIGVudmlyb25tZW50cy4nXHJcbn07XHJcbmNvbnN0IEVSUk9SX0ZBQ1RPUlkgPSBuZXcgRXJyb3JGYWN0b3J5KCdhcHAnLCAnRmlyZWJhc2UnLCBFUlJPUlMpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jbGFzcyBGaXJlYmFzZUFwcEltcGwge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgY29uZmlnLCBjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLl9pc0RlbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKTtcclxuICAgICAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XHJcbiAgICAgICAgdGhpcy5fYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkID1cclxuICAgICAgICAgICAgY29uZmlnLmF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZDtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ29tcG9uZW50KG5ldyBDb21wb25lbnQoJ2FwcCcsICgpID0+IHRoaXMsIFwiUFVCTElDXCIgLyogQ29tcG9uZW50VHlwZS5QVUJMSUMgKi8pKTtcclxuICAgIH1cclxuICAgIGdldCBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkKHZhbCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcclxuICAgICAgICB0aGlzLl9hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQgPSB2YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcbiAgICBnZXQgb3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBnZXQgY29uZmlnKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbnRhaW5lcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzRGVsZXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNEZWxldGVkO1xyXG4gICAgfVxyXG4gICAgc2V0IGlzRGVsZXRlZCh2YWwpIHtcclxuICAgICAgICB0aGlzLl9pc0RlbGV0ZWQgPSB2YWw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCB0aHJvdyBhbiBFcnJvciBpZiB0aGUgQXBwIGhhcyBhbHJlYWR5IGJlZW4gZGVsZXRlZCAtXHJcbiAgICAgKiB1c2UgYmVmb3JlIHBlcmZvcm1pbmcgQVBJIGFjdGlvbnMgb24gdGhlIEFwcC5cclxuICAgICAqL1xyXG4gICAgY2hlY2tEZXN0cm95ZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiYXBwLWRlbGV0ZWRcIiAvKiBBcHBFcnJvci5BUFBfREVMRVRFRCAqLywgeyBhcHBOYW1lOiB0aGlzLl9uYW1lIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjMgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jbGFzcyBGaXJlYmFzZVNlcnZlckFwcEltcGwgZXh0ZW5kcyBGaXJlYmFzZUFwcEltcGwge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgc2VydmVyQ29uZmlnLCBuYW1lLCBjb250YWluZXIpIHtcclxuICAgICAgICAvLyBCdWlsZCBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgZm9yIHRoZSBGaXJlYmFzZUFwcEltcGwgYmFzZSBjbGFzcy5cclxuICAgICAgICBjb25zdCBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQgPSBzZXJ2ZXJDb25maWcuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBzZXJ2ZXJDb25maWcuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkXHJcbiAgICAgICAgICAgIDogZmFsc2U7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBGaXJlYmFzZUFwcFNldHRpbmdzIG9iamVjdCBmb3IgdGhlIEZpcmViYXNlQXBwSW1wIGNvbnN0cnVjdG9yLlxyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAob3B0aW9ucy5hcGlLZXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBDb25zdHJ1Y3QgdGhlIHBhcmVudCBGaXJlYmFzZUFwcEltcCBvYmplY3QuXHJcbiAgICAgICAgICAgIHN1cGVyKG9wdGlvbnMsIGNvbmZpZywgY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcEltcGwgPSBvcHRpb25zO1xyXG4gICAgICAgICAgICBzdXBlcihhcHBJbXBsLm9wdGlvbnMsIGNvbmZpZywgY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTm93IGNvbnN0cnVjdCB0aGUgZGF0YSBmb3IgdGhlIEZpcmViYXNlU2VydmVyQXBwSW1wbC5cclxuICAgICAgICB0aGlzLl9zZXJ2ZXJDb25maWcgPSBPYmplY3QuYXNzaWduKHsgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkIH0sIHNlcnZlckNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5fZmluYWxpemF0aW9uUmVnaXN0cnkgPSBudWxsO1xyXG4gICAgICAgIGlmICh0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpbmFsaXphdGlvblJlZ2lzdHJ5ID0gbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b21hdGljQ2xlYW51cCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVmQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuaW5jUmVmQ291bnQodGhpcy5fc2VydmVyQ29uZmlnLnJlbGVhc2VPbkRlcmVmKTtcclxuICAgICAgICAvLyBEbyBub3QgcmV0YWluIGEgaGFyZCByZWZlcmVuY2UgdG8gdGhlIGRyZWYgb2JqZWN0LCBvdGhlcndpc2UgdGhlIEZpbmFsaXphdGlvblJlZ2lzdHJ5XHJcbiAgICAgICAgLy8gd2lsbCBuZXZlciB0cmlnZ2VyLlxyXG4gICAgICAgIHRoaXMuX3NlcnZlckNvbmZpZy5yZWxlYXNlT25EZXJlZiA9IHVuZGVmaW5lZDtcclxuICAgICAgICBzZXJ2ZXJDb25maWcucmVsZWFzZU9uRGVyZWYgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmVnaXN0ZXJWZXJzaW9uKG5hbWUkcSwgdmVyc2lvbiQxLCAnc2VydmVyYXBwJyk7XHJcbiAgICB9XHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGdldCByZWZDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVmQ291bnQ7XHJcbiAgICB9XHJcbiAgICAvLyBJbmNyZW1lbnQgdGhlIHJlZmVyZW5jZSBjb3VudCBvZiB0aGlzIHNlcnZlciBhcHAuIElmIGFuIG9iamVjdCBpcyBwcm92aWRlZCwgcmVnaXN0ZXIgaXRcclxuICAgIC8vIHdpdGggdGhlIGZpbmFsaXphdGlvbiByZWdpc3RyeS5cclxuICAgIGluY1JlZkNvdW50KG9iaikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JlZkNvdW50Kys7XHJcbiAgICAgICAgaWYgKG9iaiAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX2ZpbmFsaXphdGlvblJlZ2lzdHJ5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpbmFsaXphdGlvblJlZ2lzdHJ5LnJlZ2lzdGVyKG9iaiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRGVjcmVtZW50IHRoZSByZWZlcmVuY2UgY291bnQuXHJcbiAgICBkZWNSZWZDb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlbGV0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtLXRoaXMuX3JlZkNvdW50O1xyXG4gICAgfVxyXG4gICAgLy8gSW52b2tlZCBieSB0aGUgRmluYWxpemF0aW9uUmVnaXN0cnkgY2FsbGJhY2sgdG8gbm90ZSB0aGF0IHRoaXMgYXBwIHNob3VsZCBnbyB0aHJvdWdoIGl0c1xyXG4gICAgLy8gcmVmZXJlbmNlIGNvdW50cyBhbmQgZGVsZXRlIGl0c2VsZiBpZiBubyByZWZlcmVuY2UgY291bnQgcmVtYWluLiBUaGUgY29vcmRpbmF0aW5nIGxvZ2ljIHRoYXRcclxuICAgIC8vIGhhbmRsZXMgdGhpcyBpcyBpbiBkZWxldGVBcHAoLi4uKS5cclxuICAgIGF1dG9tYXRpY0NsZWFudXAoKSB7XHJcbiAgICAgICAgdm9pZCBkZWxldGVBcHAodGhpcyk7XHJcbiAgICB9XHJcbiAgICBnZXQgc2V0dGluZ3MoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2ZXJDb25maWc7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCB0aHJvdyBhbiBFcnJvciBpZiB0aGUgQXBwIGhhcyBhbHJlYWR5IGJlZW4gZGVsZXRlZCAtXHJcbiAgICAgKiB1c2UgYmVmb3JlIHBlcmZvcm1pbmcgQVBJIGFjdGlvbnMgb24gdGhlIEFwcC5cclxuICAgICAqL1xyXG4gICAgY2hlY2tEZXN0cm95ZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwic2VydmVyLWFwcC1kZWxldGVkXCIgLyogQXBwRXJyb3IuU0VSVkVSX0FQUF9ERUxFVEVEICovKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFRoZSBjdXJyZW50IFNESyB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5jb25zdCBTREtfVkVSU0lPTiA9IHZlcnNpb247XHJcbmZ1bmN0aW9uIGluaXRpYWxpemVBcHAoX29wdGlvbnMsIHJhd0NvbmZpZyA9IHt9KSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IF9vcHRpb25zO1xyXG4gICAgaWYgKHR5cGVvZiByYXdDb25maWcgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHJhd0NvbmZpZztcclxuICAgICAgICByYXdDb25maWcgPSB7IG5hbWUgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oeyBuYW1lOiBERUZBVUxUX0VOVFJZX05BTUUsIGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZDogZmFsc2UgfSwgcmF3Q29uZmlnKTtcclxuICAgIGNvbnN0IG5hbWUgPSBjb25maWcubmFtZTtcclxuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgfHwgIW5hbWUpIHtcclxuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImJhZC1hcHAtbmFtZVwiIC8qIEFwcEVycm9yLkJBRF9BUFBfTkFNRSAqLywge1xyXG4gICAgICAgICAgICBhcHBOYW1lOiBTdHJpbmcobmFtZSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSBnZXREZWZhdWx0QXBwQ29uZmlnKCkpO1xyXG4gICAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJuby1vcHRpb25zXCIgLyogQXBwRXJyb3IuTk9fT1BUSU9OUyAqLyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBleGlzdGluZ0FwcCA9IF9hcHBzLmdldChuYW1lKTtcclxuICAgIGlmIChleGlzdGluZ0FwcCkge1xyXG4gICAgICAgIC8vIHJldHVybiB0aGUgZXhpc3RpbmcgYXBwIGlmIG9wdGlvbnMgYW5kIGNvbmZpZyBkZWVwIGVxdWFsIHRoZSBvbmVzIGluIHRoZSBleGlzdGluZyBhcHAuXHJcbiAgICAgICAgaWYgKGRlZXBFcXVhbChvcHRpb25zLCBleGlzdGluZ0FwcC5vcHRpb25zKSAmJlxyXG4gICAgICAgICAgICBkZWVwRXF1YWwoY29uZmlnLCBleGlzdGluZ0FwcC5jb25maWcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ0FwcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiZHVwbGljYXRlLWFwcFwiIC8qIEFwcEVycm9yLkRVUExJQ0FURV9BUFAgKi8sIHsgYXBwTmFtZTogbmFtZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBuZXcgQ29tcG9uZW50Q29udGFpbmVyKG5hbWUpO1xyXG4gICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgX2NvbXBvbmVudHMudmFsdWVzKCkpIHtcclxuICAgICAgICBjb250YWluZXIuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdBcHAgPSBuZXcgRmlyZWJhc2VBcHBJbXBsKG9wdGlvbnMsIGNvbmZpZywgY29udGFpbmVyKTtcclxuICAgIF9hcHBzLnNldChuYW1lLCBuZXdBcHApO1xyXG4gICAgcmV0dXJuIG5ld0FwcDtcclxufVxyXG5mdW5jdGlvbiBpbml0aWFsaXplU2VydmVyQXBwKF9vcHRpb25zLCBfc2VydmVyQXBwQ29uZmlnKSB7XHJcbiAgICBpZiAoaXNCcm93c2VyKCkgJiYgIWlzV2ViV29ya2VyKCkpIHtcclxuICAgICAgICAvLyBGaXJlYmFzZVNlcnZlckFwcCBpc24ndCBkZXNpZ25lZCB0byBiZSBydW4gaW4gYnJvd3NlcnMuXHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbnZhbGlkLXNlcnZlci1hcHAtZW52aXJvbm1lbnRcIiAvKiBBcHBFcnJvci5JTlZBTElEX1NFUlZFUl9BUFBfRU5WSVJPTk1FTlQgKi8pO1xyXG4gICAgfVxyXG4gICAgaWYgKF9zZXJ2ZXJBcHBDb25maWcuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBfc2VydmVyQXBwQ29uZmlnLmF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGFwcE9wdGlvbnM7XHJcbiAgICBpZiAoX2lzRmlyZWJhc2VBcHAoX29wdGlvbnMpKSB7XHJcbiAgICAgICAgYXBwT3B0aW9ucyA9IF9vcHRpb25zLm9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhcHBPcHRpb25zID0gX29wdGlvbnM7XHJcbiAgICB9XHJcbiAgICAvLyBCdWlsZCBhbiBhcHAgbmFtZSBiYXNlZCBvbiBhIGhhc2ggb2YgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cclxuICAgIGNvbnN0IG5hbWVPYmogPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIF9zZXJ2ZXJBcHBDb25maWcpLCBhcHBPcHRpb25zKTtcclxuICAgIC8vIEhvd2V2ZXIsIERvIG5vdCBtYW5nbGUgdGhlIG5hbWUgYmFzZWQgb24gcmVsZWFzZU9uRGVyZWYsIHNpbmNlIGl0IHdpbGwgdmFyeSBiZXR3ZWVuIHRoZVxyXG4gICAgLy8gY29uc3RydWN0aW9uIG9mIEZpcmViYXNlU2VydmVyQXBwIGluc3RhbmNlcy4gRm9yIGV4YW1wbGUsIGlmIHRoZSBvYmplY3QgaXMgdGhlIHJlcXVlc3QgaGVhZGVycy5cclxuICAgIGlmIChuYW1lT2JqLnJlbGVhc2VPbkRlcmVmICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBkZWxldGUgbmFtZU9iai5yZWxlYXNlT25EZXJlZjtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhc2hDb2RlID0gKHMpID0+IHtcclxuICAgICAgICByZXR1cm4gWy4uLnNdLnJlZHVjZSgoaGFzaCwgYykgPT4gKE1hdGguaW11bCgzMSwgaGFzaCkgKyBjLmNoYXJDb2RlQXQoMCkpIHwgMCwgMCk7XHJcbiAgICB9O1xyXG4gICAgaWYgKF9zZXJ2ZXJBcHBDb25maWcucmVsZWFzZU9uRGVyZWYgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiZmluYWxpemF0aW9uLXJlZ2lzdHJ5LW5vdC1zdXBwb3J0ZWRcIiAvKiBBcHBFcnJvci5GSU5BTElaQVRJT05fUkVHSVNUUllfTk9UX1NVUFBPUlRFRCAqLywge30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG5hbWVTdHJpbmcgPSAnJyArIGhhc2hDb2RlKEpTT04uc3RyaW5naWZ5KG5hbWVPYmopKTtcclxuICAgIGNvbnN0IGV4aXN0aW5nQXBwID0gX3NlcnZlckFwcHMuZ2V0KG5hbWVTdHJpbmcpO1xyXG4gICAgaWYgKGV4aXN0aW5nQXBwKSB7XHJcbiAgICAgICAgZXhpc3RpbmdBcHAuaW5jUmVmQ291bnQoX3NlcnZlckFwcENvbmZpZy5yZWxlYXNlT25EZXJlZik7XHJcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nQXBwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29udGFpbmVyID0gbmV3IENvbXBvbmVudENvbnRhaW5lcihuYW1lU3RyaW5nKTtcclxuICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIF9jb21wb25lbnRzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgY29udGFpbmVyLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3QXBwID0gbmV3IEZpcmViYXNlU2VydmVyQXBwSW1wbChhcHBPcHRpb25zLCBfc2VydmVyQXBwQ29uZmlnLCBuYW1lU3RyaW5nLCBjb250YWluZXIpO1xyXG4gICAgX3NlcnZlckFwcHMuc2V0KG5hbWVTdHJpbmcsIG5ld0FwcCk7XHJcbiAgICByZXR1cm4gbmV3QXBwO1xyXG59XHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgYSB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZUFwcH0gaW5zdGFuY2UuXHJcbiAqXHJcbiAqIFdoZW4gY2FsbGVkIHdpdGggbm8gYXJndW1lbnRzLCB0aGUgZGVmYXVsdCBhcHAgaXMgcmV0dXJuZWQuIFdoZW4gYW4gYXBwIG5hbWVcclxuICogaXMgcHJvdmlkZWQsIHRoZSBhcHAgY29ycmVzcG9uZGluZyB0byB0aGF0IG5hbWUgaXMgcmV0dXJuZWQuXHJcbiAqXHJcbiAqIEFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gaWYgdGhlIGFwcCBiZWluZyByZXRyaWV2ZWQgaGFzIG5vdCB5ZXQgYmVlblxyXG4gKiBpbml0aWFsaXplZC5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgamF2YXNjcmlwdFxyXG4gKiAvLyBSZXR1cm4gdGhlIGRlZmF1bHQgYXBwXHJcbiAqIGNvbnN0IGFwcCA9IGdldEFwcCgpO1xyXG4gKiBgYGBcclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgamF2YXNjcmlwdFxyXG4gKiAvLyBSZXR1cm4gYSBuYW1lZCBhcHBcclxuICogY29uc3Qgb3RoZXJBcHAgPSBnZXRBcHAoXCJvdGhlckFwcFwiKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwYXJhbSBuYW1lIC0gT3B0aW9uYWwgbmFtZSBvZiB0aGUgYXBwIHRvIHJldHVybi4gSWYgbm8gbmFtZSBpc1xyXG4gKiAgIHByb3ZpZGVkLCB0aGUgZGVmYXVsdCBpcyBgXCJbREVGQVVMVF1cImAuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBhcHAgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvdmlkZWQgYXBwIG5hbWUuXHJcbiAqICAgSWYgbm8gYXBwIG5hbWUgaXMgcHJvdmlkZWQsIHRoZSBkZWZhdWx0IGFwcCBpcyByZXR1cm5lZC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0QXBwKG5hbWUgPSBERUZBVUxUX0VOVFJZX05BTUUpIHtcclxuICAgIGNvbnN0IGFwcCA9IF9hcHBzLmdldChuYW1lKTtcclxuICAgIGlmICghYXBwICYmIG5hbWUgPT09IERFRkFVTFRfRU5UUllfTkFNRSAmJiBnZXREZWZhdWx0QXBwQ29uZmlnKCkpIHtcclxuICAgICAgICByZXR1cm4gaW5pdGlhbGl6ZUFwcCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFhcHApIHtcclxuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vLWFwcFwiIC8qIEFwcEVycm9yLk5PX0FQUCAqLywgeyBhcHBOYW1lOiBuYW1lIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFwcDtcclxufVxyXG4vKipcclxuICogQSAocmVhZC1vbmx5KSBhcnJheSBvZiBhbGwgaW5pdGlhbGl6ZWQgYXBwcy5cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0QXBwcygpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKF9hcHBzLnZhbHVlcygpKTtcclxufVxyXG4vKipcclxuICogUmVuZGVycyB0aGlzIGFwcCB1bnVzYWJsZSBhbmQgZnJlZXMgdGhlIHJlc291cmNlcyBvZiBhbGwgYXNzb2NpYXRlZFxyXG4gKiBzZXJ2aWNlcy5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgamF2YXNjcmlwdFxyXG4gKiBkZWxldGVBcHAoYXBwKVxyXG4gKiAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gKiAgICAgY29uc29sZS5sb2coXCJBcHAgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAqICAgfSlcclxuICogICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICogICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZGVsZXRpbmcgYXBwOlwiLCBlcnJvcik7XHJcbiAqICAgfSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBkZWxldGVBcHAoYXBwKSB7XHJcbiAgICBsZXQgY2xlYW51cFByb3ZpZGVycyA9IGZhbHNlO1xyXG4gICAgY29uc3QgbmFtZSA9IGFwcC5uYW1lO1xyXG4gICAgaWYgKF9hcHBzLmhhcyhuYW1lKSkge1xyXG4gICAgICAgIGNsZWFudXBQcm92aWRlcnMgPSB0cnVlO1xyXG4gICAgICAgIF9hcHBzLmRlbGV0ZShuYW1lKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKF9zZXJ2ZXJBcHBzLmhhcyhuYW1lKSkge1xyXG4gICAgICAgIGNvbnN0IGZpcmViYXNlU2VydmVyQXBwID0gYXBwO1xyXG4gICAgICAgIGlmIChmaXJlYmFzZVNlcnZlckFwcC5kZWNSZWZDb3VudCgpIDw9IDApIHtcclxuICAgICAgICAgICAgX3NlcnZlckFwcHMuZGVsZXRlKG5hbWUpO1xyXG4gICAgICAgICAgICBjbGVhbnVwUHJvdmlkZXJzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY2xlYW51cFByb3ZpZGVycykge1xyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGFwcC5jb250YWluZXJcclxuICAgICAgICAgICAgLmdldFByb3ZpZGVycygpXHJcbiAgICAgICAgICAgIC5tYXAocHJvdmlkZXIgPT4gcHJvdmlkZXIuZGVsZXRlKCkpKTtcclxuICAgICAgICBhcHAuaXNEZWxldGVkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogUmVnaXN0ZXJzIGEgbGlicmFyeSdzIG5hbWUgYW5kIHZlcnNpb24gZm9yIHBsYXRmb3JtIGxvZ2dpbmcgcHVycG9zZXMuXHJcbiAqIEBwYXJhbSBsaWJyYXJ5IC0gTmFtZSBvZiAxcCBvciAzcCBsaWJyYXJ5IChlLmcuIGZpcmVzdG9yZSwgYW5ndWxhcmZpcmUpXHJcbiAqIEBwYXJhbSB2ZXJzaW9uIC0gQ3VycmVudCB2ZXJzaW9uIG9mIHRoYXQgbGlicmFyeS5cclxuICogQHBhcmFtIHZhcmlhbnQgLSBCdW5kbGUgdmFyaWFudCwgZS5nLiwgbm9kZSwgcm4sIGV0Yy5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gcmVnaXN0ZXJWZXJzaW9uKGxpYnJhcnlLZXlPck5hbWUsIHZlcnNpb24sIHZhcmlhbnQpIHtcclxuICAgIHZhciBfYTtcclxuICAgIC8vIFRPRE86IFdlIGNhbiB1c2UgdGhpcyBjaGVjayB0byB3aGl0ZWxpc3Qgc3RyaW5ncyB3aGVuL2lmIHdlIHNldCB1cFxyXG4gICAgLy8gYSBnb29kIHdoaXRlbGlzdCBzeXN0ZW0uXHJcbiAgICBsZXQgbGlicmFyeSA9IChfYSA9IFBMQVRGT1JNX0xPR19TVFJJTkdbbGlicmFyeUtleU9yTmFtZV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGxpYnJhcnlLZXlPck5hbWU7XHJcbiAgICBpZiAodmFyaWFudCkge1xyXG4gICAgICAgIGxpYnJhcnkgKz0gYC0ke3ZhcmlhbnR9YDtcclxuICAgIH1cclxuICAgIGNvbnN0IGxpYnJhcnlNaXNtYXRjaCA9IGxpYnJhcnkubWF0Y2goL1xcc3xcXC8vKTtcclxuICAgIGNvbnN0IHZlcnNpb25NaXNtYXRjaCA9IHZlcnNpb24ubWF0Y2goL1xcc3xcXC8vKTtcclxuICAgIGlmIChsaWJyYXJ5TWlzbWF0Y2ggfHwgdmVyc2lvbk1pc21hdGNoKSB7XHJcbiAgICAgICAgY29uc3Qgd2FybmluZyA9IFtcclxuICAgICAgICAgICAgYFVuYWJsZSB0byByZWdpc3RlciBsaWJyYXJ5IFwiJHtsaWJyYXJ5fVwiIHdpdGggdmVyc2lvbiBcIiR7dmVyc2lvbn1cIjpgXHJcbiAgICAgICAgXTtcclxuICAgICAgICBpZiAobGlicmFyeU1pc21hdGNoKSB7XHJcbiAgICAgICAgICAgIHdhcm5pbmcucHVzaChgbGlicmFyeSBuYW1lIFwiJHtsaWJyYXJ5fVwiIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVycyAod2hpdGVzcGFjZSBvciBcIi9cIilgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxpYnJhcnlNaXNtYXRjaCAmJiB2ZXJzaW9uTWlzbWF0Y2gpIHtcclxuICAgICAgICAgICAgd2FybmluZy5wdXNoKCdhbmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZlcnNpb25NaXNtYXRjaCkge1xyXG4gICAgICAgICAgICB3YXJuaW5nLnB1c2goYHZlcnNpb24gbmFtZSBcIiR7dmVyc2lvbn1cIiBjb250YWlucyBpbGxlZ2FsIGNoYXJhY3RlcnMgKHdoaXRlc3BhY2Ugb3IgXCIvXCIpYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvZ2dlci53YXJuKHdhcm5pbmcuam9pbignICcpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBfcmVnaXN0ZXJDb21wb25lbnQobmV3IENvbXBvbmVudChgJHtsaWJyYXJ5fS12ZXJzaW9uYCwgKCkgPT4gKHsgbGlicmFyeSwgdmVyc2lvbiB9KSwgXCJWRVJTSU9OXCIgLyogQ29tcG9uZW50VHlwZS5WRVJTSU9OICovKSk7XHJcbn1cclxuLyoqXHJcbiAqIFNldHMgbG9nIGhhbmRsZXIgZm9yIGFsbCBGaXJlYmFzZSBTREtzLlxyXG4gKiBAcGFyYW0gbG9nQ2FsbGJhY2sgLSBBbiBvcHRpb25hbCBjdXN0b20gbG9nIGhhbmRsZXIgdGhhdCBleGVjdXRlcyB1c2VyIGNvZGUgd2hlbmV2ZXJcclxuICogdGhlIEZpcmViYXNlIFNESyBtYWtlcyBhIGxvZ2dpbmcgY2FsbC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gb25Mb2cobG9nQ2FsbGJhY2ssIG9wdGlvbnMpIHtcclxuICAgIGlmIChsb2dDYWxsYmFjayAhPT0gbnVsbCAmJiB0eXBlb2YgbG9nQ2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImludmFsaWQtbG9nLWFyZ3VtZW50XCIgLyogQXBwRXJyb3IuSU5WQUxJRF9MT0dfQVJHVU1FTlQgKi8pO1xyXG4gICAgfVxyXG4gICAgc2V0VXNlckxvZ0hhbmRsZXIobG9nQ2FsbGJhY2ssIG9wdGlvbnMpO1xyXG59XHJcbi8qKlxyXG4gKiBTZXRzIGxvZyBsZXZlbCBmb3IgYWxsIEZpcmViYXNlIFNES3MuXHJcbiAqXHJcbiAqIEFsbCBvZiB0aGUgbG9nIHR5cGVzIGFib3ZlIHRoZSBjdXJyZW50IGxvZyBsZXZlbCBhcmUgY2FwdHVyZWQgKGkuZS4gaWZcclxuICogeW91IHNldCB0aGUgbG9nIGxldmVsIHRvIGBpbmZvYCwgZXJyb3JzIGFyZSBsb2dnZWQsIGJ1dCBgZGVidWdgIGFuZFxyXG4gKiBgdmVyYm9zZWAgbG9ncyBhcmUgbm90KS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gc2V0TG9nTGV2ZWwobG9nTGV2ZWwpIHtcclxuICAgIHNldExvZ0xldmVsJDEobG9nTGV2ZWwpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmNvbnN0IERCX05BTUUgPSAnZmlyZWJhc2UtaGVhcnRiZWF0LWRhdGFiYXNlJztcclxuY29uc3QgREJfVkVSU0lPTiA9IDE7XHJcbmNvbnN0IFNUT1JFX05BTUUgPSAnZmlyZWJhc2UtaGVhcnRiZWF0LXN0b3JlJztcclxubGV0IGRiUHJvbWlzZSA9IG51bGw7XHJcbmZ1bmN0aW9uIGdldERiUHJvbWlzZSgpIHtcclxuICAgIGlmICghZGJQcm9taXNlKSB7XHJcbiAgICAgICAgZGJQcm9taXNlID0gb3BlbkRCKERCX05BTUUsIERCX1ZFUlNJT04sIHtcclxuICAgICAgICAgICAgdXBncmFkZTogKGRiLCBvbGRWZXJzaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCB1c2UgJ2JyZWFrJyBpbiB0aGlzIHN3aXRjaCBzdGF0ZW1lbnQsIHRoZSBmYWxsLXRocm91Z2hcclxuICAgICAgICAgICAgICAgIC8vIGJlaGF2aW9yIGlzIHdoYXQgd2Ugd2FudCwgYmVjYXVzZSBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgdmVyc2lvbnMgYmV0d2VlblxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIG9sZCB2ZXJzaW9uIGFuZCB0aGUgY3VycmVudCB2ZXJzaW9uLCB3ZSB3YW50IEFMTCB0aGUgbWlncmF0aW9uc1xyXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBjb3JyZXNwb25kIHRvIHRob3NlIHZlcnNpb25zIHRvIHJ1biwgbm90IG9ubHkgdGhlIGxhc3Qgb25lLlxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvbGRWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoU1RPUkVfTkFNRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNhZmFyaS9pT1MgYnJvd3NlcnMgdGhyb3cgb2NjYXNpb25hbCBleGNlcHRpb25zIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkYi5jcmVhdGVPYmplY3RTdG9yZSgpIHRoYXQgbWF5IGJlIGEgYnVnLiBBdm9pZCBibG9ja2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHJlc3Qgb2YgdGhlIGFwcCBmdW5jdGlvbmFsaXR5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpZGItb3BlblwiIC8qIEFwcEVycm9yLklEQl9PUEVOICovLCB7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEVycm9yTWVzc2FnZTogZS5tZXNzYWdlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRiUHJvbWlzZTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiByZWFkSGVhcnRiZWF0c0Zyb21JbmRleGVkREIoYXBwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XHJcbiAgICAgICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihTVE9SRV9OQU1FKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0eC5vYmplY3RTdG9yZShTVE9SRV9OQU1FKS5nZXQoY29tcHV0ZUtleShhcHApKTtcclxuICAgICAgICAvLyBXZSBhbHJlYWR5IGhhdmUgdGhlIHZhbHVlIGJ1dCB0eC5kb25lIGNhbiB0aHJvdyxcclxuICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGF3YWl0IGl0IGhlcmUgdG8gY2F0Y2ggZXJyb3JzXHJcbiAgICAgICAgYXdhaXQgdHguZG9uZTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEZpcmViYXNlRXJyb3IpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLndhcm4oZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkYkdldEVycm9yID0gRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpZGItZ2V0XCIgLyogQXBwRXJyb3IuSURCX0dFVCAqLywge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFcnJvck1lc3NhZ2U6IGUgPT09IG51bGwgfHwgZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZS5tZXNzYWdlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsb2dnZXIud2FybihpZGJHZXRFcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gd3JpdGVIZWFydGJlYXRzVG9JbmRleGVkREIoYXBwLCBoZWFydGJlYXRPYmplY3QpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcclxuICAgICAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKFNUT1JFX05BTUUsICdyZWFkd3JpdGUnKTtcclxuICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IHR4Lm9iamVjdFN0b3JlKFNUT1JFX05BTUUpO1xyXG4gICAgICAgIGF3YWl0IG9iamVjdFN0b3JlLnB1dChoZWFydGJlYXRPYmplY3QsIGNvbXB1dGVLZXkoYXBwKSk7XHJcbiAgICAgICAgYXdhaXQgdHguZG9uZTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBGaXJlYmFzZUVycm9yKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKGUubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBpZGJHZXRFcnJvciA9IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaWRiLXNldFwiIC8qIEFwcEVycm9yLklEQl9XUklURSAqLywge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFcnJvck1lc3NhZ2U6IGUgPT09IG51bGwgfHwgZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZS5tZXNzYWdlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsb2dnZXIud2FybihpZGJHZXRFcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY29tcHV0ZUtleShhcHApIHtcclxuICAgIHJldHVybiBgJHthcHAubmFtZX0hJHthcHAub3B0aW9ucy5hcHBJZH1gO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmNvbnN0IE1BWF9IRUFERVJfQllURVMgPSAxMDI0O1xyXG4vLyAzMCBkYXlzXHJcbmNvbnN0IFNUT1JFRF9IRUFSVEJFQVRfUkVURU5USU9OX01BWF9NSUxMSVMgPSAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcbmNsYXNzIEhlYXJ0YmVhdFNlcnZpY2VJbXBsIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEluLW1lbW9yeSBjYWNoZSBmb3IgaGVhcnRiZWF0cywgdXNlZCBieSBnZXRIZWFydGJlYXRzSGVhZGVyKCkgdG8gZ2VuZXJhdGVcclxuICAgICAgICAgKiB0aGUgaGVhZGVyIHN0cmluZy5cclxuICAgICAgICAgKiBTdG9yZXMgb25lIHJlY29yZCBwZXIgZGF0ZS4gVGhpcyB3aWxsIGJlIGNvbnNvbGlkYXRlZCBpbnRvIHRoZSBzdGFuZGFyZFxyXG4gICAgICAgICAqIGZvcm1hdCBvZiBvbmUgcmVjb3JkIHBlciB1c2VyIGFnZW50IHN0cmluZyBiZWZvcmUgYmVpbmcgc2VudCBhcyBhIGhlYWRlci5cclxuICAgICAgICAgKiBQb3B1bGF0ZWQgZnJvbSBpbmRleGVkREIgd2hlbiB0aGUgY29udHJvbGxlciBpcyBpbnN0YW50aWF0ZWQgYW5kIHNob3VsZFxyXG4gICAgICAgICAqIGJlIGtlcHQgaW4gc3luYyB3aXRoIGluZGV4ZWREQi5cclxuICAgICAgICAgKiBMZWF2ZSBwdWJsaWMgZm9yIGVhc2llciB0ZXN0aW5nLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgYXBwID0gdGhpcy5jb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX3N0b3JhZ2UgPSBuZXcgSGVhcnRiZWF0U3RvcmFnZUltcGwoYXBwKTtcclxuICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGVQcm9taXNlID0gdGhpcy5fc3RvcmFnZS5yZWFkKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB0byByZXBvcnQgYSBoZWFydGJlYXQuIFRoZSBmdW5jdGlvbiB3aWxsIGdlbmVyYXRlXHJcbiAgICAgKiBhIEhlYXJ0YmVhdHNCeVVzZXJBZ2VudCBvYmplY3QsIHVwZGF0ZSBoZWFydGJlYXRzQ2FjaGUsIGFuZCBwZXJzaXN0IGl0XHJcbiAgICAgKiB0byBJbmRleGVkREIuXHJcbiAgICAgKiBOb3RlIHRoYXQgd2Ugb25seSBzdG9yZSBvbmUgaGVhcnRiZWF0IHBlciBkYXkuIFNvIGlmIGEgaGVhcnRiZWF0IGZvciB0b2RheSBpc1xyXG4gICAgICogYWxyZWFkeSBsb2dnZWQsIHN1YnNlcXVlbnQgY2FsbHMgdG8gdGhpcyBmdW5jdGlvbiBpbiB0aGUgc2FtZSBkYXkgd2lsbCBiZSBpZ25vcmVkLlxyXG4gICAgICovXHJcbiAgICBhc3luYyB0cmlnZ2VySGVhcnRiZWF0KCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcGxhdGZvcm1Mb2dnZXIgPSB0aGlzLmNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgLmdldFByb3ZpZGVyKCdwbGF0Zm9ybS1sb2dnZXInKVxyXG4gICAgICAgICAgICAgICAgLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBcIkZpcmViYXNlIHVzZXIgYWdlbnRcIiBzdHJpbmcgZnJvbSB0aGUgcGxhdGZvcm0gbG9nZ2VyXHJcbiAgICAgICAgICAgIC8vIHNlcnZpY2UsIG5vdCB0aGUgYnJvd3NlciB1c2VyIGFnZW50LlxyXG4gICAgICAgICAgICBjb25zdCBhZ2VudCA9IHBsYXRmb3JtTG9nZ2VyLmdldFBsYXRmb3JtSW5mb1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZ2V0VVRDRGF0ZVN0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAoKChfYSA9IHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhlYXJ0YmVhdHMpID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9IGF3YWl0IHRoaXMuX2hlYXJ0YmVhdHNDYWNoZVByb21pc2U7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBmYWlsZWQgdG8gY29uc3RydWN0IGEgaGVhcnRiZWF0cyBjYWNoZSwgdGhlbiByZXR1cm4gaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgICAgICAgICBpZiAoKChfYiA9IHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmhlYXJ0YmVhdHMpID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRG8gbm90IHN0b3JlIGEgaGVhcnRiZWF0IGlmIG9uZSBpcyBhbHJlYWR5IHN0b3JlZCBmb3IgdGhpcyBkYXlcclxuICAgICAgICAgICAgLy8gb3IgaWYgYSBoZWFkZXIgaGFzIGFscmVhZHkgYmVlbiBzZW50IHRvZGF5LlxyXG4gICAgICAgICAgICBpZiAodGhpcy5faGVhcnRiZWF0c0NhY2hlLmxhc3RTZW50SGVhcnRiZWF0RGF0ZSA9PT0gZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMuc29tZShzaW5nbGVEYXRlSGVhcnRiZWF0ID0+IHNpbmdsZURhdGVIZWFydGJlYXQuZGF0ZSA9PT0gZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZXJlIGlzIG5vIGVudHJ5IGZvciB0aGlzIGRhdGUuIENyZWF0ZSBvbmUuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5wdXNoKHsgZGF0ZSwgYWdlbnQgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGVudHJpZXMgb2xkZXIgdGhhbiAzMCBkYXlzLlxyXG4gICAgICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cyA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5maWx0ZXIoc2luZ2xlRGF0ZUhlYXJ0YmVhdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGJUaW1lc3RhbXAgPSBuZXcgRGF0ZShzaW5nbGVEYXRlSGVhcnRiZWF0LmRhdGUpLnZhbHVlT2YoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub3cgLSBoYlRpbWVzdGFtcCA8PSBTVE9SRURfSEVBUlRCRUFUX1JFVEVOVElPTl9NQVhfTUlMTElTO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdG9yYWdlLm92ZXJ3cml0ZSh0aGlzLl9oZWFydGJlYXRzQ2FjaGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBsb2dnZXIud2FybihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgd2hpY2ggY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBoZWFydGJlYXQtc3BlY2lmaWMgaGVhZGVyIGRpcmVjdGx5LlxyXG4gICAgICogSXQgYWxzbyBjbGVhcnMgYWxsIGhlYXJ0YmVhdHMgZnJvbSBtZW1vcnkgYXMgd2VsbCBhcyBpbiBJbmRleGVkREIuXHJcbiAgICAgKlxyXG4gICAgICogTk9URTogQ29uc3VtaW5nIHByb2R1Y3QgU0RLcyBzaG91bGQgbm90IHNlbmQgdGhlIGhlYWRlciBpZiB0aGlzIG1ldGhvZFxyXG4gICAgICogcmV0dXJucyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldEhlYXJ0YmVhdHNIZWFkZXIoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9oZWFydGJlYXRzQ2FjaGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2hlYXJ0YmVhdHNDYWNoZVByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSWYgaXQncyBzdGlsbCBudWxsIG9yIHRoZSBhcnJheSBpcyBlbXB0eSwgdGhlcmUgaXMgbm8gZGF0YSB0byBzZW5kLlxyXG4gICAgICAgICAgICBpZiAoKChfYSA9IHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhlYXJ0YmVhdHMpID09IG51bGwgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBnZXRVVENEYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIC8vIEV4dHJhY3QgYXMgbWFueSBoZWFydGJlYXRzIGZyb20gdGhlIGNhY2hlIGFzIHdpbGwgZml0IHVuZGVyIHRoZSBzaXplIGxpbWl0LlxyXG4gICAgICAgICAgICBjb25zdCB7IGhlYXJ0YmVhdHNUb1NlbmQsIHVuc2VudEVudHJpZXMgfSA9IGV4dHJhY3RIZWFydGJlYXRzRm9ySGVhZGVyKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyU3RyaW5nID0gYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcoSlNPTi5zdHJpbmdpZnkoeyB2ZXJzaW9uOiAyLCBoZWFydGJlYXRzOiBoZWFydGJlYXRzVG9TZW5kIH0pKTtcclxuICAgICAgICAgICAgLy8gU3RvcmUgbGFzdCBzZW50IGRhdGUgdG8gcHJldmVudCBhbm90aGVyIGJlaW5nIGxvZ2dlZC9zZW50IGZvciB0aGUgc2FtZSBkYXkuXHJcbiAgICAgICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5sYXN0U2VudEhlYXJ0YmVhdERhdGUgPSBkYXRlO1xyXG4gICAgICAgICAgICBpZiAodW5zZW50RW50cmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBhbnkgdW5zZW50IGVudHJpZXMgaWYgdGhleSBleGlzdC5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzID0gdW5zZW50RW50cmllcztcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgc2VlbXMgbW9yZSBsaWtlbHkgdGhhbiBlbXB0eWluZyB0aGUgYXJyYXkgKGJlbG93KSB0byBsZWFkIHRvIHNvbWUgb2RkIHN0YXRlXHJcbiAgICAgICAgICAgICAgICAvLyBzaW5jZSB0aGUgY2FjaGUgaXNuJ3QgZW1wdHkgYW5kIHRoaXMgd2lsbCBiZSBjYWxsZWQgYWdhaW4gb24gdGhlIG5leHQgcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBpcyBwcm9iYWJseSBzYWZlc3QgaWYgd2UgYXdhaXQgaXQuXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9zdG9yYWdlLm92ZXJ3cml0ZSh0aGlzLl9oZWFydGJlYXRzQ2FjaGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vIERvIG5vdCB3YWl0IGZvciB0aGlzLCB0byByZWR1Y2UgbGF0ZW5jeS5cclxuICAgICAgICAgICAgICAgIHZvaWQgdGhpcy5fc3RvcmFnZS5vdmVyd3JpdGUodGhpcy5faGVhcnRiZWF0c0NhY2hlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGVhZGVyU3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBsb2dnZXIud2FybihlKTtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRVVENEYXRlU3RyaW5nKCkge1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8gUmV0dXJucyBkYXRlIGZvcm1hdCAnWVlZWS1NTS1ERCdcclxuICAgIHJldHVybiB0b2RheS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCk7XHJcbn1cclxuZnVuY3Rpb24gZXh0cmFjdEhlYXJ0YmVhdHNGb3JIZWFkZXIoaGVhcnRiZWF0c0NhY2hlLCBtYXhTaXplID0gTUFYX0hFQURFUl9CWVRFUykge1xyXG4gICAgLy8gSGVhcnRiZWF0cyBncm91cGVkIGJ5IHVzZXIgYWdlbnQgaW4gdGhlIHN0YW5kYXJkIGZvcm1hdCB0byBiZSBzZW50IGluXHJcbiAgICAvLyB0aGUgaGVhZGVyLlxyXG4gICAgY29uc3QgaGVhcnRiZWF0c1RvU2VuZCA9IFtdO1xyXG4gICAgLy8gU2luZ2xlIGRhdGUgZm9ybWF0IGhlYXJ0YmVhdHMgdGhhdCBhcmUgbm90IHNlbnQuXHJcbiAgICBsZXQgdW5zZW50RW50cmllcyA9IGhlYXJ0YmVhdHNDYWNoZS5zbGljZSgpO1xyXG4gICAgZm9yIChjb25zdCBzaW5nbGVEYXRlSGVhcnRiZWF0IG9mIGhlYXJ0YmVhdHNDYWNoZSkge1xyXG4gICAgICAgIC8vIExvb2sgZm9yIGFuIGV4aXN0aW5nIGVudHJ5IHdpdGggdGhlIHNhbWUgdXNlciBhZ2VudC5cclxuICAgICAgICBjb25zdCBoZWFydGJlYXRFbnRyeSA9IGhlYXJ0YmVhdHNUb1NlbmQuZmluZChoYiA9PiBoYi5hZ2VudCA9PT0gc2luZ2xlRGF0ZUhlYXJ0YmVhdC5hZ2VudCk7XHJcbiAgICAgICAgaWYgKCFoZWFydGJlYXRFbnRyeSkge1xyXG4gICAgICAgICAgICAvLyBJZiBubyBlbnRyeSBmb3IgdGhpcyB1c2VyIGFnZW50IGV4aXN0cywgY3JlYXRlIG9uZS5cclxuICAgICAgICAgICAgaGVhcnRiZWF0c1RvU2VuZC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGFnZW50OiBzaW5nbGVEYXRlSGVhcnRiZWF0LmFnZW50LFxyXG4gICAgICAgICAgICAgICAgZGF0ZXM6IFtzaW5nbGVEYXRlSGVhcnRiZWF0LmRhdGVdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoY291bnRCeXRlcyhoZWFydGJlYXRzVG9TZW5kKSA+IG1heFNpemUpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBoZWFkZXIgd291bGQgZXhjZWVkIG1heCBzaXplLCByZW1vdmUgdGhlIGFkZGVkIGhlYXJ0YmVhdFxyXG4gICAgICAgICAgICAgICAgLy8gZW50cnkgYW5kIHN0b3AgYWRkaW5nIHRvIHRoZSBoZWFkZXIuXHJcbiAgICAgICAgICAgICAgICBoZWFydGJlYXRzVG9TZW5kLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYXJ0YmVhdEVudHJ5LmRhdGVzLnB1c2goc2luZ2xlRGF0ZUhlYXJ0YmVhdC5kYXRlKTtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIGhlYWRlciB3b3VsZCBleGNlZWQgbWF4IHNpemUsIHJlbW92ZSB0aGUgYWRkZWQgZGF0ZVxyXG4gICAgICAgICAgICAvLyBhbmQgc3RvcCBhZGRpbmcgdG8gdGhlIGhlYWRlci5cclxuICAgICAgICAgICAgaWYgKGNvdW50Qnl0ZXMoaGVhcnRiZWF0c1RvU2VuZCkgPiBtYXhTaXplKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFydGJlYXRFbnRyeS5kYXRlcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFBvcCB1bnNlbnQgZW50cnkgZnJvbSBxdWV1ZS4gKFNraXBwZWQgaWYgYWRkaW5nIHRoZSBlbnRyeSBleGNlZWRlZFxyXG4gICAgICAgIC8vIHF1b3RhIGFuZCB0aGUgbG9vcCBicmVha3MgZWFybHkuKVxyXG4gICAgICAgIHVuc2VudEVudHJpZXMgPSB1bnNlbnRFbnRyaWVzLnNsaWNlKDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFydGJlYXRzVG9TZW5kLFxyXG4gICAgICAgIHVuc2VudEVudHJpZXNcclxuICAgIH07XHJcbn1cclxuY2xhc3MgSGVhcnRiZWF0U3RvcmFnZUltcGwge1xyXG4gICAgY29uc3RydWN0b3IoYXBwKSB7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgICAgdGhpcy5fY2FuVXNlSW5kZXhlZERCUHJvbWlzZSA9IHRoaXMucnVuSW5kZXhlZERCRW52aXJvbm1lbnRDaGVjaygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgcnVuSW5kZXhlZERCRW52aXJvbm1lbnRDaGVjaygpIHtcclxuICAgICAgICBpZiAoIWlzSW5kZXhlZERCQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkIGFsbCBoZWFydGJlYXRzLlxyXG4gICAgICovXHJcbiAgICBhc3luYyByZWFkKCkge1xyXG4gICAgICAgIGNvbnN0IGNhblVzZUluZGV4ZWREQiA9IGF3YWl0IHRoaXMuX2NhblVzZUluZGV4ZWREQlByb21pc2U7XHJcbiAgICAgICAgaWYgKCFjYW5Vc2VJbmRleGVkREIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaGVhcnRiZWF0czogW10gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkYkhlYXJ0YmVhdE9iamVjdCA9IGF3YWl0IHJlYWRIZWFydGJlYXRzRnJvbUluZGV4ZWREQih0aGlzLmFwcCk7XHJcbiAgICAgICAgICAgIGlmIChpZGJIZWFydGJlYXRPYmplY3QgPT09IG51bGwgfHwgaWRiSGVhcnRiZWF0T2JqZWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpZGJIZWFydGJlYXRPYmplY3QuaGVhcnRiZWF0cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkYkhlYXJ0YmVhdE9iamVjdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGhlYXJ0YmVhdHM6IFtdIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBvdmVyd3JpdGUgdGhlIHN0b3JhZ2Ugd2l0aCB0aGUgcHJvdmlkZWQgaGVhcnRiZWF0c1xyXG4gICAgYXN5bmMgb3ZlcndyaXRlKGhlYXJ0YmVhdHNPYmplY3QpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgY29uc3QgY2FuVXNlSW5kZXhlZERCID0gYXdhaXQgdGhpcy5fY2FuVXNlSW5kZXhlZERCUHJvbWlzZTtcclxuICAgICAgICBpZiAoIWNhblVzZUluZGV4ZWREQikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QgPSBhd2FpdCB0aGlzLnJlYWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHdyaXRlSGVhcnRiZWF0c1RvSW5kZXhlZERCKHRoaXMuYXBwLCB7XHJcbiAgICAgICAgICAgICAgICBsYXN0U2VudEhlYXJ0YmVhdERhdGU6IChfYSA9IGhlYXJ0YmVhdHNPYmplY3QubGFzdFNlbnRIZWFydGJlYXREYXRlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBleGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QubGFzdFNlbnRIZWFydGJlYXREYXRlLFxyXG4gICAgICAgICAgICAgICAgaGVhcnRiZWF0czogaGVhcnRiZWF0c09iamVjdC5oZWFydGJlYXRzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGFkZCBoZWFydGJlYXRzXHJcbiAgICBhc3luYyBhZGQoaGVhcnRiZWF0c09iamVjdCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBjb25zdCBjYW5Vc2VJbmRleGVkREIgPSBhd2FpdCB0aGlzLl9jYW5Vc2VJbmRleGVkREJQcm9taXNlO1xyXG4gICAgICAgIGlmICghY2FuVXNlSW5kZXhlZERCKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nSGVhcnRiZWF0c09iamVjdCA9IGF3YWl0IHRoaXMucmVhZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gd3JpdGVIZWFydGJlYXRzVG9JbmRleGVkREIodGhpcy5hcHAsIHtcclxuICAgICAgICAgICAgICAgIGxhc3RTZW50SGVhcnRiZWF0RGF0ZTogKF9hID0gaGVhcnRiZWF0c09iamVjdC5sYXN0U2VudEhlYXJ0YmVhdERhdGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGV4aXN0aW5nSGVhcnRiZWF0c09iamVjdC5sYXN0U2VudEhlYXJ0YmVhdERhdGUsXHJcbiAgICAgICAgICAgICAgICBoZWFydGJlYXRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0LmhlYXJ0YmVhdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uaGVhcnRiZWF0c09iamVjdC5oZWFydGJlYXRzXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlIGJ5dGVzIG9mIGEgSGVhcnRiZWF0c0J5VXNlckFnZW50IGFycmF5IGFmdGVyIGJlaW5nIHdyYXBwZWRcclxuICogaW4gYSBwbGF0Zm9ybSBsb2dnaW5nIGhlYWRlciBKU09OIG9iamVjdCwgc3RyaW5naWZpZWQsIGFuZCBjb252ZXJ0ZWRcclxuICogdG8gYmFzZSA2NC5cclxuICovXHJcbmZ1bmN0aW9uIGNvdW50Qnl0ZXMoaGVhcnRiZWF0c0NhY2hlKSB7XHJcbiAgICAvLyBiYXNlNjQgaGFzIGEgcmVzdHJpY3RlZCBzZXQgb2YgY2hhcmFjdGVycywgYWxsIG9mIHdoaWNoIHNob3VsZCBiZSAxIGJ5dGUuXHJcbiAgICByZXR1cm4gYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcoXHJcbiAgICAvLyBoZWFydGJlYXRzQ2FjaGUgd3JhcHBlciBwcm9wZXJ0aWVzXHJcbiAgICBKU09OLnN0cmluZ2lmeSh7IHZlcnNpb246IDIsIGhlYXJ0YmVhdHM6IGhlYXJ0YmVhdHNDYWNoZSB9KSkubGVuZ3RoO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyQ29yZUNvbXBvbmVudHModmFyaWFudCkge1xyXG4gICAgX3JlZ2lzdGVyQ29tcG9uZW50KG5ldyBDb21wb25lbnQoJ3BsYXRmb3JtLWxvZ2dlcicsIGNvbnRhaW5lciA9PiBuZXcgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlSW1wbChjb250YWluZXIpLCBcIlBSSVZBVEVcIiAvKiBDb21wb25lbnRUeXBlLlBSSVZBVEUgKi8pKTtcclxuICAgIF9yZWdpc3RlckNvbXBvbmVudChuZXcgQ29tcG9uZW50KCdoZWFydGJlYXQnLCBjb250YWluZXIgPT4gbmV3IEhlYXJ0YmVhdFNlcnZpY2VJbXBsKGNvbnRhaW5lciksIFwiUFJJVkFURVwiIC8qIENvbXBvbmVudFR5cGUuUFJJVkFURSAqLykpO1xyXG4gICAgLy8gUmVnaXN0ZXIgYGFwcGAgcGFja2FnZS5cclxuICAgIHJlZ2lzdGVyVmVyc2lvbihuYW1lJHEsIHZlcnNpb24kMSwgdmFyaWFudCk7XHJcbiAgICAvLyBCVUlMRF9UQVJHRVQgd2lsbCBiZSByZXBsYWNlZCBieSB2YWx1ZXMgbGlrZSBlc20yMDE3LCBjanMyMDE3LCBldGMgZHVyaW5nIHRoZSBjb21waWxhdGlvblxyXG4gICAgcmVnaXN0ZXJWZXJzaW9uKG5hbWUkcSwgdmVyc2lvbiQxLCAnZXNtMjAxNycpO1xyXG4gICAgLy8gUmVnaXN0ZXIgcGxhdGZvcm0gU0RLIGlkZW50aWZpZXIgKG5vIHZlcnNpb24pLlxyXG4gICAgcmVnaXN0ZXJWZXJzaW9uKCdmaXJlLWpzJywgJycpO1xyXG59XG5cbi8qKlxyXG4gKiBGaXJlYmFzZSBBcHBcclxuICpcclxuICogQHJlbWFya3MgVGhpcyBwYWNrYWdlIGNvb3JkaW5hdGVzIHRoZSBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhlIGRpZmZlcmVudCBGaXJlYmFzZSBjb21wb25lbnRzXHJcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxyXG4gKi9cclxucmVnaXN0ZXJDb3JlQ29tcG9uZW50cygnJyk7XG5cbmV4cG9ydCB7IFNES19WRVJTSU9OLCBERUZBVUxUX0VOVFJZX05BTUUgYXMgX0RFRkFVTFRfRU5UUllfTkFNRSwgX2FkZENvbXBvbmVudCwgX2FkZE9yT3ZlcndyaXRlQ29tcG9uZW50LCBfYXBwcywgX2NsZWFyQ29tcG9uZW50cywgX2NvbXBvbmVudHMsIF9nZXRQcm92aWRlciwgX2lzRmlyZWJhc2VBcHAsIF9pc0ZpcmViYXNlU2VydmVyQXBwLCBfcmVnaXN0ZXJDb21wb25lbnQsIF9yZW1vdmVTZXJ2aWNlSW5zdGFuY2UsIF9zZXJ2ZXJBcHBzLCBkZWxldGVBcHAsIGdldEFwcCwgZ2V0QXBwcywgaW5pdGlhbGl6ZUFwcCwgaW5pdGlhbGl6ZVNlcnZlckFwcCwgb25Mb2csIHJlZ2lzdGVyVmVyc2lvbiwgc2V0TG9nTGV2ZWwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbTIwMTcuanMubWFwXG4iLCJpbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcblxuLyoqXHJcbiAqIENvbXBvbmVudCBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gYGF1dGhgLCBgYXV0aC1pbnRlcm5hbGBcclxuICovXHJcbmNsYXNzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgcHVibGljIHNlcnZpY2UgbmFtZSwgZS5nLiBhcHAsIGF1dGgsIGZpcmVzdG9yZSwgZGF0YWJhc2VcclxuICAgICAqIEBwYXJhbSBpbnN0YW5jZUZhY3RvcnkgU2VydmljZSBmYWN0b3J5IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgcHVibGljIGludGVyZmFjZVxyXG4gICAgICogQHBhcmFtIHR5cGUgd2hldGhlciB0aGUgc2VydmljZSBwcm92aWRlZCBieSB0aGUgY29tcG9uZW50IGlzIHB1YmxpYyBvciBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGluc3RhbmNlRmFjdG9yeSwgdHlwZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZUZhY3RvcnkgPSBpbnN0YW5jZUZhY3Rvcnk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLm11bHRpcGxlSW5zdGFuY2VzID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUHJvcGVydGllcyB0byBiZSBhZGRlZCB0byB0aGUgc2VydmljZSBuYW1lc3BhY2VcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnNlcnZpY2VQcm9wcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1vZGUgPSBcIkxBWllcIiAvKiBJbnN0YW50aWF0aW9uTW9kZS5MQVpZICovO1xyXG4gICAgICAgIHRoaXMub25JbnN0YW5jZUNyZWF0ZWQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgc2V0SW5zdGFudGlhdGlvbk1vZGUobW9kZSkge1xyXG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1vZGUgPSBtb2RlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2V0TXVsdGlwbGVJbnN0YW5jZXMobXVsdGlwbGVJbnN0YW5jZXMpIHtcclxuICAgICAgICB0aGlzLm11bHRpcGxlSW5zdGFuY2VzID0gbXVsdGlwbGVJbnN0YW5jZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZXRTZXJ2aWNlUHJvcHMocHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2VQcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2soY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLm9uSW5zdGFuY2VDcmVhdGVkID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgREVGQVVMVF9FTlRSWV9OQU1FID0gJ1tERUZBVUxUXSc7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBQcm92aWRlciBmb3IgaW5zdGFuY2UgZm9yIHNlcnZpY2UgbmFtZSBULCBlLmcuICdhdXRoJywgJ2F1dGgtaW50ZXJuYWwnXHJcbiAqIE5hbWVTZXJ2aWNlTWFwcGluZ1tUXSBpcyBhbiBhbGlhcyBmb3IgdGhlIHR5cGUgb2YgdGhlIGluc3RhbmNlXHJcbiAqL1xyXG5jbGFzcyBQcm92aWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzT3B0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLm9uSW5pdENhbGxiYWNrcyA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGlkZW50aWZpZXIgQSBwcm92aWRlciBjYW4gcHJvdmlkZSBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgYSBzZXJ2aWNlXHJcbiAgICAgKiBpZiB0aGlzLmNvbXBvbmVudC5tdWx0aXBsZUluc3RhbmNlcyBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBnZXQoaWRlbnRpZmllcikge1xyXG4gICAgICAgIC8vIGlmIG11bHRpcGxlSW5zdGFuY2VzIGlzIG5vdCBzdXBwb3J0ZWQsIHVzZSB0aGUgZGVmYXVsdCBuYW1lXHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuaGFzKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWZlcnJlZCA9IG5ldyBEZWZlcnJlZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkLnNldChub3JtYWxpemVkSWRlbnRpZmllciwgZGVmZXJyZWQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91bGRBdXRvSW5pdGlhbGl6ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBzZXJ2aWNlIGlmIGl0IGNhbiBiZSBhdXRvLWluaXRpYWxpemVkXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllclxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgdGhyb3dzIGFuIGV4Y2VwdGlvbiBkdXJpbmcgZ2V0KCksIGl0IHNob3VsZCBub3QgY2F1c2VcclxuICAgICAgICAgICAgICAgICAgICAvLyBhIGZhdGFsIGVycm9yLiBXZSBqdXN0IHJldHVybiB0aGUgdW5yZXNvbHZlZCBwcm9taXNlIGluIHRoaXMgY2FzZS5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5nZXQobm9ybWFsaXplZElkZW50aWZpZXIpLnByb21pc2U7XHJcbiAgICB9XHJcbiAgICBnZXRJbW1lZGlhdGUob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAvLyBpZiBtdWx0aXBsZUluc3RhbmNlcyBpcyBub3Qgc3VwcG9ydGVkLCB1c2UgdGhlIGRlZmF1bHQgbmFtZVxyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmlkZW50aWZpZXIpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbmFsID0gKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9wdGlvbmFsKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSB8fFxyXG4gICAgICAgICAgICB0aGlzLnNob3VsZEF1dG9Jbml0aWFsaXplKCkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplZElkZW50aWZpZXJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEluIGNhc2UgYSBjb21wb25lbnQgaXMgbm90IGluaXRpYWxpemVkIGFuZCBzaG91bGQvY2Fubm90IGJlIGF1dG8taW5pdGlhbGl6ZWQgYXQgdGhlIG1vbWVudCwgcmV0dXJuIG51bGwgaWYgdGhlIG9wdGlvbmFsIGZsYWcgaXMgc2V0LCBvciB0aHJvd1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFNlcnZpY2UgJHt0aGlzLm5hbWV9IGlzIG5vdCBhdmFpbGFibGVgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldENvbXBvbmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQ7XHJcbiAgICB9XHJcbiAgICBzZXRDb21wb25lbnQoY29tcG9uZW50KSB7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudC5uYW1lICE9PSB0aGlzLm5hbWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYE1pc21hdGNoaW5nIENvbXBvbmVudCAke2NvbXBvbmVudC5uYW1lfSBmb3IgUHJvdmlkZXIgJHt0aGlzLm5hbWV9LmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENvbXBvbmVudCBmb3IgJHt0aGlzLm5hbWV9IGhhcyBhbHJlYWR5IGJlZW4gcHJvdmlkZWRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgLy8gcmV0dXJuIGVhcmx5IHdpdGhvdXQgYXR0ZW1wdGluZyB0byBpbml0aWFsaXplIHRoZSBjb21wb25lbnQgaWYgdGhlIGNvbXBvbmVudCByZXF1aXJlcyBleHBsaWNpdCBpbml0aWFsaXphdGlvbiAoY2FsbGluZyBgUHJvdmlkZXIuaW5pdGlhbGl6ZSgpYClcclxuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkQXV0b0luaXRpYWxpemUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIHRoZSBzZXJ2aWNlIGlzIGVhZ2VyLCBpbml0aWFsaXplIHRoZSBkZWZhdWx0IGluc3RhbmNlXHJcbiAgICAgICAgaWYgKGlzQ29tcG9uZW50RWFnZXIoY29tcG9uZW50KSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHsgaW5zdGFuY2VJZGVudGlmaWVyOiBERUZBVUxUX0VOVFJZX05BTUUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgZm9yIGFuIGVhZ2VyIENvbXBvbmVudCB0aHJvd3MgYW4gZXhjZXB0aW9uIGR1cmluZyB0aGUgZWFnZXJcclxuICAgICAgICAgICAgICAgIC8vIGluaXRpYWxpemF0aW9uLCBpdCBzaG91bGQgbm90IGNhdXNlIGEgZmF0YWwgZXJyb3IuXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBJbnZlc3RpZ2F0ZSBpZiB3ZSBuZWVkIHRvIG1ha2UgaXQgY29uZmlndXJhYmxlLCBiZWNhdXNlIHNvbWUgY29tcG9uZW50IG1heSB3YW50IHRvIGNhdXNlXHJcbiAgICAgICAgICAgICAgICAvLyBhIGZhdGFsIGVycm9yIGluIHRoaXMgY2FzZT9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDcmVhdGUgc2VydmljZSBpbnN0YW5jZXMgZm9yIHRoZSBwZW5kaW5nIHByb21pc2VzIGFuZCByZXNvbHZlIHRoZW1cclxuICAgICAgICAvLyBOT1RFOiBpZiB0aGlzLm11bHRpcGxlSW5zdGFuY2VzIGlzIGZhbHNlLCBvbmx5IHRoZSBkZWZhdWx0IGluc3RhbmNlIHdpbGwgYmUgY3JlYXRlZFxyXG4gICAgICAgIC8vIGFuZCBhbGwgcHJvbWlzZXMgd2l0aCByZXNvbHZlIHdpdGggaXQgcmVnYXJkbGVzcyBvZiB0aGUgaWRlbnRpZmllci5cclxuICAgICAgICBmb3IgKGNvbnN0IFtpbnN0YW5jZUlkZW50aWZpZXIsIGluc3RhbmNlRGVmZXJyZWRdIG9mIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIGBnZXRPckluaXRpYWxpemVTZXJ2aWNlKClgIHNob3VsZCBhbHdheXMgcmV0dXJuIGEgdmFsaWQgaW5zdGFuY2Ugc2luY2UgYSBjb21wb25lbnQgaXMgZ3VhcmFudGVlZC4gdXNlICEgdG8gbWFrZSB0eXBlc2NyaXB0IGhhcHB5LlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplZElkZW50aWZpZXJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VEZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgaW5zdGFuY2UgZmFjdG9yeSB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBzaG91bGQgbm90IGNhdXNlXHJcbiAgICAgICAgICAgICAgICAvLyBhIGZhdGFsIGVycm9yLiBXZSBqdXN0IGxlYXZlIHRoZSBwcm9taXNlIHVucmVzb2x2ZWQuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhckluc3RhbmNlKGlkZW50aWZpZXIgPSBERUZBVUxUX0VOVFJZX05BTUUpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkLmRlbGV0ZShpZGVudGlmaWVyKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlc09wdGlvbnMuZGVsZXRlKGlkZW50aWZpZXIpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLmRlbGV0ZShpZGVudGlmaWVyKTtcclxuICAgIH1cclxuICAgIC8vIGFwcC5kZWxldGUoKSB3aWxsIGNhbGwgdGhpcyBtZXRob2Qgb24gZXZlcnkgcHJvdmlkZXIgdG8gZGVsZXRlIHRoZSBzZXJ2aWNlc1xyXG4gICAgLy8gVE9ETzogc2hvdWxkIHdlIG1hcmsgdGhlIHByb3ZpZGVyIGFzIGRlbGV0ZWQ/XHJcbiAgICBhc3luYyBkZWxldGUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VydmljZXMgPSBBcnJheS5mcm9tKHRoaXMuaW5zdGFuY2VzLnZhbHVlcygpKTtcclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIC4uLnNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHNlcnZpY2UgPT4gJ0lOVEVSTkFMJyBpbiBzZXJ2aWNlKSAvLyBsZWdhY3kgc2VydmljZXNcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgICAgICAgICAubWFwKHNlcnZpY2UgPT4gc2VydmljZS5JTlRFUk5BTC5kZWxldGUoKSksXHJcbiAgICAgICAgICAgIC4uLnNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHNlcnZpY2UgPT4gJ19kZWxldGUnIGluIHNlcnZpY2UpIC8vIG1vZHVsYXJpemVkIHNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICAgICAgLm1hcChzZXJ2aWNlID0+IHNlcnZpY2UuX2RlbGV0ZSgpKVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG4gICAgaXNDb21wb25lbnRTZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50ICE9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpc0luaXRpYWxpemVkKGlkZW50aWZpZXIgPSBERUZBVUxUX0VOVFJZX05BTUUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuaGFzKGlkZW50aWZpZXIpO1xyXG4gICAgfVxyXG4gICAgZ2V0T3B0aW9ucyhpZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzT3B0aW9ucy5nZXQoaWRlbnRpZmllcikgfHwge307XHJcbiAgICB9XHJcbiAgICBpbml0aWFsaXplKG9wdHMgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IHsgb3B0aW9ucyA9IHt9IH0gPSBvcHRzO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIob3B0cy5pbnN0YW5jZUlkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQobm9ybWFsaXplZElkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke3RoaXMubmFtZX0oJHtub3JtYWxpemVkSWRlbnRpZmllcn0pIGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29tcG9uZW50U2V0KCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENvbXBvbmVudCAke3RoaXMubmFtZX0gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQgeWV0YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcclxuICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllcixcclxuICAgICAgICAgICAgb3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHJlc29sdmUgYW55IHBlbmRpbmcgcHJvbWlzZSB3YWl0aW5nIGZvciB0aGUgc2VydmljZSBpbnN0YW5jZVxyXG4gICAgICAgIGZvciAoY29uc3QgW2luc3RhbmNlSWRlbnRpZmllciwgaW5zdGFuY2VEZWZlcnJlZF0gb2YgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZERlZmVycmVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGluc3RhbmNlSWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgIGlmIChub3JtYWxpemVkSWRlbnRpZmllciA9PT0gbm9ybWFsaXplZERlZmVycmVkSWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VEZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2VkICBhZnRlciB0aGUgcHJvdmlkZXIgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYnkgY2FsbGluZyBwcm92aWRlci5pbml0aWFsaXplKCkuXHJcbiAgICAgKiBUaGUgZnVuY3Rpb24gaXMgaW52b2tlZCBTWU5DSFJPTk9VU0xZLCBzbyBpdCBzaG91bGQgbm90IGV4ZWN1dGUgYW55IGxvbmdydW5uaW5nIHRhc2tzIGluIG9yZGVyIHRvIG5vdCBibG9jayB0aGUgcHJvZ3JhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaWRlbnRpZmllciBBbiBvcHRpb25hbCBpbnN0YW5jZSBpZGVudGlmaWVyXHJcbiAgICAgKiBAcmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVucmVnaXN0ZXIgdGhlIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIG9uSW5pdChjYWxsYmFjaywgaWRlbnRpZmllcikge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQ2FsbGJhY2tzID0gKF9hID0gdGhpcy5vbkluaXRDYWxsYmFja3MuZ2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbmV3IFNldCgpO1xyXG4gICAgICAgIGV4aXN0aW5nQ2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5vbkluaXRDYWxsYmFja3Muc2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyLCBleGlzdGluZ0NhbGxiYWNrcyk7XHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzLmdldChub3JtYWxpemVkSWRlbnRpZmllcik7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZXhpc3RpbmdJbnN0YW5jZSwgbm9ybWFsaXplZElkZW50aWZpZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBleGlzdGluZ0NhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2spO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEludm9rZSBvbkluaXQgY2FsbGJhY2tzIHN5bmNocm9ub3VzbHlcclxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSB0aGUgc2VydmljZSBpbnN0YW5jZWBcclxuICAgICAqL1xyXG4gICAgaW52b2tlT25Jbml0Q2FsbGJhY2tzKGluc3RhbmNlLCBpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5vbkluaXRDYWxsYmFja3MuZ2V0KGlkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmICghY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBjYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGluc3RhbmNlLCBpZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoX2EpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBlcnJvcnMgaW4gdGhlIG9uSW5pdCBjYWxsYmFja1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0T3JJbml0aWFsaXplU2VydmljZSh7IGluc3RhbmNlSWRlbnRpZmllciwgb3B0aW9ucyA9IHt9IH0pIHtcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlcy5nZXQoaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAoIWluc3RhbmNlICYmIHRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jb21wb25lbnQuaW5zdGFuY2VGYWN0b3J5KHRoaXMuY29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZUlkZW50aWZpZXJGb3JGYWN0b3J5KGluc3RhbmNlSWRlbnRpZmllciksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlcy5zZXQoaW5zdGFuY2VJZGVudGlmaWVyLCBpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzT3B0aW9ucy5zZXQoaW5zdGFuY2VJZGVudGlmaWVyLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEludm9rZSBvbkluaXQgbGlzdGVuZXJzLlxyXG4gICAgICAgICAgICAgKiBOb3RlIHRoaXMuY29tcG9uZW50Lm9uSW5zdGFuY2VDcmVhdGVkIGlzIGRpZmZlcmVudCwgd2hpY2ggaXMgdXNlZCBieSB0aGUgY29tcG9uZW50IGNyZWF0b3IsXHJcbiAgICAgICAgICAgICAqIHdoaWxlIG9uSW5pdCBsaXN0ZW5lcnMgYXJlIHJlZ2lzdGVyZWQgYnkgY29uc3VtZXJzIG9mIHRoZSBwcm92aWRlci5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuaW52b2tlT25Jbml0Q2FsbGJhY2tzKGluc3RhbmNlLCBpbnN0YW5jZUlkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogT3JkZXIgaXMgaW1wb3J0YW50XHJcbiAgICAgICAgICAgICAqIG9uSW5zdGFuY2VDcmVhdGVkKCkgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciB0aGlzLmluc3RhbmNlcy5zZXQoaW5zdGFuY2VJZGVudGlmaWVyLCBpbnN0YW5jZSk7IHdoaWNoXHJcbiAgICAgICAgICAgICAqIG1ha2VzIGBpc0luaXRpYWxpemVkKClgIHJldHVybiB0cnVlLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50Lm9uSW5zdGFuY2VDcmVhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50Lm9uSW5zdGFuY2VDcmVhdGVkKHRoaXMuY29udGFpbmVyLCBpbnN0YW5jZUlkZW50aWZpZXIsIGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBlcnJvcnMgaW4gdGhlIG9uSW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2tcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2UgfHwgbnVsbDtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5tdWx0aXBsZUluc3RhbmNlcyA/IGlkZW50aWZpZXIgOiBERUZBVUxUX0VOVFJZX05BTUU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZmllcjsgLy8gYXNzdW1lIG11bHRpcGxlIGluc3RhbmNlcyBhcmUgc3VwcG9ydGVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHByb3ZpZGVkLlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3VsZEF1dG9Jbml0aWFsaXplKCkge1xyXG4gICAgICAgIHJldHVybiAoISF0aGlzLmNvbXBvbmVudCAmJlxyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5pbnN0YW50aWF0aW9uTW9kZSAhPT0gXCJFWFBMSUNJVFwiIC8qIEluc3RhbnRpYXRpb25Nb2RlLkVYUExJQ0lUICovKTtcclxuICAgIH1cclxufVxyXG4vLyB1bmRlZmluZWQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgc2VydmljZSBmYWN0b3J5IGZvciB0aGUgZGVmYXVsdCBpbnN0YW5jZVxyXG5mdW5jdGlvbiBub3JtYWxpemVJZGVudGlmaWVyRm9yRmFjdG9yeShpZGVudGlmaWVyKSB7XHJcbiAgICByZXR1cm4gaWRlbnRpZmllciA9PT0gREVGQVVMVF9FTlRSWV9OQU1FID8gdW5kZWZpbmVkIDogaWRlbnRpZmllcjtcclxufVxyXG5mdW5jdGlvbiBpc0NvbXBvbmVudEVhZ2VyKGNvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudC5pbnN0YW50aWF0aW9uTW9kZSA9PT0gXCJFQUdFUlwiIC8qIEluc3RhbnRpYXRpb25Nb2RlLkVBR0VSICovO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBDb21wb25lbnRDb250YWluZXIgdGhhdCBwcm92aWRlcyBQcm92aWRlcnMgZm9yIHNlcnZpY2UgbmFtZSBULCBlLmcuIGBhdXRoYCwgYGF1dGgtaW50ZXJuYWxgXHJcbiAqL1xyXG5jbGFzcyBDb21wb25lbnRDb250YWluZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wcm92aWRlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IENvbXBvbmVudCBiZWluZyBhZGRlZFxyXG4gICAgICogQHBhcmFtIG92ZXJ3cml0ZSBXaGVuIGEgY29tcG9uZW50IHdpdGggdGhlIHNhbWUgbmFtZSBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQsXHJcbiAgICAgKiBpZiBvdmVyd3JpdGUgaXMgdHJ1ZTogb3ZlcndyaXRlIHRoZSBleGlzdGluZyBjb21wb25lbnQgd2l0aCB0aGUgbmV3IGNvbXBvbmVudCBhbmQgY3JlYXRlIGEgbmV3XHJcbiAgICAgKiBwcm92aWRlciB3aXRoIHRoZSBuZXcgY29tcG9uZW50LiBJdCBjYW4gYmUgdXNlZnVsIGluIHRlc3RzIHdoZXJlIHlvdSB3YW50IHRvIHVzZSBkaWZmZXJlbnQgbW9ja3NcclxuICAgICAqIGZvciBkaWZmZXJlbnQgdGVzdHMuXHJcbiAgICAgKiBpZiBvdmVyd3JpdGUgaXMgZmFsc2U6IHRocm93IGFuIGV4Y2VwdGlvblxyXG4gICAgICovXHJcbiAgICBhZGRDb21wb25lbnQoY29tcG9uZW50KSB7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLmdldFByb3ZpZGVyKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgICBpZiAocHJvdmlkZXIuaXNDb21wb25lbnRTZXQoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCAke2NvbXBvbmVudC5uYW1lfSBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQgd2l0aCAke3RoaXMubmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdmlkZXIuc2V0Q29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICBhZGRPck92ZXJ3cml0ZUNvbXBvbmVudChjb21wb25lbnQpIHtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IHRoaXMuZ2V0UHJvdmlkZXIoY29tcG9uZW50Lm5hbWUpO1xyXG4gICAgICAgIGlmIChwcm92aWRlci5pc0NvbXBvbmVudFNldCgpKSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgZXhpc3RpbmcgcHJvdmlkZXIgZnJvbSB0aGUgY29udGFpbmVyLCBzbyB3ZSBjYW4gcmVnaXN0ZXIgdGhlIG5ldyBjb21wb25lbnRcclxuICAgICAgICAgICAgdGhpcy5wcm92aWRlcnMuZGVsZXRlKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogZ2V0UHJvdmlkZXIgcHJvdmlkZXMgYSB0eXBlIHNhZmUgaW50ZXJmYWNlIHdoZXJlIGl0IGNhbiBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgZmllbGQgbmFtZVxyXG4gICAgICogcHJlc2VudCBpbiBOYW1lU2VydmljZU1hcHBpbmcgaW50ZXJmYWNlLlxyXG4gICAgICpcclxuICAgICAqIEZpcmViYXNlIFNES3MgcHJvdmlkaW5nIHNlcnZpY2VzIHNob3VsZCBleHRlbmQgTmFtZVNlcnZpY2VNYXBwaW5nIGludGVyZmFjZSB0byByZWdpc3RlclxyXG4gICAgICogdGhlbXNlbHZlcy5cclxuICAgICAqL1xyXG4gICAgZ2V0UHJvdmlkZXIobmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3ZpZGVycy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzLmdldChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3JlYXRlIGEgUHJvdmlkZXIgZm9yIGEgc2VydmljZSB0aGF0IGhhc24ndCByZWdpc3RlcmVkIHdpdGggRmlyZWJhc2VcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBQcm92aWRlcihuYW1lLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnByb3ZpZGVycy5zZXQobmFtZSwgcHJvdmlkZXIpO1xyXG4gICAgICAgIHJldHVybiBwcm92aWRlcjtcclxuICAgIH1cclxuICAgIGdldFByb3ZpZGVycygpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnByb3ZpZGVycy52YWx1ZXMoKSk7XHJcbiAgICB9XHJcbn1cblxuZXhwb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRDb250YWluZXIsIFByb3ZpZGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20yMDE3LmpzLm1hcFxuIiwiaW1wb3J0IHsgX2dldFByb3ZpZGVyLCBnZXRBcHAsIF9yZWdpc3RlckNvbXBvbmVudCwgcmVnaXN0ZXJWZXJzaW9uIH0gZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IEVycm9yRmFjdG9yeSwgRmlyZWJhc2VFcnJvciB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IG9wZW5EQiB9IGZyb20gJ2lkYic7XG5cbmNvbnN0IG5hbWUgPSBcIkBmaXJlYmFzZS9pbnN0YWxsYXRpb25zXCI7XG5jb25zdCB2ZXJzaW9uID0gXCIwLjYuMTBcIjtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgUEVORElOR19USU1FT1VUX01TID0gMTAwMDA7XHJcbmNvbnN0IFBBQ0tBR0VfVkVSU0lPTiA9IGB3OiR7dmVyc2lvbn1gO1xyXG5jb25zdCBJTlRFUk5BTF9BVVRIX1ZFUlNJT04gPSAnRklTX3YyJztcclxuY29uc3QgSU5TVEFMTEFUSU9OU19BUElfVVJMID0gJ2h0dHBzOi8vZmlyZWJhc2VpbnN0YWxsYXRpb25zLmdvb2dsZWFwaXMuY29tL3YxJztcclxuY29uc3QgVE9LRU5fRVhQSVJBVElPTl9CVUZGRVIgPSA2MCAqIDYwICogMTAwMDsgLy8gT25lIGhvdXJcclxuY29uc3QgU0VSVklDRSA9ICdpbnN0YWxsYXRpb25zJztcclxuY29uc3QgU0VSVklDRV9OQU1FID0gJ0luc3RhbGxhdGlvbnMnO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBFUlJPUl9ERVNDUklQVElPTl9NQVAgPSB7XHJcbiAgICBbXCJtaXNzaW5nLWFwcC1jb25maWctdmFsdWVzXCIgLyogRXJyb3JDb2RlLk1JU1NJTkdfQVBQX0NPTkZJR19WQUxVRVMgKi9dOiAnTWlzc2luZyBBcHAgY29uZmlndXJhdGlvbiB2YWx1ZTogXCJ7JHZhbHVlTmFtZX1cIicsXHJcbiAgICBbXCJub3QtcmVnaXN0ZXJlZFwiIC8qIEVycm9yQ29kZS5OT1RfUkVHSVNURVJFRCAqL106ICdGaXJlYmFzZSBJbnN0YWxsYXRpb24gaXMgbm90IHJlZ2lzdGVyZWQuJyxcclxuICAgIFtcImluc3RhbGxhdGlvbi1ub3QtZm91bmRcIiAvKiBFcnJvckNvZGUuSU5TVEFMTEFUSU9OX05PVF9GT1VORCAqL106ICdGaXJlYmFzZSBJbnN0YWxsYXRpb24gbm90IGZvdW5kLicsXHJcbiAgICBbXCJyZXF1ZXN0LWZhaWxlZFwiIC8qIEVycm9yQ29kZS5SRVFVRVNUX0ZBSUxFRCAqL106ICd7JHJlcXVlc3ROYW1lfSByZXF1ZXN0IGZhaWxlZCB3aXRoIGVycm9yIFwieyRzZXJ2ZXJDb2RlfSB7JHNlcnZlclN0YXR1c306IHskc2VydmVyTWVzc2FnZX1cIicsXHJcbiAgICBbXCJhcHAtb2ZmbGluZVwiIC8qIEVycm9yQ29kZS5BUFBfT0ZGTElORSAqL106ICdDb3VsZCBub3QgcHJvY2VzcyByZXF1ZXN0LiBBcHBsaWNhdGlvbiBvZmZsaW5lLicsXHJcbiAgICBbXCJkZWxldGUtcGVuZGluZy1yZWdpc3RyYXRpb25cIiAvKiBFcnJvckNvZGUuREVMRVRFX1BFTkRJTkdfUkVHSVNUUkFUSU9OICovXTogXCJDYW4ndCBkZWxldGUgaW5zdGFsbGF0aW9uIHdoaWxlIHRoZXJlIGlzIGEgcGVuZGluZyByZWdpc3RyYXRpb24gcmVxdWVzdC5cIlxyXG59O1xyXG5jb25zdCBFUlJPUl9GQUNUT1JZID0gbmV3IEVycm9yRmFjdG9yeShTRVJWSUNFLCBTRVJWSUNFX05BTUUsIEVSUk9SX0RFU0NSSVBUSU9OX01BUCk7XHJcbi8qKiBSZXR1cm5zIHRydWUgaWYgZXJyb3IgaXMgYSBGaXJlYmFzZUVycm9yIHRoYXQgaXMgYmFzZWQgb24gYW4gZXJyb3IgZnJvbSB0aGUgc2VydmVyLiAqL1xyXG5mdW5jdGlvbiBpc1NlcnZlckVycm9yKGVycm9yKSB7XHJcbiAgICByZXR1cm4gKGVycm9yIGluc3RhbmNlb2YgRmlyZWJhc2VFcnJvciAmJlxyXG4gICAgICAgIGVycm9yLmNvZGUuaW5jbHVkZXMoXCJyZXF1ZXN0LWZhaWxlZFwiIC8qIEVycm9yQ29kZS5SRVFVRVNUX0ZBSUxFRCAqLykpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGdldEluc3RhbGxhdGlvbnNFbmRwb2ludCh7IHByb2plY3RJZCB9KSB7XHJcbiAgICByZXR1cm4gYCR7SU5TVEFMTEFUSU9OU19BUElfVVJMfS9wcm9qZWN0cy8ke3Byb2plY3RJZH0vaW5zdGFsbGF0aW9uc2A7XHJcbn1cclxuZnVuY3Rpb24gZXh0cmFjdEF1dGhUb2tlbkluZm9Gcm9tUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9rZW46IHJlc3BvbnNlLnRva2VuLFxyXG4gICAgICAgIHJlcXVlc3RTdGF0dXM6IDIgLyogUmVxdWVzdFN0YXR1cy5DT01QTEVURUQgKi8sXHJcbiAgICAgICAgZXhwaXJlc0luOiBnZXRFeHBpcmVzSW5Gcm9tUmVzcG9uc2VFeHBpcmVzSW4ocmVzcG9uc2UuZXhwaXJlc0luKSxcclxuICAgICAgICBjcmVhdGlvblRpbWU6IERhdGUubm93KClcclxuICAgIH07XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RXJyb3JGcm9tUmVzcG9uc2UocmVxdWVzdE5hbWUsIHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBlcnJvckRhdGEgPSByZXNwb25zZUpzb24uZXJyb3I7XHJcbiAgICByZXR1cm4gRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJyZXF1ZXN0LWZhaWxlZFwiIC8qIEVycm9yQ29kZS5SRVFVRVNUX0ZBSUxFRCAqLywge1xyXG4gICAgICAgIHJlcXVlc3ROYW1lLFxyXG4gICAgICAgIHNlcnZlckNvZGU6IGVycm9yRGF0YS5jb2RlLFxyXG4gICAgICAgIHNlcnZlck1lc3NhZ2U6IGVycm9yRGF0YS5tZXNzYWdlLFxyXG4gICAgICAgIHNlcnZlclN0YXR1czogZXJyb3JEYXRhLnN0YXR1c1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0SGVhZGVycyh7IGFwaUtleSB9KSB7XHJcbiAgICByZXR1cm4gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ3gtZ29vZy1hcGkta2V5JzogYXBpS2V5XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRIZWFkZXJzV2l0aEF1dGgoYXBwQ29uZmlnLCB7IHJlZnJlc2hUb2tlbiB9KSB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVycyhhcHBDb25maWcpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCBnZXRBdXRob3JpemF0aW9uSGVhZGVyKHJlZnJlc2hUb2tlbikpO1xyXG4gICAgcmV0dXJuIGhlYWRlcnM7XHJcbn1cclxuLyoqXHJcbiAqIENhbGxzIHRoZSBwYXNzZWQgaW4gZmV0Y2ggd3JhcHBlciBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UuXHJcbiAqIElmIHRoZSByZXR1cm5lZCByZXNwb25zZSBoYXMgYSBzdGF0dXMgb2YgNXh4LCByZS1ydW5zIHRoZSBmdW5jdGlvbiBvbmNlIGFuZFxyXG4gKiByZXR1cm5zIHRoZSByZXNwb25zZS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHJldHJ5SWZTZXJ2ZXJFcnJvcihmbikge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oKTtcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID49IDUwMCAmJiByZXN1bHQuc3RhdHVzIDwgNjAwKSB7XHJcbiAgICAgICAgLy8gSW50ZXJuYWwgU2VydmVyIEVycm9yLiBSZXRyeSByZXF1ZXN0LlxyXG4gICAgICAgIHJldHVybiBmbigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBnZXRFeHBpcmVzSW5Gcm9tUmVzcG9uc2VFeHBpcmVzSW4ocmVzcG9uc2VFeHBpcmVzSW4pIHtcclxuICAgIC8vIFRoaXMgd29ya3MgYmVjYXVzZSB0aGUgc2VydmVyIHdpbGwgbmV2ZXIgcmVzcG9uZCB3aXRoIGZyYWN0aW9ucyBvZiBhIHNlY29uZC5cclxuICAgIHJldHVybiBOdW1iZXIocmVzcG9uc2VFeHBpcmVzSW4ucmVwbGFjZSgncycsICcwMDAnKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0QXV0aG9yaXphdGlvbkhlYWRlcihyZWZyZXNoVG9rZW4pIHtcclxuICAgIHJldHVybiBgJHtJTlRFUk5BTF9BVVRIX1ZFUlNJT059ICR7cmVmcmVzaFRva2VufWA7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW5zdGFsbGF0aW9uUmVxdWVzdCh7IGFwcENvbmZpZywgaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyIH0sIHsgZmlkIH0pIHtcclxuICAgIGNvbnN0IGVuZHBvaW50ID0gZ2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50KGFwcENvbmZpZyk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVycyhhcHBDb25maWcpO1xyXG4gICAgLy8gSWYgaGVhcnRiZWF0IHNlcnZpY2UgZXhpc3RzLCBhZGQgdGhlIGhlYXJ0YmVhdCBzdHJpbmcgdG8gdGhlIGhlYWRlci5cclxuICAgIGNvbnN0IGhlYXJ0YmVhdFNlcnZpY2UgPSBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIuZ2V0SW1tZWRpYXRlKHtcclxuICAgICAgICBvcHRpb25hbDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBpZiAoaGVhcnRiZWF0U2VydmljZSkge1xyXG4gICAgICAgIGNvbnN0IGhlYXJ0YmVhdHNIZWFkZXIgPSBhd2FpdCBoZWFydGJlYXRTZXJ2aWNlLmdldEhlYXJ0YmVhdHNIZWFkZXIoKTtcclxuICAgICAgICBpZiAoaGVhcnRiZWF0c0hlYWRlcikge1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZCgneC1maXJlYmFzZS1jbGllbnQnLCBoZWFydGJlYXRzSGVhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgIGZpZCxcclxuICAgICAgICBhdXRoVmVyc2lvbjogSU5URVJOQUxfQVVUSF9WRVJTSU9OLFxyXG4gICAgICAgIGFwcElkOiBhcHBDb25maWcuYXBwSWQsXHJcbiAgICAgICAgc2RrVmVyc2lvbjogUEFDS0FHRV9WRVJTSU9OXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXRyeUlmU2VydmVyRXJyb3IoKCkgPT4gZmV0Y2goZW5kcG9pbnQsIHJlcXVlc3QpKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVmFsdWUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5ID0ge1xyXG4gICAgICAgICAgICBmaWQ6IHJlc3BvbnNlVmFsdWUuZmlkIHx8IGZpZCxcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAyIC8qIFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEICovLFxyXG4gICAgICAgICAgICByZWZyZXNoVG9rZW46IHJlc3BvbnNlVmFsdWUucmVmcmVzaFRva2VuLFxyXG4gICAgICAgICAgICBhdXRoVG9rZW46IGV4dHJhY3RBdXRoVG9rZW5JbmZvRnJvbVJlc3BvbnNlKHJlc3BvbnNlVmFsdWUuYXV0aFRva2VuKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IGF3YWl0IGdldEVycm9yRnJvbVJlc3BvbnNlKCdDcmVhdGUgSW5zdGFsbGF0aW9uJywgcmVzcG9uc2UpO1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIGdpdmVuIHRpbWUgcGFzc2VzLiAqL1xyXG5mdW5jdGlvbiBzbGVlcChtcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xyXG4gICAgfSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gYnVmZmVyVG9CYXNlNjRVcmxTYWZlKGFycmF5KSB7XHJcbiAgICBjb25zdCBiNjQgPSBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUoLi4uYXJyYXkpKTtcclxuICAgIHJldHVybiBiNjQucmVwbGFjZSgvXFwrL2csICctJykucmVwbGFjZSgvXFwvL2csICdfJyk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgVkFMSURfRklEX1BBVFRFUk4gPSAvXltjZGVmXVtcXHctXXsyMX0kLztcclxuY29uc3QgSU5WQUxJRF9GSUQgPSAnJztcclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIG5ldyBGSUQgdXNpbmcgcmFuZG9tIHZhbHVlcyBmcm9tIFdlYiBDcnlwdG8gQVBJLlxyXG4gKiBSZXR1cm5zIGFuIGVtcHR5IHN0cmluZyBpZiBGSUQgZ2VuZXJhdGlvbiBmYWlscyBmb3IgYW55IHJlYXNvbi5cclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRmlkKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBBIHZhbGlkIEZJRCBoYXMgZXhhY3RseSAyMiBiYXNlNjQgY2hhcmFjdGVycywgd2hpY2ggaXMgMTMyIGJpdHMsIG9yIDE2LjVcclxuICAgICAgICAvLyBieXRlcy4gb3VyIGltcGxlbWVudGF0aW9uIGdlbmVyYXRlcyBhIDE3IGJ5dGUgYXJyYXkgaW5zdGVhZC5cclxuICAgICAgICBjb25zdCBmaWRCeXRlQXJyYXkgPSBuZXcgVWludDhBcnJheSgxNyk7XHJcbiAgICAgICAgY29uc3QgY3J5cHRvID0gc2VsZi5jcnlwdG8gfHwgc2VsZi5tc0NyeXB0bztcclxuICAgICAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGZpZEJ5dGVBcnJheSk7XHJcbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgZmlyc3QgNCByYW5kb20gYml0cyB3aXRoIHRoZSBjb25zdGFudCBGSUQgaGVhZGVyIG9mIDBiMDExMS5cclxuICAgICAgICBmaWRCeXRlQXJyYXlbMF0gPSAwYjAxMTEwMDAwICsgKGZpZEJ5dGVBcnJheVswXSAlIDBiMDAwMTAwMDApO1xyXG4gICAgICAgIGNvbnN0IGZpZCA9IGVuY29kZShmaWRCeXRlQXJyYXkpO1xyXG4gICAgICAgIHJldHVybiBWQUxJRF9GSURfUEFUVEVSTi50ZXN0KGZpZCkgPyBmaWQgOiBJTlZBTElEX0ZJRDtcclxuICAgIH1cclxuICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgIC8vIEZJRCBnZW5lcmF0aW9uIGVycm9yZWRcclxuICAgICAgICByZXR1cm4gSU5WQUxJRF9GSUQ7XHJcbiAgICB9XHJcbn1cclxuLyoqIENvbnZlcnRzIGEgRklEIFVpbnQ4QXJyYXkgdG8gYSBiYXNlNjQgc3RyaW5nIHJlcHJlc2VudGF0aW9uLiAqL1xyXG5mdW5jdGlvbiBlbmNvZGUoZmlkQnl0ZUFycmF5KSB7XHJcbiAgICBjb25zdCBiNjRTdHJpbmcgPSBidWZmZXJUb0Jhc2U2NFVybFNhZmUoZmlkQnl0ZUFycmF5KTtcclxuICAgIC8vIFJlbW92ZSB0aGUgMjNyZCBjaGFyYWN0ZXIgdGhhdCB3YXMgYWRkZWQgYmVjYXVzZSBvZiB0aGUgZXh0cmEgNCBiaXRzIGF0IHRoZVxyXG4gICAgLy8gZW5kIG9mIG91ciAxNyBieXRlIGFycmF5LCBhbmQgdGhlICc9JyBwYWRkaW5nLlxyXG4gICAgcmV0dXJuIGI2NFN0cmluZy5zdWJzdHIoMCwgMjIpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKiBSZXR1cm5zIGEgc3RyaW5nIGtleSB0aGF0IGNhbiBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSBhcHAuICovXHJcbmZ1bmN0aW9uIGdldEtleShhcHBDb25maWcpIHtcclxuICAgIHJldHVybiBgJHthcHBDb25maWcuYXBwTmFtZX0hJHthcHBDb25maWcuYXBwSWR9YDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBmaWRDaGFuZ2VDYWxsYmFja3MgPSBuZXcgTWFwKCk7XHJcbi8qKlxyXG4gKiBDYWxscyB0aGUgb25JZENoYW5nZSBjYWxsYmFja3Mgd2l0aCB0aGUgbmV3IEZJRCB2YWx1ZSwgYW5kIGJyb2FkY2FzdHMgdGhlXHJcbiAqIGNoYW5nZSB0byBvdGhlciB0YWJzLlxyXG4gKi9cclxuZnVuY3Rpb24gZmlkQ2hhbmdlZChhcHBDb25maWcsIGZpZCkge1xyXG4gICAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XHJcbiAgICBjYWxsRmlkQ2hhbmdlQ2FsbGJhY2tzKGtleSwgZmlkKTtcclxuICAgIGJyb2FkY2FzdEZpZENoYW5nZShrZXksIGZpZCk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQ2FsbGJhY2soYXBwQ29uZmlnLCBjYWxsYmFjaykge1xyXG4gICAgLy8gT3BlbiB0aGUgYnJvYWRjYXN0IGNoYW5uZWwgaWYgaXQncyBub3QgYWxyZWFkeSBvcGVuLFxyXG4gICAgLy8gdG8gYmUgYWJsZSB0byBsaXN0ZW4gdG8gY2hhbmdlIGV2ZW50cyBmcm9tIG90aGVyIHRhYnMuXHJcbiAgICBnZXRCcm9hZGNhc3RDaGFubmVsKCk7XHJcbiAgICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcclxuICAgIGxldCBjYWxsYmFja1NldCA9IGZpZENoYW5nZUNhbGxiYWNrcy5nZXQoa2V5KTtcclxuICAgIGlmICghY2FsbGJhY2tTZXQpIHtcclxuICAgICAgICBjYWxsYmFja1NldCA9IG5ldyBTZXQoKTtcclxuICAgICAgICBmaWRDaGFuZ2VDYWxsYmFja3Muc2V0KGtleSwgY2FsbGJhY2tTZXQpO1xyXG4gICAgfVxyXG4gICAgY2FsbGJhY2tTZXQuYWRkKGNhbGxiYWNrKTtcclxufVxyXG5mdW5jdGlvbiByZW1vdmVDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcclxuICAgIGNvbnN0IGNhbGxiYWNrU2V0ID0gZmlkQ2hhbmdlQ2FsbGJhY2tzLmdldChrZXkpO1xyXG4gICAgaWYgKCFjYWxsYmFja1NldCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNhbGxiYWNrU2V0LmRlbGV0ZShjYWxsYmFjayk7XHJcbiAgICBpZiAoY2FsbGJhY2tTZXQuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgIGZpZENoYW5nZUNhbGxiYWNrcy5kZWxldGUoa2V5KTtcclxuICAgIH1cclxuICAgIC8vIENsb3NlIGJyb2FkY2FzdCBjaGFubmVsIGlmIHRoZXJlIGFyZSBubyBtb3JlIGNhbGxiYWNrcy5cclxuICAgIGNsb3NlQnJvYWRjYXN0Q2hhbm5lbCgpO1xyXG59XHJcbmZ1bmN0aW9uIGNhbGxGaWRDaGFuZ2VDYWxsYmFja3Moa2V5LCBmaWQpIHtcclxuICAgIGNvbnN0IGNhbGxiYWNrcyA9IGZpZENoYW5nZUNhbGxiYWNrcy5nZXQoa2V5KTtcclxuICAgIGlmICghY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBjYWxsYmFja3MpIHtcclxuICAgICAgICBjYWxsYmFjayhmaWQpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGJyb2FkY2FzdEZpZENoYW5nZShrZXksIGZpZCkge1xyXG4gICAgY29uc3QgY2hhbm5lbCA9IGdldEJyb2FkY2FzdENoYW5uZWwoKTtcclxuICAgIGlmIChjaGFubmVsKSB7XHJcbiAgICAgICAgY2hhbm5lbC5wb3N0TWVzc2FnZSh7IGtleSwgZmlkIH0pO1xyXG4gICAgfVxyXG4gICAgY2xvc2VCcm9hZGNhc3RDaGFubmVsKCk7XHJcbn1cclxubGV0IGJyb2FkY2FzdENoYW5uZWwgPSBudWxsO1xyXG4vKiogT3BlbnMgYW5kIHJldHVybnMgYSBCcm9hZGNhc3RDaGFubmVsIGlmIGl0IGlzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci4gKi9cclxuZnVuY3Rpb24gZ2V0QnJvYWRjYXN0Q2hhbm5lbCgpIHtcclxuICAgIGlmICghYnJvYWRjYXN0Q2hhbm5lbCAmJiAnQnJvYWRjYXN0Q2hhbm5lbCcgaW4gc2VsZikge1xyXG4gICAgICAgIGJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnW0ZpcmViYXNlXSBGSUQgQ2hhbmdlJyk7XHJcbiAgICAgICAgYnJvYWRjYXN0Q2hhbm5lbC5vbm1lc3NhZ2UgPSBlID0+IHtcclxuICAgICAgICAgICAgY2FsbEZpZENoYW5nZUNhbGxiYWNrcyhlLmRhdGEua2V5LCBlLmRhdGEuZmlkKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJyb2FkY2FzdENoYW5uZWw7XHJcbn1cclxuZnVuY3Rpb24gY2xvc2VCcm9hZGNhc3RDaGFubmVsKCkge1xyXG4gICAgaWYgKGZpZENoYW5nZUNhbGxiYWNrcy5zaXplID09PSAwICYmIGJyb2FkY2FzdENoYW5uZWwpIHtcclxuICAgICAgICBicm9hZGNhc3RDaGFubmVsLmNsb3NlKCk7XHJcbiAgICAgICAgYnJvYWRjYXN0Q2hhbm5lbCA9IG51bGw7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgREFUQUJBU0VfTkFNRSA9ICdmaXJlYmFzZS1pbnN0YWxsYXRpb25zLWRhdGFiYXNlJztcclxuY29uc3QgREFUQUJBU0VfVkVSU0lPTiA9IDE7XHJcbmNvbnN0IE9CSkVDVF9TVE9SRV9OQU1FID0gJ2ZpcmViYXNlLWluc3RhbGxhdGlvbnMtc3RvcmUnO1xyXG5sZXQgZGJQcm9taXNlID0gbnVsbDtcclxuZnVuY3Rpb24gZ2V0RGJQcm9taXNlKCkge1xyXG4gICAgaWYgKCFkYlByb21pc2UpIHtcclxuICAgICAgICBkYlByb21pc2UgPSBvcGVuREIoREFUQUJBU0VfTkFNRSwgREFUQUJBU0VfVkVSU0lPTiwge1xyXG4gICAgICAgICAgICB1cGdyYWRlOiAoZGIsIG9sZFZlcnNpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IHVzZSAnYnJlYWsnIGluIHRoaXMgc3dpdGNoIHN0YXRlbWVudCwgdGhlIGZhbGwtdGhyb3VnaFxyXG4gICAgICAgICAgICAgICAgLy8gYmVoYXZpb3IgaXMgd2hhdCB3ZSB3YW50LCBiZWNhdXNlIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSB2ZXJzaW9ucyBiZXR3ZWVuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgb2xkIHZlcnNpb24gYW5kIHRoZSBjdXJyZW50IHZlcnNpb24sIHdlIHdhbnQgQUxMIHRoZSBtaWdyYXRpb25zXHJcbiAgICAgICAgICAgICAgICAvLyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhvc2UgdmVyc2lvbnMgdG8gcnVuLCBub3Qgb25seSB0aGUgbGFzdCBvbmUuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9sZFZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRiUHJvbWlzZTtcclxufVxyXG4vKiogQXNzaWducyBvciBvdmVyd3JpdGVzIHRoZSByZWNvcmQgZm9yIHRoZSBnaXZlbiBrZXkgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHNldChhcHBDb25maWcsIHZhbHVlKSB7XHJcbiAgICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XHJcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XHJcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHR4Lm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKTtcclxuICAgIGNvbnN0IG9sZFZhbHVlID0gKGF3YWl0IG9iamVjdFN0b3JlLmdldChrZXkpKTtcclxuICAgIGF3YWl0IG9iamVjdFN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcclxuICAgIGF3YWl0IHR4LmRvbmU7XHJcbiAgICBpZiAoIW9sZFZhbHVlIHx8IG9sZFZhbHVlLmZpZCAhPT0gdmFsdWUuZmlkKSB7XHJcbiAgICAgICAgZmlkQ2hhbmdlZChhcHBDb25maWcsIHZhbHVlLmZpZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuLyoqIFJlbW92ZXMgcmVjb3JkKHMpIGZyb20gdGhlIG9iamVjdFN0b3JlIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIGtleS4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlKGFwcENvbmZpZykge1xyXG4gICAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xyXG4gICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xyXG4gICAgYXdhaXQgdHgub2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUpLmRlbGV0ZShrZXkpO1xyXG4gICAgYXdhaXQgdHguZG9uZTtcclxufVxyXG4vKipcclxuICogQXRvbWljYWxseSB1cGRhdGVzIGEgcmVjb3JkIHdpdGggdGhlIHJlc3VsdCBvZiB1cGRhdGVGbiwgd2hpY2ggZ2V0c1xyXG4gKiBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCB2YWx1ZS4gSWYgbmV3VmFsdWUgaXMgdW5kZWZpbmVkLCB0aGUgcmVjb3JkIGlzXHJcbiAqIGRlbGV0ZWQgaW5zdGVhZC5cclxuICogQHJldHVybiBVcGRhdGVkIHZhbHVlXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGUoYXBwQ29uZmlnLCB1cGRhdGVGbikge1xyXG4gICAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xyXG4gICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XHJcbiAgICBjb25zdCBvbGRWYWx1ZSA9IChhd2FpdCBzdG9yZS5nZXQoa2V5KSk7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHVwZGF0ZUZuKG9sZFZhbHVlKTtcclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYXdhaXQgc3RvcmUuZGVsZXRlKGtleSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhd2FpdCBzdG9yZS5wdXQobmV3VmFsdWUsIGtleSk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0eC5kb25lO1xyXG4gICAgaWYgKG5ld1ZhbHVlICYmICghb2xkVmFsdWUgfHwgb2xkVmFsdWUuZmlkICE9PSBuZXdWYWx1ZS5maWQpKSB7XHJcbiAgICAgICAgZmlkQ2hhbmdlZChhcHBDb25maWcsIG5ld1ZhbHVlLmZpZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3VmFsdWU7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFVwZGF0ZXMgYW5kIHJldHVybnMgdGhlIEluc3RhbGxhdGlvbkVudHJ5IGZyb20gdGhlIGRhdGFiYXNlLlxyXG4gKiBBbHNvIHRyaWdnZXJzIGEgcmVnaXN0cmF0aW9uIHJlcXVlc3QgaWYgaXQgaXMgbmVjZXNzYXJ5IGFuZCBwb3NzaWJsZS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEluc3RhbGxhdGlvbkVudHJ5KGluc3RhbGxhdGlvbnMpIHtcclxuICAgIGxldCByZWdpc3RyYXRpb25Qcm9taXNlO1xyXG4gICAgY29uc3QgaW5zdGFsbGF0aW9uRW50cnkgPSBhd2FpdCB1cGRhdGUoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIG9sZEVudHJ5ID0+IHtcclxuICAgICAgICBjb25zdCBpbnN0YWxsYXRpb25FbnRyeSA9IHVwZGF0ZU9yQ3JlYXRlSW5zdGFsbGF0aW9uRW50cnkob2xkRW50cnkpO1xyXG4gICAgICAgIGNvbnN0IGVudHJ5V2l0aFByb21pc2UgPSB0cmlnZ2VyUmVnaXN0cmF0aW9uSWZOZWNlc3NhcnkoaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpO1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvblByb21pc2UgPSBlbnRyeVdpdGhQcm9taXNlLnJlZ2lzdHJhdGlvblByb21pc2U7XHJcbiAgICAgICAgcmV0dXJuIGVudHJ5V2l0aFByb21pc2UuaW5zdGFsbGF0aW9uRW50cnk7XHJcbiAgICB9KTtcclxuICAgIGlmIChpbnN0YWxsYXRpb25FbnRyeS5maWQgPT09IElOVkFMSURfRklEKSB7XHJcbiAgICAgICAgLy8gRklEIGdlbmVyYXRpb24gZmFpbGVkLiBXYWl0aW5nIGZvciB0aGUgRklEIGZyb20gdGhlIHNlcnZlci5cclxuICAgICAgICByZXR1cm4geyBpbnN0YWxsYXRpb25FbnRyeTogYXdhaXQgcmVnaXN0cmF0aW9uUHJvbWlzZSB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbnN0YWxsYXRpb25FbnRyeSxcclxuICAgICAgICByZWdpc3RyYXRpb25Qcm9taXNlXHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IEluc3RhbGxhdGlvbiBFbnRyeSBpZiBvbmUgZG9lcyBub3QgZXhpc3QuXHJcbiAqIEFsc28gY2xlYXJzIHRpbWVkIG91dCBwZW5kaW5nIHJlcXVlc3RzLlxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlT3JDcmVhdGVJbnN0YWxsYXRpb25FbnRyeShvbGRFbnRyeSkge1xyXG4gICAgY29uc3QgZW50cnkgPSBvbGRFbnRyeSB8fCB7XHJcbiAgICAgICAgZmlkOiBnZW5lcmF0ZUZpZCgpLFxyXG4gICAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNsZWFyVGltZWRPdXRSZXF1ZXN0KGVudHJ5KTtcclxufVxyXG4vKipcclxuICogSWYgdGhlIEZpcmViYXNlIEluc3RhbGxhdGlvbiBpcyBub3QgcmVnaXN0ZXJlZCB5ZXQsIHRoaXMgd2lsbCB0cmlnZ2VyIHRoZVxyXG4gKiByZWdpc3RyYXRpb24gYW5kIHJldHVybiBhbiBJblByb2dyZXNzSW5zdGFsbGF0aW9uRW50cnkuXHJcbiAqXHJcbiAqIElmIHJlZ2lzdHJhdGlvblByb21pc2UgZG9lcyBub3QgZXhpc3QsIHRoZSBpbnN0YWxsYXRpb25FbnRyeSBpcyBndWFyYW50ZWVkXHJcbiAqIHRvIGJlIHJlZ2lzdGVyZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmlnZ2VyUmVnaXN0cmF0aW9uSWZOZWNlc3NhcnkoaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIGlmIChpbnN0YWxsYXRpb25FbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDAgLyogUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCAqLykge1xyXG4gICAgICAgIGlmICghbmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgICAgICAvLyBSZWdpc3RyYXRpb24gcmVxdWlyZWQgYnV0IGFwcCBpcyBvZmZsaW5lLlxyXG4gICAgICAgICAgICBjb25zdCByZWdpc3RyYXRpb25Qcm9taXNlV2l0aEVycm9yID0gUHJvbWlzZS5yZWplY3QoRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJhcHAtb2ZmbGluZVwiIC8qIEVycm9yQ29kZS5BUFBfT0ZGTElORSAqLykpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFsbGF0aW9uRW50cnksXHJcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25Qcm9taXNlOiByZWdpc3RyYXRpb25Qcm9taXNlV2l0aEVycm9yXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRyeSByZWdpc3RlcmluZy4gQ2hhbmdlIHN0YXR1cyB0byBJTl9QUk9HUkVTUy5cclxuICAgICAgICBjb25zdCBpblByb2dyZXNzRW50cnkgPSB7XHJcbiAgICAgICAgICAgIGZpZDogaW5zdGFsbGF0aW9uRW50cnkuZmlkLFxyXG4gICAgICAgICAgICByZWdpc3RyYXRpb25TdGF0dXM6IDEgLyogUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyAqLyxcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uVGltZTogRGF0ZS5ub3coKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uUHJvbWlzZSA9IHJlZ2lzdGVySW5zdGFsbGF0aW9uKGluc3RhbGxhdGlvbnMsIGluUHJvZ3Jlc3NFbnRyeSk7XHJcbiAgICAgICAgcmV0dXJuIHsgaW5zdGFsbGF0aW9uRW50cnk6IGluUHJvZ3Jlc3NFbnRyeSwgcmVnaXN0cmF0aW9uUHJvbWlzZSB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbnN0YWxsYXRpb25FbnRyeSxcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZTogd2FpdFVudGlsRmlkUmVnaXN0cmF0aW9uKGluc3RhbGxhdGlvbnMpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7IGluc3RhbGxhdGlvbkVudHJ5IH07XHJcbiAgICB9XHJcbn1cclxuLyoqIFRoaXMgd2lsbCBiZSBleGVjdXRlZCBvbmx5IG9uY2UgZm9yIGVhY2ggbmV3IEZpcmViYXNlIEluc3RhbGxhdGlvbi4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJJbnN0YWxsYXRpb24oaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5ID0gYXdhaXQgY3JlYXRlSW5zdGFsbGF0aW9uUmVxdWVzdChpbnN0YWxsYXRpb25zLCBpbnN0YWxsYXRpb25FbnRyeSk7XHJcbiAgICAgICAgcmV0dXJuIHNldChpbnN0YWxsYXRpb25zLmFwcENvbmZpZywgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgaWYgKGlzU2VydmVyRXJyb3IoZSkgJiYgZS5jdXN0b21EYXRhLnNlcnZlckNvZGUgPT09IDQwOSkge1xyXG4gICAgICAgICAgICAvLyBTZXJ2ZXIgcmV0dXJuZWQgYSBcIkZJRCBjYW5ub3QgYmUgdXNlZFwiIGVycm9yLlxyXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBJRCBuZXh0IHRpbWUuXHJcbiAgICAgICAgICAgIGF3YWl0IHJlbW92ZShpbnN0YWxsYXRpb25zLmFwcENvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBSZWdpc3RyYXRpb24gZmFpbGVkLiBTZXQgRklEIGFzIG5vdCByZWdpc3RlcmVkLlxyXG4gICAgICAgICAgICBhd2FpdCBzZXQoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIHtcclxuICAgICAgICAgICAgICAgIGZpZDogaW5zdGFsbGF0aW9uRW50cnkuZmlkLFxyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAwIC8qIFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgKi9cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbn1cclxuLyoqIENhbGwgaWYgRklEIHJlZ2lzdHJhdGlvbiBpcyBwZW5kaW5nIGluIGFub3RoZXIgcmVxdWVzdC4gKi9cclxuYXN5bmMgZnVuY3Rpb24gd2FpdFVudGlsRmlkUmVnaXN0cmF0aW9uKGluc3RhbGxhdGlvbnMpIHtcclxuICAgIC8vIFVuZm9ydHVuYXRlbHksIHRoZXJlIGlzIG5vIHdheSBvZiByZWxpYWJseSBvYnNlcnZpbmcgd2hlbiBhIHZhbHVlIGluXHJcbiAgICAvLyBJbmRleGVkREIgY2hhbmdlcyAoeWV0LCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvaW5kZXhlZC1kYi1vYnNlcnZlcnMpLFxyXG4gICAgLy8gc28gd2UgbmVlZCB0byBwb2xsLlxyXG4gICAgbGV0IGVudHJ5ID0gYXdhaXQgdXBkYXRlSW5zdGFsbGF0aW9uUmVxdWVzdChpbnN0YWxsYXRpb25zLmFwcENvbmZpZyk7XHJcbiAgICB3aGlsZSAoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8pIHtcclxuICAgICAgICAvLyBjcmVhdGVJbnN0YWxsYXRpb24gcmVxdWVzdCBzdGlsbCBpbiBwcm9ncmVzcy5cclxuICAgICAgICBhd2FpdCBzbGVlcCgxMDApO1xyXG4gICAgICAgIGVudHJ5ID0gYXdhaXQgdXBkYXRlSW5zdGFsbGF0aW9uUmVxdWVzdChpbnN0YWxsYXRpb25zLmFwcENvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBpZiAoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAwIC8qIFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgKi8pIHtcclxuICAgICAgICAvLyBUaGUgcmVxdWVzdCB0aW1lZCBvdXQgb3IgZmFpbGVkIGluIGEgZGlmZmVyZW50IGNhbGwuIFRyeSBhZ2Fpbi5cclxuICAgICAgICBjb25zdCB7IGluc3RhbGxhdGlvbkVudHJ5LCByZWdpc3RyYXRpb25Qcm9taXNlIH0gPSBhd2FpdCBnZXRJbnN0YWxsYXRpb25FbnRyeShpbnN0YWxsYXRpb25zKTtcclxuICAgICAgICBpZiAocmVnaXN0cmF0aW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0cmF0aW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHJlZ2lzdHJhdGlvblByb21pc2UsIGVudHJ5IGlzIHJlZ2lzdGVyZWQuXHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YWxsYXRpb25FbnRyeTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbn1cclxuLyoqXHJcbiAqIENhbGxlZCBvbmx5IGlmIHRoZXJlIGlzIGEgQ3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QgaW4gcHJvZ3Jlc3MuXHJcbiAqXHJcbiAqIFVwZGF0ZXMgdGhlIEluc3RhbGxhdGlvbkVudHJ5IGluIHRoZSBEQiBiYXNlZCBvbiB0aGUgc3RhdHVzIG9mIHRoZVxyXG4gKiBDcmVhdGVJbnN0YWxsYXRpb24gcmVxdWVzdC5cclxuICpcclxuICogUmV0dXJucyB0aGUgdXBkYXRlZCBJbnN0YWxsYXRpb25FbnRyeS5cclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZUluc3RhbGxhdGlvblJlcXVlc3QoYXBwQ29uZmlnKSB7XHJcbiAgICByZXR1cm4gdXBkYXRlKGFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xyXG4gICAgICAgIGlmICghb2xkRW50cnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbnN0YWxsYXRpb24tbm90LWZvdW5kXCIgLyogRXJyb3JDb2RlLklOU1RBTExBVElPTl9OT1RfRk9VTkQgKi8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xlYXJUaW1lZE91dFJlcXVlc3Qob2xkRW50cnkpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJUaW1lZE91dFJlcXVlc3QoZW50cnkpIHtcclxuICAgIGlmIChoYXNJbnN0YWxsYXRpb25SZXF1ZXN0VGltZWRPdXQoZW50cnkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlkOiBlbnRyeS5maWQsXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbnRyeTtcclxufVxyXG5mdW5jdGlvbiBoYXNJbnN0YWxsYXRpb25SZXF1ZXN0VGltZWRPdXQoaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIHJldHVybiAoaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8gJiZcclxuICAgICAgICBpbnN0YWxsYXRpb25FbnRyeS5yZWdpc3RyYXRpb25UaW1lICsgUEVORElOR19USU1FT1VUX01TIDwgRGF0ZS5ub3coKSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVBdXRoVG9rZW5SZXF1ZXN0KHsgYXBwQ29uZmlnLCBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIgfSwgaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIGNvbnN0IGVuZHBvaW50ID0gZ2V0R2VuZXJhdGVBdXRoVG9rZW5FbmRwb2ludChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBnZXRIZWFkZXJzV2l0aEF1dGgoYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25FbnRyeSk7XHJcbiAgICAvLyBJZiBoZWFydGJlYXQgc2VydmljZSBleGlzdHMsIGFkZCB0aGUgaGVhcnRiZWF0IHN0cmluZyB0byB0aGUgaGVhZGVyLlxyXG4gICAgY29uc3QgaGVhcnRiZWF0U2VydmljZSA9IGhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlci5nZXRJbW1lZGlhdGUoe1xyXG4gICAgICAgIG9wdGlvbmFsOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGlmIChoZWFydGJlYXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgY29uc3QgaGVhcnRiZWF0c0hlYWRlciA9IGF3YWl0IGhlYXJ0YmVhdFNlcnZpY2UuZ2V0SGVhcnRiZWF0c0hlYWRlcigpO1xyXG4gICAgICAgIGlmIChoZWFydGJlYXRzSGVhZGVyKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKCd4LWZpcmViYXNlLWNsaWVudCcsIGhlYXJ0YmVhdHNIZWFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgaW5zdGFsbGF0aW9uOiB7XHJcbiAgICAgICAgICAgIHNka1ZlcnNpb246IFBBQ0tBR0VfVkVSU0lPTixcclxuICAgICAgICAgICAgYXBwSWQ6IGFwcENvbmZpZy5hcHBJZFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJldHJ5SWZTZXJ2ZXJFcnJvcigoKSA9PiBmZXRjaChlbmRwb2ludCwgcmVxdWVzdCkpO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VWYWx1ZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRBdXRoVG9rZW4gPSBleHRyYWN0QXV0aFRva2VuSW5mb0Zyb21SZXNwb25zZShyZXNwb25zZVZhbHVlKTtcclxuICAgICAgICByZXR1cm4gY29tcGxldGVkQXV0aFRva2VuO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgYXdhaXQgZ2V0RXJyb3JGcm9tUmVzcG9uc2UoJ0dlbmVyYXRlIEF1dGggVG9rZW4nLCByZXNwb25zZSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0R2VuZXJhdGVBdXRoVG9rZW5FbmRwb2ludChhcHBDb25maWcsIHsgZmlkIH0pIHtcclxuICAgIHJldHVybiBgJHtnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQoYXBwQ29uZmlnKX0vJHtmaWR9L2F1dGhUb2tlbnM6Z2VuZXJhdGVgO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgdmFsaWQgYXV0aGVudGljYXRpb24gdG9rZW4gZm9yIHRoZSBpbnN0YWxsYXRpb24uIEdlbmVyYXRlcyBhIG5ld1xyXG4gKiB0b2tlbiBpZiBvbmUgZG9lc24ndCBleGlzdCwgaXMgZXhwaXJlZCBvciBhYm91dCB0byBleHBpcmUuXHJcbiAqXHJcbiAqIFNob3VsZCBvbmx5IGJlIGNhbGxlZCBpZiB0aGUgRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGlzIHJlZ2lzdGVyZWQuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiByZWZyZXNoQXV0aFRva2VuKGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XHJcbiAgICBsZXQgdG9rZW5Qcm9taXNlO1xyXG4gICAgY29uc3QgZW50cnkgPSBhd2FpdCB1cGRhdGUoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIG9sZEVudHJ5ID0+IHtcclxuICAgICAgICBpZiAoIWlzRW50cnlSZWdpc3RlcmVkKG9sZEVudHJ5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vdC1yZWdpc3RlcmVkXCIgLyogRXJyb3JDb2RlLk5PVF9SRUdJU1RFUkVEICovKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb2xkQXV0aFRva2VuID0gb2xkRW50cnkuYXV0aFRva2VuO1xyXG4gICAgICAgIGlmICghZm9yY2VSZWZyZXNoICYmIGlzQXV0aFRva2VuVmFsaWQob2xkQXV0aFRva2VuKSkge1xyXG4gICAgICAgICAgICAvLyBUaGVyZSBpcyBhIHZhbGlkIHRva2VuIGluIHRoZSBEQi5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZEVudHJ5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvbGRBdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovKSB7XHJcbiAgICAgICAgICAgIC8vIFRoZXJlIGFscmVhZHkgaXMgYSB0b2tlbiByZXF1ZXN0IGluIHByb2dyZXNzLlxyXG4gICAgICAgICAgICB0b2tlblByb21pc2UgPSB3YWl0VW50aWxBdXRoVG9rZW5SZXF1ZXN0KGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHJldHVybiBvbGRFbnRyeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE5vIHRva2VuIG9yIHRva2VuIGV4cGlyZWQuXHJcbiAgICAgICAgICAgIGlmICghbmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJhcHAtb2ZmbGluZVwiIC8qIEVycm9yQ29kZS5BUFBfT0ZGTElORSAqLyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaW5Qcm9ncmVzc0VudHJ5ID0gbWFrZUF1dGhUb2tlblJlcXVlc3RJblByb2dyZXNzRW50cnkob2xkRW50cnkpO1xyXG4gICAgICAgICAgICB0b2tlblByb21pc2UgPSBmZXRjaEF1dGhUb2tlbkZyb21TZXJ2ZXIoaW5zdGFsbGF0aW9ucywgaW5Qcm9ncmVzc0VudHJ5KTtcclxuICAgICAgICAgICAgcmV0dXJuIGluUHJvZ3Jlc3NFbnRyeTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGF1dGhUb2tlbiA9IHRva2VuUHJvbWlzZVxyXG4gICAgICAgID8gYXdhaXQgdG9rZW5Qcm9taXNlXHJcbiAgICAgICAgOiBlbnRyeS5hdXRoVG9rZW47XHJcbiAgICByZXR1cm4gYXV0aFRva2VuO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxsIG9ubHkgaWYgRklEIGlzIHJlZ2lzdGVyZWQgYW5kIEF1dGggVG9rZW4gcmVxdWVzdCBpcyBpbiBwcm9ncmVzcy5cclxuICpcclxuICogV2FpdHMgdW50aWwgdGhlIGN1cnJlbnQgcGVuZGluZyByZXF1ZXN0IGZpbmlzaGVzLiBJZiB0aGUgcmVxdWVzdCB0aW1lcyBvdXQsXHJcbiAqIHRyaWVzIG9uY2UgaW4gdGhpcyB0aHJlYWQgYXMgd2VsbC5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHdhaXRVbnRpbEF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucywgZm9yY2VSZWZyZXNoKSB7XHJcbiAgICAvLyBVbmZvcnR1bmF0ZWx5LCB0aGVyZSBpcyBubyB3YXkgb2YgcmVsaWFibHkgb2JzZXJ2aW5nIHdoZW4gYSB2YWx1ZSBpblxyXG4gICAgLy8gSW5kZXhlZERCIGNoYW5nZXMgKHlldCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2luZGV4ZWQtZGItb2JzZXJ2ZXJzKSxcclxuICAgIC8vIHNvIHdlIG5lZWQgdG8gcG9sbC5cclxuICAgIGxldCBlbnRyeSA9IGF3YWl0IHVwZGF0ZUF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xyXG4gICAgd2hpbGUgKGVudHJ5LmF1dGhUb2tlbi5yZXF1ZXN0U3RhdHVzID09PSAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8pIHtcclxuICAgICAgICAvLyBnZW5lcmF0ZUF1dGhUb2tlbiBzdGlsbCBpbiBwcm9ncmVzcy5cclxuICAgICAgICBhd2FpdCBzbGVlcCgxMDApO1xyXG4gICAgICAgIGVudHJ5ID0gYXdhaXQgdXBkYXRlQXV0aFRva2VuUmVxdWVzdChpbnN0YWxsYXRpb25zLmFwcENvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhdXRoVG9rZW4gPSBlbnRyeS5hdXRoVG9rZW47XHJcbiAgICBpZiAoYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IDAgLyogUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCAqLykge1xyXG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IHRpbWVkIG91dCBvciBmYWlsZWQgaW4gYSBkaWZmZXJlbnQgY2FsbC4gVHJ5IGFnYWluLlxyXG4gICAgICAgIHJldHVybiByZWZyZXNoQXV0aFRva2VuKGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYXV0aFRva2VuO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBDYWxsZWQgb25seSBpZiB0aGVyZSBpcyBhIEdlbmVyYXRlQXV0aFRva2VuIHJlcXVlc3QgaW4gcHJvZ3Jlc3MuXHJcbiAqXHJcbiAqIFVwZGF0ZXMgdGhlIEluc3RhbGxhdGlvbkVudHJ5IGluIHRoZSBEQiBiYXNlZCBvbiB0aGUgc3RhdHVzIG9mIHRoZVxyXG4gKiBHZW5lcmF0ZUF1dGhUb2tlbiByZXF1ZXN0LlxyXG4gKlxyXG4gKiBSZXR1cm5zIHRoZSB1cGRhdGVkIEluc3RhbGxhdGlvbkVudHJ5LlxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlQXV0aFRva2VuUmVxdWVzdChhcHBDb25maWcpIHtcclxuICAgIHJldHVybiB1cGRhdGUoYXBwQ29uZmlnLCBvbGRFbnRyeSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc0VudHJ5UmVnaXN0ZXJlZChvbGRFbnRyeSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJub3QtcmVnaXN0ZXJlZFwiIC8qIEVycm9yQ29kZS5OT1RfUkVHSVNURVJFRCAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9sZEF1dGhUb2tlbiA9IG9sZEVudHJ5LmF1dGhUb2tlbjtcclxuICAgICAgICBpZiAoaGFzQXV0aFRva2VuUmVxdWVzdFRpbWVkT3V0KG9sZEF1dGhUb2tlbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb2xkRW50cnkpLCB7IGF1dGhUb2tlbjogeyByZXF1ZXN0U3RhdHVzOiAwIC8qIFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgKi8gfSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9sZEVudHJ5O1xyXG4gICAgfSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBdXRoVG9rZW5Gcm9tU2VydmVyKGluc3RhbGxhdGlvbnMsIGluc3RhbGxhdGlvbkVudHJ5KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGF1dGhUb2tlbiA9IGF3YWl0IGdlbmVyYXRlQXV0aFRva2VuUmVxdWVzdChpbnN0YWxsYXRpb25zLCBpbnN0YWxsYXRpb25FbnRyeSk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEluc3RhbGxhdGlvbkVudHJ5ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBpbnN0YWxsYXRpb25FbnRyeSksIHsgYXV0aFRva2VuIH0pO1xyXG4gICAgICAgIGF3YWl0IHNldChpbnN0YWxsYXRpb25zLmFwcENvbmZpZywgdXBkYXRlZEluc3RhbGxhdGlvbkVudHJ5KTtcclxuICAgICAgICByZXR1cm4gYXV0aFRva2VuO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBpZiAoaXNTZXJ2ZXJFcnJvcihlKSAmJlxyXG4gICAgICAgICAgICAoZS5jdXN0b21EYXRhLnNlcnZlckNvZGUgPT09IDQwMSB8fCBlLmN1c3RvbURhdGEuc2VydmVyQ29kZSA9PT0gNDA0KSkge1xyXG4gICAgICAgICAgICAvLyBTZXJ2ZXIgcmV0dXJuZWQgYSBcIkZJRCBub3QgZm91bmRcIiBvciBhIFwiSW52YWxpZCBhdXRoZW50aWNhdGlvblwiIGVycm9yLlxyXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBJRCBuZXh0IHRpbWUuXHJcbiAgICAgICAgICAgIGF3YWl0IHJlbW92ZShpbnN0YWxsYXRpb25zLmFwcENvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkSW5zdGFsbGF0aW9uRW50cnkgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGluc3RhbGxhdGlvbkVudHJ5KSwgeyBhdXRoVG9rZW46IHsgcmVxdWVzdFN0YXR1czogMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovIH0gfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldChpbnN0YWxsYXRpb25zLmFwcENvbmZpZywgdXBkYXRlZEluc3RhbGxhdGlvbkVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpc0VudHJ5UmVnaXN0ZXJlZChpbnN0YWxsYXRpb25FbnRyeSkge1xyXG4gICAgcmV0dXJuIChpbnN0YWxsYXRpb25FbnRyeSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAyIC8qIFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEICovKTtcclxufVxyXG5mdW5jdGlvbiBpc0F1dGhUb2tlblZhbGlkKGF1dGhUb2tlbikge1xyXG4gICAgcmV0dXJuIChhdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gMiAvKiBSZXF1ZXN0U3RhdHVzLkNPTVBMRVRFRCAqLyAmJlxyXG4gICAgICAgICFpc0F1dGhUb2tlbkV4cGlyZWQoYXV0aFRva2VuKSk7XHJcbn1cclxuZnVuY3Rpb24gaXNBdXRoVG9rZW5FeHBpcmVkKGF1dGhUb2tlbikge1xyXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgIHJldHVybiAobm93IDwgYXV0aFRva2VuLmNyZWF0aW9uVGltZSB8fFxyXG4gICAgICAgIGF1dGhUb2tlbi5jcmVhdGlvblRpbWUgKyBhdXRoVG9rZW4uZXhwaXJlc0luIDwgbm93ICsgVE9LRU5fRVhQSVJBVElPTl9CVUZGRVIpO1xyXG59XHJcbi8qKiBSZXR1cm5zIGFuIHVwZGF0ZWQgSW5zdGFsbGF0aW9uRW50cnkgd2l0aCBhbiBJblByb2dyZXNzQXV0aFRva2VuLiAqL1xyXG5mdW5jdGlvbiBtYWtlQXV0aFRva2VuUmVxdWVzdEluUHJvZ3Jlc3NFbnRyeShvbGRFbnRyeSkge1xyXG4gICAgY29uc3QgaW5Qcm9ncmVzc0F1dGhUb2tlbiA9IHtcclxuICAgICAgICByZXF1ZXN0U3RhdHVzOiAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8sXHJcbiAgICAgICAgcmVxdWVzdFRpbWU6IERhdGUubm93KClcclxuICAgIH07XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvbGRFbnRyeSksIHsgYXV0aFRva2VuOiBpblByb2dyZXNzQXV0aFRva2VuIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGhhc0F1dGhUb2tlblJlcXVlc3RUaW1lZE91dChhdXRoVG9rZW4pIHtcclxuICAgIHJldHVybiAoYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IDEgLyogUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyAqLyAmJlxyXG4gICAgICAgIGF1dGhUb2tlbi5yZXF1ZXN0VGltZSArIFBFTkRJTkdfVElNRU9VVF9NUyA8IERhdGUubm93KCkpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGlmIHRoZXJlIGlzbid0IG9uZSBmb3IgdGhlIGFwcCBhbmRcclxuICogcmV0dXJucyB0aGUgSW5zdGFsbGF0aW9uIElELlxyXG4gKiBAcGFyYW0gaW5zdGFsbGF0aW9ucyAtIFRoZSBgSW5zdGFsbGF0aW9uc2AgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldElkKGluc3RhbGxhdGlvbnMpIHtcclxuICAgIGNvbnN0IGluc3RhbGxhdGlvbnNJbXBsID0gaW5zdGFsbGF0aW9ucztcclxuICAgIGNvbnN0IHsgaW5zdGFsbGF0aW9uRW50cnksIHJlZ2lzdHJhdGlvblByb21pc2UgfSA9IGF3YWl0IGdldEluc3RhbGxhdGlvbkVudHJ5KGluc3RhbGxhdGlvbnNJbXBsKTtcclxuICAgIGlmIChyZWdpc3RyYXRpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIElmIHRoZSBpbnN0YWxsYXRpb24gaXMgYWxyZWFkeSByZWdpc3RlcmVkLCB1cGRhdGUgdGhlIGF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgLy8gdG9rZW4gaWYgbmVlZGVkLlxyXG4gICAgICAgIHJlZnJlc2hBdXRoVG9rZW4oaW5zdGFsbGF0aW9uc0ltcGwpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluc3RhbGxhdGlvbkVudHJ5LmZpZDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUmV0dXJucyBhIEZpcmViYXNlIEluc3RhbGxhdGlvbnMgYXV0aCB0b2tlbiwgaWRlbnRpZnlpbmcgdGhlIGN1cnJlbnRcclxuICogRmlyZWJhc2UgSW5zdGFsbGF0aW9uLlxyXG4gKiBAcGFyYW0gaW5zdGFsbGF0aW9ucyAtIFRoZSBgSW5zdGFsbGF0aW9uc2AgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSBmb3JjZVJlZnJlc2ggLSBGb3JjZSByZWZyZXNoIHJlZ2FyZGxlc3Mgb2YgdG9rZW4gZXhwaXJhdGlvbi5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VG9rZW4oaW5zdGFsbGF0aW9ucywgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGluc3RhbGxhdGlvbnNJbXBsID0gaW5zdGFsbGF0aW9ucztcclxuICAgIGF3YWl0IGNvbXBsZXRlSW5zdGFsbGF0aW9uUmVnaXN0cmF0aW9uKGluc3RhbGxhdGlvbnNJbXBsKTtcclxuICAgIC8vIEF0IHRoaXMgcG9pbnQgd2UgZWl0aGVyIGhhdmUgYSBSZWdpc3RlcmVkIEluc3RhbGxhdGlvbiBpbiB0aGUgREIsIG9yIHdlJ3ZlXHJcbiAgICAvLyBhbHJlYWR5IHRocm93biBhbiBlcnJvci5cclxuICAgIGNvbnN0IGF1dGhUb2tlbiA9IGF3YWl0IHJlZnJlc2hBdXRoVG9rZW4oaW5zdGFsbGF0aW9uc0ltcGwsIGZvcmNlUmVmcmVzaCk7XHJcbiAgICByZXR1cm4gYXV0aFRva2VuLnRva2VuO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGNvbXBsZXRlSW5zdGFsbGF0aW9uUmVnaXN0cmF0aW9uKGluc3RhbGxhdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgcmVnaXN0cmF0aW9uUHJvbWlzZSB9ID0gYXdhaXQgZ2V0SW5zdGFsbGF0aW9uRW50cnkoaW5zdGFsbGF0aW9ucyk7XHJcbiAgICBpZiAocmVnaXN0cmF0aW9uUHJvbWlzZSkge1xyXG4gICAgICAgIC8vIEEgY3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QgaXMgaW4gcHJvZ3Jlc3MuIFdhaXQgdW50aWwgaXQgZmluaXNoZXMuXHJcbiAgICAgICAgYXdhaXQgcmVnaXN0cmF0aW9uUHJvbWlzZTtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBkZWxldGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIGNvbnN0IGVuZHBvaW50ID0gZ2V0RGVsZXRlRW5kcG9pbnQoYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25FbnRyeSk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVyc1dpdGhBdXRoKGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpO1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnNcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJldHJ5SWZTZXJ2ZXJFcnJvcigoKSA9PiBmZXRjaChlbmRwb2ludCwgcmVxdWVzdCkpO1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IGF3YWl0IGdldEVycm9yRnJvbVJlc3BvbnNlKCdEZWxldGUgSW5zdGFsbGF0aW9uJywgcmVzcG9uc2UpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldERlbGV0ZUVuZHBvaW50KGFwcENvbmZpZywgeyBmaWQgfSkge1xyXG4gICAgcmV0dXJuIGAke2dldEluc3RhbGxhdGlvbnNFbmRwb2ludChhcHBDb25maWcpfS8ke2ZpZH1gO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBEZWxldGVzIHRoZSBGaXJlYmFzZSBJbnN0YWxsYXRpb24gYW5kIGFsbCBhc3NvY2lhdGVkIGRhdGEuXHJcbiAqIEBwYXJhbSBpbnN0YWxsYXRpb25zIC0gVGhlIGBJbnN0YWxsYXRpb25zYCBpbnN0YW5jZS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5zdGFsbGF0aW9ucyhpbnN0YWxsYXRpb25zKSB7XHJcbiAgICBjb25zdCB7IGFwcENvbmZpZyB9ID0gaW5zdGFsbGF0aW9ucztcclxuICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdXBkYXRlKGFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xyXG4gICAgICAgIGlmIChvbGRFbnRyeSAmJiBvbGRFbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDAgLyogUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCAqLykge1xyXG4gICAgICAgICAgICAvLyBEZWxldGUgdGhlIHVucmVnaXN0ZXJlZCBlbnRyeSB3aXRob3V0IHNlbmRpbmcgYSBkZWxldGVJbnN0YWxsYXRpb24gcmVxdWVzdC5cclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9sZEVudHJ5O1xyXG4gICAgfSk7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgICBpZiAoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8pIHtcclxuICAgICAgICAgICAgLy8gQ2FuJ3QgZGVsZXRlIHdoaWxlIHRyeWluZyB0byByZWdpc3Rlci5cclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJkZWxldGUtcGVuZGluZy1yZWdpc3RyYXRpb25cIiAvKiBFcnJvckNvZGUuREVMRVRFX1BFTkRJTkdfUkVHSVNUUkFUSU9OICovKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAyIC8qIFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEICovKSB7XHJcbiAgICAgICAgICAgIGlmICghbmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJhcHAtb2ZmbGluZVwiIC8qIEVycm9yQ29kZS5BUFBfT0ZGTElORSAqLyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkZWxldGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZywgZW50cnkpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVtb3ZlKGFwcENvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFNldHMgYSBuZXcgY2FsbGJhY2sgdGhhdCB3aWxsIGdldCBjYWxsZWQgd2hlbiBJbnN0YWxsYXRpb24gSUQgY2hhbmdlcy5cclxuICogUmV0dXJucyBhbiB1bnN1YnNjcmliZSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVtb3ZlIHRoZSBjYWxsYmFjayB3aGVuIGNhbGxlZC5cclxuICogQHBhcmFtIGluc3RhbGxhdGlvbnMgLSBUaGUgYEluc3RhbGxhdGlvbnNgIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIHdoZW4gRklEIGNoYW5nZXMuXHJcbiAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgY2FsbGVkIHRvIHVuc3Vic2NyaWJlLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBvbklkQ2hhbmdlKGluc3RhbGxhdGlvbnMsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCB7IGFwcENvbmZpZyB9ID0gaW5zdGFsbGF0aW9ucztcclxuICAgIGFkZENhbGxiYWNrKGFwcENvbmZpZywgY2FsbGJhY2spO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICByZW1vdmVDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKTtcclxuICAgIH07XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2Yge0BsaW5rIEluc3RhbGxhdGlvbnN9IGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW5cclxuICoge0BsaW5rIEBmaXJlYmFzZS9hcHAjRmlyZWJhc2VBcHB9IGluc3RhbmNlLlxyXG4gKiBAcGFyYW0gYXBwIC0gVGhlIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSBpbnN0YW5jZS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SW5zdGFsbGF0aW9ucyhhcHAgPSBnZXRBcHAoKSkge1xyXG4gICAgY29uc3QgaW5zdGFsbGF0aW9uc0ltcGwgPSBfZ2V0UHJvdmlkZXIoYXBwLCAnaW5zdGFsbGF0aW9ucycpLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgcmV0dXJuIGluc3RhbGxhdGlvbnNJbXBsO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGV4dHJhY3RBcHBDb25maWcoYXBwKSB7XHJcbiAgICBpZiAoIWFwcCB8fCAhYXBwLm9wdGlvbnMpIHtcclxuICAgICAgICB0aHJvdyBnZXRNaXNzaW5nVmFsdWVFcnJvcignQXBwIENvbmZpZ3VyYXRpb24nKTtcclxuICAgIH1cclxuICAgIGlmICghYXBwLm5hbWUpIHtcclxuICAgICAgICB0aHJvdyBnZXRNaXNzaW5nVmFsdWVFcnJvcignQXBwIE5hbWUnKTtcclxuICAgIH1cclxuICAgIC8vIFJlcXVpcmVkIGFwcCBjb25maWcga2V5c1xyXG4gICAgY29uc3QgY29uZmlnS2V5cyA9IFtcclxuICAgICAgICAncHJvamVjdElkJyxcclxuICAgICAgICAnYXBpS2V5JyxcclxuICAgICAgICAnYXBwSWQnXHJcbiAgICBdO1xyXG4gICAgZm9yIChjb25zdCBrZXlOYW1lIG9mIGNvbmZpZ0tleXMpIHtcclxuICAgICAgICBpZiAoIWFwcC5vcHRpb25zW2tleU5hbWVdKSB7XHJcbiAgICAgICAgICAgIHRocm93IGdldE1pc3NpbmdWYWx1ZUVycm9yKGtleU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXBwTmFtZTogYXBwLm5hbWUsXHJcbiAgICAgICAgcHJvamVjdElkOiBhcHAub3B0aW9ucy5wcm9qZWN0SWQsXHJcbiAgICAgICAgYXBpS2V5OiBhcHAub3B0aW9ucy5hcGlLZXksXHJcbiAgICAgICAgYXBwSWQ6IGFwcC5vcHRpb25zLmFwcElkXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGdldE1pc3NpbmdWYWx1ZUVycm9yKHZhbHVlTmFtZSkge1xyXG4gICAgcmV0dXJuIEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibWlzc2luZy1hcHAtY29uZmlnLXZhbHVlc1wiIC8qIEVycm9yQ29kZS5NSVNTSU5HX0FQUF9DT05GSUdfVkFMVUVTICovLCB7XHJcbiAgICAgICAgdmFsdWVOYW1lXHJcbiAgICB9KTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBJTlNUQUxMQVRJT05TX05BTUUgPSAnaW5zdGFsbGF0aW9ucyc7XHJcbmNvbnN0IElOU1RBTExBVElPTlNfTkFNRV9JTlRFUk5BTCA9ICdpbnN0YWxsYXRpb25zLWludGVybmFsJztcclxuY29uc3QgcHVibGljRmFjdG9yeSA9IChjb250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IGFwcCA9IGNvbnRhaW5lci5nZXRQcm92aWRlcignYXBwJykuZ2V0SW1tZWRpYXRlKCk7XHJcbiAgICAvLyBUaHJvd3MgaWYgYXBwIGlzbid0IGNvbmZpZ3VyZWQgcHJvcGVybHkuXHJcbiAgICBjb25zdCBhcHBDb25maWcgPSBleHRyYWN0QXBwQ29uZmlnKGFwcCk7XHJcbiAgICBjb25zdCBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIgPSBfZ2V0UHJvdmlkZXIoYXBwLCAnaGVhcnRiZWF0Jyk7XHJcbiAgICBjb25zdCBpbnN0YWxsYXRpb25zSW1wbCA9IHtcclxuICAgICAgICBhcHAsXHJcbiAgICAgICAgYXBwQ29uZmlnLFxyXG4gICAgICAgIGhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlcixcclxuICAgICAgICBfZGVsZXRlOiAoKSA9PiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgfTtcclxuICAgIHJldHVybiBpbnN0YWxsYXRpb25zSW1wbDtcclxufTtcclxuY29uc3QgaW50ZXJuYWxGYWN0b3J5ID0gKGNvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3QgYXBwID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKTtcclxuICAgIC8vIEludGVybmFsIEZJUyBpbnN0YW5jZSByZWxpZXMgb24gcHVibGljIEZJUyBpbnN0YW5jZS5cclxuICAgIGNvbnN0IGluc3RhbGxhdGlvbnMgPSBfZ2V0UHJvdmlkZXIoYXBwLCBJTlNUQUxMQVRJT05TX05BTUUpLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgY29uc3QgaW5zdGFsbGF0aW9uc0ludGVybmFsID0ge1xyXG4gICAgICAgIGdldElkOiAoKSA9PiBnZXRJZChpbnN0YWxsYXRpb25zKSxcclxuICAgICAgICBnZXRUb2tlbjogKGZvcmNlUmVmcmVzaCkgPT4gZ2V0VG9rZW4oaW5zdGFsbGF0aW9ucywgZm9yY2VSZWZyZXNoKVxyXG4gICAgfTtcclxuICAgIHJldHVybiBpbnN0YWxsYXRpb25zSW50ZXJuYWw7XHJcbn07XHJcbmZ1bmN0aW9uIHJlZ2lzdGVySW5zdGFsbGF0aW9ucygpIHtcclxuICAgIF9yZWdpc3RlckNvbXBvbmVudChuZXcgQ29tcG9uZW50KElOU1RBTExBVElPTlNfTkFNRSwgcHVibGljRmFjdG9yeSwgXCJQVUJMSUNcIiAvKiBDb21wb25lbnRUeXBlLlBVQkxJQyAqLykpO1xyXG4gICAgX3JlZ2lzdGVyQ29tcG9uZW50KG5ldyBDb21wb25lbnQoSU5TVEFMTEFUSU9OU19OQU1FX0lOVEVSTkFMLCBpbnRlcm5hbEZhY3RvcnksIFwiUFJJVkFURVwiIC8qIENvbXBvbmVudFR5cGUuUFJJVkFURSAqLykpO1xyXG59XG5cbi8qKlxyXG4gKiBUaGUgRmlyZWJhc2UgSW5zdGFsbGF0aW9ucyBXZWIgU0RLLlxyXG4gKiBUaGlzIFNESyBkb2VzIG5vdCB3b3JrIGluIGEgTm9kZS5qcyBlbnZpcm9ubWVudC5cclxuICpcclxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXHJcbiAqL1xyXG5yZWdpc3Rlckluc3RhbGxhdGlvbnMoKTtcclxucmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24pO1xyXG4vLyBCVUlMRF9UQVJHRVQgd2lsbCBiZSByZXBsYWNlZCBieSB2YWx1ZXMgbGlrZSBlc20yMDE3LCBjanMyMDE3LCBldGMgZHVyaW5nIHRoZSBjb21waWxhdGlvblxyXG5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJ2VzbTIwMTcnKTtcblxuZXhwb3J0IHsgZGVsZXRlSW5zdGFsbGF0aW9ucywgZ2V0SWQsIGdldEluc3RhbGxhdGlvbnMsIGdldFRva2VuLCBvbklkQ2hhbmdlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20yMDE3LmpzLm1hcFxuIiwiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciBhbGwgb2YgdGhlIExvZ2dlciBpbnN0YW5jZXNcclxuICovXHJcbmNvbnN0IGluc3RhbmNlcyA9IFtdO1xyXG4vKipcclxuICogVGhlIEpTIFNESyBzdXBwb3J0cyA1IGxvZyBsZXZlbHMgYW5kIGFsc28gYWxsb3dzIGEgdXNlciB0aGUgYWJpbGl0eSB0b1xyXG4gKiBzaWxlbmNlIHRoZSBsb2dzIGFsdG9nZXRoZXIuXHJcbiAqXHJcbiAqIFRoZSBvcmRlciBpcyBhIGZvbGxvd3M6XHJcbiAqIERFQlVHIDwgVkVSQk9TRSA8IElORk8gPCBXQVJOIDwgRVJST1JcclxuICpcclxuICogQWxsIG9mIHRoZSBsb2cgdHlwZXMgYWJvdmUgdGhlIGN1cnJlbnQgbG9nIGxldmVsIHdpbGwgYmUgY2FwdHVyZWQgKGkuZS4gaWZcclxuICogeW91IHNldCB0aGUgbG9nIGxldmVsIHRvIGBJTkZPYCwgZXJyb3JzIHdpbGwgc3RpbGwgYmUgbG9nZ2VkLCBidXQgYERFQlVHYCBhbmRcclxuICogYFZFUkJPU0VgIGxvZ3Mgd2lsbCBub3QpXHJcbiAqL1xyXG52YXIgTG9nTGV2ZWw7XHJcbihmdW5jdGlvbiAoTG9nTGV2ZWwpIHtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiREVCVUdcIl0gPSAwXSA9IFwiREVCVUdcIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiVkVSQk9TRVwiXSA9IDFdID0gXCJWRVJCT1NFXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIklORk9cIl0gPSAyXSA9IFwiSU5GT1wiO1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJXQVJOXCJdID0gM10gPSBcIldBUk5cIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiRVJST1JcIl0gPSA0XSA9IFwiRVJST1JcIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiU0lMRU5UXCJdID0gNV0gPSBcIlNJTEVOVFwiO1xyXG59KShMb2dMZXZlbCB8fCAoTG9nTGV2ZWwgPSB7fSkpO1xyXG5jb25zdCBsZXZlbFN0cmluZ1RvRW51bSA9IHtcclxuICAgICdkZWJ1Zyc6IExvZ0xldmVsLkRFQlVHLFxyXG4gICAgJ3ZlcmJvc2UnOiBMb2dMZXZlbC5WRVJCT1NFLFxyXG4gICAgJ2luZm8nOiBMb2dMZXZlbC5JTkZPLFxyXG4gICAgJ3dhcm4nOiBMb2dMZXZlbC5XQVJOLFxyXG4gICAgJ2Vycm9yJzogTG9nTGV2ZWwuRVJST1IsXHJcbiAgICAnc2lsZW50JzogTG9nTGV2ZWwuU0lMRU5UXHJcbn07XHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBsb2cgbGV2ZWxcclxuICovXHJcbmNvbnN0IGRlZmF1bHRMb2dMZXZlbCA9IExvZ0xldmVsLklORk87XHJcbi8qKlxyXG4gKiBCeSBkZWZhdWx0LCBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGRpc3BsYXllZCBpbiB0aGUgZGV2ZWxvcGVyIGNvbnNvbGUgKGluXHJcbiAqIGNocm9tZSkuIFRvIGF2b2lkIGZvcmNpbmcgdXNlcnMgdG8gaGF2ZSB0byBvcHQtaW4gdG8gdGhlc2UgbG9ncyB0d2ljZVxyXG4gKiAoaS5lLiBvbmNlIGZvciBmaXJlYmFzZSwgYW5kIG9uY2UgaW4gdGhlIGNvbnNvbGUpLCB3ZSBhcmUgc2VuZGluZyBgREVCVUdgXHJcbiAqIGxvZ3MgdG8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24uXHJcbiAqL1xyXG5jb25zdCBDb25zb2xlTWV0aG9kID0ge1xyXG4gICAgW0xvZ0xldmVsLkRFQlVHXTogJ2xvZycsXHJcbiAgICBbTG9nTGV2ZWwuVkVSQk9TRV06ICdsb2cnLFxyXG4gICAgW0xvZ0xldmVsLklORk9dOiAnaW5mbycsXHJcbiAgICBbTG9nTGV2ZWwuV0FSTl06ICd3YXJuJyxcclxuICAgIFtMb2dMZXZlbC5FUlJPUl06ICdlcnJvcidcclxufTtcclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IGxvZyBoYW5kbGVyIHdpbGwgZm9yd2FyZCBERUJVRywgVkVSQk9TRSwgSU5GTywgV0FSTiwgYW5kIEVSUk9SXHJcbiAqIG1lc3NhZ2VzIG9uIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcgY29uc29sZSBjb3VudGVycGFydHMgKGlmIHRoZSBsb2cgbWV0aG9kXHJcbiAqIGlzIHN1cHBvcnRlZCBieSB0aGUgY3VycmVudCBsb2cgbGV2ZWwpXHJcbiAqL1xyXG5jb25zdCBkZWZhdWx0TG9nSGFuZGxlciA9IChpbnN0YW5jZSwgbG9nVHlwZSwgLi4uYXJncykgPT4ge1xyXG4gICAgaWYgKGxvZ1R5cGUgPCBpbnN0YW5jZS5sb2dMZXZlbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcclxuICAgIGNvbnN0IG1ldGhvZCA9IENvbnNvbGVNZXRob2RbbG9nVHlwZV07XHJcbiAgICBpZiAobWV0aG9kKSB7XHJcbiAgICAgICAgY29uc29sZVttZXRob2RdKGBbJHtub3d9XSAgJHtpbnN0YW5jZS5uYW1lfTpgLCAuLi5hcmdzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0ZW1wdGVkIHRvIGxvZyBhIG1lc3NhZ2Ugd2l0aCBhbiBpbnZhbGlkIGxvZ1R5cGUgKHZhbHVlOiAke2xvZ1R5cGV9KWApO1xyXG4gICAgfVxyXG59O1xyXG5jbGFzcyBMb2dnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlcyB5b3UgYW4gaW5zdGFuY2Ugb2YgYSBMb2dnZXIgdG8gY2FwdHVyZSBtZXNzYWdlcyBhY2NvcmRpbmcgdG9cclxuICAgICAqIEZpcmViYXNlJ3MgbG9nZ2luZyBzY2hlbWUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgdGhhdCB0aGUgbG9ncyB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbG9nIGxldmVsIG9mIHRoZSBnaXZlbiBMb2dnZXIgaW5zdGFuY2UuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fbG9nTGV2ZWwgPSBkZWZhdWx0TG9nTGV2ZWw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1haW4gKGludGVybmFsKSBsb2cgaGFuZGxlciBmb3IgdGhlIExvZ2dlciBpbnN0YW5jZS5cclxuICAgICAgICAgKiBDYW4gYmUgc2V0IHRvIGEgbmV3IGZ1bmN0aW9uIGluIGludGVybmFsIHBhY2thZ2UgY29kZSBidXQgbm90IGJ5IHVzZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlciA9IGRlZmF1bHRMb2dIYW5kbGVyO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBvcHRpb25hbCwgYWRkaXRpb25hbCwgdXNlci1kZWZpbmVkIGxvZyBoYW5kbGVyIGZvciB0aGUgTG9nZ2VyIGluc3RhbmNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyID0gbnVsbDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYXB0dXJlIHRoZSBjdXJyZW50IGluc3RhbmNlIGZvciBsYXRlciB1c2VcclxuICAgICAgICAgKi9cclxuICAgICAgICBpbnN0YW5jZXMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuICAgIGdldCBsb2dMZXZlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9nTGV2ZWw7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9nTGV2ZWwodmFsKSB7XHJcbiAgICAgICAgaWYgKCEodmFsIGluIExvZ0xldmVsKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHZhbHVlIFwiJHt2YWx9XCIgYXNzaWduZWQgdG8gXFxgbG9nTGV2ZWxcXGBgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbG9nTGV2ZWwgPSB2YWw7XHJcbiAgICB9XHJcbiAgICAvLyBXb3JrYXJvdW5kIGZvciBzZXR0ZXIvZ2V0dGVyIGhhdmluZyB0byBiZSB0aGUgc2FtZSB0eXBlLlxyXG4gICAgc2V0TG9nTGV2ZWwodmFsKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nTGV2ZWwgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IGxldmVsU3RyaW5nVG9FbnVtW3ZhbF0gOiB2YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgbG9nSGFuZGxlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9nSGFuZGxlcjtcclxuICAgIH1cclxuICAgIHNldCBsb2dIYW5kbGVyKHZhbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZhbHVlIGFzc2lnbmVkIHRvIGBsb2dIYW5kbGVyYCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlciA9IHZhbDtcclxuICAgIH1cclxuICAgIGdldCB1c2VyTG9nSGFuZGxlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckxvZ0hhbmRsZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgdXNlckxvZ0hhbmRsZXIodmFsKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgPSB2YWw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBmdW5jdGlvbnMgYmVsb3cgYXJlIGFsbCBiYXNlZCBvbiB0aGUgYGNvbnNvbGVgIGludGVyZmFjZVxyXG4gICAgICovXHJcbiAgICBkZWJ1ZyguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuREVCVUcsIC4uLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuREVCVUcsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gICAgbG9nKC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJlxyXG4gICAgICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5WRVJCT1NFLCAuLi5hcmdzKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLlZFUkJPU0UsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gICAgaW5mbyguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuSU5GTywgLi4uYXJncyk7XHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5JTkZPLCAuLi5hcmdzKTtcclxuICAgIH1cclxuICAgIHdhcm4oLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLldBUk4sIC4uLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuV0FSTiwgLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgICBlcnJvciguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuRVJST1IsIC4uLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuRVJST1IsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNldExvZ0xldmVsKGxldmVsKSB7XHJcbiAgICBpbnN0YW5jZXMuZm9yRWFjaChpbnN0ID0+IHtcclxuICAgICAgICBpbnN0LnNldExvZ0xldmVsKGxldmVsKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHNldFVzZXJMb2dIYW5kbGVyKGxvZ0NhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIGluc3RhbmNlcykge1xyXG4gICAgICAgIGxldCBjdXN0b21Mb2dMZXZlbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZXZlbCkge1xyXG4gICAgICAgICAgICBjdXN0b21Mb2dMZXZlbCA9IGxldmVsU3RyaW5nVG9FbnVtW29wdGlvbnMubGV2ZWxdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9nQ2FsbGJhY2sgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UudXNlckxvZ0hhbmRsZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UudXNlckxvZ0hhbmRsZXIgPSAoaW5zdGFuY2UsIGxldmVsLCAuLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYXJnc1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoYXJnID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJnID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8IHR5cGVvZiBhcmcgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFyZyBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmcubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoaWdub3JlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoYXJnID0+IGFyZylcclxuICAgICAgICAgICAgICAgICAgICAuam9pbignICcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxldmVsID49IChjdXN0b21Mb2dMZXZlbCAhPT0gbnVsbCAmJiBjdXN0b21Mb2dMZXZlbCAhPT0gdm9pZCAwID8gY3VzdG9tTG9nTGV2ZWwgOiBpbnN0YW5jZS5sb2dMZXZlbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dDYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBMb2dMZXZlbFtsZXZlbF0udG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogaW5zdGFuY2UubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5leHBvcnQgeyBMb2dMZXZlbCwgTG9nZ2VyLCBzZXRMb2dMZXZlbCwgc2V0VXNlckxvZ0hhbmRsZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbTIwMTcuanMubWFwXG4iLCJpbXBvcnQgeyByZWdpc3RlclZlcnNpb24gfSBmcm9tICdAZmlyZWJhc2UvYXBwJztcbmV4cG9ydCAqIGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuXG52YXIgbmFtZSA9IFwiZmlyZWJhc2VcIjtcbnZhciB2ZXJzaW9uID0gXCIxMS4wLjFcIjtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxucmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24sICdhcHAnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImV4cG9ydCAqIGZyb20gJ0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImltcG9ydCB7IHcgYXMgd3JhcCwgciBhcyByZXBsYWNlVHJhcHMgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcbmV4cG9ydCB7IHUgYXMgdW53cmFwLCB3IGFzIHdyYXAgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcblxuLyoqXG4gKiBPcGVuIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKiBAcGFyYW0gdmVyc2lvbiBTY2hlbWEgdmVyc2lvbi5cbiAqIEBwYXJhbSBjYWxsYmFja3MgQWRkaXRpb25hbCBjYWxsYmFja3MuXG4gKi9cbmZ1bmN0aW9uIG9wZW5EQihuYW1lLCB2ZXJzaW9uLCB7IGJsb2NrZWQsIHVwZ3JhZGUsIGJsb2NraW5nLCB0ZXJtaW5hdGVkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihuYW1lLCB2ZXJzaW9uKTtcbiAgICBjb25zdCBvcGVuUHJvbWlzZSA9IHdyYXAocmVxdWVzdCk7XG4gICAgaWYgKHVwZ3JhZGUpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCd1cGdyYWRlbmVlZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGdyYWRlKHdyYXAocmVxdWVzdC5yZXN1bHQpLCBldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCB3cmFwKHJlcXVlc3QudHJhbnNhY3Rpb24pLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYmxvY2tlZCkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+IGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgZXZlbnQpKTtcbiAgICB9XG4gICAgb3BlblByb21pc2VcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgIGlmICh0ZXJtaW5hdGVkKVxuICAgICAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB0ZXJtaW5hdGVkKCkpO1xuICAgICAgICBpZiAoYmxvY2tpbmcpIHtcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ3ZlcnNpb25jaGFuZ2UnLCAoZXZlbnQpID0+IGJsb2NraW5nKGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICByZXR1cm4gb3BlblByb21pc2U7XG59XG4vKipcbiAqIERlbGV0ZSBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICovXG5mdW5jdGlvbiBkZWxldGVEQihuYW1lLCB7IGJsb2NrZWQgfSA9IHt9KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShuYW1lKTtcbiAgICBpZiAoYmxvY2tlZCkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+IGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyYXAocmVxdWVzdCkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xufVxuXG5jb25zdCByZWFkTWV0aG9kcyA9IFsnZ2V0JywgJ2dldEtleScsICdnZXRBbGwnLCAnZ2V0QWxsS2V5cycsICdjb3VudCddO1xuY29uc3Qgd3JpdGVNZXRob2RzID0gWydwdXQnLCAnYWRkJywgJ2RlbGV0ZScsICdjbGVhciddO1xuY29uc3QgY2FjaGVkTWV0aG9kcyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHtcbiAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBJREJEYXRhYmFzZSAmJlxuICAgICAgICAhKHByb3AgaW4gdGFyZ2V0KSAmJlxuICAgICAgICB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApKVxuICAgICAgICByZXR1cm4gY2FjaGVkTWV0aG9kcy5nZXQocHJvcCk7XG4gICAgY29uc3QgdGFyZ2V0RnVuY05hbWUgPSBwcm9wLnJlcGxhY2UoL0Zyb21JbmRleCQvLCAnJyk7XG4gICAgY29uc3QgdXNlSW5kZXggPSBwcm9wICE9PSB0YXJnZXRGdW5jTmFtZTtcbiAgICBjb25zdCBpc1dyaXRlID0gd3JpdGVNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKTtcbiAgICBpZiAoXG4gICAgLy8gQmFpbCBpZiB0aGUgdGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgb24gdGhlIHRhcmdldC4gRWcsIGdldEFsbCBpc24ndCBpbiBFZGdlLlxuICAgICEodGFyZ2V0RnVuY05hbWUgaW4gKHVzZUluZGV4ID8gSURCSW5kZXggOiBJREJPYmplY3RTdG9yZSkucHJvdG90eXBlKSB8fFxuICAgICAgICAhKGlzV3JpdGUgfHwgcmVhZE1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1ldGhvZCA9IGFzeW5jIGZ1bmN0aW9uIChzdG9yZU5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogdW5kZWZpbmVkIGd6aXBwcyBiZXR0ZXIsIGJ1dCBmYWlscyBpbiBFZGdlIDooXG4gICAgICAgIGNvbnN0IHR4ID0gdGhpcy50cmFuc2FjdGlvbihzdG9yZU5hbWUsIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6ICdyZWFkb25seScpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdHguc3RvcmU7XG4gICAgICAgIGlmICh1c2VJbmRleClcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5pbmRleChhcmdzLnNoaWZ0KCkpO1xuICAgICAgICAvLyBNdXN0IHJlamVjdCBpZiBvcCByZWplY3RzLlxuICAgICAgICAvLyBJZiBpdCdzIGEgd3JpdGUgb3BlcmF0aW9uLCBtdXN0IHJlamVjdCBpZiB0eC5kb25lIHJlamVjdHMuXG4gICAgICAgIC8vIE11c3QgcmVqZWN0IHdpdGggb3AgcmVqZWN0aW9uIGZpcnN0LlxuICAgICAgICAvLyBNdXN0IHJlc29sdmUgd2l0aCBvcCB2YWx1ZS5cbiAgICAgICAgLy8gTXVzdCBoYW5kbGUgYm90aCBwcm9taXNlcyAobm8gdW5oYW5kbGVkIHJlamVjdGlvbnMpXG4gICAgICAgIHJldHVybiAoYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGFyZ2V0W3RhcmdldEZ1bmNOYW1lXSguLi5hcmdzKSxcbiAgICAgICAgICAgIGlzV3JpdGUgJiYgdHguZG9uZSxcbiAgICAgICAgXSkpWzBdO1xuICAgIH07XG4gICAgY2FjaGVkTWV0aG9kcy5zZXQocHJvcCwgbWV0aG9kKTtcbiAgICByZXR1cm4gbWV0aG9kO1xufVxucmVwbGFjZVRyYXBzKChvbGRUcmFwcykgPT4gKHtcbiAgICAuLi5vbGRUcmFwcyxcbiAgICBnZXQ6ICh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSA9PiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlciksXG4gICAgaGFzOiAodGFyZ2V0LCBwcm9wKSA9PiAhIWdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmhhcyh0YXJnZXQsIHByb3ApLFxufSkpO1xuXG5leHBvcnQgeyBkZWxldGVEQiwgb3BlbkRCIH07XG4iLCJjb25zdCBpbnN0YW5jZU9mQW55ID0gKG9iamVjdCwgY29uc3RydWN0b3JzKSA9PiBjb25zdHJ1Y3RvcnMuc29tZSgoYykgPT4gb2JqZWN0IGluc3RhbmNlb2YgYyk7XG5cbmxldCBpZGJQcm94eWFibGVUeXBlcztcbmxldCBjdXJzb3JBZHZhbmNlTWV0aG9kcztcbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSB7XG4gICAgcmV0dXJuIChpZGJQcm94eWFibGVUeXBlcyB8fFxuICAgICAgICAoaWRiUHJveHlhYmxlVHlwZXMgPSBbXG4gICAgICAgICAgICBJREJEYXRhYmFzZSxcbiAgICAgICAgICAgIElEQk9iamVjdFN0b3JlLFxuICAgICAgICAgICAgSURCSW5kZXgsXG4gICAgICAgICAgICBJREJDdXJzb3IsXG4gICAgICAgICAgICBJREJUcmFuc2FjdGlvbixcbiAgICAgICAgXSkpO1xufVxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpIHtcbiAgICByZXR1cm4gKGN1cnNvckFkdmFuY2VNZXRob2RzIHx8XG4gICAgICAgIChjdXJzb3JBZHZhbmNlTWV0aG9kcyA9IFtcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuYWR2YW5jZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWUsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlUHJpbWFyeUtleSxcbiAgICAgICAgXSkpO1xufVxuY29uc3QgY3Vyc29yUmVxdWVzdE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2FjdGlvbkRvbmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUod3JhcChyZXF1ZXN0LnJlc3VsdCkpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICB9KTtcbiAgICBwcm9taXNlXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBTaW5jZSBjdXJzb3JpbmcgcmV1c2VzIHRoZSBJREJSZXF1ZXN0ICgqc2lnaCopLCB3ZSBjYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsXG4gICAgICAgIC8vIChzZWUgd3JhcEZ1bmN0aW9uKS5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCQ3Vyc29yKSB7XG4gICAgICAgICAgICBjdXJzb3JSZXF1ZXN0TWFwLnNldCh2YWx1ZSwgcmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2F0Y2hpbmcgdG8gYXZvaWQgXCJVbmNhdWdodCBQcm9taXNlIGV4Y2VwdGlvbnNcIlxuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIC8vIFRoaXMgbWFwcGluZyBleGlzdHMgaW4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGJ1dCBkb2Vzbid0IGRvZXNuJ3QgZXhpc3QgaW4gdHJhbnNmb3JtQ2FjaGUuIFRoaXNcbiAgICAvLyBpcyBiZWNhdXNlIHdlIGNyZWF0ZSBtYW55IHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdC5cbiAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KHByb21pc2UsIHJlcXVlc3QpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHR4KSB7XG4gICAgLy8gRWFybHkgYmFpbCBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgYSBkb25lIHByb21pc2UgZm9yIHRoaXMgdHJhbnNhY3Rpb24uXG4gICAgaWYgKHRyYW5zYWN0aW9uRG9uZU1hcC5oYXModHgpKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QodHguZXJyb3IgfHwgbmV3IERPTUV4Y2VwdGlvbignQWJvcnRFcnJvcicsICdBYm9ydEVycm9yJykpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICB9KTtcbiAgICAvLyBDYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsLlxuICAgIHRyYW5zYWN0aW9uRG9uZU1hcC5zZXQodHgsIGRvbmUpO1xufVxubGV0IGlkYlByb3h5VHJhcHMgPSB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciB0cmFuc2FjdGlvbi5kb25lLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdkb25lJylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb25Eb25lTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgLy8gUG9seWZpbGwgZm9yIG9iamVjdFN0b3JlTmFtZXMgYmVjYXVzZSBvZiBFZGdlLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdvYmplY3RTdG9yZU5hbWVzJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQub2JqZWN0U3RvcmVOYW1lcyB8fCB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHR4LnN0b3JlIHJldHVybiB0aGUgb25seSBzdG9yZSBpbiB0aGUgdHJhbnNhY3Rpb24sIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbWFueS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3RvcmUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgOiByZWNlaXZlci5vYmplY3RTdG9yZShyZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbHNlIHRyYW5zZm9ybSB3aGF0ZXZlciB3ZSBnZXQgYmFjay5cbiAgICAgICAgcmV0dXJuIHdyYXAodGFyZ2V0W3Byb3BdKTtcbiAgICB9LFxuICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uICYmXG4gICAgICAgICAgICAocHJvcCA9PT0gJ2RvbmUnIHx8IHByb3AgPT09ICdzdG9yZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQ7XG4gICAgfSxcbn07XG5mdW5jdGlvbiByZXBsYWNlVHJhcHMoY2FsbGJhY2spIHtcbiAgICBpZGJQcm94eVRyYXBzID0gY2FsbGJhY2soaWRiUHJveHlUcmFwcyk7XG59XG5mdW5jdGlvbiB3cmFwRnVuY3Rpb24oZnVuYykge1xuICAgIC8vIER1ZSB0byBleHBlY3RlZCBvYmplY3QgZXF1YWxpdHkgKHdoaWNoIGlzIGVuZm9yY2VkIGJ5IHRoZSBjYWNoaW5nIGluIGB3cmFwYCksIHdlXG4gICAgLy8gb25seSBjcmVhdGUgb25lIG5ldyBmdW5jIHBlciBmdW5jLlxuICAgIC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG9iamVjdFN0b3JlTmFtZXMgKGJvb28pLCBzbyB3ZSBwb2x5ZmlsbCBpdCBoZXJlLlxuICAgIGlmIChmdW5jID09PSBJREJEYXRhYmFzZS5wcm90b3R5cGUudHJhbnNhY3Rpb24gJiZcbiAgICAgICAgISgnb2JqZWN0U3RvcmVOYW1lcycgaW4gSURCVHJhbnNhY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHN0b3JlTmFtZXMsIC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gZnVuYy5jYWxsKHVud3JhcCh0aGlzKSwgc3RvcmVOYW1lcywgLi4uYXJncyk7XG4gICAgICAgICAgICB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuc2V0KHR4LCBzdG9yZU5hbWVzLnNvcnQgPyBzdG9yZU5hbWVzLnNvcnQoKSA6IFtzdG9yZU5hbWVzXSk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcCh0eCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIEN1cnNvciBtZXRob2RzIGFyZSBzcGVjaWFsLCBhcyB0aGUgYmVoYXZpb3VyIGlzIGEgbGl0dGxlIG1vcmUgZGlmZmVyZW50IHRvIHN0YW5kYXJkIElEQi4gSW5cbiAgICAvLyBJREIsIHlvdSBhZHZhbmNlIHRoZSBjdXJzb3IgYW5kIHdhaXQgZm9yIGEgbmV3ICdzdWNjZXNzJyBvbiB0aGUgSURCUmVxdWVzdCB0aGF0IGdhdmUgeW91IHRoZVxuICAgIC8vIGN1cnNvci4gSXQncyBraW5kYSBsaWtlIGEgcHJvbWlzZSB0aGF0IGNhbiByZXNvbHZlIHdpdGggbWFueSB2YWx1ZXMuIFRoYXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gICAgLy8gd2l0aCByZWFsIHByb21pc2VzLCBzbyBlYWNoIGFkdmFuY2UgbWV0aG9kcyByZXR1cm5zIGEgbmV3IHByb21pc2UgZm9yIHRoZSBjdXJzb3Igb2JqZWN0LCBvclxuICAgIC8vIHVuZGVmaW5lZCBpZiB0aGUgZW5kIG9mIHRoZSBjdXJzb3IgaGFzIGJlZW4gcmVhY2hlZC5cbiAgICBpZiAoZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKS5pbmNsdWRlcyhmdW5jKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgICAgICBmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcChjdXJzb3JSZXF1ZXN0TWFwLmdldCh0aGlzKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgIHJldHVybiB3cmFwKGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gd3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgICAvLyBUaGlzIGRvZXNuJ3QgcmV0dXJuLCBpdCBqdXN0IGNyZWF0ZXMgYSAnZG9uZScgcHJvbWlzZSBmb3IgdGhlIHRyYW5zYWN0aW9uLFxuICAgIC8vIHdoaWNoIGlzIGxhdGVyIHJldHVybmVkIGZvciB0cmFuc2FjdGlvbi5kb25lIChzZWUgaWRiT2JqZWN0SGFuZGxlcikuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pXG4gICAgICAgIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih2YWx1ZSk7XG4gICAgaWYgKGluc3RhbmNlT2ZBbnkodmFsdWUsIGdldElkYlByb3h5YWJsZVR5cGVzKCkpKVxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHZhbHVlLCBpZGJQcm94eVRyYXBzKTtcbiAgICAvLyBSZXR1cm4gdGhlIHNhbWUgdmFsdWUgYmFjayBpZiB3ZSdyZSBub3QgZ29pbmcgdG8gdHJhbnNmb3JtIGl0LlxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHdyYXAodmFsdWUpIHtcbiAgICAvLyBXZSBzb21ldGltZXMgZ2VuZXJhdGUgbXVsdGlwbGUgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0IChlZyB3aGVuIGN1cnNvcmluZyksIGJlY2F1c2VcbiAgICAvLyBJREIgaXMgd2VpcmQgYW5kIGEgc2luZ2xlIElEQlJlcXVlc3QgY2FuIHlpZWxkIG1hbnkgcmVzcG9uc2VzLCBzbyB0aGVzZSBjYW4ndCBiZSBjYWNoZWQuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCUmVxdWVzdClcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3QodmFsdWUpO1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgdHJhbnNmb3JtZWQgdGhpcyB2YWx1ZSBiZWZvcmUsIHJldXNlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZS5cbiAgICAvLyBUaGlzIGlzIGZhc3RlciwgYnV0IGl0IGFsc28gcHJvdmlkZXMgb2JqZWN0IGVxdWFsaXR5LlxuICAgIGlmICh0cmFuc2Zvcm1DYWNoZS5oYXModmFsdWUpKVxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpO1xuICAgIC8vIE5vdCBhbGwgdHlwZXMgYXJlIHRyYW5zZm9ybWVkLlxuICAgIC8vIFRoZXNlIG1heSBiZSBwcmltaXRpdmUgdHlwZXMsIHNvIHRoZXkgY2FuJ3QgYmUgV2Vha01hcCBrZXlzLlxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdHJhbnNmb3JtQ2FjaGUuc2V0KHZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQobmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuY29uc3QgdW53cmFwID0gKHZhbHVlKSA9PiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcblxuZXhwb3J0IHsgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGFzIGEsIGluc3RhbmNlT2ZBbnkgYXMgaSwgcmVwbGFjZVRyYXBzIGFzIHIsIHVud3JhcCBhcyB1LCB3cmFwIGFzIHcgfTtcbiIsImltcG9ydCB7IFVuc2FmZU51bWJlclJlYXNvbiwgZXh0cmFjdFNpZ25pZmljYW50RGlnaXRzLCBnZXRVbnNhZmVOdW1iZXJSZWFzb24sIGlzSW50ZWdlciwgaXNOdW1iZXIgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBBIGxvc3NsZXNzIG51bWJlci4gU3RvcmVzIGl0cyBudW1lcmljIHZhbHVlIGFzIHN0cmluZ1xuICovXG5leHBvcnQgY2xhc3MgTG9zc2xlc3NOdW1iZXIge1xuICAvLyBudW1lcmljIHZhbHVlIGFzIHN0cmluZ1xuXG4gIC8vIHR5cGUgaW5mb3JtYXRpb25cbiAgaXNMb3NzbGVzc051bWJlciA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgaWYgKCFpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBudW1iZXIgKHZhbHVlOiBcIiR7dmFsdWV9XCIpYCk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG9mIHRoZSBMb3NzbGVzc051bWJlciBhcyBudW1iZXIgb3IgYmlnaW50LlxuICAgKlxuICAgKiAtIGEgbnVtYmVyIGlzIHJldHVybmVkIGZvciBzYWZlIG51bWJlcnMgYW5kIGRlY2ltYWwgdmFsdWVzIHRoYXQgb25seSBsb3NlIHNvbWUgaW5zaWduaWZpY2FudCBkaWdpdHNcbiAgICogLSBhIGJpZ2ludCBpcyByZXR1cm5lZCBmb3IgYmlnIGludGVnZXIgbnVtYmVyc1xuICAgKiAtIGFuIEVycm9yIGlzIHRocm93biBmb3IgdmFsdWVzIHRoYXQgd2lsbCBvdmVyZmxvdyBvciB1bmRlcmZsb3dcbiAgICpcbiAgICogTm90ZSB0aGF0IHlvdSBjYW4gaW1wbGVtZW50IHlvdXIgb3duIHN0cmF0ZWd5IGZvciBjb252ZXJzaW9uIGJ5IGp1c3QgZ2V0dGluZyB0aGUgdmFsdWUgYXMgc3RyaW5nXG4gICAqIHZpYSAudG9TdHJpbmcoKSwgYW5kIHVzaW5nIHV0aWwgZnVuY3Rpb25zIGxpa2UgaXNJbnRlZ2VyLCBpc1NhZmVOdW1iZXIsIGdldFVuc2FmZU51bWJlclJlYXNvbixcbiAgICogYW5kIHRvU2FmZU51bWJlck9yVGhyb3cgdG8gY29udmVydCBpdCB0byBhIG51bWVyaWMgdmFsdWUuXG4gICAqL1xuICB2YWx1ZU9mKCkge1xuICAgIGNvbnN0IHVuc2FmZVJlYXNvbiA9IGdldFVuc2FmZU51bWJlclJlYXNvbih0aGlzLnZhbHVlKTtcblxuICAgIC8vIHNhZmUgb3IgdHJ1bmNhdGVfZmxvYXRcbiAgICBpZiAodW5zYWZlUmVhc29uID09PSB1bmRlZmluZWQgfHwgdW5zYWZlUmVhc29uID09PSBVbnNhZmVOdW1iZXJSZWFzb24udHJ1bmNhdGVfZmxvYXQpIHtcbiAgICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyB0cnVuY2F0ZV9pbnRlZ2VyXG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIEJpZ0ludCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBvdmVyZmxvdyBvciB1bmRlcmZsb3dcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzYWZlbHkgY29udmVydCB0byBudW1iZXI6IHRoZSB2YWx1ZSAnJHt0aGlzLnZhbHVlfScgd291bGQgJHt1bnNhZmVSZWFzb259IGFuZCBiZWNvbWUgJHtOdW1iZXIucGFyc2VGbG9hdCh0aGlzLnZhbHVlKX1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG9mIHRoZSBMb3NzbGVzc051bWJlciBhcyBzdHJpbmcuXG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIC8vIE5vdGU6IHdlIGRvIE5PVCBpbXBsZW1lbnQgYSAudG9KU09OKCkgbWV0aG9kLCBhbmQgeW91IHNob3VsZCBub3QgaW1wbGVtZW50XG4gIC8vIG9yIHVzZSB0aGF0LCBpdCBjYW5ub3Qgc2FmZWx5IHR1cm4gdGhlIG51bWVyaWMgdmFsdWUgaW4gdGhlIHN0cmluZyBpbnRvXG4gIC8vIHN0cmluZ2lmaWVkIEpTT04gc2luY2UgaXQgaGFzIHRvIGJlIHBhcnNlZCBpbnRvIGEgbnVtYmVyIGZpcnN0LlxufVxuXG4vKipcbiAqIFRlc3Qgd2hldGhlciBhIHZhbHVlIGlzIGEgTG9zc2xlc3NOdW1iZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9zc2xlc3NOdW1iZXIodmFsdWUpIHtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5pc0xvc3NsZXNzTnVtYmVyID09PSB0cnVlIHx8IGZhbHNlO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSBudW1iZXIgaW50byBhIExvc3NsZXNzTnVtYmVyIGlmIHRoaXMgaXMgcG9zc2libGUgaW4gYSBzYWZlIHdheVxuICogSWYgdGhlIHZhbHVlIGhhcyB0b28gbWFueSBkaWdpdHMsIG9yIGlzIE5hTiBvciBJbmZpbml0eSwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvTG9zc2xlc3NOdW1iZXIodmFsdWUpIHtcbiAgaWYgKGV4dHJhY3RTaWduaWZpY2FudERpZ2l0cyhTdHJpbmcodmFsdWUpKS5sZW5ndGggPiAxNSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBudW1iZXI6IGNvbnRhaW5zIG1vcmUgdGhhbiAxNSBkaWdpdHMgYW5kIGlzIG1vc3QgbGlrZWx5IHRydW5jYXRlZCBhbmQgdW5zYWZlIGJ5IGl0c2VsZiAodmFsdWU6ICR7dmFsdWV9KWApO1xuICB9XG4gIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG51bWJlcjogTmFOJyk7XG4gIH1cbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG51bWJlcjogJHt2YWx1ZX1gKTtcbiAgfVxuICByZXR1cm4gbmV3IExvc3NsZXNzTnVtYmVyKFN0cmluZyh2YWx1ZSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TG9zc2xlc3NOdW1iZXIuanMubWFwIiwiLyoqXG4gKiBHZXQgYW5kL29yIHNldCBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiAqIEBkZXByZWNhdGVkIFRoZXJlIGlzIG5vIGNvbmZpZyBhbnltb3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25maWcoX29wdGlvbnMpIHtcbiAgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSB3YXJuaW5nIGZvciB2MS54XG4gIHRocm93IG5ldyBFcnJvcignY29uZmlnIGlzIGRlcHJlY2F0ZWQsIHN1cHBvcnQgZm9yIGNpcmN1bGFyUmVmcyBpcyByZW1vdmVkIGZyb20gdGhlIGxpYnJhcnkuICcgKyAnSWYgeW91IGVuY291bnRlciBjaXJjdWxhciByZWZlcmVuY2VzIGluIHlvdXIgZGF0YSBzdHJ1Y3R1cmVzLCAnICsgJ3BsZWFzZSByZXRoaW5rIHlvdXIgZGF0YXN0cnVjdHVyZXM6ICcgKyAnYmV0dGVyIHByZXZlbnQgY2lyY3VsYXIgcmVmZXJlbmNlcyBpbiB0aGUgZmlyc3QgcGxhY2UuJyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWcuanMubWFwIiwiZXhwb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcuanMnO1xuZXhwb3J0IHsgcGFyc2UgfSBmcm9tICcuL3BhcnNlLmpzJztcbmV4cG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmV4cG9ydCB7IExvc3NsZXNzTnVtYmVyLCBpc0xvc3NsZXNzTnVtYmVyLCB0b0xvc3NsZXNzTnVtYmVyIH0gZnJvbSAnLi9Mb3NzbGVzc051bWJlci5qcyc7XG5leHBvcnQgeyByZXZpdmVEYXRlIH0gZnJvbSAnLi9yZXZpdmVEYXRlLmpzJztcbmV4cG9ydCB7IHBhcnNlTG9zc2xlc3NOdW1iZXIsIHBhcnNlTnVtYmVyQW5kQmlnSW50IH0gZnJvbSAnLi9udW1iZXJQYXJzZXJzLmpzJztcbmV4cG9ydCB7IFVuc2FmZU51bWJlclJlYXNvbiwgaXNJbnRlZ2VyLCBpc051bWJlciwgaXNTYWZlTnVtYmVyLCB0b1NhZmVOdW1iZXJPclRocm93LCBnZXRVbnNhZmVOdW1iZXJSZWFzb24gfSBmcm9tICcuL3V0aWxzLmpzJztcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMuanMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgTG9zc2xlc3NOdW1iZXIgfSBmcm9tICcuL0xvc3NsZXNzTnVtYmVyLmpzJztcbmltcG9ydCB7IGlzSW50ZWdlciB9IGZyb20gJy4vdXRpbHMuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTG9zc2xlc3NOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBMb3NzbGVzc051bWJlcih2YWx1ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VOdW1iZXJBbmRCaWdJbnQodmFsdWUpIHtcbiAgcmV0dXJuIGlzSW50ZWdlcih2YWx1ZSkgPyBCaWdJbnQodmFsdWUpIDogTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bnVtYmVyUGFyc2Vycy5qcy5tYXAiLCJpbXBvcnQgeyBwYXJzZUxvc3NsZXNzTnVtYmVyIH0gZnJvbSAnLi9udW1iZXJQYXJzZXJzLmpzJztcbmltcG9ydCB7IHJldml2ZSB9IGZyb20gJy4vcmV2aXZlLmpzJztcbi8qKlxuICogVGhlIExvc3NsZXNzSlNPTi5wYXJzZSgpIG1ldGhvZCBwYXJzZXMgYSBzdHJpbmcgYXMgSlNPTiwgb3B0aW9uYWxseSB0cmFuc2Zvcm1pbmdcbiAqIHRoZSB2YWx1ZSBwcm9kdWNlZCBieSBwYXJzaW5nLlxuICpcbiAqIFRoZSBwYXJzZXIgaXMgYmFzZWQgb24gdGhlIHBhcnNlciBvZiBUYW4gTGkgSG91IHNoYXJlZCBpblxuICogaHR0cHM6Ly9saWhhdXRhbi5jb20vanNvbi1wYXJzZXItd2l0aC1qYXZhc2NyaXB0L1xuICpcbiAqIEBwYXJhbSB0ZXh0XG4gKiBUaGUgc3RyaW5nIHRvIHBhcnNlIGFzIEpTT04uIFNlZSB0aGUgSlNPTiBvYmplY3QgZm9yIGEgZGVzY3JpcHRpb24gb2YgSlNPTiBzeW50YXguXG4gKlxuICogQHBhcmFtIFtyZXZpdmVyXVxuICogSWYgYSBmdW5jdGlvbiwgcHJlc2NyaWJlcyBob3cgdGhlIHZhbHVlIG9yaWdpbmFsbHkgcHJvZHVjZWQgYnkgcGFyc2luZyBpc1xuICogdHJhbnNmb3JtZWQsIGJlZm9yZSBiZWluZyByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0gW3BhcnNlTnVtYmVyPXBhcnNlTG9zc2xlc3NOdW1iZXJdXG4gKiBQYXNzIGEgY3VzdG9tIG51bWJlciBwYXJzZXIuIElucHV0IGlzIGEgc3RyaW5nLCBhbmQgdGhlIG91dHB1dCBjYW4gYmUgdW5rbm93blxuICogbnVtZXJpYyB2YWx1ZTogbnVtYmVyLCBiaWdpbnQsIExvc3NsZXNzTnVtYmVyLCBvciBhIGN1c3RvbSBCaWdOdW1iZXIgbGlicmFyeS5cbiAqXG4gKiBAcmV0dXJucyBSZXR1cm5zIHRoZSBPYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gSlNPTiB0ZXh0LlxuICpcbiAqIEB0aHJvd3MgVGhyb3dzIGEgU3ludGF4RXJyb3IgZXhjZXB0aW9uIGlmIHRoZSBzdHJpbmcgdG8gcGFyc2UgaXMgbm90IHZhbGlkIEpTT04uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSh0ZXh0LCByZXZpdmVyKSB7XG4gIGxldCBwYXJzZU51bWJlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogcGFyc2VMb3NzbGVzc051bWJlcjtcbiAgbGV0IGkgPSAwO1xuICBjb25zdCB2YWx1ZSA9IHBhcnNlVmFsdWUoKTtcbiAgZXhwZWN0VmFsdWUodmFsdWUpO1xuICBleHBlY3RFbmRPZklucHV0KCk7XG4gIHJldHVybiByZXZpdmVyID8gcmV2aXZlKHZhbHVlLCByZXZpdmVyKSA6IHZhbHVlO1xuICBmdW5jdGlvbiBwYXJzZU9iamVjdCgpIHtcbiAgICBpZiAodGV4dC5jaGFyQ29kZUF0KGkpID09PSBjb2RlT3BlbmluZ0JyYWNlKSB7XG4gICAgICBpKys7XG4gICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgY29uc3Qgb2JqZWN0ID0ge307XG4gICAgICBsZXQgaW5pdGlhbCA9IHRydWU7XG4gICAgICB3aGlsZSAoaSA8IHRleHQubGVuZ3RoICYmIHRleHQuY2hhckNvZGVBdChpKSAhPT0gY29kZUNsb3NpbmdCcmFjZSkge1xuICAgICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgICBlYXRDb21tYSgpO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5pdGlhbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaTtcbiAgICAgICAgY29uc3Qga2V5ID0gcGFyc2VTdHJpbmcoKTtcbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3dPYmplY3RLZXlFeHBlY3RlZCgpO1xuICAgICAgICAgIHJldHVybjsgLy8gVG8gbWFrZSBUUyBoYXBweVxuICAgICAgICB9XG4gICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgIGVhdENvbG9uKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VWYWx1ZSgpO1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93T2JqZWN0VmFsdWVFeHBlY3RlZCgpO1xuICAgICAgICAgIHJldHVybjsgLy8gVG8gbWFrZSBUUyBoYXBweVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzogdGVzdCBkZWVwIGVxdWFsIGluc3RlYWQgb2Ygc3RyaWN0IGVxdWFsXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmICFpc0RlZXBFcXVhbCh2YWx1ZSwgb2JqZWN0W2tleV0pKSB7XG4gICAgICAgICAgLy8gTm90ZSB0aGF0IHdlIGNvdWxkIGFsc28gdGVzdCBgaWYoa2V5IGluIG9iamVjdCkgey4uLn1gXG4gICAgICAgICAgLy8gb3IgYGlmIChvYmplY3Rba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHsuLi59YCwgYnV0IHRoYXQgaXMgc2xvd2VyLlxuICAgICAgICAgIHRocm93RHVwbGljYXRlS2V5KGtleSwgc3RhcnQgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKHRleHQuY2hhckNvZGVBdChpKSAhPT0gY29kZUNsb3NpbmdCcmFjZSkge1xuICAgICAgICB0aHJvd09iamVjdEtleU9yRW5kRXhwZWN0ZWQoKTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHBhcnNlQXJyYXkoKSB7XG4gICAgaWYgKHRleHQuY2hhckNvZGVBdChpKSA9PT0gY29kZU9wZW5pbmdCcmFja2V0KSB7XG4gICAgICBpKys7XG4gICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICAgIGxldCBpbml0aWFsID0gdHJ1ZTtcbiAgICAgIHdoaWxlIChpIDwgdGV4dC5sZW5ndGggJiYgdGV4dC5jaGFyQ29kZUF0KGkpICE9PSBjb2RlQ2xvc2luZ0JyYWNrZXQpIHtcbiAgICAgICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICAgICAgZWF0Q29tbWEoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbml0aWFsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZVZhbHVlKCk7XG4gICAgICAgIGV4cGVjdEFycmF5SXRlbSh2YWx1ZSk7XG4gICAgICAgIGFycmF5LnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKHRleHQuY2hhckNvZGVBdChpKSAhPT0gY29kZUNsb3NpbmdCcmFja2V0KSB7XG4gICAgICAgIHRocm93QXJyYXlJdGVtT3JFbmRFeHBlY3RlZCgpO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwYXJzZVZhbHVlKCkge1xuICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZVN0cmluZygpID8/IHBhcnNlTnVtZXJpYygpID8/IHBhcnNlT2JqZWN0KCkgPz8gcGFyc2VBcnJheSgpID8/IHBhcnNlS2V5d29yZCgndHJ1ZScsIHRydWUpID8/IHBhcnNlS2V5d29yZCgnZmFsc2UnLCBmYWxzZSkgPz8gcGFyc2VLZXl3b3JkKCdudWxsJywgbnVsbCk7XG4gICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgZnVuY3Rpb24gcGFyc2VLZXl3b3JkKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHRleHQuc2xpY2UoaSwgaSArIG5hbWUubGVuZ3RoKSA9PT0gbmFtZSkge1xuICAgICAgaSArPSBuYW1lLmxlbmd0aDtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2tpcFdoaXRlc3BhY2UoKSB7XG4gICAgd2hpbGUgKGlzV2hpdGVzcGFjZSh0ZXh0LmNoYXJDb2RlQXQoaSkpKSB7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHBhcnNlU3RyaW5nKCkge1xuICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQoaSkgPT09IGNvZGVEb3VibGVRdW90ZSkge1xuICAgICAgaSsrO1xuICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgd2hpbGUgKGkgPCB0ZXh0Lmxlbmd0aCAmJiB0ZXh0LmNoYXJDb2RlQXQoaSkgIT09IGNvZGVEb3VibGVRdW90ZSkge1xuICAgICAgICBpZiAodGV4dC5jaGFyQ29kZUF0KGkpID09PSBjb2RlQmFja3NsYXNoKSB7XG4gICAgICAgICAgY29uc3QgY2hhciA9IHRleHRbaSArIDFdO1xuICAgICAgICAgIGNvbnN0IGVzY2FwZUNoYXIgPSBlc2NhcGVDaGFyYWN0ZXJzW2NoYXJdO1xuICAgICAgICAgIGlmIChlc2NhcGVDaGFyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBlc2NhcGVDaGFyO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gJ3UnKSB7XG4gICAgICAgICAgICBpZiAoaXNIZXgodGV4dC5jaGFyQ29kZUF0KGkgKyAyKSkgJiYgaXNIZXgodGV4dC5jaGFyQ29kZUF0KGkgKyAzKSkgJiYgaXNIZXgodGV4dC5jaGFyQ29kZUF0KGkgKyA0KSkgJiYgaXNIZXgodGV4dC5jaGFyQ29kZUF0KGkgKyA1KSkpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoTnVtYmVyLnBhcnNlSW50KHRleHQuc2xpY2UoaSArIDIsIGkgKyA2KSwgMTYpKTtcbiAgICAgICAgICAgICAgaSArPSA1O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhyb3dJbnZhbGlkVW5pY29kZUNoYXJhY3RlcihpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3dJbnZhbGlkRXNjYXBlQ2hhcmFjdGVyKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZFN0cmluZ0NoYXJhY3Rlcih0ZXh0LmNoYXJDb2RlQXQoaSkpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdGV4dFtpXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3dJbnZhbGlkQ2hhcmFjdGVyKHRleHRbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgICBleHBlY3RFbmRPZlN0cmluZygpO1xuICAgICAgaSsrO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcGFyc2VOdW1lcmljKCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gaTtcbiAgICBpZiAodGV4dC5jaGFyQ29kZUF0KGkpID09PSBjb2RlTWludXMpIHtcbiAgICAgIGkrKztcbiAgICAgIGV4cGVjdERpZ2l0KHN0YXJ0KTtcbiAgICB9XG4gICAgaWYgKHRleHQuY2hhckNvZGVBdChpKSA9PT0gY29kZVplcm8pIHtcbiAgICAgIGkrKztcbiAgICB9IGVsc2UgaWYgKGlzTm9uWmVyb0RpZ2l0KHRleHQuY2hhckNvZGVBdChpKSkpIHtcbiAgICAgIGkrKztcbiAgICAgIHdoaWxlIChpc0RpZ2l0KHRleHQuY2hhckNvZGVBdChpKSkpIHtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGV4dC5jaGFyQ29kZUF0KGkpID09PSBjb2RlRG90KSB7XG4gICAgICBpKys7XG4gICAgICBleHBlY3REaWdpdChzdGFydCk7XG4gICAgICB3aGlsZSAoaXNEaWdpdCh0ZXh0LmNoYXJDb2RlQXQoaSkpKSB7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRleHQuY2hhckNvZGVBdChpKSA9PT0gY29kZUxvd2VyY2FzZUUgfHwgdGV4dC5jaGFyQ29kZUF0KGkpID09PSBjb2RlVXBwZXJjYXNlRSkge1xuICAgICAgaSsrO1xuICAgICAgaWYgKHRleHQuY2hhckNvZGVBdChpKSA9PT0gY29kZU1pbnVzIHx8IHRleHQuY2hhckNvZGVBdChpKSA9PT0gY29kZVBsdXMpIHtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgZXhwZWN0RGlnaXQoc3RhcnQpO1xuICAgICAgd2hpbGUgKGlzRGlnaXQodGV4dC5jaGFyQ29kZUF0KGkpKSkge1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpID4gc3RhcnQpIHtcbiAgICAgIHJldHVybiBwYXJzZU51bWJlcih0ZXh0LnNsaWNlKHN0YXJ0LCBpKSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGVhdENvbW1hKCkge1xuICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQoaSkgIT09IGNvZGVDb21tYSkge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb21tYSAnLCcgZXhwZWN0ZWQgYWZ0ZXIgdmFsdWUgJHtnb3RBdCgpfWApO1xuICAgIH1cbiAgICBpKys7XG4gIH1cbiAgZnVuY3Rpb24gZWF0Q29sb24oKSB7XG4gICAgaWYgKHRleHQuY2hhckNvZGVBdChpKSAhPT0gY29kZUNvbG9uKSB7XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvbG9uICc6JyBleHBlY3RlZCBhZnRlciBwcm9wZXJ0eSBuYW1lICR7Z290QXQoKX1gKTtcbiAgICB9XG4gICAgaSsrO1xuICB9XG4gIGZ1bmN0aW9uIGV4cGVjdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgSlNPTiB2YWx1ZSBleHBlY3RlZCAke2dvdEF0KCl9YCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGV4cGVjdEFycmF5SXRlbSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYEFycmF5IGl0ZW0gZXhwZWN0ZWQgJHtnb3RBdCgpfWApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBleHBlY3RFbmRPZklucHV0KCkge1xuICAgIGlmIChpIDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgRXhwZWN0ZWQgZW5kIG9mIGlucHV0ICR7Z290QXQoKX1gKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZXhwZWN0RGlnaXQoc3RhcnQpIHtcbiAgICBpZiAoIWlzRGlnaXQodGV4dC5jaGFyQ29kZUF0KGkpKSkge1xuICAgICAgY29uc3QgbnVtU29GYXIgPSB0ZXh0LnNsaWNlKHN0YXJ0LCBpKTtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgSW52YWxpZCBudW1iZXIgJyR7bnVtU29GYXJ9JywgZXhwZWN0aW5nIGEgZGlnaXQgJHtnb3RBdCgpfWApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBleHBlY3RFbmRPZlN0cmluZygpIHtcbiAgICBpZiAodGV4dC5jaGFyQ29kZUF0KGkpICE9PSBjb2RlRG91YmxlUXVvdGUpIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgRW5kIG9mIHN0cmluZyAnXCInIGV4cGVjdGVkICR7Z290QXQoKX1gKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdGhyb3dPYmplY3RLZXlFeHBlY3RlZCgpIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFF1b3RlZCBvYmplY3Qga2V5IGV4cGVjdGVkICR7Z290QXQoKX1gKTtcbiAgfVxuICBmdW5jdGlvbiB0aHJvd0R1cGxpY2F0ZUtleShrZXksIHBvcykge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgRHVwbGljYXRlIGtleSAnJHtrZXl9JyBlbmNvdW50ZXJlZCBhdCBwb3NpdGlvbiAke3Bvc31gKTtcbiAgfVxuICBmdW5jdGlvbiB0aHJvd09iamVjdEtleU9yRW5kRXhwZWN0ZWQoKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBRdW90ZWQgb2JqZWN0IGtleSBvciBlbmQgb2Ygb2JqZWN0ICd9JyBleHBlY3RlZCAke2dvdEF0KCl9YCk7XG4gIH1cbiAgZnVuY3Rpb24gdGhyb3dBcnJheUl0ZW1PckVuZEV4cGVjdGVkKCkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQXJyYXkgaXRlbSBvciBlbmQgb2YgYXJyYXkgJ10nIGV4cGVjdGVkICR7Z290QXQoKX1gKTtcbiAgfVxuICBmdW5jdGlvbiB0aHJvd0ludmFsaWRDaGFyYWN0ZXIoY2hhcikge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgSW52YWxpZCBjaGFyYWN0ZXIgJyR7Y2hhcn0nICR7cG9zKCl9YCk7XG4gIH1cbiAgZnVuY3Rpb24gdGhyb3dJbnZhbGlkRXNjYXBlQ2hhcmFjdGVyKHN0YXJ0KSB7XG4gICAgY29uc3QgY2hhcnMgPSB0ZXh0LnNsaWNlKHN0YXJ0LCBzdGFydCArIDIpO1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgSW52YWxpZCBlc2NhcGUgY2hhcmFjdGVyICcke2NoYXJzfScgJHtwb3MoKX1gKTtcbiAgfVxuICBmdW5jdGlvbiB0aHJvd09iamVjdFZhbHVlRXhwZWN0ZWQoKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBPYmplY3QgdmFsdWUgZXhwZWN0ZWQgYWZ0ZXIgJzonICR7cG9zKCl9YCk7XG4gIH1cbiAgZnVuY3Rpb24gdGhyb3dJbnZhbGlkVW5pY29kZUNoYXJhY3RlcihzdGFydCkge1xuICAgIGNvbnN0IGNoYXJzID0gdGV4dC5zbGljZShzdGFydCwgc3RhcnQgKyA2KTtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYEludmFsaWQgdW5pY29kZSBjaGFyYWN0ZXIgJyR7Y2hhcnN9JyAke3BvcygpfWApO1xuICB9XG5cbiAgLy8gemVybyBiYXNlZCBjaGFyYWN0ZXIgcG9zaXRpb25cbiAgZnVuY3Rpb24gcG9zKCkge1xuICAgIHJldHVybiBgYXQgcG9zaXRpb24gJHtpfWA7XG4gIH1cbiAgZnVuY3Rpb24gZ290KCkge1xuICAgIHJldHVybiBpIDwgdGV4dC5sZW5ndGggPyBgYnV0IGdvdCAnJHt0ZXh0W2ldfSdgIDogJ2J1dCByZWFjaGVkIGVuZCBvZiBpbnB1dCc7XG4gIH1cbiAgZnVuY3Rpb24gZ290QXQoKSB7XG4gICAgcmV0dXJuIGAke2dvdCgpfSAke3BvcygpfWA7XG4gIH1cbn1cbmZ1bmN0aW9uIGlzV2hpdGVzcGFjZShjb2RlKSB7XG4gIHJldHVybiBjb2RlID09PSBjb2RlU3BhY2UgfHwgY29kZSA9PT0gY29kZU5ld2xpbmUgfHwgY29kZSA9PT0gY29kZVRhYiB8fCBjb2RlID09PSBjb2RlUmV0dXJuO1xufVxuZnVuY3Rpb24gaXNIZXgoY29kZSkge1xuICByZXR1cm4gY29kZSA+PSBjb2RlWmVybyAmJiBjb2RlIDw9IGNvZGVOaW5lIHx8IGNvZGUgPj0gY29kZVVwcGVyY2FzZUEgJiYgY29kZSA8PSBjb2RlVXBwZXJjYXNlRiB8fCBjb2RlID49IGNvZGVMb3dlcmNhc2VBICYmIGNvZGUgPD0gY29kZUxvd2VyY2FzZUY7XG59XG5mdW5jdGlvbiBpc0RpZ2l0KGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUgPj0gY29kZVplcm8gJiYgY29kZSA8PSBjb2RlTmluZTtcbn1cbmZ1bmN0aW9uIGlzTm9uWmVyb0RpZ2l0KGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUgPj0gY29kZU9uZSAmJiBjb2RlIDw9IGNvZGVOaW5lO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRTdHJpbmdDaGFyYWN0ZXIoY29kZSkge1xuICByZXR1cm4gY29kZSA+PSAweDIwICYmIGNvZGUgPD0gMHgxMGZmZmY7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNEZWVwRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGEpICYmIEFycmF5LmlzQXJyYXkoYikpIHtcbiAgICByZXR1cm4gYS5sZW5ndGggPT09IGIubGVuZ3RoICYmIGEuZXZlcnkoKGl0ZW0sIGluZGV4KSA9PiBpc0RlZXBFcXVhbChpdGVtLCBiW2luZGV4XSkpO1xuICB9XG4gIGlmIChpc09iamVjdChhKSAmJiBpc09iamVjdChiKSkge1xuICAgIGNvbnN0IGtleXMgPSBbLi4ubmV3IFNldChbLi4uT2JqZWN0LmtleXMoYSksIC4uLk9iamVjdC5rZXlzKGIpXSldO1xuICAgIHJldHVybiBrZXlzLmV2ZXJ5KGtleSA9PiBpc0RlZXBFcXVhbChhW2tleV0sIGJba2V5XSkpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsO1xufVxuXG4vLyBtYXAgd2l0aCBhbGwgZXNjYXBlIGNoYXJhY3RlcnNcbmNvbnN0IGVzY2FwZUNoYXJhY3RlcnMgPSB7XG4gICdcIic6ICdcIicsXG4gICdcXFxcJzogJ1xcXFwnLFxuICAnLyc6ICcvJyxcbiAgYjogJ1xcYicsXG4gIGY6ICdcXGYnLFxuICBuOiAnXFxuJyxcbiAgcjogJ1xccicsXG4gIHQ6ICdcXHQnXG4gIC8vIG5vdGUgdGhhdCBcXHUgaXMgaGFuZGxlZCBzZXBhcmF0ZWx5IGluIHBhcnNlU3RyaW5nKClcbn07XG5jb25zdCBjb2RlQmFja3NsYXNoID0gMHg1YzsgLy8gXCJcXFwiXG5jb25zdCBjb2RlT3BlbmluZ0JyYWNlID0gMHg3YjsgLy8gXCJ7XCJcbmNvbnN0IGNvZGVDbG9zaW5nQnJhY2UgPSAweDdkOyAvLyBcIn1cIlxuY29uc3QgY29kZU9wZW5pbmdCcmFja2V0ID0gMHg1YjsgLy8gXCJbXCJcbmNvbnN0IGNvZGVDbG9zaW5nQnJhY2tldCA9IDB4NWQ7IC8vIFwiXVwiXG5jb25zdCBjb2RlU3BhY2UgPSAweDIwOyAvLyBcIiBcIlxuY29uc3QgY29kZU5ld2xpbmUgPSAweGE7IC8vIFwiXFxuXCJcbmNvbnN0IGNvZGVUYWIgPSAweDk7IC8vIFwiXFx0XCJcbmNvbnN0IGNvZGVSZXR1cm4gPSAweGQ7IC8vIFwiXFxyXCJcbmNvbnN0IGNvZGVEb3VibGVRdW90ZSA9IDB4MDAyMjsgLy8gXCJcbmNvbnN0IGNvZGVQbHVzID0gMHgyYjsgLy8gXCIrXCJcbmNvbnN0IGNvZGVNaW51cyA9IDB4MmQ7IC8vIFwiLVwiXG5jb25zdCBjb2RlWmVybyA9IDB4MzA7XG5jb25zdCBjb2RlT25lID0gMHgzMTtcbmNvbnN0IGNvZGVOaW5lID0gMHgzOTtcbmNvbnN0IGNvZGVDb21tYSA9IDB4MmM7IC8vIFwiLFwiXG5jb25zdCBjb2RlRG90ID0gMHgyZTsgLy8gXCIuXCIgKGRvdCwgcGVyaW9kKVxuY29uc3QgY29kZUNvbG9uID0gMHgzYTsgLy8gXCI6XCJcbmV4cG9ydCBjb25zdCBjb2RlVXBwZXJjYXNlQSA9IDB4NDE7IC8vIFwiQVwiXG5leHBvcnQgY29uc3QgY29kZUxvd2VyY2FzZUEgPSAweDYxOyAvLyBcImFcIlxuZXhwb3J0IGNvbnN0IGNvZGVVcHBlcmNhc2VFID0gMHg0NTsgLy8gXCJFXCJcbmV4cG9ydCBjb25zdCBjb2RlTG93ZXJjYXNlRSA9IDB4NjU7IC8vIFwiZVwiXG5leHBvcnQgY29uc3QgY29kZVVwcGVyY2FzZUYgPSAweDQ2OyAvLyBcIkZcIlxuZXhwb3J0IGNvbnN0IGNvZGVMb3dlcmNhc2VGID0gMHg2NjsgLy8gXCJmXCJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLmpzLm1hcCIsImltcG9ydCB7IGlzTG9zc2xlc3NOdW1iZXIgfSBmcm9tICcuL0xvc3NsZXNzTnVtYmVyLmpzJztcbi8qKlxuICogUmV2aXZlIGEganNvbiBvYmplY3QuXG4gKiBBcHBsaWVzIHRoZSByZXZpdmVyIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5IG9uIGFsbCB2YWx1ZXMgaW4gdGhlIEpTT04gb2JqZWN0LlxuICogQHBhcmFtIGpzb24gICBBIEpTT04gT2JqZWN0LCBBcnJheSwgb3IgdmFsdWVcbiAqIEBwYXJhbSByZXZpdmVyXG4gKiAgICAgICAgICAgICAgQSByZXZpdmVyIGZ1bmN0aW9uIGludm9rZWQgd2l0aCBhcmd1bWVudHMgYGtleWAgYW5kIGB2YWx1ZWAsXG4gKiAgICAgICAgICAgICAgd2hpY2ggbXVzdCByZXR1cm4gYSByZXBsYWNlbWVudCB2YWx1ZS4gVGhlIGZ1bmN0aW9uIGNvbnRleHRcbiAqICAgICAgICAgICAgICAoYHRoaXNgKSBpcyB0aGUgT2JqZWN0IG9yIEFycmF5IHRoYXQgY29udGFpbnMgdGhlIGN1cnJlbnRseVxuICogICAgICAgICAgICAgIGhhbmRsZWQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXZpdmUoanNvbiwgcmV2aXZlcikge1xuICByZXR1cm4gcmV2aXZlVmFsdWUoe1xuICAgICcnOiBqc29uXG4gIH0sICcnLCBqc29uLCByZXZpdmVyKTtcbn1cblxuLyoqXG4gKiBSZXZpdmUgYSB2YWx1ZVxuICovXG5mdW5jdGlvbiByZXZpdmVWYWx1ZShjb250ZXh0LCBrZXksIHZhbHVlLCByZXZpdmVyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiByZXZpdmVyLmNhbGwoY29udGV4dCwga2V5LCByZXZpdmVBcnJheSh2YWx1ZSwgcmV2aXZlcikpO1xuICB9XG4gIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFpc0xvc3NsZXNzTnVtYmVyKHZhbHVlKSkge1xuICAgIC8vIG5vdGUgdGhlIHNwZWNpYWwgY2FzZSBmb3IgTG9zc2xlc3NOdW1iZXIsXG4gICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBpdGVyYXRlIG92ZXIgdGhlIGludGVybmFscyBvZiBhIExvc3NsZXNzTnVtYmVyXG4gICAgcmV0dXJuIHJldml2ZXIuY2FsbChjb250ZXh0LCBrZXksIHJldml2ZU9iamVjdCh2YWx1ZSwgcmV2aXZlcikpO1xuICB9XG4gIHJldHVybiByZXZpdmVyLmNhbGwoY29udGV4dCwga2V5LCB2YWx1ZSk7XG59XG5cbi8qKlxuICogUmV2aXZlIHRoZSBwcm9wZXJ0aWVzIG9mIGFuIG9iamVjdFxuICovXG5mdW5jdGlvbiByZXZpdmVPYmplY3Qob2JqZWN0LCByZXZpdmVyKSB7XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iamVjdCkpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHJldml2ZVZhbHVlKG9iamVjdCwga2V5LCBvYmplY3Rba2V5XSwgcmV2aXZlcik7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBvYmplY3Rba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuLyoqXG4gKiBSZXZpdmUgdGhlIHByb3BlcnRpZXMgb2YgYW4gQXJyYXlcbiAqL1xuZnVuY3Rpb24gcmV2aXZlQXJyYXkoYXJyYXksIHJldml2ZXIpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGFycmF5W2ldID0gcmV2aXZlVmFsdWUoYXJyYXksIFN0cmluZyhpKSwgYXJyYXlbaV0sIHJldml2ZXIpO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJldml2ZS5qcy5tYXAiLCIvKipcbiAqIFJldml2ZSBhIHN0cmluZyBjb250YWluaW5nIGFuIElTTyA4NjAxIGRhdGUgc3RyaW5nIGludG8gYSBKYXZhU2NyaXB0IGBEYXRlYCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJldml2ZURhdGUoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBpc29EYXRlUmVnZXgudGVzdCh2YWx1ZSkgPyBuZXcgRGF0ZSh2YWx1ZSkgOiB2YWx1ZTtcbn1cblxuLy8gTWF0Y2hlcyBzdHJpbmdzIGxpa2UgXCIyMDIyLTA4LTI1VDA5OjM5OjE5LjI4OFpcIlxuY29uc3QgaXNvRGF0ZVJlZ2V4ID0gL15cXGR7NH0tXFxkezJ9LVxcZHsyfVRcXGR7Mn06XFxkezJ9OlxcZHsyfVxcLlxcZHszfVokLztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJldml2ZURhdGUuanMubWFwIiwiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBUaGUgTG9zc2xlc3NKU09OLnN0cmluZ2lmeSgpIG1ldGhvZCBjb252ZXJ0cyBhIEphdmFTY3JpcHQgdmFsdWUgdG8gYSBKU09OIHN0cmluZyxcbiAqIG9wdGlvbmFsbHkgcmVwbGFjaW5nIHZhbHVlcyBpZiBhIHJlcGxhY2VyIGZ1bmN0aW9uIGlzIHNwZWNpZmllZCwgb3JcbiAqIG9wdGlvbmFsbHkgaW5jbHVkaW5nIG9ubHkgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzIGlmIGEgcmVwbGFjZXIgYXJyYXkgaXMgc3BlY2lmaWVkLlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYSBKU09OIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gW3JlcGxhY2VyXVxuICogQSBmdW5jdGlvbiB0aGF0IGFsdGVycyB0aGUgYmVoYXZpb3Igb2YgdGhlIHN0cmluZ2lmaWNhdGlvbiBwcm9jZXNzLFxuICogb3IgYW4gYXJyYXkgb2YgU3RyaW5nIGFuZCBOdW1iZXIgb2JqZWN0cyB0aGF0IHNlcnZlIGFzIGEgd2hpdGVsaXN0IGZvclxuICogc2VsZWN0aW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSB2YWx1ZSBvYmplY3QgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIEpTT04gc3RyaW5nLlxuICogSWYgdGhpcyB2YWx1ZSBpcyBudWxsIG9yIG5vdCBwcm92aWRlZCwgYWxsIHByb3BlcnRpZXMgb2YgdGhlIG9iamVjdCBhcmVcbiAqIGluY2x1ZGVkIGluIHRoZSByZXN1bHRpbmcgSlNPTiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIFtzcGFjZV1cbiAqIEEgU3RyaW5nIG9yIE51bWJlciBvYmplY3QgdGhhdCdzIHVzZWQgdG8gaW5zZXJ0IHdoaXRlIHNwYWNlIGludG8gdGhlIG91dHB1dFxuICogSlNPTiBzdHJpbmcgZm9yIHJlYWRhYmlsaXR5IHB1cnBvc2VzLiBJZiB0aGlzIGlzIGEgTnVtYmVyLCBpdCBpbmRpY2F0ZXMgdGhlXG4gKiBudW1iZXIgb2Ygc3BhY2UgY2hhcmFjdGVycyB0byB1c2UgYXMgd2hpdGUgc3BhY2U7IHRoaXMgbnVtYmVyIGlzIGNhcHBlZCBhdCAxMFxuICogaWYgaXQncyBsYXJnZXIgdGhhbiB0aGF0LiBWYWx1ZXMgbGVzcyB0aGFuIDEgaW5kaWNhdGUgdGhhdCBubyBzcGFjZSBzaG91bGQgYmVcbiAqIHVzZWQuIElmIHRoaXMgaXMgYSBTdHJpbmcsIHRoZSBzdHJpbmcgKG9yIHRoZSBmaXJzdCAxMCBjaGFyYWN0ZXJzIG9mIHRoZSBzdHJpbmcsXG4gKiBpZiBpdCdzIGxvbmdlciB0aGFuIHRoYXQpIGlzIHVzZWQgYXMgd2hpdGUgc3BhY2UuIElmIHRoaXMgcGFyYW1ldGVyIGlzIG5vdFxuICogcHJvdmlkZWQgKG9yIGlzIG51bGwpLCBubyB3aGl0ZSBzcGFjZSBpcyB1c2VkLlxuICpcbiAqIEBwYXJhbSBbbnVtYmVyU3RyaW5naWZpZXJzXVxuICogQW4gb3B0aW9uYWwgbGlzdCB3aXRoIGFkZGl0aW9uYWwgbnVtYmVyIHN0cmluZ2lmaWVycywgZm9yIGV4YW1wbGUgdG8gc2VyaWFsaXplXG4gKiBhIEJpZ051bWJlci4gVGhlIG91dHB1dCBvZiB0aGUgZnVuY3Rpb24gbXVzdCBiZSB2YWxpZCBzdHJpbmdpZmllZCBKU09OLlxuICogV2hlbiBgdW5kZWZpbmVkYCBpcyByZXR1cm5lZCwgdGhlIHByb3BlcnR5IHdpbGwgYmUgZGVsZXRlZCBmcm9tIHRoZSBvYmplY3QuXG4gKiBUaGUgZGlmZmVyZW5jZSB3aXRoIHVzaW5nIGEgYHJlcGxhY2VyYCBpcyB0aGF0IHRoZSBvdXRwdXQgb2YgYSBgcmVwbGFjZXJgXG4gKiBtdXN0IGJlIEpTT04gYW5kIHdpbGwgYmUgc3RyaW5naWZpZWQgYWZ0ZXJ3YXJkcywgd2hlcmVhcyB0aGUgb3V0cHV0IG9mIHRoZVxuICogYG51bWJlclN0cmluZ2lmaWVyc2AgaXMgYWxyZWFkeSBzdHJpbmdpZmllZCBKU09OLlxuICpcbiAqIEByZXR1cm5zIFJldHVybnMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgSlNPTiBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSwgbnVtYmVyU3RyaW5naWZpZXJzKSB7XG4gIGNvbnN0IHJlc29sdmVkU3BhY2UgPSByZXNvbHZlU3BhY2Uoc3BhY2UpO1xuICBjb25zdCByZXBsYWNlZFZhbHVlID0gdHlwZW9mIHJlcGxhY2VyID09PSAnZnVuY3Rpb24nID8gcmVwbGFjZXIuY2FsbCh7XG4gICAgJyc6IHZhbHVlXG4gIH0sICcnLCB2YWx1ZSkgOiB2YWx1ZTtcbiAgcmV0dXJuIHN0cmluZ2lmeVZhbHVlKHJlcGxhY2VkVmFsdWUsICcnKTtcblxuICAvKipcbiAgICogU3RyaW5naWZ5IGEgdmFsdWVcbiAgICovXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeVZhbHVlKHZhbHVlLCBpbmRlbnQpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShudW1iZXJTdHJpbmdpZmllcnMpKSB7XG4gICAgICBjb25zdCBzdHJpbmdpZmllciA9IG51bWJlclN0cmluZ2lmaWVycy5maW5kKGl0ZW0gPT4gaXRlbS50ZXN0KHZhbHVlKSk7XG4gICAgICBpZiAoc3RyaW5naWZpZXIpIHtcbiAgICAgICAgY29uc3Qgc3RyID0gc3RyaW5naWZpZXIuc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnIHx8ICFpc051bWJlcihzdHIpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIEpTT04gbnVtYmVyOiBvdXRwdXQgb2YgYSBudW1iZXIgc3RyaW5naWZpZXIgbXVzdCBiZSBhIHN0cmluZyBjb250YWluaW5nIGEgSlNPTiBudW1iZXIgKG91dHB1dDogJHtzdHJ9KWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYm9vbGVhbiwgbnVsbCwgbnVtYmVyLCBzdHJpbmcsIG9yIGRhdGVcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB2YWx1ZSBpbnN0YW5jZW9mIEJvb2xlYW4gfHwgdmFsdWUgaW5zdGFuY2VvZiBOdW1iZXIgfHwgdmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gbG9zc2xlc3MgbnVtYmVyLCB0aGUgc2VjcmV0IGluZ3JlZGllbnQgOilcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHZhbHVlPy5pc0xvc3NsZXNzTnVtYmVyKSB7XG4gICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvLyBCaWdJbnRcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYmlnaW50Jykge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLy8gQXJyYXlcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBzdHJpbmdpZnlBcnJheSh2YWx1ZSwgaW5kZW50KTtcbiAgICB9XG5cbiAgICAvLyBPYmplY3QgKHRlc3QgbGFzdGx5ISlcbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHN0cmluZ2lmeU9iamVjdCh2YWx1ZSwgaW5kZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdHJpbmdpZnkgYW4gYXJyYXlcbiAgICovXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeUFycmF5KGFycmF5LCBpbmRlbnQpIHtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1tdJztcbiAgICB9XG4gICAgY29uc3QgY2hpbGRJbmRlbnQgPSByZXNvbHZlZFNwYWNlID8gaW5kZW50ICsgcmVzb2x2ZWRTcGFjZSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgc3RyID0gcmVzb2x2ZWRTcGFjZSA/ICdbXFxuJyA6ICdbJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gdHlwZW9mIHJlcGxhY2VyID09PSAnZnVuY3Rpb24nID8gcmVwbGFjZXIuY2FsbChhcnJheSwgU3RyaW5nKGkpLCBhcnJheVtpXSkgOiBhcnJheVtpXTtcbiAgICAgIGlmIChyZXNvbHZlZFNwYWNlKSB7XG4gICAgICAgIHN0ciArPSBjaGlsZEluZGVudDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgaXRlbSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGl0ZW0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc3RyICs9IHN0cmluZ2lmeVZhbHVlKGl0ZW0sIGNoaWxkSW5kZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciArPSAnbnVsbCc7XG4gICAgICB9XG4gICAgICBpZiAoaSA8IGFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgc3RyICs9IHJlc29sdmVkU3BhY2UgPyAnLFxcbicgOiAnLCc7XG4gICAgICB9XG4gICAgfVxuICAgIHN0ciArPSByZXNvbHZlZFNwYWNlID8gYFxcbiR7aW5kZW50fV1gIDogJ10nO1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICAvKipcbiAgICogU3RyaW5naWZ5IGFuIG9iamVjdFxuICAgKi9cbiAgZnVuY3Rpb24gc3RyaW5naWZ5T2JqZWN0KG9iamVjdCwgaW5kZW50KSB7XG4gICAgaWYgKHR5cGVvZiBvYmplY3QudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc3RyaW5naWZ5KG9iamVjdC50b0pTT04oKSwgcmVwbGFjZXIsIHNwYWNlLCB1bmRlZmluZWQpO1xuICAgIH1cbiAgICBjb25zdCBrZXlzID0gQXJyYXkuaXNBcnJheShyZXBsYWNlcikgPyByZXBsYWNlci5tYXAoU3RyaW5nKSA6IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gJ3t9JztcbiAgICB9XG4gICAgY29uc3QgY2hpbGRJbmRlbnQgPSByZXNvbHZlZFNwYWNlID8gaW5kZW50ICsgcmVzb2x2ZWRTcGFjZSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgZmlyc3QgPSB0cnVlO1xuICAgIGxldCBzdHIgPSByZXNvbHZlZFNwYWNlID8gJ3tcXG4nIDogJ3snO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIHJlcGxhY2VyID09PSAnZnVuY3Rpb24nID8gcmVwbGFjZXIuY2FsbChvYmplY3QsIGtleSwgb2JqZWN0W2tleV0pIDogb2JqZWN0W2tleV07XG4gICAgICBpZiAoaW5jbHVkZVByb3BlcnR5KGtleSwgdmFsdWUpKSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyICs9IHJlc29sdmVkU3BhY2UgPyAnLFxcbicgOiAnLCc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5U3RyID0gSlNPTi5zdHJpbmdpZnkoa2V5KTtcbiAgICAgICAgc3RyICs9IHJlc29sdmVkU3BhY2UgPyBgJHtjaGlsZEluZGVudCArIGtleVN0cn06IGAgOiBgJHtrZXlTdHJ9OmA7XG4gICAgICAgIHN0ciArPSBzdHJpbmdpZnlWYWx1ZSh2YWx1ZSwgY2hpbGRJbmRlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBzdHIgKz0gcmVzb2x2ZWRTcGFjZSA/IGBcXG4ke2luZGVudH19YCA6ICd9JztcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlc3Qgd2hldGhlciB0byBpbmNsdWRlIGEgcHJvcGVydHkgaW4gYSBzdHJpbmdpZmllZCBvYmplY3Qgb3Igbm90LlxuICAgKi9cbiAgZnVuY3Rpb24gaW5jbHVkZVByb3BlcnR5KF9rZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ3N5bWJvbCc7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNvbHZlIGEgSlNPTiBzdHJpbmdpZnkgc3BhY2U6XG4gKiByZXBsYWNlIGEgbnVtYmVyIHdpdGggYSBzdHJpbmcgY29udGFpbmluZyB0aGF0IG51bWJlciBvZiBzcGFjZXNcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVNwYWNlKHNwYWNlKSB7XG4gIGlmICh0eXBlb2Ygc3BhY2UgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuICcgJy5yZXBlYXQoc3BhY2UpO1xuICB9XG4gIGlmICh0eXBlb2Ygc3BhY2UgPT09ICdzdHJpbmcnICYmIHNwYWNlICE9PSAnJykge1xuICAgIHJldHVybiBzcGFjZTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RyaW5naWZ5LmpzLm1hcCIsImV4cG9ydCB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGVzLmpzLm1hcCIsIi8qKlxuICogVGVzdCB3aGV0aGVyIGEgc3RyaW5nIGNvbnRhaW5zIGFuIGludGVnZXIgbnVtYmVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIElOVEVHRVJfUkVHRVgudGVzdCh2YWx1ZSk7XG59XG5jb25zdCBJTlRFR0VSX1JFR0VYID0gL14tP1swLTldKyQvO1xuXG4vKipcbiAqIFRlc3Qgd2hldGhlciBhIHN0cmluZyBjb250YWlucyBhIG51bWJlclxuICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMzM0MDcxNy9qc29uLW51bWJlcnMtcmVndWxhci1leHByZXNzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gTlVNQkVSX1JFR0VYLnRlc3QodmFsdWUpO1xufVxuY29uc3QgTlVNQkVSX1JFR0VYID0gL14tPyg/OjB8WzEtOV1cXGQqKSg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPyQvO1xuXG4vKipcbiAqIFRlc3Qgd2hldGhlciBhIHN0cmluZyBjYW4gYmUgc2FmZWx5IHJlcHJlc2VudGVkIHdpdGggYSBudW1iZXJcbiAqIHdpdGhvdXQgaW5mb3JtYXRpb24gbG9zcy5cbiAqXG4gKiBXaGVuIGFwcHJveCBpcyB0cnVlLCBmbG9hdGluZyBwb2ludCBudW1iZXJzIHRoYXQgbG9zZSBhIGZldyBkaWdpdHMgYnV0XG4gKiBhcmUgc3RpbGwgYXBwcm94aW1hdGVseSBlcXVhbCBpbiB2YWx1ZSBhcmUgY29uc2lkZXJlZCBzYWZlIHRvby5cbiAqIEludGVnZXIgbnVtYmVycyBtdXN0IHN0aWxsIGJlIGV4YWN0bHkgZXF1YWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhZmVOdW1iZXIodmFsdWUsIGNvbmZpZykge1xuICBjb25zdCBudW0gPSBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSk7XG4gIGNvbnN0IHN0ciA9IFN0cmluZyhudW0pO1xuICBjb25zdCB2ID0gZXh0cmFjdFNpZ25pZmljYW50RGlnaXRzKHZhbHVlKTtcbiAgY29uc3QgcyA9IGV4dHJhY3RTaWduaWZpY2FudERpZ2l0cyhzdHIpO1xuICBpZiAodiA9PT0gcykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChjb25maWc/LmFwcHJveCA9PT0gdHJ1ZSkge1xuICAgIC8vIEEgdmFsdWUgaXMgYXBwcm94aW1hdGVseSBlcXVhbCB3aGVuOlxuICAgIC8vIDEuIGl0IGlzIGEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLCBub3QgYW4gaW50ZWdlclxuICAgIC8vIDIuIGl0IGhhcyBhdCBsZWFzdCAxNCBkaWdpdHNcbiAgICAvLyAzLiB0aGUgZmlyc3QgMTQgZGlnaXRzIGFyZSBlcXVhbFxuICAgIGNvbnN0IHJlcXVpcmVkRGlnaXRzID0gMTQ7XG4gICAgaWYgKCFpc0ludGVnZXIodmFsdWUpICYmIHMubGVuZ3RoID49IHJlcXVpcmVkRGlnaXRzICYmIHYuc3RhcnRzV2l0aChzLnN1YnN0cmluZygwLCByZXF1aXJlZERpZ2l0cykpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGxldCBVbnNhZmVOdW1iZXJSZWFzb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKFVuc2FmZU51bWJlclJlYXNvbikge1xuICBVbnNhZmVOdW1iZXJSZWFzb25bXCJ1bmRlcmZsb3dcIl0gPSBcInVuZGVyZmxvd1wiO1xuICBVbnNhZmVOdW1iZXJSZWFzb25bXCJvdmVyZmxvd1wiXSA9IFwib3ZlcmZsb3dcIjtcbiAgVW5zYWZlTnVtYmVyUmVhc29uW1widHJ1bmNhdGVfaW50ZWdlclwiXSA9IFwidHJ1bmNhdGVfaW50ZWdlclwiO1xuICBVbnNhZmVOdW1iZXJSZWFzb25bXCJ0cnVuY2F0ZV9mbG9hdFwiXSA9IFwidHJ1bmNhdGVfZmxvYXRcIjtcbiAgcmV0dXJuIFVuc2FmZU51bWJlclJlYXNvbjtcbn0oe30pO1xuXG4vKipcbiAqIFdoZW4gdGhlIHByb3ZpZGVkIHZhbHVlIGlzIGFuIHVuc2FmZSBudW1iZXIsIGRlc2NyaWJlIHdoYXQgdGhlIHJlYXNvbiBpczpcbiAqIG92ZXJmbG93LCB1bmRlcmZsb3csIHRydW5jYXRlX2ludGVnZXIsIG9yIHRydW5jYXRlX2Zsb2F0LlxuICogUmV0dXJucyB1bmRlZmluZWQgd2hlbiB0aGUgdmFsdWUgaXMgc2FmZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVuc2FmZU51bWJlclJlYXNvbih2YWx1ZSkge1xuICBpZiAoaXNTYWZlTnVtYmVyKHZhbHVlLCB7XG4gICAgYXBwcm94OiBmYWxzZVxuICB9KSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKGlzSW50ZWdlcih2YWx1ZSkpIHtcbiAgICByZXR1cm4gVW5zYWZlTnVtYmVyUmVhc29uLnRydW5jYXRlX2ludGVnZXI7XG4gIH1cbiAgY29uc3QgbnVtID0gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpO1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZShudW0pKSB7XG4gICAgcmV0dXJuIFVuc2FmZU51bWJlclJlYXNvbi5vdmVyZmxvdztcbiAgfVxuICBpZiAobnVtID09PSAwKSB7XG4gICAgcmV0dXJuIFVuc2FmZU51bWJlclJlYXNvbi51bmRlcmZsb3c7XG4gIH1cbiAgcmV0dXJuIFVuc2FmZU51bWJlclJlYXNvbi50cnVuY2F0ZV9mbG9hdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIGludG8gYSBudW1iZXIgd2hlbiBpdCBpcyBzYWZlIHRvIGRvIHNvLlxuICogVGhyb3dzIGFuIGVycm9yIG90aGVyd2lzZSwgZXhwbGFpbmluZyB0aGUgcmVhc29uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9TYWZlTnVtYmVyT3JUaHJvdyh2YWx1ZSwgY29uZmlnKSB7XG4gIGNvbnN0IG51bWJlciA9IE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKTtcbiAgY29uc3QgdW5zYWZlUmVhc29uID0gZ2V0VW5zYWZlTnVtYmVyUmVhc29uKHZhbHVlKTtcbiAgaWYgKGNvbmZpZz8uYXBwcm94ID09PSB0cnVlID8gdW5zYWZlUmVhc29uICYmIHVuc2FmZVJlYXNvbiAhPT0gVW5zYWZlTnVtYmVyUmVhc29uLnRydW5jYXRlX2Zsb2F0IDogdW5zYWZlUmVhc29uKSB7XG4gICAgY29uc3QgdW5zYWZlUmVhc29uVGV4dCA9IHVuc2FmZVJlYXNvbj8ucmVwbGFjZSgvX1xcdyskLywgJycpO1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNhZmVseSBjb252ZXJ0IHRvIG51bWJlcjogdGhlIHZhbHVlICcke3ZhbHVlfScgd291bGQgJHt1bnNhZmVSZWFzb25UZXh0fSBhbmQgYmVjb21lICR7bnVtYmVyfWApO1xuICB9XG4gIHJldHVybiBudW1iZXI7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzaWduaWZpY2FudCBkaWdpdHMgb2YgYSBudW1iZXIuXG4gKlxuICogRm9yIGV4YW1wbGU6XG4gKiAgICcyLjM0JyByZXR1cm5zICcyMzQnXG4gKiAgICctNzcnIHJldHVybnMgJzc3J1xuICogICAnMC4wMDM0MDAnIHJldHVybnMgJzM0J1xuICogICAnMTIwLjVlKzMwJyByZXR1cm5zICcxMjA1J1xuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RTaWduaWZpY2FudERpZ2l0cyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWVcbiAgLy8gZnJvbSBcIi0wLjI1MGUrMzBcIiB0byBcIi0wLjI1MFwiXG4gIC5yZXBsYWNlKEVYUE9ORU5USUFMX1BBUlRfUkVHRVgsICcnKVxuXG4gIC8vIGZyb20gXCItMC4yNTBcIiB0byBcIi0wMjUwXCJcbiAgLnJlcGxhY2UoRE9UX1JFR0VYLCAnJylcblxuICAvLyBmcm9tIFwiLTAyNTBcIiB0byBcIi0wMjVcIlxuICAucmVwbGFjZShUUkFJTElOR19aRVJPU19SRUdFWCwgJycpXG5cbiAgLy8gZnJvbSBcIi0wMjVcIiB0byBcIjI1XCJcbiAgLnJlcGxhY2UoTEVBRElOR19NSU5VU19BTkRfWkVST1NfUkVHRVgsICcnKTtcbn1cbmNvbnN0IEVYUE9ORU5USUFMX1BBUlRfUkVHRVggPSAvW2VFXVsrLV0/XFxkKyQvO1xuY29uc3QgTEVBRElOR19NSU5VU19BTkRfWkVST1NfUkVHRVggPSAvXi0/KDAqKT8vO1xuY29uc3QgRE9UX1JFR0VYID0gL1xcLi87XG5jb25zdCBUUkFJTElOR19aRVJPU19SRUdFWCA9IC8wKyQvO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBQdXQgYWxsIHRoZSBqYXZhc2NyaXB0IGNvZGUgaGVyZSwgdGhhdCB5b3Ugd2FudCB0byBleGVjdXRlIGluIGJhY2tncm91bmQuXG5cbmltcG9ydCB7IGdldEFQSSB9IGZyb20gXCIuL2FwaVwiO1xuaW1wb3J0IHsgdm9pY2VSZXBsZSB9IGZyb20gXCIuL2FwaS92b2ljZV9yZXBsZVwiO1xuXG5pbnRlcmZhY2UgTWVzc2FnZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBmaWxlOiBGaWxlO1xufVxuXG5icm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKFxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICBjb25zdCBhcHBfaWQgPSBhd2FpdCBnZXRBUEkoKTtcblxuICAgICAgICBjb25zdCByZXBsZSA9IHZvaWNlUmVwbGUobWVzc2FnZS5pZCwgYXBwX2lkLCBtZXNzYWdlLmZpbGUpO1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXBsZTtcblxuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9LFxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==