const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const turndown = require('turndown');
function sanitizeMarkdown(markdown) {
    const convertedHtml = marked.parse(markdown);
    const sanitizedHtml = sanitizeHtml(convertedHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ]),
    });
    const turndownService = new turndown();
    const convertedMarkdown = turndownService.turndown(sanitizedHtml);
    return convertedMarkdown;
}

module.exports = {
    sanitizeMarkdown,
};