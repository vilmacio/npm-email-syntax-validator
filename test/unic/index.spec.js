let emailSyntax = require('../../src/index')

describe('Email Syntax Verify', ()=>{
    it('should a valid email address', ()=>{
        expect(emailSyntax.validate('example@domain.ext')).toBe(true)
    })
})