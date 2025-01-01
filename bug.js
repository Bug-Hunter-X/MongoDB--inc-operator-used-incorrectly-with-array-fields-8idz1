```javascript
// Incorrect usage of $inc operator with an array field
db.collection.updateOne({ _id: 1 }, { $inc: { 'arrField.0': 1 } });
```