/**
 * @fileoverview Forbids the use of push() on arrays, preferring concat, which doesn't mutate.
 * @author Eli Golding
 * @copyright 2015 Eli Golding. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-pushing"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-pushing", rule, {

    valid: [
        "var myArray = []; myArray = myArray.concat('foo');"
    ],

    invalid: [
        {
            code: "var myArray = []; myArray.push('foo');",
            errors: [{
                message: "Hey! no pushing!",
                type: "MemberExpression"
            }]
        }
    ]
});
