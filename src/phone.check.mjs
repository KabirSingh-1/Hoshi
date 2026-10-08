import assert from 'node:assert/strict'
import { isIndianMobile, normalisePhone } from './phone.js'
assert.equal(normalisePhone('+91 98765 43210'), '9876543210')
assert.equal(normalisePhone('098765-43210'), '9876543210')
for (const ok of ['9876543210', '+919876543210', '07779091145']) assert.ok(isIndianMobile(ok), ok)
for (const bad of ['', '12345', '5876543210', '98765432101', 'abcdefghij']) assert.ok(!isIndianMobile(bad), bad)
console.log('phone checks ok')
