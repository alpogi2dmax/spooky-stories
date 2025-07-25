import sanitizeHtml from "sanitize-html"

export function sanitizeInput(data) {
    const sanitizedData = {}

    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'string') {
            sanitizedData[key] = sanitizeHtml(value, {allowedTaged: ['b'], allowedAttributed: {}})
        } else {
            sanitizedData[key] = value
        }
    }

    return sanitizedData
}