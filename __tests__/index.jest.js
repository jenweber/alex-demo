const alex = require('alex');

test('example', () => {
  let warnings = alex("Learning JavaScript is so simple. Just install this and you will be on your way!")
  if (warnings.messages.length > 0) {
    throw warnings.messages
  }
})