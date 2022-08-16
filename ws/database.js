const mongoose = require('mongoose');
const URI = '';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopogy', true);

mongoose.connect(URI)
.then(() => console.log('DB is Up!'))
.catch(() => console.log(err))