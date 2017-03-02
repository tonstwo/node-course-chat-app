var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var latitude = 123;
        var longitude = 456;
        var locationMessage = generateLocationMessage('Edward', {latitude, longitude});
        expect(locationMessage.from).toBe('Edward');
        expect(locationMessage.createdAt).toBeA('number');
        expect(locationMessage.link).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    });
});