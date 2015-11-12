/**
 * @fileoverview Forbids the use of push() on arrays, preferring concat, which doesn't mutate.
 * @author Eli Golding
 * @copyright 2015 Eli Golding. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {
        "MemberExpression": function(node) {
          if (node.property.name === "push") {
            context.report(node, "Hey! no pushing!");
          }
        }
    };

};

module.exports.schema = [
    // fill in your schema
];
