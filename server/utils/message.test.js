var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var message = generateMessage('Edward', 'Hello');
        var from = message.from;
        var text = message.text;
        expect(message).toInclude({from, text})
        expect(message.from).toBe('Edward');
        expect(message.text).toBe('Hello');
        expect(message.createdAt).toBeA('number');
    });
});