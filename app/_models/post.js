"use strict";
var Post = (function () {
    function Post(PostId, Message, PostDate, Published) {
        this.PostId = PostId;
        this.Message = Message;
        this.PostDate = PostDate;
        this.Published = Published;
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.js.map