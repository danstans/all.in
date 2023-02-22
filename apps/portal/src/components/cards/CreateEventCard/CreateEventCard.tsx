import React, { useState } from "react";
import Button from "shared";
import { api } from "~/utils/api";

type Props = {};

const CreateEventCard = (props: Props) => {
  //   const utils = api.useContext();

  const [title, setTitle] = useState("");
  const [fullCardOpen, setFullCardOpen] = useState(false);
  //   const [content, setContent] = useState("");

  //   const { mutate, isLoading } = api.post.create.useMutation({
  //     async onSuccess() {
  //       setTitle("");
  //       setContent("");
  //       await utils.post.all.invalidate();
  //     },
  //   });

  return (
    <div className="block rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <input
        className="bg-coolGray-100 w-full rounded-lg px-4 py-3 placeholder:text-gray-500"
        value={title}
        onClick={() => setFullCardOpen(true)}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Create event"
      />
      {/* <input
          className="mb-2 rounded bg-white/10 p-2 text-white"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        /> */}
      {/* <Button
          variant={"primary"}
          onClick={() => {
            mutate({
              title,
              content,
            });
          }}
          isLoading={isLoading}
        >
          Create
        </Button> */}
    </div>
  );
};

export default CreateEventCard;
