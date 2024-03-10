"use client";

import { DialogDescription, DialogTrigger } from "@radix-ui/react-dialog";
import { PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { createList } from "@/app/actions";

export default function NewListButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <PlusCircle className="mr-2" />
          New List
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New List</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Create a new list to keep track of your goals and dreams.
        </DialogDescription>
        <form id="new-list-form" action={createList}>
          <div className="flex flex-col gap-2">
            <Input required type="text" name="title" placeholder="Title" />
            <Input
              required
              type="text"
              name="description"
              placeholder="Description"
            />
            <div className="flex flex-row items-center gap-2">
              <Switch name="public" id="public" />
              <Label htmlFor="public">Public</Label>
            </div>
          </div>
        </form>
        <DialogFooter>
          <Button type="submit" form="new-list-form">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
