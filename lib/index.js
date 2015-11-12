/**
 * @fileoverview Forbids the use of push() on arrays, preferring concat, which doesn't mutate
 * @author Eli Golding
 * @copyright 2015 Eli Golding. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex("./rules");



