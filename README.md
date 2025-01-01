# MongoDB $inc Operator with Array Fields
This example demonstrates an uncommon error when using the `$inc` operator in MongoDB with array fields. The `$inc` operator is designed to increment numeric fields, but attempting to use it on an array element results in an error.

## Bug
The provided code attempts to increment the first element (index 0) of an array field. This approach is incorrect and throws an error because `$inc` expects a numeric field, not an array element.

## Solution
The correct approach involves using the `$` positional operator in conjunction with `$inc` or modifying the array using array operators like `$push`, `$pull`, or `$set`.