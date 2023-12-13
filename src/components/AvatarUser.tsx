import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarUser() {
  return (
    <Avatar>
      <AvatarImage src="./Zulf.jpg" alt="Avatar-image" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

