HashOver.prototype.addComments=function(e,i){if("reply"===i){var r=this.permalinkComment(this.permalinkParent(e.permalink),this.instance.comments.primary);if(null!==r)return void(void 0!==r.replies?r.replies.push(e):r.replies=[e])}this.instance.comments.primary.push(e)};