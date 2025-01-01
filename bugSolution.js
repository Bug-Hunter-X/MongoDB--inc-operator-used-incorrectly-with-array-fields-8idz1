```javascript
// Correct usage using the positional operator to modify a specific array element.
db.collection.updateOne({ _id: 1, "arrField": {$elemMatch: {index:0}}}, { $inc: { "arrField.$": 1 } });

//Alternative solution using $set to modify array element
db.collection.updateOne( { _id: 1 }, { $set: { "arrField.0":  { $add: [ "$arrField.0", 1] } } } );
```