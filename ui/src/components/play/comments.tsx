import { comment } from "@/lib/types";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Comments({ comments }: { comments: comment[] }) {
  return (
    <div className="w-fullrounded-md bg-card p-4">
      <h1 className="text-sm text-muted-foreground font-bold">Comments</h1>
      <div>
        <form action="" className="flex flex-row items-baseline gap-2">
          <Input
            type="text"
            placeholder="Add a comment"
            className="w-full flex-1"
            name="comment"
          />
          <Button className="mt-2" type="submit">Post</Button>
        </form>
        {comments.map((comment) => (
          <div key={comment.text} className="p-2 bg-white/5 my-2">
            <p className="font-semibold">{comment.username}</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
