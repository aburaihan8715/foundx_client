"use client";
import { Avatar } from "@nextui-org/avatar";
import { format } from "date-fns";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

import { IPost, IUser } from "@/src/types";

import { Button } from "@nextui-org/button";
import ImageGallery from "./ImageGallery";
import ClaimRequestModal from "../../modals/ClaimRequestModal";
import { useUser } from "@/src/context/user.provider";
import AuthenticationModal from "../../modals/AuthenticationModal";

interface IProps {
  post: IPost;
}

export default function Post({ post }: IProps) {
  const {
    title,
    dateFound,
    description,
    location,
    city,
    _id,
    images,
    user,
    questions,
  } = post || {};

  const { name, email, profilePhoto } = (user as IUser) || {};

  const { user: loggedInUser } = useUser();

  return (
    <div className="p-4 mb-2 rounded-md bg-default-100">
      <div className="pb-2 border-b border-default-200">
        <div className="flex items-center justify-between pb-4 border-b border-default-200">
          <div className="flex items-center gap-3">
            <Avatar isBordered name={name} radius="sm" src={profilePhoto} />
            <div>
              <p>{name}</p>
              <p className="text-xs">{email}</p>
            </div>
          </div>
        </div>
        <div className="py-4 border-b border-default-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <Link href={`/found-items/${_id}`}>
                <h1 className="text-2xl cursor-pointer">{title}</h1>
              </Link>
              <p className="flex items-center gap-1 text-xs">
                Found on: <Calendar width={14} />
                {format(new Date(dateFound), "dd MMM, yyyy")}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1">
                <MapPin width={18} />
                {location}, {city}
              </p>
            </div>
          </div>
          <p>{description}</p>
        </div>

        <ImageGallery images={images} />

        <div className="flex gap-5 mt-4">
          {email !== loggedInUser?.email && (
            <>
              {loggedInUser?.email && (
                <ClaimRequestModal id={_id} questions={questions} />
              )}
              {!loggedInUser?.email && <AuthenticationModal id={_id} />}
            </>
          )}
          {email !== loggedInUser?.email && (
            <div className="w-[1px] bg-default-200" />
          )}
          <Button variant="light" className="flex-1">
            Share
          </Button>
        </div>
      </div>
    </div>
  );
}
