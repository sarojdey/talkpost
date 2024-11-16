import React from "react";

import {
  EllipsisVertical,
  MessageCircle,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

function Post() {
  return (
    <div className="w-full bg-backgrounddark min-h-32 rounded-lg border flex flex-col p-5 gap-5">
      <div className="flex justify-between text-gray-400">
        <div className="flex gap-3">
          <div className="h-12 w-12 rounded-full bg-card flex  items-center justify-center">
            img
          </div>
          <div>
            <h2>@sarojkumardey</h2>
            <p className="text-xs">21/09/2002</p>
          </div>
        </div>
        <EllipsisVertical size={16} />
      </div>
      <div>Hii This is saroj.</div>
      <div className="flex justify-between text-gray-400">
        <div className="flex gap-5">
          <div className="flex gap-1 items-baseline">
            <ThumbsUp size={16} />
            <p>12</p>
          </div>
          <div className="flex gap-1 items-end">
            <ThumbsDown size={16} />
            <p>4</p>
          </div>
          <div className="flex gap-1 items-center">
            <MessageCircle size={16} />
            <p>18</p>
          </div>
        </div>
        <div>
          <Share2 size={16} />
        </div>
      </div>
    </div>
  );
}

export default Post;
