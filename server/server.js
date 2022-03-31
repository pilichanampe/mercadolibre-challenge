const express = require('express');
const app = express();

app.set('port', process.env.PORT || 5000);

app.get('/api', (req, res) => {
  res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

// app.listen(5000, () => { console.log("Server started on port 5000") });
app.listen(app.get('port'), () => {
  console.log('Server started on server', app.get('port'));
})