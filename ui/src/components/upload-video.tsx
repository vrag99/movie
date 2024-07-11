import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";

import { useState } from "react";

export default function UploadVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState<File>();
  const [video, setVideo] = useState<File>();

  async function handleSubmit() {
    console.log("handlesubmit");
  }
  return (
    <Dialog>
      <DialogTrigger>
        <Button size={"icon"} className="rounded-full" variant={"secondary"}>
          <UploadIcon className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Upload Video</DialogTitle>
          <DialogDescription>
            Add a title, description, thumbnail, and video to upload.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter a title"
              className="w-full"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter a description"
              className="w-full"
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="thumbnail">Thumbnail</Label>
            <Input
              id="thumbnail"
              type="file"
              className="w-full"
              onChange={(e) => setThumbnail(e.target.files?.[0])}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="video">Video</Label>
            <Input
              id="video"
              type="file"
              className="w-full"
              onChange={(e) => setVideo(e.target.files?.[0])}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} className="w-full">
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
