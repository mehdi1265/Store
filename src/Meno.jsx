
import { Link } from "react-router-dom";
import { NewContext } from "./NewContext";
import { useContext } from "react";
import {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
} from "lucide-react";

const categoryIcons = {
  mobile: Smartphone,
  laptop: Laptop,
  headphone: Headphones,
  watch: Watch,
  camera: Camera,
  gaming: Gamepad2,
};

export default function Meno() {
  const { categories } = useContext(NewContext);

  return (
    <div  className="select-none text-right">
      <ul className="text-right">
        {categories.map((Item) => {
          const Icon = categoryIcons[Item.id];

          return (
            <li key={Item.id} className="mb-2">
              <Link
                to={`/products?category=${Item.id}`}
                className="flex flex-row-reverse items-center gap-3 rounded-lg p-3 text-right hover:bg-gray-100"
              >
                { Icon && (
                  <Icon
                    size={20}
                    color="black"
                    strokeWidth={1.8}
                  />
                )}

                <span>{Item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
