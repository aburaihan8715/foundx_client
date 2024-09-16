import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../icons";

export default function Landing() {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/glass.jpg')] bg-cover bg-center">
      <div className="flex-1 max-w-xl pt-32 mx-auto">
        <form className="flex-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="flex-shrink-0 text-base pointer-events-none text-default-400" />
            }
            type="text"
          />
        </form>
      </div>
    </div>
  );
}
