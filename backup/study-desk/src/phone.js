// Indian mobile: strip spaces/dashes and a +91 / 91 / 0 prefix, then 10 digits starting 6-9.
export const normalisePhone = (v) => String(v).replace(/[\s-]/g, '').replace(/^(\+91|91|0)(?=\d{10}$)/, '')
export const isIndianMobile = (v) => /^[6-9]\d{9}$/.test(normalisePhone(v))
