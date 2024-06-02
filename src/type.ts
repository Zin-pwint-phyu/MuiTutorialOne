interface itemProp {
  id: number;
  image: string;
  name: string;
}
interface ImageListsProps {
  className?: string;
}
interface AddMorePostProps {
  handleClose: () => void;
  open: boolean;
}
interface ModeProps {
  handleMode: () => void;
  mode: "light" | "dark";
}
