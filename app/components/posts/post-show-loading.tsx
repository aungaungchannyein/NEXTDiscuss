import { Skeleton } from "@nextui-org/react";

export default function PostShowLoading(){
  return(
    <div className="m-4">
      <div className="h-8 w-48">
        <Skeleton className="h-8 w-48"/>
      </div>

      <div className="p-4 border rounded space-y-2">
        <Skeleton className="h-6 w-50"/>
        <Skeleton className="h-6 w-40"/>
        <Skeleton className="h-6 w-15"/>
      </div>
    </div>
  )
}